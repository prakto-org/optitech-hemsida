Operations represent background jobs OptiTech runs to fulfill API requests: activating frameworks, running evidence sweeps, generating reports, and restoring snapshots. Some operations are system-initiated, such as scheduled evidence checks or periodic review reminders.

Status values: `scheduling`, `running`, `finished`, `failed`, `cancelling`, `cancelled`, `skipped`. Terminal statuses are `finished`, `skipped`, and `cancelled`. A `failed` operation is not terminal and may be retried.

OptiTech limits overlapping operations per program. Requests that conflict with a running operation return `423 Locked`; retry with exponential backoff or wait for the in-flight operation to finish. Operations older than 6 months may be pruned.

See [Audit log](/docs/manage/operations) for polling guidance, retry examples, and a full list of operation types.
