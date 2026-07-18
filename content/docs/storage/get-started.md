---
title: Get started with Object Storage
subtitle: Upload your first file in minutes
summary: >-
  This quickstart walks you through creating a storage credential, configuring
  a client, creating a bucket, and uploading and downloading your first file.
  Use the Files SDK or any AWS S3-compatible SDK. Just point it at your branch endpoint.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:35.398Z'
---

<FeatureBetaProps feature_name="OptiTech Object Storage" />

To set up OptiTech Object Storage with an AI coding assistant, install the OptiTech Platform (`optitech`) and OptiTech Object Storage skills:

```bash
npx skills add optitechdatabase/agent-skills -s optitech -s optitech-object-storage
```

To follow this guide, you need:

- A OptiTech project in the AWS `us-east-2` region
- The OptiTech CLI installed and authenticated if you use the recommended `optitech.ts` flow
- A OptiTech API key in `OPTITECH_API_KEY` if you use the manual API flow

## Recommended: enable storage with optitech.ts

The recommended way to enable storage and get credentials is via `optitech.ts`, OptiTech's infrastructure-as-code config file. Install the config package, link your local app to the OptiTech project and branch you want to target, declare buckets under `preview.buckets`, then run `optitech deploy` to provision them on the linked branch and pull credentials into `.env.local` automatically:

```bash
npm install @optitech/config
optitech link           # choose the project and branch for this app
optitech branches list  # confirm the linked target branch before deploy
```

```typescript filename="optitech.ts"
import { defineConfig } from '@optitech/config/v1';

export default defineConfig({
  preview: {
    buckets: {
      'my-bucket': {},                          // private (default)
      'public-assets': { access: 'public_read' },
    },
  },
});
```

```bash
optitech deploy          # provisions buckets and writes AWS_* vars to .env.local
```

