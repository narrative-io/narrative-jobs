---
title: A Day in the Life of a Dev
menuTitle: Typical Dev Day
description: ''
position: 7
category: 'About Us'
---

Potential candidates often wonder what a typical day looks like at Narrative, and this page is an attempt to answer the
question.

## Ceremonies

### \#daily-gsd

We use [Slack](https://slack.com/) to stay connected with the rest of the team.

The `#daily-gsd` channel lets us keep track of what our teammates are working on and identify blockers as well as
potential conflicts.

Each of us starts the day by taking a look at our work queue, what we achieved yesterday, and what we plan to complete
today, then we write a couple sentences in `#daily-gsd` to let the rest of the team know about our current priorities.

### \#auto-techops

The person who is on call will look at the various warnings and alerts in the `#auto-techops` channel in order to
identify things that need to be fixed, failed clusters, etc.

The on call will also monitor the `#partner-success` and `#helpdesk` channels to prevent partners and the business from
being blocked on technical issues.

There is also a 30-minute meeting on Monday with the sales team to proritize the work and get an idea about the
upcoming sales/partner-driven requests.

### Code Reviews

Code reviews are a keystone habit for a quality-driven dev culture, and everyone is expected to both review code and
have their code reviewed.

At Narrative, code reviews happen as a part of the regular development process, i.e. relevant developers review all code
as it is pushed and there is no “weekly code review” meeting where everyone brings snippets for review.

Most reviews are completed post-merge, but there are occasions where a developer will request a pre-merge review to
validate assumptions or to get an additional pairs of eyes on a critical piece of code.

### Daily standup (13:30 EST)

We meet on Google Meet every Monday through Thursday at 13:30 EST for a quick, 10-minute conversation to quickly
synchronize and address any blockers. The daily synchronous meeting is largely a reiteration of what's in `#daily-gsd`
but is a ceremony we continue to observe for now as a way to keep in touch as a team.

## Development

### Code

Outside of the on call rotation, the bulk of the work involves implementation and coding. This covers everything
from improving an existing feature to setting up an entirely new service to implement a new feature.

### Deployment and Operations

Deployment and ops is very much a part of regular life. Although there are safeguards to prevent accidental deletion of
production resources, there are no prod gatekeepers per se. At the end of the day, developers are trusted to
provision resources and deploy systems as needed. In exchange for this trust, there is an expectation of ownership and
responsibility: developers should be conscientious about their resource usage, and “if you break it, you fix it.”

## Design Reviews

Design reviews are basically code reviews at a higher level. New projects and large features usually start with a design
doc and review.

The process drives risk out of projects and systems by aiming to:

- Facilitate collaboration between stakeholders and developers.

The product team is responsible for defining the set of outcomes we want to achieve with a feature or project, but they
understandably don’t always have a clear idea of what’s technically possible and/or how technical constraints affect
what we can put in front of customers.

- Facilitate collaboration between developers.

We want to break down silos between developers and make it easier to work towards a shared long-term vision for our
technical platform and product. Nobody knows what they don’t know: having other people contribute their experience and
thoughts help us build better systems.

We have code reviews, but they are often too late to give someone meaningful feedback on a design and it’s difficult to
know what a series of isolated pull requests are building towards.

- Make us commit to a solution and deliver.

Designing in isolation can lead to analysis paralysis with developers spending time going in circles questioning their
decisions; when they finally poke their head out to get help, they have to load context into someone else’s head,
re-litigate the decisions they have already made, and fight off scope creep. The design review process helps us get to
approximate consensus so we can start building and iterating.

- Document our decisions for our future selves.

Design reviews serve as great documentation for why something is the way it is and what constraints we were working
under when we built it.

## A Typical Calendar

We attempt to
avoid [swiss cheesing our calendars](https://thinkingthrough.substack.com/p/stop-swiss-cheesing-your-calendar)
by scheduling most of the meetings on Monday.

Here is a screenshot of one of our developer's calendars for a typical week:

<img src="/typical-calendar.png" alt="typical calendar"/>

Notes:

- The PS meeting is on Monday (for the person on call, which I am this month), which is not really problematic
  because the whole purpose of being on call is to dedicate a single person to these interruptions.
- The code reviews block is merely a reminder, not an actual meeting.
- There are occasional meetings that are not scheduled on Tuesday such as candidate interviews.
