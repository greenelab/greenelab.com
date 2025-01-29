---
title: Research
nav:
  order: 1
  tooltip: Published works
redirect_from: /publications
---

# {% include icon.html icon="fa-solid fa-microscope" %}Research

There is an abundance of publicly available data about various biological systems, but it can be difficult to draw insight from individual datasets.
Our lab develops algorithms that integrate these data to help model and understand complex biological systems.
Doing this allows us to investigate many different biological conditions, including those with limited data, such as rare diseases.
We recognize that our lab won't have all the answers, or even all of the questions, so we aim to develop tools and processes that any biologist can reuse.
Our approach to research prioritizes transparency, rigor, and reproducibility.

{% include section.html %}

{%
  include button.html
  icon="fa-solid fa-book-open"
  text="More on PubMed"
  link="https://pubmed.ncbi.nlm.nih.gov/?term=casey%20s%20greene"
%}
{%
  include button.html
  icon="fa-brands fa-google"
  text="More on Google Scholar"
  link="http://scholar.google.com/citations?hl=en&user=ETJoidYAAAAJ"
%}

The citations on this page were generated automatically from just identifiers using the [Manubot cite utility](https://github.com/manubot/manubot#cite) developed right here in the Greene Lab!

{% include search-box.html %}

{% include search-info.html %}

{% include list.html data="citations" component="citation" style="rich" filter="publisher != 'Zenodo' and publisher != 'Figshare'"  %}
