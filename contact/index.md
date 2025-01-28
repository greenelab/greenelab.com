---
title: Contact
nav:
  order: 5
  tooltip: Email, address, and location
background: images/backgrounds/anschutz.jpg
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact
# {% include icon.html icon="fa-regular fa-envelope" %}Contact

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Our lab is part of the [University of Colorado School of Medicine](https://medschool.cuanschutz.edu/)'s [Department of Biomedical Informatics](https://medschool.cuanschutz.edu/dbmi) and Center for Health AI.
We are a geographically distributed team that is headquartered on the 6th Floor of the [Anschutz Health Sciences Building](https://www.ucdenver.edu/about/departments/FacilitiesManagement/FacilitiesProjects/ActiveProjects/Pages/AnschutzHealthSciencesBldg.aspx).

{%
  include figure.html
  image="images/contact/health-ai-logo.png"
  link="https://medschool.cuanschutz.edu/"
  width="400px"
%}

{%
  include button.html
  type="phone"
  text="(555) 867-5309"
  link="+1-555-867-5309"
  include button.html
  type="email"
  text=site.links.email
  link=site.links.email
%}
{%
  include button.html
  include button.html
  type="address"
  tooltip="Our location on Google Maps for easy navigation"
  link="https://www.google.com/maps"
  link="https://www.google.com/maps/place/Anschutz+Health+Sciences+Building/@39.7454721,-104.8418929,15z/data=!4m2!3m1!1s0x0:0x85f675e778fce18c?sa=X&ved=2ahUKEwjd_MfInpL6AhWEhIkEHd6WDIcQ_BJ6BAhkEAU"
%}

{% include section.html %}

{% capture col1 %}

{%
  include figure.html
  image="images/photo.jpg"
  caption="Lorem ipsum"
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/photo.jpg"
  caption="Lorem ipsum"
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

{% include section.html dark=true %}

{% capture col1 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% capture col2 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% capture col3 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}

{% capture content %}
{% include figure.html image="images/contact/AHSB.jpg" %}
{% include figure.html image="images/contact/cu-aerial.jpg" %}
{% include figure.html image="images/contact/cu-photo.jpg" %}
{% endcapture %}

{%
  include grid.html
  content=content
  style="square"
%}
