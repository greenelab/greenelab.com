---
title: Research
icon: fas fa-microscope
redirect_from: /publications
---

There are millions of samples that have been subjected to genome-wide profiling and these data are freely downloadable.
Our lab develops algorithms that integrate these data to help us understand how biological systems work.
The breadth of these data help us probe many different biological conditions, including those with limited data, such as rare diseases.
We recognize that our lab won't have all the answers, or even all of the questions, so we aim to develop systems that any biologist can use to interpret these data.
We also strive to make our workflows robust and reusable for other computational scientists.
Our open, rigorous and transparent approach to research facilitates such reuse.

### <i class="fas fa-search icon_with_text"></i>Search

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

<!-- load mark.js library to highlight when searching -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/mark.js/8.11.1/mark.min.js"></script>