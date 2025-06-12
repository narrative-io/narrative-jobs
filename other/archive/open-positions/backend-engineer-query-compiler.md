---
title: Senior/Staff Backend Engineer - Query Compiler (Remote)
position: 2
category: Open Positions
---

## What is Narrative

<common-section section-name="what-is-narrative"></common-section>

## What You Will Do

In this role, you will focus on the NQL query compiler and backend at Narrative. NQL is our SQL dialect with privacy and collaboration-specific extensions that allow users to e.g. treat data from multiple providers as if it were in a single unified table through Rosetta Stone (our data normalization and classification engine). NQL compiles down to a form suitable for execution where the target data is at rest; for example, NQL compiles to Snowflake SQL in our Snowflake “data planes”.

In practice, you will:

- Maintain and improve our incremental view maintenance engine to ensure we are efficiently and correctly integrating changes from source datasets into derived datasets.
- Update the NQL compiler to track row-level metadata for billing and governance, including column provenance and lineage.
- Build a function catalogue system that allows users to define their own UDFs and UDAFs in the target execution environment.
- Develop advanced access rules and privacy controls so data owner can specify row-level permissions, usage restrictions, and data minimization rules. E.g., an access rule can enforce that an aggregation query that targets a dataset will only emit output rows that are the result of aggregating at least 100 distinct values of some input identifier field.
- Iterate on our forecasting system so that users get faster, more accurate insights into the volume and quality of data they are interested in.
- Optimize query planning, batching, and execution to make sure compiled queries are running efficiently.
- Work on general compiler maintenance tasks, like improving error messages, compilation performance, correctness, etc.
- Integrate features like autocomplete, validation, and intelligent suggestions into our NQL editor.
- Iterate on the structured, “UI-friendly” representation of NQL queries consumed by our query builder frontend.
- Work on related systems, like our API and job queue.
- Develop a deep understanding of our business such that tradeoffs are accurately evaluated and the user-facing consequences of technical choices are clearly communicated to the Product team.

## Technical Stack

<common-section section-name="technical-stack"></common-section>

## Ideal Candidate

For this role we are primarily looking for someone with experience working on query compilers or query execution systems. However, if you feel you have relevant experience that would help with the projects noted in the "What You Will Do" section that doesn't perfectly align with what we have below we'd still love to hear from you.

Our ideal candidate should:

- Have worked directly on a query compiler, engine, or closely related problem for at least one year, with a solid grasp of the problem domain in general. Apache Calcite experience is ideal, but we would be happy to hear from anyone who has productively worked on a query execution system (whether closed or open source).
- Have experience working with non-trivial quantities of data and have at least some working knowledge of distributed query engines like Apache Spark. For context, we ingest > 20 TiB of data in the platform every day.

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
