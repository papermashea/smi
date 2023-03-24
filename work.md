---
layout: page
permalink: /work/
title: Work
description: Livestreams, publications and research
categories: lp
---

<ul class="post-list">
    {% for post in site.posts %}
      <li>
        <h4>
          {% if post.redirect %}
            <a class="post-title" href="{{ post.redirect}}">{{ post.title }}</a>
          {% else %}
            <a class="post-title" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
          {% endif %}
        </h4>
        <p class="post-meta"><a class="post-tag">{{ post.tags }}</a> | {{ post.date | date: '%B %Y' }}</p>
        <p>{{ post.description }}</p>
        <br/>
        <hr/>
      </li>
    {% endfor %}
</ul>