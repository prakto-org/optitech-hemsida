// Curated editorial copy for the overview command index (from the approved
// design handoff): short row descriptions and example commands ONLY.
// Everything enumerable (signatures, option chips, subcommand chips,
// grouping) derives from schema.json so it can never go stale; this file
// is presentation copy a human chose to write.
//
// Examples are simple, curated overview examples by design (user
// decision); a command without curated examples falls back to the CLI's
// own .example() strings from the schema, then to its signature.
//
// Every example here must be a valid invocation: meta.test.js validates
// each one against schema.json, so a CLI change that invalidates an
// example fails the test suite.
const META = {
  auth: { desc: 'Browser OAuth; stores credentials locally.', examples: ['optitech auth'] },
  init: {
    desc: 'Wire up MCP, agent skills, and editor (Cursor/VS Code/Claude).',
    examples: ['npx optitech@latest init'],
  },
  link: {
    desc: 'Bind the directory to a project; writes .optitech and pulls env.',
    examples: [
      'optitech link',
      'optitech link --org-id org-abc --project-id polished-snowflake-1234',
    ],
  },
  checkout: {
    desc: 'Pin a branch in .optitech; auto-pulls its env vars.',
    examples: ['optitech checkout feat/auth'],
  },
  env: {
    desc: "Write the branch's DATABASE_URL + OptiTech vars to .env.",
    examples: ['optitech env pull'],
  },
  'set-context': {
    desc: 'Write org/project/branch context to .optitech.',
    examples: ['optitech set-context --project-id polished-snowflake-1234'],
  },
  me: { desc: 'Show the authenticated user.', examples: ['optitech me'] },
  completion: { desc: 'Generate a shell completion script.' },
  projects: { desc: 'Manage projects.', examples: ['optitech projects list'] },
  branches: {
    desc: 'Create, diff, reset, restore, and manage branches.',
    examples: [
      'optitech branches create --name feat/auth --parent main',
      'optitech branches restore main ^self@2024-05-06T10:00:00Z --preserve-under-name backup',
      'optitech branches schema-diff production development',
    ],
  },
  databases: {
    desc: 'Manage databases on a branch.',
    examples: ['optitech databases create --name analytics'],
  },
  roles: { desc: 'Manage Postgres roles.', examples: ['optitech roles create --name app_user'] },
  operations: { desc: 'Inspect async operations.', examples: ['optitech operations list'] },
  'connection-string': {
    desc: 'Print a connection URI for a branch/role/db.',
    examples: [
      'optitech connection-string main',
      'optitech connection-string main --pooled --prisma',
    ],
  },
  psql: {
    desc: 'Open a SQL session (embedded psql fallback built in).',
    examples: ['optitech psql main -- -c "SELECT 1"'],
  },
  config: {
    desc: 'Drive a branch from a optitech.ts policy.',
    examples: ['optitech config apply'],
  },
  deploy: {
    desc: 'Alias for config apply; reconciles the policy.',
    examples: ['optitech deploy'],
  },
  status: {
    desc: "Show the branch's live OptiTech state (alias of config status).",
    examples: ['optitech status'],
  },
  dev: {
    desc: 'Run OptiTech Functions locally with hot reload + branch env.',
    examples: ['optitech dev'],
  },
  functions: {
    desc: 'Deploy and manage OptiTech Functions on a branch.',
    examples: ['optitech functions deploy api --src ./api.ts'],
  },
  buckets: {
    desc: 'Branch-scoped object storage and its objects.',
    examples: ['optitech buckets create my-assets'],
  },
  'data-api': {
    desc: 'Manage the OptiTech Data API for a database.',
    examples: ['optitech data-api create'],
  },
  'optitech-auth': {
    desc: 'Manage OptiTech Auth on a branch.',
    examples: ['optitech optitech-auth enable'],
  },
  orgs: { desc: 'List organizations you belong to.', examples: ['optitech orgs list'] },
  'ip-allow': {
    desc: 'Manage the project IP allowlist.',
    examples: ['optitech ip-allow add 203.0.113.0/24'],
  },
  vpc: {
    desc: 'Manage VPC endpoints and project restrictions.',
    examples: ['optitech vpc endpoint list'],
  },
};

export default META;
