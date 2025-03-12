---
title: Senior/Staff Backend Engineer - Query Compiler (Remote)
position: 2
category: Open Positions
---

## What is Narrative

Narrative has been building a data collaboration platform designed for simplicity and ease of use since being founded in 2016.

Our primary strength is functioning as a data marketplace where we differentiate ourselves by:

- Automatically [standardizing data](https://kb.narrative.io/how-rosetta-stone-works), simplifying the user experience by eliminating the need to deal with `n` representations of the same underlying concept from different suppliers.
- Making platform data accessible through the [Narrative Query Language (NQL)](https://kb.narrative.io/narrative-sql-nql-overview) and easy-to-use UIs powered by NQL. This enables users to transform, deduplicate, and filter data instead of selecting from a set of provider-defined, pre-packaged datasets.
- Giving data providers the ability to define row-level access and pricing policies for their data.

The same building blocks powering our marketplace enable other data collaboration use cases, like clean room data analysis and automatic segmentation of data with delivery to platforms like The TradeDesk and Yahoo!. We're also building towards a future where users can leverage our collaboration tools without needing their data to reside on our platform; instead, our query engine will be embeddable where their data is already at rest.

## What You Will Do

In this role, you will focus on the NQL query compiler and backend at Narrative. NQL is our SQL dialect with privacy and collaboration-specific extensions that allow users to e.g. treat data from multiple providers as if it were in a single unified table through Rosetta Stone (our data normalization and classification engine). NQL compiles down to a form suitable for execution where the target data is at rest; for example, NQL compiles to Snowflake SQL in our Snowflake “data planes”.

In practice, you will:

- Maintain and improve our incremental view maintenance engine to ensure we are efficiently and correctly integrating changes from source datasets into derived datasets.
- Update the NQL compiler to track row-level metadata for billing and governance, including column provenance and lineage.
- Integrate features like autocomplete, validation, and intelligent suggestions into our NQL editor.
- Iterate on the structured, “UI-friendly” representation of NQL queries consumed by our query builder frontend.
- Build a function catalogue system that allows users to define their own UDFs and UDAFs in the target execution environment.
- Develop advanced access rules and privacy controls so data owner can specify row-level permissions, usage restrictions, and data minimization rules. E.g., an access rule can enforce that an aggregation query that targets a dataset will only emit output rows that are the result aggregating at least 100 distinct values of some input identifier field.
- Iterate on our forecasting system so that users get faster, more accurate insights into the volume and quality of data they are interested in.
- Optimize query planning, batching, and execution to make sure compiled queries are running efficiently.
- Work on general compiler maintenance tasks, like improving error messages, compilation performance, correctness, etc.
- Work on related systems, like our API and job queue.
- Develop a deep understanding of our business such that tradeoffs are accurately evaluated and the user-facing consequences of technical choices are clearly communicated to the Product team.

## Technical Stack

<common-section section-name="technical-stack"></common-section>

## Ideal Candidate

For this role we are looking for someone with experience working on query compilers or query execution systems in general.

That means the ideal candidate should:

- Have worked directly on a query compiler or engine for at least one year, with a solid grasp of the problem domain in general. Apache Calcite experience is ideal, but we would be happy to hear from anyone who has productively worked on a query execution system (whether closed or open source).
- Have experience working with non-trivial quantities of data. Prior experience with Spark would be ideal, but experience with any distributed query engine (Trino, Dremio, etc.) would also be helpful.

Our generic, more flexible requirements are:

- Proficiency in a typed functional language such as Scala, F#, or Haskell, or significant experience in their non-functional equivalents (Java, C#) with an interest in Scala and Functional Programming.
- Experience operating in a cloud environment like Amazon Web Services, Google Compute Engine, or similar. Experience deploying and monitoring large data processing systems using Kubernetes (or similar) would be a big plus.
- A willingness to contribute across the stack, from UI to operational tasks, when the need arises.
<common-section section-name="common-requirements"></common-section>

## The Team

<common-section section-name="team"></common-section>

## Our Mission

<common-section section-name="mission"></common-section>

## Apply Now

<common-section section-name="apply-now"></common-section>