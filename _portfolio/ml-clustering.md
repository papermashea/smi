---
layout: post
title: Clustering creative works
description: Utilizing machine learning to group similar artworks
categories: data
tags: python r jupyter
permalink: /projects/ml-clustering/
root: /projects/
date: 2020-05-01
img: /img/ml-clustering.png
---

To fufill an Advanced Topics in Research Methods, I completed the Machine Learning course from Parsons' Arts, Media and Technology department. This course explored <a href="https://github.com/papermashea/ml-2020/blob/master/jupyter/_firstProject/iteration1/Molloy_readMe.md" target="_blank">logistical regression sentiment analysis</a>, <a href="https://github.com/papermashea/ml-2020/tree/master/jupyter/_secondProject/iteration1" target="_blank">image recognition models</a>, and <a href="https://github.com/papermashea/ml-2020/tree/master/jupyter/_thirdProject/iteration1" target="_blank">k-means clustering</a>. 
<br/>
<br/>
The clustering project explored with unsupervised learning methods to cluster fine art from museum collections and galleries on metadata characteristics. To group the artworks to be as visually similar as possible, I tuned the model to <strong>cluster acccording to value, hue, texture, and spacial dimension</strong>. 

<div class="materials center">
	<a href="https://github.com/papermashea/ml-2020/tree/master/jupyter/_thirdProject/iteration1" target="_blank" class="post-resource" id="sources">process</a>
	<a href="https://github.com/papermashea/ml-2020/blob/master/jupyter/_thirdProject/iteration1/SM_20200427_project3_v1.ipynb" target="_blank" class="post-resource" id="sources">project</a>
</div>

When selecting the number of clusters to proceed with in a K-means analysis, the number of clusters should minimize negative decision values, below average silhouette scores and also due to wide fluctuations in the size of the silhouette plots. I proceeded with 10 clusters as the plots showed a smaller difference in size of clusters than in other breakdowns.

<div class="img_row">
	<img class="col one" src="{{ site.baseurl }}/img/ml-clustering/5clusters.png" alt="" title="5 clusters"/>
	<img class="col one" src="{{ site.baseurl }}/img/ml-clustering/10clusters.png" alt="" title="10 clusters"/>
	<img class="col one" src="{{ site.baseurl }}/img/ml-clustering/15clusters.png" alt="" title="15 clusters"/>
</div>
<div class="col three caption">
	Silhouette plot visualizations of 5, 10, and 15 clusters of artworks.
</div>
<br/>
<hr>
<br/>

Looking at these variables provided a lot of insight into characteristics like depth and form of the works. I developed curator descriptions for each collection, drawing on visual similarities in each cluster. 

<br/>
<hr>
<br/>

#### Cluster 0 - "The Colorful Boundaries Collection"
<div class="img_row">
	<img class="col one" src="{{ site.baseurl }}/img/ml-clustering/cluster0a.jpeg" alt="" title="cluster 0"/>
	<img class="col one" src="{{ site.baseurl }}/img/ml-clustering/cluster0c.jpeg" alt="" title="cluster 0"/>
	<img class="col one" src="{{ site.baseurl }}/img/ml-clustering/cluster0b.jpeg" alt="" title="cluster 0"/>
</div>
<div class="col three caption">
Images in cluster 0 can be identified with their colorful, primarily primary, palettes. The shapes have strong lines and bold forms.
</div>

<hr>

#### Cluster 2 - "The Blurred Movement Collection"
<div class="img_row">
	<img class="col one" src="{{ site.baseurl }}/img/ml-clustering/cluster2a.jpeg" alt="" title="cluster 2"/>
	<img class="col one" src="{{ site.baseurl }}/img/ml-clustering/cluster2c.jpeg" alt="" title="cluster 2"/>
	<img class="col one" src="{{ site.baseurl }}/img/ml-clustering/cluster2b.jpeg" alt="" title="cluster 2"/>
</div>
<div class="col three caption">
Images in cluster 2 are defined by their lack of definition. While parts of these images may be clearer than others, this collection is cemented in the frequent presence of non-distint lines and the implication of movement.
</div>
<hr/>
#### Cluster 7 - "The Singular Objectification Collection"
<div class="img_row">
	<img class="col one" src="{{ site.baseurl }}/img/ml-clustering/cluster7a.jpeg" alt="" title="cluster 7"/>
	<img class="col one" src="{{ site.baseurl }}/img/ml-clustering/cluster7c.jpeg" alt="" title="cluster 7"/>
	<img class="col one" src="{{ site.baseurl }}/img/ml-clustering/cluster7b.jpeg" alt="" title="cluster 7"/>
</div>
<div class="col three caption">
Images in cluster 7 are noted by their representations of singular objects, whether represented in multitudes or single instances. The objects in these images are contained to simple forms and usually include only one or two colors, if any.
</div>

<br/>
<hr/>
<br/>

#### Cluster 9 - "The Droopy Grunge Collection"
<div class="img_row">
	<img class="col one" src="{{ site.baseurl }}/img/ml-clustering/cluster9a.jpeg" alt="" title="cluster 9"/>
	<img class="col one" src="{{ site.baseurl }}/img/ml-clustering/cluster9d.jpeg" alt="" title="cluster 9"/>
	<img class="col one" src="{{ site.baseurl }}/img/ml-clustering/cluster9b.jpeg" alt="" title="cluster 9"/>
</div>
<div class="col three caption">
The images in cluster 9 are seen as melancholy in intention, with a wide variety of color usage and grungy textures. These images are often segmented composition, and contain subtle movement.
</div>