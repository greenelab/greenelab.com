---
title: Research
icon: fas fa-microscope
redirect_from: /publications
---

There is an abundance of publicly available data about various biological systems, but it can be difficult to draw insight from individual datasets.
Our lab develops algorithms that integrate these data to help model and understand complex biological systems.
Doing this allows us to investigate many different biological conditions, including those with limited data, such as rare diseases.
We recognize that our lab won't have all the answers, or even all of the questions, so we aim to develop tools and processes that any biologist can reuse.
Our approach to research prioritizes transparency, rigor, and reproducibility.

### <i class="fas fa-search"></i>Search

{:.center}
<input class="paper_search_box">

{:.center .paper_results_info}
Showing all papers

<!-- get paper data from json -->
{% assign papers = site.data.research-output | sort: "date" | reverse %}

<!-- group data by year -->
{% assign byyear = papers | group_by_exp: "post", "post.date | date: '%Y'" | sort: "name" | reverse %}

<!-- loop through year groups -->
{% for yeargroup in byyear %}

{:.paper_heading}
## {{ yeargroup.name }}

<!-- loop through all papers in this year group -->
{% for paper in yeargroup.items %}

{% include paper-card.html paper=paper %}

{% endfor %}

{% endfor %}

## More

{:.center}
[<i class="fas fa-book-open icon_with_text"></i>More on PubMed](https://pubmed.ncbi.nlm.nih.gov/?term=casey%20s%20greene){:.big_link}
[<i class="fab fa-google icon_with_text"></i>More on Google Scholar](http://scholar.google.com/citations?hl=en&user=ETJoidYAAAAJ){:.big_link}

The citations on this page were generated automatically from just identifiers using the [Manubot cite utility](https://github.com/manubot/manubot#cite) developed right here in the Greene Lab!

---

{% include figure.html image="team/yoson-sketch.jpg" description="Our recent research, compressed into sketch form by YoSon Park during the 2016 [#PennGenRetreat](https://twitter.com/search?f=tweets&vertical=default&q=%23PennGenRetreat&src=typd)." %}

<!-- load mark.js library to highlight when searching -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/mark.js/8.11.1/mark.min.js"></script>
