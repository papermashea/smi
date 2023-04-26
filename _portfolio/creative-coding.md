---
layout: post
title: Creative coding for crises
description: Information aesthetics in resilience planning
categories: data design
tags: d3 leaflet js p5 sql canvas html tableau excel
permalink: /projects/creative-coding/
root: /projects/
date: 2019-09-01
img: /img/creative-coding.png
---

Parsons' <a href="https://www.newschool.edu/parsons/ms-data-visualization/" target="_blank">Master of Science in Data Visualization (MSDV)</a> program includes curriculum work with information aesthetics, data visualization and data structures using a variety of modern technical tools. 

These projects explore the role of data in resilience planning using javascript and html to map time, space and quantities from the lens of emergency planning and responses.

<div class="materials center">
	<a href="https://github.com/papermashea/industryCentralization" target="_blank" class="post-resource" id="sources">process</a>
	<a href="https://github.com/papermashea/dvia-2019" target="_blank" class="post-resource" id="sources">project</a>
</div>

<div class="img_full">
	<img class="col half" src="{{ site.baseurl }}/img/creative-coding/space1.png" alt="" title="earthquake map"/>
	<img class="col half" src="{{ site.baseurl }}/img/creative-coding/space2.png" alt="" title="earthquake map"/>
</div>
<div class="col three caption">
	Mapping space: plotting emergency facilities by relation to risk
</div>

The interactive map displays the location of emergency facilities in relation to their proximity to earthquakes, displayed by depth and magnitude of the earthquake. To create this interactive tool, I aggregated the locations of hospitals, energy plants, and water treatment facilities from government sources and mapped their proximity to <a href="https://www.usgs.gov/programs/earthquake-hazards/data" target="_blank"> USGS significant earthquake data</a>.

I used d3.js, leaflet.js. p5.js, and brewer.js for the styling and interactions.

<hr>

<div class="img_row">
	<img class="col one" src="{{ site.baseurl }}/img/creative-coding/quantities1.png" alt="" title="nuclear testing chart"/>
	<img class="col two" src="{{ site.baseurl }}/img/creative-coding/quantities2.png" alt="" title="nuclear testing chart"/>
</div>
<div class="col three caption">
Mapping quantities: Nuclear testing data from the <a href="https://en.wikipedia.org/wiki/Comprehensive_Nuclear-Test-Ban_Treaty" target="_blank">Comprehensive Nuclear-Test-Ban Treaty</a>
</div>
The exploration of nuclear testing and energy consumption data was an exercise in converting data tables to JSON and CSV data, and used tools such as Tableau and Excel to help identify data patterns in sketching out various data breakdowns. 

<div class="img_full">
	<img class="col three" src="{{ site.baseurl }}/img/creative-coding/quantities_sketch.png" alt="" title="nuclear testing to energy consumption model"/>
</div>
<div class="col three caption">
	Mapping quantities: nuclear testing to energy consumption model
</div>

I compared nuclear testing types and frequency by countries over time to their consumption of nuclear energy and hydro energy to find insights on who was conducting largest amount of nuclear testing for which potential purposes.

<div class="img_full">
	<img class="col three" src="{{ site.baseurl }}/img/creative-coding/map-time.gif" alt="" title="countdown clock"/>
</div>
<div class="col three caption">
	Mapping time: mapping fictional weather elements to real-time clock animations
</div>

<hr>

This countdown clock maps time in relation to seconds, hours, and days to <a href="https://p5js.org/" target="_blank">p5.js</a> elements in order to visualize a countdown of the impacts of climate catastrophe. 

This experimental piece was an exercising in working with javascript to map live elements to data feeds, and incorporated a cryptic legend explaining the time mapping:

{% highlight html %}
	  Every second, more snow falls.
	  Sun spinning hourly:
	  Hotter day by day.
	  Monthly floods fills the city.
	  Seasons vary drastically.
	  Within the decade, fade to black
{% endhighlight %}