---
layout: default
title: Writing
permalink: writing
body_id: page-list
---

<p class="subtitle">Looking for someone to help with your technical writing dilemma? <a href="mailto:hello@juliaelman.com?subject=Hello, Julia! Let's talk writing.">Write to me.</a></p>

<h3>Book</h3>

[Lightweight Django](link to O'Reilly)
Lightweight Django is a technical book that aims to show readers how to leverage the Django framework to work with modern web applications.

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
