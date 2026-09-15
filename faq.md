---
title: FAQ
layout: page
permalink: "/faq/"
eyebrow: Frequently asked questions
headline: The things everyone asks first.
---

<dl class="faq">
{% for item in site.data.faq %}
  <div class="faq-item"><dt>{{ item.q }}</dt><dd>{{ item.a }}</dd></div>
{% endfor %}
</dl>

Still stuck? Email us at [{{ site.email }}](mailto:{{ site.email }}) and a real person will answer.
