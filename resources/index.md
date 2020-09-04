---
title: Resources
icon: fas fa-tools
redirect_from:
  - /webservers
  - /software
  - /apps
---

{% for group in site.data.resources %}
## {{ group.name }}
<div class="resource_gallery">
{% for resource in group.list %}
{% include resource-card.html resource=resource size=group.size %}
{% endfor %}
</div>
{% endfor %}