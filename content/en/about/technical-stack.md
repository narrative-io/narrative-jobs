---
title: Technical Stack
description: ''
position: 8
category: 'About Us'
---

## Backend

Our application are primarily developed using Scala and AWS.

We sit somewhere in the middle of the “Scala as a worse Haskell” and “Scala as a better Java” spectrum. We love
functional programming and make use of libraries like `cats`, `cats-effect`, `http4s`, and `doobie`, but we keep a
pragmatic stance on purity and have to play nice with the Hadoop and Spark ecosystems.

Here are some highlights of our major backend components, what they do, and the technologies we use:

- `api`: an `http4s` API running on Fargate that is used by any person or process interacting with our platform (e.g.
  the frontend, external applications, etc.).
- `apps`: a framework for building applications on top the Narrative platform, allowing us and third parties to extend
  the functionality of our systems. Apps use whatever technologies makes sense for the problem at hand, but they
  typically look like microservices deployed to Fargate.
- `nql`: the implementation of
  the [Narrative Query Language](https://blog.narrative.io/introducing-nql-narrative-query-language)
  which handles query parsing and the production of a logical plan, logical plan transformations for e.g. approximate
  query processing, incremental view maintenance, data standardization
  via [Rosetta Stone](https://www.narrative.io/rosetta-stone), and re-compilation of the
  transformed logical plan to a format suitable for execution on one of the engines we support (typically, Spark SQL or
  Snowflake SQL).
- `ingestion`: Lambdas and Spark jobs that ingest supplier data and store it in our Apache Iceberg-backed "lakehouse".
- `transaction`: a series of jobs that transact data between buyers and sellers.

## Frontend

- Our webapp frontend projects are written in Typescript using Vue.js, Sass, Nuxt, and Vite.
- Projects are deployed using Cloudflare Pages.

## Operations

- We operate in AWS. Our long-running services are deployed on EC2, Fargate, and Lambda, using Terraform for
  infrastructure automation.
- We handle a decent amount of data, e.g. we ingest > 15 TB of data daily.
- Our scheduled (Spark) jobs are mostly executing on EMR and triggered by Jenkins.
- We also use other AWS products RDS, SNS/SQS, CloudWatch, etc. as appropriate.
- Other services we use include: GitHub Actions for CI/CD, DataDog for monitoring, etc.
- Being a small team, we think twice before rolling out custom infrastructure that we need to monitor and maintain.

## Workstation Setup Guide

It is also worth taking a look at our [Dev Workstation Setup Guide](/process/dev-workstation-setup) which
gives more information on the tools that we work with.