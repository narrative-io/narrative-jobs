---
title: Dev Hiring Process
description: ''
position: 9
category: Process
---

The goal of the hiring process is to give the opportunity on both sides to assess the fit. It is as much an opportunity for the candidate to decide whether (s)he wants
to work with us as it is for us to decide whether the person would be a great addition to the team.

## Hiring Criteria

Hiring criteria for developers boils down to two things:

1. Technical Skills: Technical skills means they are generally able to code and understand the impact, strengths and weaknesses of their changes and architectural/design decisions. 
    - Experience in our stack is a plus, but we don't need a strict match on the technology list. We do expect senior candidates 
      to have a deep expertise of the stacks they worked on though.
    - However, experience and high-level familiarity is still important: a data person should know what map-reduce is, a front-end person should know a great deal about HTML/CSS and how browsers work, etc.
2. Culture Fit: Basically -- do we mostly agree on the principles by which work gets done?  In addition, are they able to communicate effectively?

## Interview Process

The proposed interview process will be in roughly 3 stages: 1) phone screen / coffee, 2) take-home assignment, 3) longer in-person.

### Resume Review

Before we even commit to a phone screen / coffee, we should review the incoming resume to make sure it’s worth the time on both sides of the table. While we’re not excluding based on exact technologies / experience, it is pretty safe to say that e.g. someone who’s spent the last 10 years on-site at a large corporation mechanically pulling tickets from a queue may not be a great fit for what we’re currently seeking.

As such, we should go over the following criteria when reviewing resumes (usual caveat about exceptions):

- +/- 3 hours EST. The further from EST, the stronger the rest of the attributes need to be.
- Has worked remotely before
- Has worked for a small (< 15 developers, < 50 employee) company
- Has worked with specific technology in our stack -- Scala, AWS, Big Data, etc
- Good written communicator, initial communication is clear and understandable
- (Bonus): initial cover email is not a s/$COMPANY/Narrative template. Did this person even read the job req?

(100% fit for the above is unrealistic, but anything under, say, 60% should probably be a red flag)

### Phone Screen / Coffee

The purpose of the first stage is to validate the cultural fit and answer the candidate's questions about the company, the work environment, etc . As such, the goal should be a quick chat, ~30-45 min.

#### Opening Questions

The goal of the opening questions is to learn more about the candidate's past experiences and potentially catch some red flags. The safest bet is just to lead with asking about past projects of the candidate's choice, and then dig deeper for opinions on frameworks/tools/team/etc. Opinions (both good and bad) are always a good sign that the candidate has actually worked significantly with whatever they are talking about.

On our side, we should also take this chance to walk the candidate through what we are looking for and what to expect for the rest of the interview process.

Useful lines of conversation

1. Tell me about your recent projects / work. What tech did you use? Anything you would do differently?
    1. Drilling into the tech, look for likes/dislikes, and generally coherent opinions. All tools have their ups and downs, so if candidate doesn’t seem to have any likes or dislikes of the tech, they probably did not work too deeply with it.
    2. Also worth going into “soft” mechanics. Was teamwork a big factor? How structured was the environment? Evidence of independent learning / doing is good, vs “I just took tickets off the queue/from my manager”
2. What are you looking for in your next move?
    1. Specifics include company size, culture, loose vs structured environment, type of work, etc.
    2. ^ Anything they can’t get at their current employer (if applicable)?
    3. Again, any coherent opinion is better than none here; are they moving for a well-thought-out reason, or will just any job do?

#### Note of "fizzbuzz"

Conventionally, phone screens involve a “fizzbuzz” type question over some sort of remote shared text editor like titanpad, etc, as a quick screen before on-sites. In our case we think that this is redundant, because the next stage (take-home exercise) is fairly low effort on our side so there is no effort saved by the extra screen. On the skill evaluation front, everyone has memorized "fizzbuzz" variants by now. If the candidate can’t write basic code, it will be immediately obvious from their submission anyway.

### Take-home Exercise

The take-home exercise is a more involved judgment of technical ability. The specific prompt will vary, but the exercise should:

- Be completable within < 4-6 hours. Basically we want equivalent or less time/effort investment when compared to a traditional in-person interview -- we want to be respectful to the candidate and not have them effectively give away days of free work.
- Be completable using the tool chain of the candidate's choice.
- Have something to do with their actual day to day work, vs algorithmic trickery from Project Euler.
- Be open ended enough for follow-up discussion on design decisions and tradeoffs that the candidate may have made.
- Be precise enough to be graded on a rubric -- e.g., +5 points for code that builds, +5 points for candidate-written unit tests, +5 points for passing our own test suite, -5 points for being vulnerable to sql injection, etc. While subjectivity is always a part of evaluation, a rubric along these lines could at least help with defining a "minimum pass" point, and serve as a vehicle for improving our judgment + evaluation process in the future.

While we want to judge by general technical ability, at our current stage we still draw a line between frontend and backend. To that end, we have two prompts to use depending on the candidate's role:

1. Implement a pared down data ingress API. 
2. Implement a page that does CRUD on a basic sell order with the given use case of being able to handle changes in validation rules, addition / removal of fields, etc.

Both prompts fulfill the general criteria for take-home assignments. The main difference is that the former will focus more on backend systems and scalability, and the latter will focus more on UI interactions and validations.

### Technical follow-up

Assuming the take-home meets our basic requirements, we should invite the candidate in for a follow-up discussion.

At this point, we should be about 80% sure of the candidate's technical ability. For the tech portion of the follow-up, we can raise any questions we had about the candidate's design choices in the exercise, as well as potential extension questions like "what would you do if we wanted to change these fields on the form" or "how would this system need to change to enable reports grouped by hour".

The technical follow-up is the opportunity to challenge the candidate on his/her design and architectural choices, and figure out whether (s)he understand the ops/scaling/naintainability/etc consequences of these choices.

### Chat and lunch

Get to know the candidate as a person, buy them lunch, make sure everyone gets along and we have culture fit, etc. Probably the most subjective part; I have no ideas for canned questions to use here.