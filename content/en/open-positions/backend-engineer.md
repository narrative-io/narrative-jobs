---
title: Senior Backend Engineer (Remote Global)
position: 2
category: Open Positions
---

## Background

Narrative has been building a data collaboration platform designed for simplicity and ease of use since being founded
in 2016.

Our primary strength is functioning as a data marketplace where we differentiate ourselves by:

- Automatically [standardizing data](https://kb.narrative.io/how-rosetta-stone-works), simplifying the user experience
  by eliminating the need to deal with `n` representations of the same underlying concept from different suppliers.

- Making platform data accessible through
  the [Narrative Query Language (NQL)](https://kb.narrative.io/narrative-sql-nql-overview) and easy-to-use UIs powered
  by NQL. This enables users to transform, deduplicate, and filter data instead of selecting from a set of
  provider-defined, pre-packaged datasets.

- Giving data providers the ability to define row-level access and pricing policies for their data.

- Making it easy to deliver data to a variety of destinations using our "Connector Framework".

We operate two flavours of our platform:

- An AWS-based implementation where all operations run on infrastructure we own. Users ingest data into the platform,
  where it is then available to be used in queries and other collaboration use cases.

- A Snowflake-based version where all data-accessing operations (e.g. queries) run inside the user's Snowflake account,
  deployed using the Snowflake Native App Framework.

Building on the success of our Snowflake model, we're generalizing our platform's architecture to support running all
data-accessing operations inside customer-owned environments in on AWS, GCP, and beyond.

Our Connector Framework has also matured into a key differentiator: customers leverage Narrative as a CDP-like
enrichment layer, blending first-party data with third-party sources and delivering results into destinations of their
choosing (e.g., ad platforms, warehouses).

## What You Will Do

You'll evolve the core systems that power our platform, including helping us rearchitect our systems to deliver on our
vision of running our query engine on customer infrastructure and improving our Connector Framework so that customers
can collaborate with data wherever it lives.

### Example Projects

- Architect service interfaces and composable subsystems as we work towards making it possible for users to run
  Narrative's query engine on customer-owned infrastructure.

- Improve our job system with more efficient scheduling and resource utilization, support for long-running workflows,
  and more robust error handling.

- Build out additional connectors and improve our "Connector Framework" to make it effortless to get data into and out
  of our platform while driving down the cost of building and maintaining support for new destinations.

- Design a framework to enable efficient cross-data plane data delivery (i.e. enable sending data between separate
  Narrative app installations and, eventually, the federation of query execution).

- Add capabilities to our AI training framework, where users can use platform data to train models then use them in
  queries or in their customizable entity resolution rules as part of our "Composable Identity" solution.

- Improve our data classification engine to make it easier for users to collaborate using any kind of data in the
  platform.

- Improve the monitoring and reliability of our systems with an ever-increasing amount of data being handled: currently
  we're ingesting > 20 TB into the platform every day.

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
  Experience deploying and monitoring large data processing systems using e.g. Kubernetes would be a big plus.

<common-section section-name="common-requirements"></common-section>

## The Team

<common-section section-name="team"></common-section>

## Our Mission

<common-section section-name="mission"></common-section>

## Apply Now

<common-section section-name="apply-now"></common-section>
