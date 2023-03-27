---
layout: page
permalink: /work/research/
title: Work
description: research
root: /work/
---

<ul class="post-list">
  {% for post in site.posts %}
    {% if post.categories contains "Research" %}
      <li>
        <h4>
          {% if post.redirect %}
            <a class="post-title" href="{{ post.redirect}}" target="_blank">{{ post.title }}</a>
          {% else %}
            <a class="post-title" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
          {% endif %}
        </h4>
        <p class="post-meta"><a class="post-tag">{{ post.categories }}</a> | {{ post.date | date: '%B %Y' }}</p>
        <p>{{ post.description }}</p>
        <br/>
        <hr/>
      </li>
    {% endif %}
  {% endfor %}
</ul>