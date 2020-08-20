---
title: Research
redirect_from: /publications
---

There's a lot of public data about biological systems under various perturbations.
But they are also noisy.
Our lab develops algorithms that integrate that data to model complex biological systems.
We do this because we want to understand how biological systems work.
This way when we need to intervene to improve health we aren't taking a shot in the dark.
We recognize that our lab won't have all the answers, or even all of the questions, so we develop systems that any biologist can use.

<!-- get paper data from json -->
{% assign papers = site.data.research-output | sort: "date" | reverse %}

<!-- group data by year -->
{% assign byyear = papers | group_by_exp: "post", "post.date | date: '%Y'" | sort: "name" | reverse %}

<!-- loop through year groups -->
{% for yeargroup in byyear %}

## {{ yeargroup.name }}

<!-- loop through all papers in this year group -->
{% for paper in yeargroup.items %}

{% include paper-card.html paper=paper %}

{% endfor %}

{% endfor %}

## More

{:.center}
[<i class="fas fa-book-open icon"></i>More on PubMed](https://pubmed.ncbi.nlm.nih.gov/?term=casey%20s%20greene){:.big_link}
[<i class="fab fa-google icon"></i>More on Google Scholar](http://scholar.google.com/citations?hl=en&user=ETJoidYAAAAJ){:.big_link}

The citations on this page were generated automatically from just identifiers using the [Manubot cite utility](https://github.com/manubot/manubot#cite) developed right here in the Greene Lab!

---

{% include figure.html url="team/yoson-sketch.jpg" full="true" description="Our recent research, compressed into sketch form by YoSon Park during the 2016 #PennGenRetreat" %}
