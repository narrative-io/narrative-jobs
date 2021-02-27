---
title: Product Development Process
description: ''
position: 10
category: Process
---

As mentioned in the [culture document](/about/culture#rules-and-processes), rules and processes do not exist for their own sake -- they are simply what we consider to be "best practices" and "good habits" for reinforcing the positive aspects of our team culture. 

So we are regularly inspecting and iterating on our software development process to keep it relevant and useful.

## Queues

Instead of adopting a one-size-fits-all approach such as Scrum, we opted to organize the work around different queues that have different latency/throughput constraints.
The exact details of how this works are still being worked out. 

- **The Partner Success Queue**: this queue contains tasks with a low-latency requirement. 
    - These tasks are typically small (< 2 days of work) and are mostly about supporting the sales team (custom work, forecasts, etc). 
    - We perform 1-month rotations of the backend developers to protect the rest of the team from interruptions. 
    - This rotation is usually also the opportunity to extract pieces from the production system to make it easier
      to reuse prod logic in the context of one-offs, or to create simpler APIs to give more autonomy to the bizops team (Some people on the business side write custom spark queries and forecasts as well)
- **The Ops Queue**: all ops alerts and issues are considered tasks with a low-latency requirement.
    - We do not currently have  developers dedicated to this queue, 
      but we are currently debating various options to address the concern of interruptions.
- **The Project Prioritization Queue**: managed by the Product Owner, this queue is the result of the high-level prioritization
      done by the Product Owner. Business requests are prioritized, go through a reality-check filter, and are then exploded
      into manageable chunks with accompanying mockups, use cases, etc. 
- **The Product Development Queue**: contains the de-risked main product development requests.
    - We used to simply work on the queue and re-evaluate the progress at the end of each 2-week iteration.
    - We are currently discussing options such as [Shape Up](https://basecamp.com/shapeup/shape-up.pdf) that could help us provide
      more predictibility to the business side. More to come on that as we discuss the implementation and adaptations.

## Design Documents

Before starting a major project (usually >= 1 to 2 months of work), someone in the development team will usually take the lead and come up with 
a design document that gathers:
- the requirements and use cases from the business side
- technical constraints
- potential solutions to implement these requirements and address the constraints with their pros and cons

The goal is to asynchronously seek feedback from the team before engaging in a major project and 
define realistic expectations of what will be achievable in the short term.

Read more on [design reviews](/about/day-in-life-dev#design-reviews)

## Ceremonies

We do not have the typical "retrospective" and "demo" ceremonies, but have a bi-weekly "sprint planning" 
session and a weekly catch-all dev meeting where we discuss the areas for improvements, etc.

Things will most likely change as we grow the team and feel the need to split the main team.

## Full Stack Development

While each developer does not strictly develop the entire feature from the UI to the metal, 
we generally attempt to reasonably vertically own and take responsibility for what we build. However, we balance that
with the need to avoid constant interruptions by performing ops rotations.
