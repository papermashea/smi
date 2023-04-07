---
layout: post
title: Cooper Hewitt Design Movements
description: New perspectives for the Cooper Hewitt collection of design objects
categories: data design
tags: d3 js css html ux bash regex
permalink: /projects/design-movements/
root: /projects/
date: 2021-12-21
img: /img/design-movements.png
---
Design Movements is an interactive visualization of the digitized design objects in the Cooper Hewitt collection. It reinterprets different perspectives of the collection as a whole to provide "bird's-eye" views of color, form, and place. In looking at color over time, form by frequency, and object origins spatially, users can explore the collection from a new view and draw their own conclusions about what design means to them, and where it may go in the future.

<div class="materials center">
	<a href="https://github.com/papermashea/major-studio-1" target="_blank" class="post-resource" id="sources">process</a>
	<a href="https://papermashea.github.io/major-studio-1/" target="_blank" class="post-resource" id="demo">demo</a>
	<a href="https://papermashea.github.io/major-studio-1/" target="_blank" class="post-resource" id="sources">project</a>
</div>

<div class="img_full">
		<img class="col three" src="{{ site.baseurl }}/img/design-movements/color2.png" alt="" title="color timeline of cooper hewitt design objects"/>
</div>
<div class="col three caption">
	Design movements: <a href="https://papermashea.github.io/major-studio-1/color.html" target="_blank">Color analysis</a>
</div>
Individual design objects provide a great deal of creative insight and societal commentary on their own, but being able to view larger trends in color, form, and place encourage critical thinking about materiproduction, and demand.
<br/><br/>
The objects presented in this project aim to encourage trend analysis and pattern analysis in areas such as color over time, form by frequency, and origin clusters. Please feel free to explore collection subsets and individual objects alike, with the help of the Cooper Hewittdigital collection.

<div class="img_row">
	<img class="col two" src="{{ site.baseurl }}/img/design-movements/form1.png" alt="" title="design objects by type and medium"/>
	<img class="col one" src="{{ site.baseurl }}/img/design-movements/form2.png" alt="" title="abstract word cloud of cooper hewitt design obects type and medium"/>
</div>
<div class="col three caption">
	Design movements: <a href="https://papermashea.github.io/major-studio-1/form.html" target="_blank">Form analysis</a>
</div>
To reconfigure the collection objects with the data presented in these views, color and spectrum order were extracted using javascript and D3.js was used to aggregate totals over different features as well as to implement interactivity.

<div class="img_full">
		<img class="col three" src="{{ site.baseurl }}/img/design-movements/place1.png" alt="" title="maps of cooper hewitt design objects"/>
</div>
<div class="col three caption">
	Design movements: <a href="https://papermashea.github.io/major-studio-1/form.html" target="_blank">Regional analysis</a>
</div>