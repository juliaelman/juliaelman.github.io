---
layout: base
title: Writing
permalink: writing
body_id: page-list
---

{% for post in site.posts %}
	{% unless post.next %}
	  <h4>{{ post.date|date: '%Y' }}</h4>
	{% else %}
	  {% capture year %}{{ post.date|date: '%Y' }}{% endcapture %}
	  {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
	  {% if year != nyear %}
	   	<h4>{{ post.date|date: '%Y' }}</h4>
	  {% endif %}
	{% endunless %}
  <article>
	  <p>
	  	{% if post.external_url %}
	  		<a href="{{ post.external_url }}">
		  		{{ post.title }}
		  	</a>
	  	{% else %}
		  	<a href="{{ post.url }}">
		  		{{ post.title }}
		  	</a>
	  	{% endif %}
	  </p>
	</article>
{% endfor %}
