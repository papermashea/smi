---
layout: post
title: Environmental data structures
description: IoT and data interactions for care
categories: data
tags: python aws html css
permalink: /projects/environmental-data-structures/
root: /projects/
date: 2020-12-20
img: img/env-data.png
---

Snekscape is an experimental data app used to aggregate care sensor-collected data from IoT sensors as well as manually entered petcare information. 

<div class="materials center">
	<a href="https://github.com/papermashea/ds-2020/tree/main/finalProject" target="_blank" class="post-resource" id="sources">repo</a>
	<a href="{{ site.baseurl }}/img/env-data/sensor-data-demo.m4v" target="_blank" class="post-resource" id="sources">sensor</a>
	<a href="{{ site.baseurl }}/img/env-data/blog-data-demo.m4v" target="_blank" class="post-resource" id="sources">blog</a>
</div>
<br>
<br>
<div class="img_full">
	<img class="col one" src="{{ site.baseurl }}/img/env-data/ui/IOT_Menu.png" alt="" title="app mockups"/>
	<img class="col one" src="{{ site.baseurl }}/img/env-data/ui/IOT_Collected_temp.png" alt="" title="app mockups"/>
	<img class="col one" src="{{ site.baseurl }}/img/env-data/ui/IOT_Care-crop.png" alt="" title="app mockups"/>
</div>
<div class="col three caption">
	Snekscape concept mobile app mockups
</div>

The Snekscape IoT dashboard can be used to track sensors associated with your Snekscape. The temperature chart visualizes average temperatures by hour over the course of the day so you can gauge where and when your creature might need adjustments, in addition to mapping temperature tracking against safe ranges.

<div class="img_full">
	<img class="col half" src="{{ site.baseurl }}/img/env-data/sensor_data1.gif" alt="" title="sensor chart"/>
<img class="col half" src="{{ site.baseurl }}/img/env-data/sensor_data2.gif" alt="" title="sensor chart"/>
</div>
<div class="col three caption">
	Snekscape sensor data dashboard (note: placeholder data was used for this prototype)
</div>

Using the Particle platform, you can add additional sensors to measure light, humidity, and dewpoint variables to monitor all kinds of pets and plants in the future.

<div class="img_row">
	<img class="col half" src="{{ site.baseurl }}/img/env-data/particle_variable.png" alt="" title="particle variables"/>
	<img class="col half" src="{{ site.baseurl }}/img/env-data/particle_board.jpg" alt="" title="particle board"/>
</div>
<div class="col three caption">
	Particle Photon platform and board
</div>

You may also monitor the historical records of your creature's environment, courtesy of data you input youself. The dashboard has customizeable care needs such as water, food, and grooming statuses.

<div class="img_full">
	<img class="col three" src="{{ site.baseurl }}/img/env-data/blog_data.gif" alt="" title="blog chart"/>
</div>
<div class="col three caption">
	Snekscape care blog data dashboard
</div>

This project was built using <a href="https://d3js.org/" target="_blank">D3.js</a>, <a href="https://expressjs.com/" target="_blank">Express.js</a> and <a href="https://handlebarsjs.com/" target="_blank">handlebars.js</a> in addition to the <a href="https://docs.particle.io/photon/" target="_blank">Particle Photon platform</a>. Care data was <a href="https://github.com/papermashea/ds-2020/blob/main/finalProject/processBlog/data/caresheet.entries.csv" target="_blank">recorded</a> using a <a href="https://github.com/papermashea/ds-2020/blob/main/finalProject/app/templates/form.txt" target="_blank">collection form</a> and both care and sensor data were managed in AWS.

