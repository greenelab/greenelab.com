---
title: Team
nav:
  order: 3
  tooltip: About our team
redirect_from:
  - /lab-members
  - /alums
  - /mascots
  - /staff
  - /trainees
---

# {% include icon.html icon="fa-solid fa-users" %}Team

Our lab is made up of a highly engaged and collaborative team of researchers.
We recognize that diverse teams do better research.
We foster an environment where team members are treated equally, and where we respect and admire our differences.
The team includes postdocs, students at all levels, staff, and our lab mascots.

{% include list.html data="members" component="portrait" filter="role == 'principal-investigator' and group != 'alum'" %}
{% include list.html data="members" component="portrait" filter="role != 'principal-investigator' and group != 'alum'" %}

{% include section.html dark=true %}

We work with a wide range of outstanding groups from around the world, and we're always on the lookout for new and unique perspectives.
We want to push the frontier of data science and train the next generation of data scientists.

{%
  include button.html
  icon="fa-solid fa-handshake-angle"
  text="Join the Team"
  link="join"
  style="button"
%}

{% include section.html %}

## Alumni

Gone but never forgotten.
These are past lab members who have moved on to the [Childhood Cancer Data Lab](https://www.alexslemonade.org/data-lab), other school programs, new jobs, or elsewhere.
They have all made lasting contributions to science and to our hearts. ❤️

{% include list.html data="members" component="portrait" filter="group == 'alum'" style="small" %}

{% include section.html %}

## Funding

{% capture content %}
[![Gordon and Betty Moore Foundation](/images/team/gordon-and-betty-moore-foundation.png)](https://www.moore.org/)

[![National Cancer Institute](/images/team/national-cancer-institute.png)](https://www.cancer.gov/)

[![Alex's Lemonade Stand Foundation for Childhood Cancer](/images/team/alex's-lemonade-stand-foundation-for-childhood-cancer.png)](https://www.alexslemonade.org/)

[![Chan Zuckerberg Initiative](/images/team/chan-zuckerberg-initiative.png)](https://chanzuckerberg.com/)

[![Cystic Fibrosis Foundation](/images/team/cystic-fibrosis-foundation.png)](https://www.cff.org/)

[![Alfred P. Sloan Foundation](/images/team/alfred-p-sloan-foundation.png)](https://sloan.org/)

[![National Human Genome Research Institute](/images/team/national-human-genome-research-institute.png)](https://www.genome.gov/)

[![National Heart, Lung, and Blood Institute](/images/team/national-heart-lung-and-blood-institute.png)](https://www.nhlbi.nih.gov/)

[![National Institute of Neurological Disorders and Stroke](/images/team/national-institute-of-neurological-disorders-and-stroke.png)](https://www.ninds.nih.gov/)

{% endcapture %}

{% include grid.html content=content %}

{% include section.html %}

{%
  include figure.html
  image="images/team/group-photo-2.jpg"
  caption="The Greene Lab in their natural Philadelphia habitat"
  width="100%"
%}