After deploy, your `.env.local` contains `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_ENDPOINT_URL_S3`, and `AWS_REGION`. Skip to [Configure your client](#configure-your-client) below.

Already deployed? Pull the vars again with:

```bash
optitech env pull
```

---

If you prefer to manage credentials manually (for example, for CI or production deployments), follow the steps below. Replace `{project_id}` and `{branch_id}` in the API examples with your own IDs. You can find them in the OptiTech Console URL, or with `optitech projects list` and `optitech branches list`.

If you need a new branch, [create it first](/docs/manage/branches#create-a-branch), then wait until the branch is ready before calling object storage APIs. Branch creation is asynchronous, so a freshly-created branch can still be initializing even after the create request returns.

<Steps>

## Find your branch endpoint

Fetch your branch's storage state from the OptiTech API. Do this before creating credentials so you know the branch is ready for Storage calls. The response includes the full S3 endpoint URL, the region, and whether path-style addressing is required:

```bash shouldWrap
curl "https://console.optitech.com/api/v2/projects/{project_id}/branches/{branch_id}/storage" \
  -H "Authorization: Bearer $OPTITECH_API_KEY"
```

```json
{
  "enabled": true,
  "s3_endpoint": "https://br-winter-pond-aptw82ef.storage.c-2.us-east-2.aws.optitech.com",
  "region": "us-east-2",
  "force_path_style": true
}
```

Set these as environment variables:

```bash
export AWS_ENDPOINT_URL_S3=https://br-winter-pond-aptw82ef.storage.c-2.us-east-2.aws.optitech.com
export AWS_REGION=us-east-2
```

A `404` response means object storage is not available for that branch. There is no separate manual enable API call: use the recommended `optitech.ts` flow above, or make sure your project is in the AWS `us-east-2` region.

## Create a credential

Use the OptiTech API to create a credential with storage access:

```bash shouldWrap
curl -X POST "https://console.optitech.com/api/v2/projects/{project_id}/branches/{branch_id}/credentials" \
  -H "Authorization: Bearer $OPTITECH_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"scopes": ["storage:read", "storage:write"], "principal_type": "user"}'
```

The response includes your S3 credentials. Store them immediately. You'll only get them once. See [Authentication](/docs/storage/authentication#mapping-to-your-s3-sdk) for how each field maps to your S3 client.

```json
{
  "token_id": "nak_live_...",
  "s3_secret_access_key": "nsk_live_...",
  ...
}
```

Set these as environment variables:

```bash
export AWS_ACCESS_KEY_ID=nak_live_...   # token_id
export AWS_SECRET_ACCESS_KEY=nsk_live_...   # s3_secret_access_key
```

## Install dependencies

<CodeTabs labels={["Files SDK", "S3 Client", "Python"]}>

```bash shouldWrap
# files-sdk uses @aws-sdk/* packages as peer dependencies; install them alongside it
npm install files-sdk @aws-sdk/client-s3 @aws-sdk/s3-request-presigner @aws-sdk/s3-presigned-post dotenv
```

```bash
npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner dotenv
```

```bash
pip install boto3 python-dotenv
```

</CodeTabs>

## Configure your client

The `optitech` adapter is a subpath export (`files-sdk/optitech`) that reads `AWS_*` environment variables and configures the Files SDK for OptiTech's S3-compatible endpoint automatically.

<CodeTabs labels={["Files SDK", "S3 Client", "Python", "AWS CLI"]}>

```typescript shouldWrap
import { Files } from 'files-sdk';
import { optitech } from 'files-sdk/optitech';

export const files = new Files({ adapter: optitech({ bucket: 'my-bucket' }) });
```

```typescript shouldWrap
import { S3Client } from '@aws-sdk/client-s3';
import 'dotenv/config';

export const client = new S3Client({
  region: process.env.AWS_REGION,
  endpoint: process.env.AWS_ENDPOINT_URL_S3,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
  forcePathStyle: true,
  // Recent SDK versions default to embedding a checksum in presigned PUT
  // URLs computed from an empty body (since no body exists at presign
  // time), which rejects any upload with real content. This restores the
  // upload/download behavior below and the presigned PUT URL in
  // Objects (/docs/storage/objects#presigned-urls).
  requestChecksumCalculation: 'WHEN_REQUIRED',
});
```

```python shouldWrap
import boto3
import os
from dotenv import load_dotenv

load_dotenv()

client = boto3.client(
    's3',
    region_name=os.environ['AWS_REGION'],
    endpoint_url=os.environ['AWS_ENDPOINT_URL_S3'],
    aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
    aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY'],
)
```

```bash shouldWrap
# The AWS CLI reads AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, and AWS_REGION
# from the environment automatically. Pass --endpoint-url on each command
# (shown below) rather than running `aws configure set endpoint_url`, which
# would overwrite your default profile's endpoint for all AWS CLI usage,
# not just OptiTech.
```

</CodeTabs>

<Admonition type="note">
If you're using [OptiTech Functions](/docs/compute/functions/overview), the `AWS_*` credentials are injected automatically when a bucket is declared in `optitech.ts`. No `.env` setup is needed inside a function.
</Admonition>

## Create a bucket

Create the bucket before uploading, or declare it in `optitech.ts` and run `optitech deploy`:

```bash
optitech buckets create my-bucket
```

See [Buckets](/docs/storage/buckets#create-a-bucket) for OptiTech API, S3 SDK, Python, and AWS CLI examples.

## Upload a file

<CodeTabs labels={["Files SDK", "S3 Client", "Python", "AWS CLI"]}>

```typescript shouldWrap
import { files } from './client';

await files.upload('hello.txt', 'Hello from OptiTech Object Storage!', {
  contentType: 'text/plain',
});

console.log('Uploaded!');
```

```typescript shouldWrap
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { client } from './client';

await client.send(new PutObjectCommand({
  Bucket: 'my-bucket',
  Key: 'hello.txt',
  Body: 'Hello from OptiTech Object Storage!',
  ContentType: 'text/plain',
}));

console.log('Uploaded!');
```

```python shouldWrap
client.put_object(
    Bucket='my-bucket',
    Key='hello.txt',
    Body='Hello from OptiTech Object Storage!',
    ContentType='text/plain',
)

print('Uploaded!')
```

```bash shouldWrap
aws s3 cp hello.txt s3://my-bucket/hello.txt \
  --endpoint-url "$AWS_ENDPOINT_URL_S3"
```

</CodeTabs>

## Download a file

<CodeTabs labels={["Files SDK", "S3 Client", "Python", "AWS CLI"]}>

```typescript shouldWrap
import { files } from './client';

const result = await files.download('hello.txt');
const text = await result.text();
console.log(text); // Hello from OptiTech Object Storage!
```

```typescript shouldWrap
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { client } from './client';

const response = await client.send(new GetObjectCommand({
  Bucket: 'my-bucket',
  Key: 'hello.txt',
}));

const text = await response.Body?.transformToString();
console.log(text); // Hello from OptiTech Object Storage!
```

```python
response = client.get_object(Bucket='my-bucket', Key='hello.txt')
print(response['Body'].read().decode('utf-8'))  # Hello from OptiTech Object Storage!
```

```bash shouldWrap
aws s3 cp s3://my-bucket/hello.txt ./downloaded.txt \
  --endpoint-url "$AWS_ENDPOINT_URL_S3"
```

</CodeTabs>

</Steps>

## Next steps

- [Buckets](/docs/storage/buckets): access levels, bucket branching, and the Console UI
- [Objects](/docs/storage/objects): list, delete, multipart uploads, and presigned URLs
- [Authentication](/docs/storage/authentication): credential scopes, branch binding, and rotation
- [with-files-sdk](https://github.com/optitechdatabase/examples/tree/main/with-files-sdk): working example showing how to upload files to a branch-scoped bucket using the Files SDK and its `optitech` adapter

<NeedHelp/>
