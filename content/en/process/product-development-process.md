---
title: Product Development Process
description: ''
position: 10
category: Process
---

As mentioned in the [culture document](/about/culture#rules-and-processes), rules and processes do not exist for their
own sake -- they are simply what we consider to be "best practices" and "good habits" for reinforcing the positive
aspects of our team culture.

So we are regularly inspecting and iterating on our software development process to keep it relevant and useful.

## Product Development Cycle

Product strategy is informed top-down (by company vision and goals) and bottom-up (by customer needs). High-level
objectives shape product initiatives, and customer input and feedback are incorporated throughout the product
development process.

- **Company Goals**: Company leadership sets business goals to focus efforts and measure progress towards
  the [company vision](/about/mission).
    - A goal consists of an objective, or guiding theme, and corresponding key results, or measurable goals to track
      performance against an objective. Key results are designed to be difficult but not impossible to fully achieve.
    - While company goals are set quarterly, Product and Engineering objectives have focused on enabling automation and
      self-service, expanding our addressable market, and maintaining a high quality standard when shipping products.
- **Product Initiatives**: A product initiative supports at least one company goal and addresses a customer problem,
  usually in the form of a product or suite of products that can be built.
    - A product initiative is scoped with defined goals, intended customers, and primary features and use cases, and
      updated with input from customers and other functions.
    - Initiative ideas can come from anywhere, for example, informed by company vision and business goals, submitted by
      team members, or requested by customers.
- **Projects**: An initiative can be broken down into smaller, manageable projects for prioritization. When a project
  has been prioritized for development, a project kickoff meeting is held with product, engineering, and design. The
  group reviews the problem definition and high-level user stories and aligns on project deliverables (what is in scope
  or out of scope for each milestone). Next, the solution design phase begins
  and [design documents](process/product-development-process#design-documents) are created.

## Design Documents

Before starting a major project (usually >= 1 to 2 months of work), someone in the development team will usually take
the lead and come up with
a design document that gathers:

- Requirements and use cases from the business side.
- Technical constraints.
- Potential solutions to implement these requirements and address the constraints with their pros and cons.

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
