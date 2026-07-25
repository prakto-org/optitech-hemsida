---
title: 'Continuous Compliance Report'
subtitle: A deep-dive into the numbers behind OptiTech's compliance automation.
updatedOn: '2025-06-17T09:00:00.000Z'
---

### Summary

- Compliance programs on OptiTech use <span className="bg-green-45/20 text-green-45 p-1">2.4x less manual work</span> and <span className="bg-green-45/20 text-green-45 p-1">50% less cost</span> than if they were run with a consultant-driven approach.
- Running the same OptiTech programs on a consultant-driven model would result in <span className="bg-secondary-1/20 text-secondary-1 p-1">55 unnoticed control failures</span> per organization per month because even an annual review with a 20% buffer doesn't account for how quickly reality drifts from documentation.
- Multi-framework programs on OptiTech use <span className="bg-green-45/20 text-green-45 p-1">4x less work per added framework</span> than consultant-driven programs because of how well cross-mapping aligns with their overlapping requirements.
- Running the same small-company programs on <span className="bg-secondary-1/20 text-secondary-1 p-1">consultant retainers would cost 7.5x more</span> than OptiTech.

We arrive at these numbers by comparing the amount of work automated on OptiTech to the amount of manual effort it would take to run the same programs with a consultant-driven (non-automated) approach built on annual reviews and static reports. These numbers are using Dec, 2025 data.

<Admonition>
This report focuses on **control monitoring** automation only.
**Documentation** is also generated automatically on OptiTech.
(Customers only maintain the policies they actually use.)
</Admonition>

## About Continuous Compliance

The amount of monitoring, evidence collection, and follow-up needed to keep any organization compliant changes constantly over time.
For example, here is the compliance workload of a typical organization over a 24-hour period:

<AutoscalingChart title="Compliance Workload of an Organization over 24hrs" datasetKey="actual_compute_1d" autoscalingOnly={true} showStats={false} compact={true}/>

In the chart, a CU is an index of monitoring, evidence collection, and follow-up effort.
1 CU ≈ 1 full-time hour of compliance work.

<blockquote className="text-xl">
<p><em>How much consultant time should you buy to keep this organization compliant?</em></p>
</blockquote>

In an automated platform the work is handled continuously, while in a consultant-driven (non-automated) model the customer must decide how much capacity to buy up front.

A consultant-driven model is one where compliance runs on engagements with a fixed amount of scoped hours, deliverables, and sometimes even fixed calendar windows.
To help buyers make informed decisions, the standard industry practice is to scope the engagement by finding the busiest period in the compliance year and adding a 20% buffer.

Here's what peak-plus-20% looks like for our example organization:

<AutoscalingChart title="Consultant-driven: Peak + 20% (Industry Standard)" datasetKey="actual_compute_1d" showStats={false} compact={true} showOverprovisionSelector={false}/>

You can think of <span className="p-1" style={{"background-color":"rgb(255 166 76 / 0.2)", "color":"rgb(255 166 76)"}}>orange as wasted spend.</span>
It's consultant capacity that we paid for, but it delivered zero value.
It just sat there idle.

Even when we over-buy, we see two <span className="bg-secondary-1/20 text-secondary-1 p-1">gaps in red</span>. This is because the industry scoping practice buffers 20% above **the expected peak** of compliance workload. So the most extreme events, like an incident during an audit, may still exhaust the booked capacity.

To save money, we could also under-buy _(i.e.: a smaller retainer)_:

<AutoscalingChart title="Consultant-driven: Under-scoped" datasetKey="actual_compute_1d" showStats={false} compact={true} overprovision={-20} showOverprovisionSelector={false}/>

But now we see even more <span className="bg-secondary-1/20 text-secondary-1 p-1">incidents in red</span> where the organization needs more compliance capacity than what is available.
At these points we might experience missed deadlines, even regulatory findings.

Automation removes the sizing decision from the customer.
It uses integrations and a status engine to run exactly the right checks at each point in time to keep the organization compliant.

<AutoscalingChart title="Automated: Work handled continuously to match workload" datasetKeys={['actual_compute_1d', 'autoscaling_1d']} showStats={false} compact={true} autoscalingOnly={true}/>

As you can see, with automation we have:

