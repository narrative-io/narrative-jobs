---
title: A Day in the Life of a Dev
menuTitle: Typical Dev Day
description: ''
position: 7
category: 'About Us'
---

Potential candidates often wonder what a typical day looks like at Narrative, and this page is an attempt to answer the
question.

## Sync with the rest of the team

### \#daily-gsd

We use [Slack](https://slack.com/) to stay connected with the rest of the team.

The `#daily-gsd` channel lets us keep track of what our teammates are working on and identify blockers as well as
potential conflicts.
Each of us starts the day by taking a look at our work queue, what we achieved yesterday, and what we plan to complete
today, then we write a couple sentences in `#daily-gsd` to let the rest of the team know about the current priorities.

### \#auto-techops

The person who is on call will look at the various warnings and alerts in the `#auto-techops` channel in order to
identify things that need to be fixed, failed clusters, etc.

The on call will also monitor the `#partner-success` and `#helpdesk` channels to prevent partners and the business from
being blocked on technical issues.

There is also a 30-minute meeting on Monday with the sales team to proritize the work and get an idea about the
upcoming sales/partner-driven requests.

### Code Reviews

Code reviews are a keystone habit for a quality-driven dev culture, and everyone is expected to both review code and
have their code reviewed. They are great because:

- Having multiple sets of eyes on a piece of code is an easy way to evaluate its readability and clarity. It also lowers
  the bus factor by distributing knowledge of what code lives where and why.
- The author of the code gets the benefit of different perspectives on code structure and style, as well as having any
  unexpected bugs / edge cases pointed out.
- The reviewer gets to learn how other developers are writing code and if there are any useful libraries and techniques
  that they can adapt for themselves.
- Last but not least, knowing that others will be looking at the code naturally encourages more effort in keeping
  quality high.

At Narrative, code reviews happen as a part of the regular development process, i.e. relevant developers review all code
as it is pushed and there is no specified “weekly code review” meeting where everyone brings snippets for review. We
currently use Github perform these reviews, and most reviews are done post-merge.

However there are occasional cases where someone in the team will request a pre-merge review to validate assumptions /
have additional pairs of eyes on a critical piece of code.

### Daily standup (13:30 EST)

We meet on Google Meet every day at 13:30 EST for a quick, 15-minute conversation to quickly synchronize and address
any blockers.

### Dev Weekly

We gather on Google Meet once a week (Tuesday at 13:30 EST) for a 1 hour discussion with the dev team. This is the
opportunity to raise awareness about any issues, suggest improvements to the process, seek feedback on ideas, etc.

## Development

### Code

Outside of the on call rotation, the bulk of the work involves implementation and coding. This covers everything
from improving an existing feature to setting up an entirely new service to implement a new feature.

### Deployment and Ops

Deployment and ops is very much a part of regular life. Although there are safeguards to prevent accidental deletion of
production resources, there are no prod gatekeepers per se. At the end of the day, developers are trusted to
provision resources and deploy systems as needed. In exchange for this trust, there is an expectation of ownership and
responsibility: developers should be conscientious about their resource usage, and “if you break it, you fix it.”

## Design Reviews

Design reviews are basically code reviews at a higher level. New projects and large features usually start with a design
doc and review. Design docs are a great tool for gathering early feedback and encouraging discussion between developers
and business stakeholders before anything gets set in stone. A doc is a lot easier to change than code, and code is
easier to change than a running system. Conveniently, it also serves as great documentation for new hires or anyone else
wondering “why was X done this way?” A typical doc will answer questions like:

- Why are we building this? How does it benefit the business / team? Are we making any assumptions about our customers
  and future product direction?
- Is there any existing work we are taking advantage of? Why or why not?
- What are the tradeoffs we are making? e.g., do we care more about space consumption or speed? Does this feature need a
  new RDS instance, or will a tiny DynamoDB table work just as well?
- What is the requirement for uptime? How can we tell if something is wrong? How screwed are we if S3 goes down, and are
  we OK with that?
- The design doc is written by whoever owns the feature in question. Typically, initial review happens via comment
  threads in Notion, and is followed by a quick Hangouts session to make sure all outstanding issues are resolved
  before proceeding.

Writing the design document sometimes involves prototyping and experimenting with technologies, depending on the nature
of the work.

## A Typical Calendar

We attempt to
avoid [swiss cheesing our calendars](https://thinkingthrough.substack.com/p/stop-swiss-cheesing-your-calendar)
by scheduling most of the meetings on Tuesday.

Here is a screenshot of my calendar for this week:

<img src="/typical-calendar.png" alt="typical calendar"/>

Notes:

- The PS meeting is on Monday (for the person on call, which I am this month), which is not really problematic
  because the whole purpose of being on call is to dedicate a single person to these interruptions.
- The code reviews block is merely a reminder, not an actual meeting.
- There are occasional meetings that are not scheduled on Tuesday such as candidate interviews.
