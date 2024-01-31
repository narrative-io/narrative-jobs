---
title: Senior Backend Engineer (Remote)
position: 2
category: Open Positions
---

## What You Will Do

Narrative is building a data collaboration platform focused on making collaboration easy.

Our most successful function lies in operating as a data marketplace where we differentiate ourselves by:

- Automatically [standardizing data](https://kb.narrative.io/how-rosetta-stone-works), simplifying the user experience
  by eliminating the need to deal with `n` representations of the same underlying concept from different suppliers.
- Making platform data accessible through
  the [Narrative Query Language (NQL)](https://kb.narrative.io/narrative-sql-nql-overview) and easy-to-use UIs powered
  by NQL. This enables users to transform, deduplicate, and filter data instead of selecting from a set of
  seller-defined, pre-packaged datasets.
- Giving data providers the ability to define row-level access and pricing policies for their data.

The same foundations powering our marketplace facilitate various data collaboration use cases, such as automatic data
segmentation and delivery to platforms like The TradeDesk, as well as clean room data analysis. We're also building
towards a future where users can leverage our collaboration tools without needing their data to reside on our
platform; instead our query engine will be embeddable where their data is already at rest.

Here are the kinds of projects you will likely work on:

- Add capabilities to [NQL](https://kb.narrative.io/narrative-sql-nql-overview), including:
    - Iterating on our forecasting system so that users get faster, more accurate insights into the volume and
      quality of data they are interested in.
    - Improving query planning, optimization, and batching to make sure compiled queries are running efficiently.

- Improve our data classification engine to make it easier for users to collaborate using any kind of data in the
  platform.

- Build out additional connectors to make it effortless to get data into and out of our marketplace.

- Automate table maintenance tasks like file compaction, data retention, choosing partitioning and sort strategies based
  on statistics gathered about a dataset and historical query patterns, etc.

- Architect service interfaces and composable subsytems as we decompose our monolith and make it possible for users to
  run Narrative's query engine on their own infrastructure instead requiring that they push data to us.

- Improve the monitoring and reliability of our systems with an ever-increasing amount of data being handled: currently
  we're ingesting > 15 TB into the platform every day.

## Technical Stack

<common-section section-name="technical-stack"></common-section>

## Ideal Candidate

We are not looking for a 100% fit on all the technology buzzwords, but we are looking for someone with strong personal
and technical skills that is eager to pick up new technologies as necessary.

The ideal candidate should:

- Have experience in a typed functional language such as Scala, F#, or Haskell, or significant experience in their
  non-functional equivalents (Java, C#) with an interest in Scala and Functional Programming.
- Have experience working with non-trivial quantities of data. Prior experience with Spark would be ideal, but
  experience with any distributed query engine (Trino, Dremio, etc.) would also be helpful.
- Have experience operating in a cloud environment like Amazon Web Services, Google Compute Engine, or similar.
  Experience deploying and monitoring large data processing systems using Kubernetes (or similar) would be a big plus.
- Not be afraid of contributing to the entire stack, from the UI to Devops, when the need arises.
<common-section section-name="common-requirements"></common-section>

## The Team

<common-section section-name="team"></common-section>

## Our Mission

<common-section section-name="mission"></common-section>

## Apply Now

<common-section section-name="apply-now"></common-section>
