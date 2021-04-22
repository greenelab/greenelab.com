---
title: Tools
nav:
  order: 2
  tooltip: Tools, datasets, and more
redirect_from:
  - /webservers
  - /software
  - /apps
---

# <i class="fas fa-tools"></i>Tools

All of our software, tools, datasets, etc. are 100% open-source, and free for anyone around the world to use and modify.
We strive to make resources that are high quality in every aspect:
cleanly written, robustly constructed and tested, well-documented, easy-to-use, accessible, customizable, and as effective as possible in real-world use.

<!-- section break -->

## Featured

{% capture contents %}
{% include resource-list.html group="featured" size="large" %}
{% endcapture %}

{% include centerer.html contents=contents %}

<!-- section break -->

## More

{% capture contents %}
{% include resource-list.html group="more" size="small" %}
{% endcapture %}

{% include centerer.html contents=contents %}

<!-- section break -->

## Affiliated Organizations

{% capture contents %}
{% include resource-list.html group="other" size="medium" %}
{% endcapture %}

{% include centerer.html contents=contents %}

<!-- section break -->

## Legacy

{% capture contents %}
{% include resource-list.html group="legacy" size="small" %}
{% endcapture %}

{% include centerer.html contents=contents %}
