---
title: Technical Stack
description: ''
position: 8
category: 'About Us'
---

Continuously investing in quality (functional programming, code quality, tests, pull request reviews, refactoring, etc.)
is part of our strategy to sustainably maximize the business value we deliver.

Here's where we are now:

## Frontend

- Our webapp frontend projects are written in Vue.js, Sass, and Pug, using modern JavaScript.
- We maintain [a UI Library](https://github.com/narrative-io/tackle-box) that is used in all of our frontend projects.

## Backend

We sit somewhere in the middle of the “Scala as a worse Haskell” and “Scala as a better Java” spectrum. We love
functional programming and make use of libraries like `cats`, `cats-effect`, `http4s`, `doobie`, but we keep a
pragmatic stance on purity and have to play nice with the Hadoop and Spark ecosystems.

Here are some highlights of the major backend components:

- `api`: an `http4s` API running on Fargate that is used by any person or process interacting with our platform (e.g.
  the frontend, external applications, etc.).
- `apps`: a framework for building applications on top the Narrative platform, allowing us and third parties to extend
  the functionality of our systems. Apps use whatever technologies makes sense for the problem at hand, but they
  typically look like microservices deployed to Fargate with their own RDS postgres instance serving as the persistence
  layer.
- `ingestion`: Lambdas and Spark jobs that ingest supplier data and store it in our Apache Iceberg-backed "lakehouse".
- `transaction`: Spark jobs that transact the data between the buyers and sellers, including exposing an event log of
  transaction events, intelligently planning job runs, etc.

## Ops

- We operate in AWS. Our long-running services are deployed on EC2, Fargate, and Lambda, using Terraform for
  infrastructure automation.
- We handle a decent amount of data: our miscellaneous S3 buckets contain in excess of 2PB of data.
- Our scheduled (Spark) jobs are mostly executing on EMR and triggered by Jenkins.
- We also heavily use other AWS technologies such as DynamoDB, S3, RDS, and Step Functions.
- Other services we use include: GitHub Actions for CI/CD, DataDog for monitoring, etc.
- Being a small team, we think twice before rolling out custom infra that we need to monitor and maintain.

## Workstation Setup Guide

It is also worth taking a look at our [Dev Workstation Setup Guide](/process/dev-workstation-setup) which
gives more information on the tools that we work with.