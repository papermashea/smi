---
layout: page
permalink: /work/research/
title: Work
description: livestreams, publications and research
categories: filtered
root: /work/
---

<ul class="post-list">
  {% for post in site.posts %}
    {% if post.categories contains "research" %}
      <li>
        <h4>
          {% if post.redirect %}
            <a class="post-title" href="{{ post.redirect}}" target="_blank">{{ post.title }}</a>
          {% else %}
            <a class="post-title" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
          {% endif %}
        </h4>
        <p class="post-meta"><a class="post-tag">{{ post.categories[0] | capitalize }}</a> | {{ post.date | date: '%B %Y' }}</p>
        <p>{{ post.description }}</p>
        <br/>
        <hr/>
      </li>
    {% endif %}
  {% endfor %}
</ul>