1. **Less wasted spend** - The area in green (capacity that was bought but not used) is minimal.
2. **Little or no capacity exhaustion** - There are no points where the organization needed more compliance work than what was available.

Throughout the rest of this report, we focus on the difference between the amount of work (and costs) in an automated vs consultant-driven compliance program covering the same obligations.

## Compliance in Production

Most organizations have a predictable periodic pattern of compliance workload, especially at 24-hour and 7-day intervals.
Here is the workload history of an OptiTech customer that illustrates it well:

<AutoscalingChart title="One week of Continuous Compliance at a Customer" datasetKey="predictable_fluctuation" autoscalingOnly={true} showStats={false} compact={true}/>

Three patterns are visible:

1. **Intra-day**: Within a 24hr period, workload hits a mid-day peak and a nightly trough.
2. **Weekend**: On the weekend, workload is noticeably lower.
3. **Daily spike**: Scheduled control checks cause a spike at the same time most days.

### Production Statistics

When we take every active program on OptiTech and apply the industry scoping practice to each one using their workload history from December 2025, we can calculate the equivalent manual effort and cost.
For this report, a program is classified as production if it covers at least one framework with continuous monitoring enabled.

#### Work

Across the entire OptiTech platform in December 2025, the average program used <span className="bg-green-45/20 text-green-45 p-1">2.4x less manual work</span> than if scoped at 20% above peak workload in a consultant-driven model.

<AutoscalingViz />

#### Cost

When we factor in the cost of each program _(which varies depending on if the account is on the Professional or Start plan)_ and compare it with a conservative hourly equivalent for consultant-driven work, that equates to <span className="bg-green-45/20 text-green-45 p-1">50% lower compliance costs on OptiTech</span> on average.

