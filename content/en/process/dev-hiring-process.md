---
title: Dev Hiring Process
description: ''
position: 9
category: Process
---

The goal of the hiring process is to give the opportunity to both sides to assess the fit. It is as much an opportunity
for the candidate to decide whether they want to work with us as it is for us to decide whether they would be a great
addition to the team.

## Hiring Criteria

Hiring criteria for developers boils down to two things:

1. Technical Skills: Technical skills means they are generally able to code and understand the impact, strengths and
   weaknesses of their changes and architectural/design decisions.
    - Experience in our stack is a plus, but we don't need a strict match on the technology list.
    - However, experience and high-level familiarity is still important: a data person should know what Spark is, a
      front-end person should know a great deal about HTML/CSS and how browsers work, etc.
2. Culture Fit: Basically, do we mostly agree on the principles by which work gets done? In addition, are they able to
   communicate effectively?

## Interview Process

The interview consists of three stages:

1. A phone screen.
2. A take-home assignment.
3. A follow-up with the team.

### Resume Review

Before we even commit to a phone screen, we should review the incoming resume to make sure it’s worth the time on both
sides of the table. While we’re not excluding based on exact technologies / experience, it is pretty safe to say that
e.g. someone who’s spent the last 10 years on-site at a large corporation mechanically pulling tickets from a queue may
not be a great fit for what we’re currently seeking.

As such, we should go over the following criteria when reviewing resumes (usual caveat about exceptions):

- +/- 3 hours EST. The further from EST, the stronger the rest of the attributes need to be.
- Has worked remotely before.
- Has worked for a small (< 15 developers, < 50 employee) company.
- Has worked with specific technology in our stack: Scala, AWS, Spark, Iceberg, "Big Data", etc.
- Is a good written communicator, initial communication is clear and understandable
- (Bonus): initial cover email is not a s/$COMPANY/Narrative template. Did this person even read the job posting?

100% fit for the above is unrealistic, but anything under, say, 60% should probably be a red flag.

### Phone Screen

The purpose of the first stage is to validate the cultural fit and answer the candidate's questions about the company,
the work environment, etc. This should be a quick chat, ~30-45 min.

#### Opening Questions

The goal of the opening questions is to learn more about the candidate's past experiences and potentially catch some red
flags. The safest bet is just to lead with asking about past projects of the candidate's choice, and then dig deeper for
opinions on frameworks/tools/team/etc.

Opinions (both good and bad) are always a good sign that the candidate has actually worked significantly with whatever
they are talking about.

On our side, we should also take this chance to walk the candidate through what we are looking for and what to expect
for the rest of the interview process.

Useful lines of conversation

1. Tell me about your recent projects / work. What tech did you use? Anything you would do differently?
    1. Drilling into the tech, look for likes/dislikes, and generally coherent opinions. All tools have their ups and
       downs, so if candidate doesn’t seem to have any likes or dislikes of the tech, they probably did not work too
       deeply with it.
    2. It's also worth going into “soft” mechanics. Was teamwork a big factor? How structured was the environment?
       Evidence of independent learning / doing is good, vs. “I just took tickets off the queue/from my manager”.
2. What are you looking for in your next move?
    1. Specifics include company size, culture, loose vs structured environment, type of work, etc.
    2. Anything they can’t get at their current employer (if applicable)?
    3. Again, any coherent opinion is better than none here; are they moving for a well-thought-out reason, or will just
       any job do?

### Take-home Exercise

The take-home exercise is a more involved judgment of technical ability. The specific prompt will vary, but the exercise
will:

- Be completable within < 4-6 hours. Basically we want equivalent or less time/effort investment when compared to a
  traditional in-person interview -- we want to be respectful to the candidate and not have them effectively give away
  days of free work.
- Be completable using the tool chain of the candidate's choice.
- Have something to do with their actual day-to-day work, vs. algorithmic trickery from LeetCode.
- Be open-ended enough for follow-up discussion on design decisions and tradeoffs that the candidate may have made.

We give candidates a lot of freedom in the prompt to focus on what they think is important as a way of allowing them
to show us their values, but as a guide we evaluate submissions using roughly the following high-level criteria:

- Does the submission solve the stated problem and pass our tests?
- How did the candidate gain confidence that their submission worked?
- Is the application coherently structured in a way that's idiomatic to the tools and libraries being used? Do the
  choices they made give us any positive insight into how they think about building larger systems for maintainability
  and correctness?
- Did the candidate explain their choices and communicate known issues or limitations with their solution? Did they call
  out issues they did not address in the interest of time?

### Technical follow-up

Assuming the take-home meets our basic requirements, we invite the candidate in for a follow-up discussion.

At this point, we should be about 80% sure of the candidate's technical ability. For the tech portion of the follow-up,
we:

- Work through all the nitpicky questions that came up during their review to get a sense of whether they can motivate
  some of the stylistic choices they made and see how they think about the micro-decisions we make day-to-day.
- Raise any questions we have about the candidate's design choices in the exercise. Do they understand the operational,
  scaling, and maintainability consequences of those choices?
- Walk through deploying the candidate's implementation, allowing them to explain what they'd like or need to change
  before going to prod.
- Propose hypothetical changes to the sample problem and see how the candidate thinks about them in order to gauge their
  technical depth and how they handle discussions in which there is no perfect answer. For a backend candidate, we're
  looking for evidence that the candidate can:
    - Identify the essential complexity in the task we asked them to complete when it's operating at scale.
    - Think a step or two ahead to find bottlenecks and potential issues.
    - Talk through and weigh relevant tradeoffs when requirements get more complex.