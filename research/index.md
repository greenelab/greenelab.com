---
title: Research
redirect_from: /publications
---

<!-- get paper data from json -->
{% assign papers = site.data.research-output | sort: "date" | reverse %}

<!-- group data by year -->
{% assign byyear = papers | group_by_exp: "post", "post.date | date: '%Y'" | sort: "name" | reverse %}

<!-- loop through year groups -->
{% for yeargroup in byyear %}

## {{ yeargroup.name }}

<!-- loop through all papers in this year group -->
{% for paper in yeargroup.items %}

<!-- get data from paper ready to display -->
{% assign url = paper.url %}
{% assign title = paper.title | normalize_whitespace | strip %}
{% assign authors = paper.authors | join: ", &nbsp;" %}
{% assign thumbnail = paper.thumbnail %}
{% assign links = paper.links %}
{% assign tags = paper.tags %}
{% capture details %}
  {{- paper.publisher -}}
  {%- if paper.publisher != "" -%}&nbsp; · &nbsp;{%- endif -%}
  {{ paper.date | date: "%d %b %Y" }}
{% endcapture %}

<!-- display paper -->
<div class="paper_card">
  {% if thumbnail %}
  <div class="paper_thumbnail">
    <a href="{{ url }}">
      <img src="{{ thumbnail }}">
    </a>
  </div>
  {% endif %}
  <div class="paper_info">
    <a class="paper_title" href="{{ url }}" title="{{ title }}">
      {{ title }}
    </a>
    <div class="paper_authors" title="{{ authors }}">
      {{ authors }}
    </div>
    <div class="paper_details" title="{{ details }}">
      {{ details }}
    </div>
    {% if tags %}
    <div class="paper_tags">
      {% for tag in tags %}
      <div class="paper_tag">{{ tag }}</div>
      {% endfor %}
    </div>
    {% endif %}
    {% if links %}
    <div class="paper_links">
      {% for link in links %}
        {% for item in link %}
          {% assign href = item[1] | default: url %}
          {% assign text = item[0] | default: "link" %}
          {% include paper-link.html url=href text=text %} 
        {% endfor %}
      {% endfor %}
    </div>
    {% endif %}
  </div>
</div>

{% endfor %}
{% endfor %}

## More

{:.center}
[<i class="fas fa-book-open fa-fw icon"></i>More on PubMed](https://pubmed.ncbi.nlm.nih.gov/?term=casey%20s%20greene){:.big_link}
[<i class="fab fa-google fa-fw icon"></i>More on Google Scholar](http://scholar.google.com/citations?hl=en&user=ETJoidYAAAAJ){:.big_link}

The citations on this page were generated automatically from just identifiers using the [Manubot cite utility](https://github.com/manubot/manubot) developed right here in the Greene Lab!

---

{% include figure.html url="team/yoson-sketch.jpg" full="true" description="Our recent research, compressed into sketch form by YoSon Park during the 2016 #PennGenRetreat" %}