<Admonition title="Why is cost savings less than work savings?" type="info">
  Consultant-driven models sell you hours at commodity market rates. So the cost of manual compliance closely tracks consultant hourly prices.

  Automated platforms run integrations, a status engine, and AI tooling that automatically handle monitoring and keep audit-ready evidence current. This requires platform investment and puts a small price premium on the automated equivalent of an hour relative to raw consultant time.

  See [methodology](#methodology) for our exact approach and rationale for estimating cost.
</Admonition>

#### Missed Deadlines and Findings

Compliance workloads can be spiky. Events like incidents, customer questionnaires, audits, and even just regulation changes can cause spikes in workload in particular. When we follow the industry scoping practice and buy at peak + 20%, the most extreme events are often spiky enough to exceed that 20% buffer.

When we counted up the number of times each program on OptiTech automatically handled work beyond the consultant-scoped equivalent, we found that <span className="bg-secondary-1/20 text-secondary-1 p-1">the average organization would experience 55 unhandled events per month</span> where compliance capacity would be exhausted if it were run on a consultant-driven model.

Automation helps turn workload spikes that would cause missed statutory deadlines and audit findings in a consultant-driven model into a few extra automated checks on OptiTech.

#### Automated Checks per Organization

The average program running on OptiTech verifies its controls 32,016 times per month, or about once every 81 seconds. To understand what the platform checks, the [pricing page](/pricing) lists the monitoring included in each plan.

### Production Example

Here is a detailed cost comparison for a real OptiTech customer with an active multi-framework program.

<AutoscalingChart title="Production. Automated vs Consultant-driven" datasetKey="predictable_fluctuation" autoscalingRate={0.222} />

The results: <span className="bg-secondary-1/20 text-secondary-1 p-1">Consultant-driven uses 3.5x more hours</span> to cover the same obligations, because much of the time only a fraction of booked capacity is being used. Translating that to costs, this program incurs <span className="bg-green-45/20 text-green-45 p-1">60% lower cost on OptiTech</span> thanks to automation. We're using the Professional plan rate _recommended for growing businesses_ and a conservative market rate for consultant engagements.

Not only is automation cheaper and more efficient, but this exact program run on a consultant-driven model at exactly the industry-standard peak + 20% scoping would experience <span className="bg-secondary-1/20 text-secondary-1 p-1">~73 unhandled events per month</span> as a result of exhausting the booked capacity.

#### Checking the math with actual market rates

The platform cost for this exact customer is <span className="bg-green-45/20 text-green-45 p-1">7 995 kr/month</span> on OptiTech.
The closest consultant engagement that fits the scoped capacity necessary to cover this program runs at typical Swedish market rates of 1 500–2 500 kr per hour, costing <span className="bg-secondary-1/20 text-secondary-1 p-1">well over 20 000 kr/month</span> which is even more expensive than our conservative estimate.

This highlights another weak point of consultant-driven compliance. **You can't buy exactly the capacity you need.** There is no half-day-per-week compliance consultant on retainer, so you are forced to "round up" to the next largest engagement.

---

## Multi-Framework Programs

Added frameworks on OptiTech are different than those in consultant-driven programs because they don't replicate or duplicate work. They read from the same control base as the first framework. This has a few benefits:

<svg viewBox="0 0 900 320" style={{width: '100%', maxWidth: '56rem', margin: '2rem auto'}} xmlns="http://www.w3.org/2000/svg">
<text x="180" y="35" textAnchor="middle" fill="#73bf69" fontFamily="monospace" fontSize="16px" fontWeight="500">OPTITECH</text>
<rect x="60" y="60" width="110" height="70" fill="#73bf69" fillOpacity="0.2" stroke="#73bf69" strokeWidth="2" rx="4"/>
<text x="115" y="90" textAnchor="middle" fill="#e5e5e5" fontFamily="monospace" fontSize="13px">First</text>
<text x="115" y="108" textAnchor="middle" fill="#e5e5e5" fontFamily="monospace" fontSize="13px">Framework</text>
<rect x="190" y="60" width="110" height="70" fill="#73bf69" fillOpacity="0.2" stroke="#73bf69" strokeWidth="2" rx="4"/>
<text x="245" y="90" textAnchor="middle" fill="#e5e5e5" fontFamily="monospace" fontSize="13px">Added</text>
<text x="245" y="108" textAnchor="middle" fill="#e5e5e5" fontFamily="monospace" fontSize="13px">Framework</text>
<path d="M 115 130 L 115 165" stroke="#73bf69" strokeWidth="2" markerEnd="url(#arrowgreen)"/>
<path d="M 245 130 L 245 165" stroke="#73bf69" strokeWidth="2" markerEnd="url(#arrowgreen)"/>
<rect x="60" y="165" width="240" height="95" fill="#73bf69" fillOpacity="0.3" stroke="#73bf69" strokeWidth="2" rx="4"/>
<text x="180" y="208" textAnchor="middle" fill="#e5e5e5" fontFamily="monospace" fontSize="15px" fontWeight="500">Shared Controls</text>
<text x="180" y="230" textAnchor="middle" fill="#b0b0b0" fontFamily="monospace" fontSize="13px">(Single set of evidence)</text>
<line x1="420" y1="45" x2="420" y2="270" stroke="#3d3d3d" strokeWidth="1" strokeDasharray="4,4"/>
<text x="660" y="35" textAnchor="middle" fill="#e8912d" fontFamily="monospace" fontSize="16px" fontWeight="500">CONSULTANT-DRIVEN</text>
<rect x="520" y="60" width="130" height="165" fill="#e8912d" fillOpacity="0.1" stroke="#e8912d" strokeWidth="2" rx="4"/>
<text x="585" y="90" textAnchor="middle" fill="#e5e5e5" fontFamily="monospace" fontSize="13px" fontWeight="500">First Framework</text>
<rect x="540" y="105" width="90" height="50" fill="#e8912d" fillOpacity="0.2" stroke="#e8912d" strokeWidth="1" rx="2"/>
<text x="585" y="135" textAnchor="middle" fill="#e5e5e5" fontFamily="monospace" fontSize="13px">Controls</text>
<rect x="540" y="165" width="90" height="50" fill="#e8912d" fillOpacity="0.3" stroke="#e8912d" strokeWidth="1" rx="2"/>
<text x="585" y="195" textAnchor="middle" fill="#e5e5e5" fontFamily="monospace" fontSize="13px">Evidence</text>
<rect x="690" y="60" width="130" height="165" fill="#e8912d" fillOpacity="0.1" stroke="#e8912d" strokeWidth="2" rx="4"/>
<text x="755" y="90" textAnchor="middle" fill="#e5e5e5" fontFamily="monospace" fontSize="13px" fontWeight="500">Added Framework</text>
<rect x="710" y="105" width="90" height="50" fill="#e8912d" fillOpacity="0.2" stroke="#e8912d" strokeWidth="1" rx="2"/>
<text x="755" y="135" textAnchor="middle" fill="#e5e5e5" fontFamily="monospace" fontSize="13px">Controls</text>
<rect x="710" y="165" width="90" height="50" fill="#e8912d" fillOpacity="0.3" stroke="#e8912d" strokeWidth="1" rx="2"/>
<text x="755" y="195" textAnchor="middle" fill="#e5e5e5" fontFamily="monospace" fontSize="13px">Evidence</text>
<path d="M 650 130 L 690 130" stroke="#e8912d" strokeWidth="2" markerEnd="url(#arroworange)"/>
<text x="670" y="120" textAnchor="middle" fill="#b0b0b0" fontFamily="monospace" fontSize="11px">duplication</text>
<defs>
<marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
<path d="M0,0 L0,6 L9,3 z" fill="#73bf69"/>
</marker>
<marker id="arroworange" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
<path d="M0,0 L0,6 L9,3 z" fill="#e8912d"/>
</marker>
</defs>
</svg>

| Feature             | OptiTech                                                  | Consultant-driven                                              |
| ------------------- | -------------------------------------------------------- | ------------------------------------------------------------- |
| **Evidence costs**  | No increase when adding frameworks                        | Adding a framework doubles documentation costs                 |
| **Work scaling**    | Each framework reuses cross-mapped controls automatically | Frameworks typically scoped as full projects to avoid gaps     |
| **Time to added framework** | Days, regardless of organization size            | Months for large organizations                                 |

This makes added frameworks on OptiTech particularly valuable not just for meeting new regulations, but also for answering customer questionnaires and anything else that you may not want to impact your team's day-to-day work.

### Multi-Framework Statistics

When we apply the same comparison logic as we did with production programs above, we find that added frameworks on OptiTech are <span className="bg-green-45/20 text-green-45 p-1">4x more efficient</span> than if they were run as consultant-driven projects, and <span className="bg-green-45/20 text-green-45 p-1">78% lower cost.</span>

<AutoscalingViz multiplier={4} provisionedTotal={160} autoscalingTotal={40} label="added framework" />

Added frameworks are more work-efficient than first frameworks because of the different ways they are used: The efficiency of a framework added purely for a certification is fairly similar to the 2.4x stat we saw in the standard production category. But many added frameworks on OptiTech overlap heavily with existing controls, leading us to infer that they are driven by things like customer requirements, procurement, and supervisory requests. The bigger the overlap, the more pronounced the work savings relative to a consultant-driven project.

This efficiency even accounts for cases where frameworks are added and retired on-demand in OptiTech. If a framework is only active for one quarter, we only compare it to one quarter of consultant-driven cost.

---

## Small Companies

In one of the features unique to OptiTech, small organizations can run a full program that stays dormant between events and reactivates instantly when a questionnaire, audit, or incident arrives.
Many small companies have a workload history that looks like the one below, oscillating between a minimum baseline and zero:

<AutoscalingChart title="Fig. 3: One week of Continuous Compliance at a Small Company" datasetKey="scale_to_zero" autoscalingOnly={true} showStats={false} compact={true} />

This pattern shows up mostly in **companies with 5-30 employees**: Suppliers who need to prove compliance to their enterprise customers but have no dedicated staff. But also startups, subcontractors, early-stage regulated businesses, etc... It takes a surprising amount of effort to keep a compliance program alive 24/7 by hand.

### Small Company Statistics

If we tally up the work automated for small companies on OptiTech and compare it with the effort required to maintain the same posture continually with consultants, we find that the savings are even more extreme than for larger organizations.

#### Work

A consultant-driven model that cannot go dormant would use <span className="bg-secondary-1/20 text-secondary-1 p-1">13.7x more hours</span> to maintain the same small-company programs as OptiTech.
This is using the same peak + 20% methodology as before.

#### Costs

When we factor in costs using the rates of each program on OptiTech (Start or Professional plan depending on size) and a conservative hourly equivalent for consultant work, we find that <span className="bg-green-45/20 text-green-45 p-1">automation reduces costs by 7.5x.</span>
The savings numbers for small companies are dramatic enough to make it clear that this model is changing customer behavior.
Automation changes the equation on what types of organizations can economically afford a real compliance program.

### Small Company Example

Here is an actual workload history from a small company on OptiTech:

<AutoscalingChart title="Fig. 3a: Small-company workload. OptiTech vs Consultant-driven" datasetKey="scale_to_zero" autoscalingRate={0.106} overprovision={0} compact={true} fixedRate={0.065}  />

Because of how often this program is dormant between events, this exact organization only needs 25 hours of active compliance work per month on OptiTech.
(Because activity comes in short bursts, that means the platform is doing something meaningful about 100 hours per month.)
That keeps the cost down to the <span className="bg-green-45/20 text-green-45 p-1">Start plan at 2 995 kr/month</span>.

Consultant-driven models cannot go dormant, so your best option for this program is to buy the smallest retainer that covers the obligations (zero buffer).
Using that approach, running a similar program with consultants would use <span className="bg-secondary-1/20 text-secondary-1 p-1">7.1x more hours</span> and <span className="bg-secondary-1/20 text-secondary-1 p-1">cost 4.4x more</span>.

#### Checking the math with actual market rates

The smallest meaningful consultant engagement on the Swedish market is a periodic review at 1 500–2 500 kr per hour, which lands well above 13 000 kr per month once travel and reporting are included.

## Methodology

### Conservative Estimates

We've been careful to make these numbers as conservative as possible. For example:

1. We ignore the fact that OptiTech comes with incident readiness and audit trails built-in, while consultant-driven models require you to buy incident support separately to get the same coverage.
2. We compute the size of consultant engagement needed per organization each month. That assumes a consultant-driven buyer would be renegotiating scope monthly for maximum efficiency.
3. When a program on OptiTech goes dormant and stays dormant, we immediately stop tallying up equivalent consultant costs. In reality many static compliance binders are forgotten about until an audit or incident exposes them and someone manually restarts the project.

### Classifying workloads

- **Production:** Any program with continuous monitoring enabled on at least one framework.
- **Small Company/Dormant:** Any program with a lighter baseline that is active less than 95% of time.

We've excluded all programs on the OptiTech Free Plan from this analysis.

### Sizing workloads

We use peak + 20% as the default scoping setting following standard industry practice for compliance engagements. To compute the peak + 20% for each organization we:

1. Start with the dataset of that organization's workload history for the month
2. Discard the 0.5% of time where the workload was largest.
3. Find the maximum remaining workload.
4. Add 20% to it.

So if an organization spent 1% of time at 8 hours per day of compliance work, the peak would be 8 hours and the peak + 20% would be 9.6 hours. If an organization spent only 0.25% of time at that level the scoped peak would be lower.

### Consultant-driven costs

- **Small Organizations** - We used a conservative hourly equivalent based on the lower end of Swedish market rates for periodic compliance reviews across regional consultancies.
- **Large Organizations** - We used a market-rate hourly equivalent by starting with the typical cost of ongoing GRC engagements at established Swedish and Nordic advisory firms.

### Counting Incidents

To get a count of unhandled events, we:

1. Calculate the peak + 20% "consultant-scoped equivalent" capacity of each OptiTech program for each month
2. Count the number of distinct time periods where the workload history showed the organization needing more than the peak + 20% capacity.

This means if an organization spent 1 day above the peak + 20% threshold, it would count as one event, and if the workload went above and below the threshold three separate times it would count as three events.

## Terminology

<DefinitionList>
Continuous compliance
: The automated adjustment of **compliance work** to fit the needs of current obligations. OptiTech also automates **documentation**, but this report focuses only on the monitoring side.

Consultant-driven Program
: A compliance program that does not have automation, where the customer must select the scope, hours, (and deliverables) configuration upon engagement.

Compliance Unit (CU)
: Used in this report to refer to an allocation of compliance effort. In OptiTech's model, 1 CU = 1 full-time hour of monitoring, evidence collection, and follow-up.

CU-hour
: A workload unit corresponding to one hour of 1 CU. Automated platforms handle CU-hours flexibly, e.g. a burst of checks during an audit or a light baseline during quiet weeks.

</DefinitionList>
