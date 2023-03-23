---
layout: page
title: Projects
permalink: /projects/
description: Design and data portfolio
category: lp
---

{% for project in site.portfolio reversed %}

<div class="project ">
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
