---
title: Resources
icon: fas fa-tools
redirect_from:
  - /webservers
  - /software
  - /apps
---

All of our software, tools, datasets, etc. are 100% open-source, and free for anyone around the world to use and modify.
We strive to make resources that are high quality in every aspect:
cleanly written, robustly constructed and tested, well-documented, easy-to-use, accessible, customizable, and as effective as possible in real-world use.

{% for group in site.data.resources %}
## {{ group.name }}
<div class="resource_gallery">
{% for resource in group.list %}
{% include resource-card.html resource=resource size=group.size %}
{% endfor %}
</div>
{% endfor %}