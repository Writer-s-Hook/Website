---
title: Sponsor Us
layout: page
permalink: "/support/"
eyebrow: Sponsor us
headline: Free costs something.
standfirst: >-
  Every participant walks in without paying a cent. Sponsors and volunteer mentors are
  the reason that sentence is true.
---

<div class="page-actions">
  <a class="btn btn-ghost" href="mailto:{{ site.email }}?subject=Mentoring%20at%20Writer%27s%20Hook">Become a Mentor</a>
  <a class="btn btn-primary" href="https://hcb.hackclub.com/donations/start/learning-hack" target="_blank" rel="noopener">Become a Sponsor</a>
</div>

## Who runs Writer's Hook

The day is organised and run by {% include learninghack.html %}. Sponsors help fund it.

## Our sponsors

{% if site.data.sponsors.size > 0 %}
{% include sponsors.html %}
{% else %}
We are signing up sponsors for {{ site.event.date_short }} now. The list will appear here as it fills.
{% endif %}

## Sponsor the day

Sponsorship goes directly to the things students touch: meals and snacks, workshop materials, prizes, and printing the post-event anthology that every contributor takes home.

Local bookstores, independent presses, libraries, literary magazines, tutoring centres, and neighbourhood businesses are all welcome — as are families who would rather give than be listed.

Write to [{{ site.email }}](mailto:{{ site.email }}) and we will send the sponsorship tiers.

## Mentor a writer

We are looking for published authors, journalists, editors, teachers, and university writing students who can give a three-hour block on {{ site.event.date }}. You'll run one craft workshop, or take a rotation of one-on-one sessions with students working on their drafts.

No teaching experience required. You need to have written things and be willing to talk honestly about how.

## Volunteer

Check-in, meals, room setup, and running the open mic all need hands. If you're an adult who can spare the day, we'd be glad to have you.
