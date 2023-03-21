---
layout: page
permalink: /work/
title: work
description: livestreams and publications
category: lp
---

<ul class="post-list">
    {% for post in site.posts %}
      <li>
        <h2>
          {% if post.redirect %}
            <a class="post-title" href="{{ post.redirect}}">{{ post.title }}</a>
          {% else %}
            <a class="post-title" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
          {% endif %}
        </h2>
        <p class="post-meta">{{ post.date | date: '%B %-d, %Y' }}</p>
        <p>{{ post.description }}</p>
        <br/>
        <hr/>
      </li>
    {% endfor %}
</ul>