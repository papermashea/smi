---
layout: page
title: Projects
permalink: /projects/
description: design and data portfolio
categories: lp
root: /projects/
---
<!-- portfolio sidebar -->
<!-- <section>
  {% assign categories =  site.portfolio | map: 'categories' | uniq %}
  {% for cat in categories %}
    <h3>{{ cat }}</h3>
    <ul>
    {% for proj in site.portfolio %}
      {% if proj.categories contains cat %}
      <li><a href="{{ site.baseurl }}{{ proj.url }}">{{ proj.title }}</a></li>
      {% endif %}
    {% endfor %}
    </ul>
  {% endfor %}
</section> -->

{% for project in site.portfolio reversed %}
<div class="project ">
    <div class="thumbnail">
        <a href="{{ site.baseurl }}{{ project.url }}" class="tile-link">
        {% if project.img %}
        <img class="thumbnail" src="{{ site.baseurl }}{{ project.img }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}    
        <span class="tile">
            <p class="tile-title">{{ project.title }}</p>
            <p class="tile-text">{{ project.description }}</p>
<!--             <hr class="deco-rule">
            <p class="tile-cat">{{ project.categories  | join: ' • ' }}</p> -->
        </span>
        </a>
    </div>
</div>

{% endfor %}
