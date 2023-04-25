---
layout: post
title: From the Ground Up
description: Exploring edible and medicinal plant data for sustainable systems
categories: data design
tags: html,css,js,ux,sql,bash,regex
permalink: /projects/from-the-ground-up/
root: /projects/
date: 2022-05-01
img: /img/ftgu.png
---

From the Ground Up explores the current landscape of plant data presently available to potential growers with the aim of fostering participation, curiosity, and confidence in applying plant data. The project explores data aggregated from Plants for a Future, USDA, and National Gardening Association to invite users to identify plant cultivation needs and practical uses that fit their needs. 

<div class="materials center">
	<a href="https://github.com/papermashea/major-studio-2" target="_blank" class="post-resource" id="sources">process</a>
	<a href="parsons.nyc" target="_blank" class="post-resource" id="demo">demo</a>
	<a href="https://usefulplants.tech/" target="_blank" class="post-resource" id="sources">project</a>
</div>
<div class="img_full">
	<img class="col three" src="{{ site.baseurl }}/img/ftgu/PlantFlow.png" alt="" title="interactivity in searching plant data"/>
</div>
<div class="col three caption">
	From the Ground Up:<a href="www.usefulplants.tech" target="_blank">Environmental vairables flowchart UI</a><sup>1</sup>
</div>
The visualizations focus on representing use cases most relevant to urban farming in New York City, prioritizing data for plants that grow successfully in temperate climate zones. Users can filter data for more than 7,000 plants based on plant needs, plant tolerances, and aggregated consumable uses. 

<div class="img_full">
	<img class="col three" src="{{ site.baseurl }}/img/ftgu/02.plantfilter.gif" alt="" title="interactivity in searching plant data"/>
</div>
<div class="col three caption">
	From the Ground Up:<a href="www.usefulplants.tech" target="_blank">Interactivity with intentional redundancies</a><sup>2</sup>
</div>
The visualizations further connect to other online resources and provide information to enable users’ self-education and encourage in-person connection and continued participation in sustainable food growing practices in their communities and at home. From the Ground Up aims to make plant research more exciting and accessible to larger communities and to implement modern data practices within collective horticultural knowledge.

<div class="img_row">
	<img class="col half" src="{{ site.baseurl }}/img/ftgu/PlantPack.png" alt="" title="plant properties packed circles visualization"/>
	<img class="col half" src="{{ site.baseurl }}/img/ftgu/03.plantpack.gif" alt="" title="plant pack interactive cards"/>
</div>
<div class="col three caption">
	From the Ground Up: <a href="www.usefulplants.tech" target="_blank">Roots</a>
</div>
From the Ground Up aims to prioritize horticultural education in a scalable, accessible way while encouraging users to talk to gardeners in their communities. By providing beginner gardeners tools to better understand what is likely to grow successfully, the impact of home, community, and public gardens on local food systems could be better understood and supported.

<div class="img_full">
	<img class="col three" src="{{ site.baseurl }}/img/ftgu/04.search.gif" alt="" title="interactivity in searching plant data"/>
</div>
<div class="col three caption">
	From the Ground Up: <a href="www.usefulplants.tech" target="_blank">Dig</a>
</div>
Building out these tools involved lengthy data cleanup using sql, regex, and javascript. The interactivity was built using Vue.js and the visualizations were constructed using D3.js.

This project was developed and launched to meet the requirements to complete a graduate degree within the Master's of Science in Data Vizualization program from Parsons at The New School. 
<div class="materials center">
	<a href="{{ site.baseurl }}/img/ftgu/Molloy_Thesis_FromTheGroundUp_MS2022.pdf" target="_blank" class="post-resource" id="demo">thesis</a>
	<a href="https://github.com/papermashea/thesis/tree/main/research" target="_blank" class="post-resource" id="sources">data</a>
</div>