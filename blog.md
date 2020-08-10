---
title: Blog
redirect_from: /musings
css: blog.css
---

{% for post in site.posts %}
---

**[{{ post.title }}]({{ site.baseurl }}{{ post.url }})**

<p class="mini_details">
  {% if post.author %}
  <span>
    <i class="fas fa-feather-alt fa-fw icon"></i>{{ post.author }}
  </span>
  {% endif %}
  {% if post.date %}
  <span>
    <i class="far fa-calendar-alt fa-fw icon"></i>{{ post.date | date: '%B %d, %Y' }}
  </span>
  {% endif %}
</p>

{{ post.content | strip_html | truncate: 500 }}

{:.center}
_[Read more →]({{ site.baseurl }}{{ post.url }})_
{% endfor %}
