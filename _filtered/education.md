---
layout: page
permalink: /work/education/
title: Work
description: education
categories: filtered
root: /work/
---

<ul class="post-list">
  {% for post in site.posts %}
    {% if post.categories contains "education" %}
      <li>
        <h4>
          {% if post.redirect %}
            <a class="post-title" href="{{ post.redirect }}" target="_blank">{{ post.title }} <sup>&nearr;</sup></a>
          {% elsif post.source %}
            <a class="post-title" href="{{ post.source | prepend: site.baseurl }}" target="blank">{{ post.title }} <sup>&#10035;</sup></a>
          {% else %}
            <a class="post-title" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }} <sup>&#10035;</sup></a>
          {% endif %}
        </h4>
        <p class="post-meta"><a class="post-cat">{{ post.categories[0] | capitalize }}</a> | {{ post.date | date: '%B %Y' }}</p>
        <p>{{ post.description }}</p>
        <br/>
        <hr/>
      </li>
    {% endif %}
  {% endfor %}
</ul>