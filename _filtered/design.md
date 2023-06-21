---
layout: page
title: Projects
permalink: /projects/design/
description: design
categories: filtered
root: /projects/
---
{% assign categories =  site.portfolio | map: 'categories' | uniq %}
{% for project in site.portfolio reversed %}
    {% if project.categories contains "design" %}
<div class="project ">
    <div class="thumbnail">
        <a href="{{ site.baseurl }}{{ project.url }}" class="tile-link">
        {% if project.img %}
        <img class="thumbnail" src="{{ site.baseurl }}{{ project.img }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}    
        <span>
            <p class="tile-title">{{ project.title }}</p>
            <p class="tile-text">{{ project.description }}</p>
        </span>
        </a>
    </div>
</div>
{% endif %}
{% endfor %}
