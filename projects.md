---
layout: page
title: Projects
permalink: /projects/
description: Design and data portfolio
categories: lp
---

<section>
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
</section>

{% for project in site.portfolio reversed %}
<div class="project ">
  <!-- <p>{{project.categories | join: ', '}}</p> -->
    <div class="thumbnail">
        <a href="{{ site.baseurl }}{{ project.url }}">
        {% if project.img %}
        <img class="thumbnail" src="{{ project.img }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}    
        <span>
            <p class="tile-title">{{ project.title }}</p>
            <br/>
            <p class="tile-text">{{ project.description }}</p>
        </span>
        </a>
    </div>
</div>

{% endfor %}
