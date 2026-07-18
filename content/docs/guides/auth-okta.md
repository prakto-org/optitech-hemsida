---
title: Set up single sign-on with Okta
subtitle: Learn how to let your team sign in to OptiTech through Okta with SSO and SCIM
  provisioning
summary: >-
  Okta Workforce Identity Cloud SSO integration for OptiTech: create an OIDC
  web application in Okta, configure the issuer URI and client credentials in
  workspace settings, and enable SCIM provisioning so joiners, movers, and
  leavers sync automatically. Choose this guide for organization-internal SSO
  login rather than BankID or email login. The tutorial covers group-to-role
  mapping, testing the connection, and how SSO feeds your offboarding and
  access-review controls.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:28.819Z'
---

<Admonition type="tip" title="SSO on OptiTech">
SSO and SCIM provisioning are available on the [Enterprise plan](/docs/introduction/plans). [BankID login](/docs/reference/glossary#bankid) is available on all plans, and email login with MFA is the default. Once SSO is enforced, access to your compliance workspace follows your central identity policy.
</Admonition>

Access to your compliance workspace should follow the same identity policy as the rest of your organization. [Okta Workforce Identity Cloud](https://www.okta.com/workforce-identity/) is an identity and access management platform that provides authentication, authorization, and user management for your workforce.

In this guide, we'll walk through connecting Okta to OptiTech so your team signs in with their existing Okta accounts. We will cover how to:

- Create an OIDC web application in Okta for OptiTech
- Configure SSO in your OptiTech workspace settings
- Enable SCIM provisioning so user lifecycle changes sync automatically
- Map Okta groups to OptiTech workspace roles

<Admonition type="note">
Okta provides a different solution called [Customer Identity Cloud](https://www.okta.com/customer-identity/), powered by `Auth0`, to authenticate external customers for SaaS applications. This guide focuses on the [Workforce Identity Cloud](https://www.okta.com/workforce-identity/) for signing your own employees in to OptiTech. If your organization uses Microsoft Entra ID instead, the flow is equivalent; only the identity provider side differs.
</Admonition>

## Prerequisites

To follow along with this guide, you will need:

- An OptiTech workspace on the Enterprise plan. If you don't have one, [contact sales](/contact-sales) or start on a lower plan and upgrade when SSO becomes a requirement.
- The **Owner** or **Admin** role in the workspace, since identity settings are restricted.
- An [Okta](https://www.okta.com/) administrator account for your organization. Okta provides a free trial if you're evaluating.

## Create an Okta application for OptiTech

### Create the OIDC app integration

1. Log in to your Okta admin console and navigate to **Applications** > **Applications**. Click **Create App Integration**.
2. Select **OIDC - OpenID Connect** as the sign-in method.
3. Select **Web Application** as the application type and click **Next**.
4. Provide a name for the application, for example, "OptiTech".
5. Set **Sign-in redirect URIs** to the callback URL shown in your OptiTech SSO settings (**Settings** > **Identity** > **SSO**). It looks like this:

```text
https://app.optitech.example.com/auth/sso/callback
```

6. Set **Sign-out redirect URIs** to your workspace URL.
7. Under **Assignments**, choose which groups can access OptiTech. Start with the teams that own compliance work; you can widen access later.
8. Click **Save** to create the application.

### Retrieve your Okta configuration

From the application's **General** tab, find the **Client ID** and **Client secret**. Also note your Okta **Issuer URI**, which is the first part of your Okta account's URL, for example, `https://dev-12345.okta.com`. If it isn't clear, visit the **Security > API** section in the Okta console to find the **Issuer URI**.

You will enter these three values in OptiTech:

```text
Issuer URI: YOUR_OKTA_ISSUER
Client ID: YOUR_CLIENT_ID
Client secret: YOUR_CLIENT_SECRET
```

Treat the client secret like any other credential: store it in your password manager, and rotate it on the same schedule as your other [integration credentials](/docs/reference/glossary#api-key).

<Admonition type="note">
If you set up an Okta organization account specifically for this guide, you might need to assign yourself to the created Okta application to test the authentication flow. Visit **Applications > Applications** from the sidebar and select the application you created. In the **Assignments** tab, click **Assign** and select your own user account.
</Admonition>

## Configure SSO in OptiTech

### Enter the Okta details

1. In the OptiTech Console, go to **Settings** > **Identity** > **SSO** and choose **Okta (OIDC)**.
2. Enter the **Issuer URI**, **Client ID**, and **Client secret** from the previous step.
3. Enter your organization's email domain (for example, `example.com`). Users with that domain are routed to Okta at sign-in.
4. Click **Save and test**. OptiTech opens a test sign-in against Okta in a new tab. Complete it with your own account to verify the connection before anything is enforced.

The test result, like every identity setting change, is recorded in the workspace [audit log](/docs/reference/glossary#audit-log).

### Choose the enforcement mode

SSO can run in two modes:

- **Optional**: users can sign in with SSO or their existing method. Use this during rollout so nobody is locked out while you verify group assignments.
- **Required**: all users with your email domain must use Okta. Email login is disabled for them, and there are no shared passwords left to leak. [Guest access](/docs/reference/glossary#guest-access) for external auditors and consultants is unaffected.

Roll out in optional mode, confirm your team can sign in, then switch to required. The switch itself is one setting, and the change is logged.

## Enable SCIM provisioning

SSO answers who can sign in; SCIM keeps the user list itself in sync. With SCIM enabled, Okta pushes joiners, movers, and leavers to OptiTech automatically:

1. In **Settings** > **Identity** > **SCIM**, click **Enable SCIM** and copy the **SCIM base URL** and **bearer token**.
2. In your Okta application, open the **Provisioning** tab, choose **Enable API integration**, and paste the URL and token.
3. Enable **Create Users**, **Update User Attributes**, and **Deactivate Users**.
4. Assign the groups that should have OptiTech access to the application.

The payoff shows up in your own compliance program: when someone leaves and Okta deactivates them, their OptiTech access ends the same moment. Your [offboarding-within-24-hours check](/docs/reference/glossary#check) sees it, and your access reviews get shorter because membership already mirrors the identity provider.

## Map Okta groups to workspace roles

Under **Settings** > **Identity** > **Role mapping**, connect Okta groups to OptiTech roles:

| Okta group         | OptiTech role                                       |
| ------------------ | --------------------------------------------------- |
| `optitech-admins`  | [Admin](/docs/reference/glossary#admin)             |
| `optitech-editors` | [Contributor](/docs/reference/glossary#contributor) |
| `optitech-viewers` | Viewer                                              |

Group names are examples; use your own naming convention. A user's role updates when their group membership changes in Okta, so access follows your joiner-mover-leaver process without manual edits. The [Owner](/docs/reference/glossary#owner) role is deliberately excluded from mapping and managed directly in OptiTech.

## Test the connection

1. Open a private browser window and go to your workspace URL.
2. Enter an email address on your SSO domain. You're redirected to Okta.
3. Sign in and approve any MFA prompt your Okta policy requires.
4. Confirm you land in the workspace with the role your group mapping assigns.

Also verify the negative case: a user who isn't assigned to the Okta application should be denied at Okta, before reaching OptiTech.

## Conclusion

In this guide, we connected Okta to OptiTech with OIDC single sign-on, enabled SCIM provisioning, and mapped groups to workspace roles. Sign-in now follows your central identity policy: your MFA rules, your conditional access, and your offboarding process apply to your compliance workspace automatically.

The integration also strengthens your own controls. Access to the workspace is now provable from Okta's logs plus OptiTech's [audit log](/docs/reference/glossary#audit-log), the offboarding check verifies departures against the identity provider, and the access-review evidence your auditor asks for is generated instead of assembled.

To see which users authenticated and when, check **Settings** > **Members** in OptiTech, or the **Directory > People** section in your Okta admin console.

## Resources

For more information on the tools used in this guide, refer to the following documentation:

- [Okta OIDC app integrations](https://help.okta.com/en-us/content/topics/apps/apps_app_integration_wizard_oidc.htm)
- [Okta SCIM provisioning](https://developer.okta.com/docs/concepts/scim/)
- [OptiTech plans](/docs/introduction/plans)

<NeedHelp/>
