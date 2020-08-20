---
title: Blog
redirect_from: /musings
---

{% for post in site.posts %}
---

**[{{ post.title }}]({{ site.baseurl }}{{ post.url }})**

<p class="page_details">
  {% if post.author %}
  <span class="easy_align">
    <i class="fas fa-feather-alt icon_with_text"></i>{{ post.author }}
  </span>
  {% endif %}
  {% if post.date %}
  <span class="easy_align">
    <i class="far fa-calendar-alt icon_with_text"></i>{{ post.date | date: '%B %d, %Y' }}
  </span>
  {% endif %}
</p>

{{ post.content | strip_html | truncate: 500 }}

{:.center}
_[Read more →]({{ site.baseurl }}{{ post.url }})_
{% endfor %}
