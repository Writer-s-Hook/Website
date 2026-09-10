---
title: About
layout: page
permalink: "/about/"
eyebrow: About Writer's Hook
headline: Every writer starts with the same blank page.
standfirst: >-
  Writer's Hook is a free, one-day write-a-thon built on a simple premise: give high
  school writers a room, a long stretch of hours, and people who take their drafts seriously.
description: >-
  Writer's Hook is a free one-day creative write-a-thon for high school writers —
  our mission, who it's for, and how the day is built.
---

## Our mission

The school day is generous with reading and stingy with writing. A period here, a prompt there, a deadline that arrives before the idea does. Writer's Hook exists to invert that — to hand high school writers a full day with nothing on the schedule but their own work.

Most young writers are not short on talent or ideas. They are short on uninterrupted time, and short on readers who meet a draft as a draft rather than as something to be graded.

## Where this came from

Writer's Hook grew out of the Bay Area's hackathon tradition — the idea that you can give students a day, a room, and a little structure, and they will leave with something that did not exist that morning. Programmers have had that for years. Writers have not.

So we kept the format and changed the medium. Same energy, same free admission, same end-of-day showcase. The thing you leave with is a draft instead of a demo.

## Who it's for

Any student in grades 9–12, from any school, in any genre, at any level. Whether you are working on a fantasy novel, drafting spoken-word poetry, crafting personal essays, or writing your very first short story, there is a table here for you.

You do not need to have been published, placed in a contest, or taken a single creative writing elective. You do not need a project already underway — we run prompt sessions for exactly that reason.

Novelists three chapters deep, poets with a notes app full of fragments, and students who have never finished a story all end up in the same room.

## How the day is built

<dl class="expect">
{% for item in site.data.expect %}
  <div class="expect-item"><dt>{{ item.title }}</dt><dd>{{ item.body }}</dd></div>
{% endfor %}
</dl>

The full running order for the day is on the [schedule]({{ '/#schedule' | relative_url }}).

## Tracks & genres

Write in any format you love. Pick a track when you register, or change your mind on the day — nobody is held to it.

<div class="tracks">
{% for t in site.data.tracks %}
  <div class="track"><h3>{{ t.name }}</h3><p>{{ t.includes }}</p></div>
{% endfor %}
</div>

## After the write-a-thon

Work that participants choose to submit is collected in the Writer's Hook anthology, published after the event and sent to every contributor. Submission is optional, writers keep all rights to their own work, and nothing appears without the writer's permission.

The writing has to be your own: generative AI is not permitted at the event or in submitted work. Our [AI policy]({{ '/ai/' | relative_url }}) explains what that covers and what is still fine to use.

## Our commitment

Writing is personal, so we treat one another's work and one another's boundaries with care. Every participant, mentor, volunteer, and sponsor agrees to our [code of conduct]({{ '/conduct/' | relative_url }}) — read it before the day.

## Get involved

<div class="doors">
  <div><span class="label">Students</span><h3>Register</h3><p>Free, and about five minutes. <a href="{{ '/#register' | relative_url }}">Sign up &rarr;</a></p></div>
  <div><span class="label">Mentors</span><h3>Give three hours</h3><p>Run a workshop or a rotation of one-on-ones. <a href="{{ '/support/' | relative_url }}">What's involved &rarr;</a></p></div>
  <div><span class="label">Sponsors</span><h3>Fund the day</h3><p>Sponsorship is what keeps admission free. <a href="{{ '/support/' | relative_url }}">Sponsor us &rarr;</a></p></div>
</div>
