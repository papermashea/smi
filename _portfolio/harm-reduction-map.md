---
layout: post
title: Human-centered harm reduction
description: Mapping AA meetings in NYC
categories: data design
tags: sql regex leaflet js mapbox html css
permalink: /projects/harm-reduction-map/
root: /projects/
date: 2020-12-19
img: /img/harm-reduction-map.png
---

This All-Access AA Meetings Map was built to provide friendly, functional meeting groupings to make finding an AA meeting as easy as possible. The meetings are grouped by time of day, day of week, and type of meeting - including remote meetings.

<div class="materials center">
	<a href="https://github.com/papermashea/ds-2020/tree/main/finalProject" target="_blank" class="post-resource" id="sources">repo</a>
	<a href="{{ site.baseurl }}/img/harm-reduction-map/blog-data-demo.m4v" target="_blank" class="post-resource" id="sources">demo</a>
</div>
<br>
<br>

<div class="img_row">
	<img class="col three" src="{{ site.baseurl }}/img/harm-reduction-map/aa-map1.gif" alt="" title="aa map"/>
</div>
<div class="col three caption">
	AA meetings by day of week
</div>

Meeting data was scraped from the HTML of many <a href="https://www.nyintergroup.org/meetings/" target="_blank">Intergroup NY pages </a> and transformed through a series of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank">js string methods</a> to construct consist, human readable meeting data. By heavily re-working data in it's initial and varyied presentation, users would be able to quickly identify a meeting that best suited their immediate needs. 
<br>
<br>
<br>
The final AA meeting data was structured accordingly:

- Location: street address, zipcode, latitude/longitude
- Times: days, start times, end times 
- Types: beginner, step, open, closed, big book

<div class="img_row">
	<img class="col three" src="{{ site.baseurl }}/img/harm-reduction-map/aa-map2.gif" alt="" title="aa map"/>
</div>
<div class="col three caption">
	AA meetings by time of day
</div>

This project was built by mapping cleaned data against NYC zones, venues, and co-ordinates using <a href="https://leafletjs.com/" target="_blank">leaflet.js</a> and <a href="https://www.mapbox.com/" target="_blank">Mapbox</a>. The cleaning process required primarily js and regex and the database was managed in SQL. The interface for the app was built using <a href="https://expressjs.com/" target="_blank">Express.js</a> and <a href="https://handlebarsjs.com/" target="_blank">handlebars.js</a>.
