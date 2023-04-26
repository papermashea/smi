---
layout: post
title: United States of Solidarity
description: Aggregated labor movements of American workers
categories: data design
tags: d3 js ux regex excel
permalink: /projects/labor-movements/
root: /projects/
date: 2021-05-01
img: img/labor-movements.png
---
This interactive map of US labor movements and mounments collects data from many sources to better understand the aggregated impact and efforts of the American worker. The sources range from the historic to the political, including the AFL-CIO, IWW, and US Bureau of Labor. In mapping labor movements through events, landmarks, leaders, strikes, organizations, and collective tech actions we can better understand the collective efforts and long history of workers everywhere.

<div class="materials center">
	<a href="https://github.com/papermashea/interactiveLabor" target="_blank" class="post-resource" id="sources">process</a>
	<a href="https://papermashea.github.io/interactiveLabor/" target="_blank" class="post-resource" id="sources">project</a>
</div>

<div class="img_full">
		<img class="col three" src="{{ site.baseurl }}/img/labor-movements/map.png" alt="" title="labor movements map"/>
</div>
<div class="col three caption">
	Labor movements: <a href="https://papermashea.github.io/interactiveLabor/" target="_blank">Strikes, events, and organizational efforts</a>
</div>
<p>
This project was largely inspired by the NYT's repeated surprise that labor movements come out of the south:
	<li><a href="https://www.nytimes.com/2021/01/25/business/amazon-union-alabama.html" target="_blank">Amazon Union Drive Takes Hold in Unlikely Place</a> New York Times, January 25, 2021</li>
	<li><a href="https://www.nytimes.com/2021/02/14/technology/north-dakota-tech-apps.html" target="_blank">Big Tech's Unlikely Next Battleground: North Dakota</a> New York Times, February 14, 2021</li>
</p>
<div class="img_row">
	<img class="col one" src="{{ site.baseurl }}/img/labor-movements/detail1.png" alt="" title="labor map detail"/>
	<img class="col one" src="{{ site.baseurl }}/img/labor-movements/detail2.png" alt="" title="labor map detail"/>
	<img class="col one" src="{{ site.baseurl }}/img/labor-movements/detail3.png" alt="" title="labor map detail"/>
</div>
<div class="col three caption">
	Interactive labor with date, organization and detail information
</div>

<h3>Sources</h3>
<ul>
	<p class="">Events & leaders: Key events and leadership from the American Federation of Labor and Congress of Industrial Organizations (AFL-CIO), the largest federation of unions in the United States.
	<li><a href="https://aflcio.org/about-us/history" target="_blank">AFL-CIO Labor History Timleine</a></li>
	<li><a href="https://aflcio.org/about/history/labor-history-people" target="_blank">AFL-CIO Key People in Labor History</a></li>
	</p>
	<p class="">Events & Organizations: Events and local chapters from the IWWW (International Workers of the World) from 1905-1935.
		<li><a href="https://depts.washington.edu/iww/yearbook_intro.shtml" target="_blank">IWW Yearbooks of Strikes, Campaigns, and Arrests 1905-1924</a></li>
		<li><a href="https://depts.washington.edu/iww/locals.shtml" target="_blank">IWW local unions database</a></li>
	</p>
	<p class="">Landmarks: Labor landmarks archived by the Labor Heritage Foundation, a non-profit organization which preserves and disseminates information and artifacts about the labor history of the United States
		<li><a href="https://www.laborheritage.org/inventory-of-american-labor-landmarks/" target="_blank">Inventory of American Labor Landmarks</a></li>
	</p>
	<p class="">Strikes: Work stoppages involving 1,000 or more workers, 1993-Present from the U.S. Bureau of Labor Statistics.
		<li><a href="https://www.bls.gov/web/wkstp/monthly-listing.htm" target="_blank">Work stoppages involving 1,000 or more workers, 1993-Present</a></li>
	</p>
	<p class="">Tech Collective Action: US-based collective actions from workers in the tech industry from Collective Actions in Tech.
		<li><a href="https://collectiveaction.tech/" target="_blank">Archiving collective action in tech</a></li>
	</p>
</ul>
<p class="">
Aggregating these data sources to create this view involved scripting cross-referenced sources to create a new table syndicating actions, dates, and details across multiple types of data.
</p>

<div class="img_full">
		<img class="col three" src="{{ site.baseurl }}/img/labor-movements/filter.png" alt="" title="filtered labor landmarks map"/>
</div>
<div class="col three caption">
	From the <a href="https://www.laborheritage.org/inventory-of-american-labor-landmarks/" target="_blank">Inventory of American Labor Landmarks</a>
</div>