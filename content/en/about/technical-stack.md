---
title: Technical Stack
description: ''
position: 8
category: 'About Us'
---

Continuously investing in quality (functional programming, code quality, tests, pull request reviews, refactoring…) is part of our strategy to
sustainably maximize the business value we deliver.

Here's where we are now:

## Frontend

- Our webapp frontend projects are written in `Vuejs`, `Sass` and `Pug`. We make use of modern `JavaScript`
- We maintain a UI Library that is used in all of our frontend projects.
- We rely heavily on functional `JavaScript` patterns. 

## Backend

We sit somewhere in the middle of the “Scala as a worse Haskell” and “Scala as a better Java” spectrum.  We love
functional programming and we do make use of libraries like `cats`, `cats-effect`, `http4s`, `doobie`, but keep a pragmatic 
stance on purity and are also exposed to the `AWS Java SDK`/`hadoop`/`spark` ecosystems. 

Here are some highlights of the major backend components:
- `open-api`: an `http4s` API running on `Fargate` to submit (buy, sell) orders to the marketplace
- `ingestion`: spark jobs that ingest supplier data and store it in the data lake and puddles (Apache Iceberg).
- `transaction`: spark jobs that transact the data between the buyers and sellers
- `delivery`: spark jobs triggered by `AWS Step Functions` that deliver the transacted data to a format suitable for the buyers' consumption

## Ops
- We are operating in `Amazon Web Services`.  Our long-running services are deployed on `EC2`, `Fargate`, and `Lambda` and provisioned with `Terraform`.
- We handle massive amounts of data: the miscellaneous S3 buckets we own contain in excess of 300TB of data.
- Our scheduled (spark) jobs are mostly executing on `EMR` and triggered by `Jenkins Jobs`.
- We also heavily use other AWS technologies such as `DynamoDB`, `S3`, `RDS`, `Step Functions` and `EMR`.
- Other services we use include: `GitHub`, `Gitlab`, `Jenkins`, `DataDog`, `Crucible`.
- Being a small team, we think twice before rolling out custom infra that we need to monitor and maintain. 

## Workstation Setup Guide

It is also worth taking a look at our [Dev Workstation Setup Guide](/process/dev-workstation-setup) which  
gives more information on the tools that we work with.