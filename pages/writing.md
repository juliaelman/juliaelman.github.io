---
layout: default
title: Writing
permalink: /writing/
body_id: page-list
---

<h3>Book</h3>

[Lightweight Django](http://shop.oreilly.com/product/0636920032502.do) is a technical book that aims to show readers how to leverage the <a href="https://www.djangoproject.com/">Django framework</a> to work with modern web applications.

{% for post in site.posts %}
{% unless post.next %}
<h3>{{ post.date|date: '%Y' }}</h3>
{% else %}
  {% capture year %}{{ post.date|date: '%Y' }}{% endcapture %}
  {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
  {% if year != nyear %}
<h3>{{ post.date|date: '%Y' }}</h3>
  {% endif %}
{% endunless %}
<article>
  <p>
  	{% if post.external_url %}
  		<a href="{{ post.external_url }}" target="_blank">
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
