---
layout: post
title: An or a Django template filter
---

I find that most projects are created out of need. You either look for something that does what you need, come up with an idea, find something that almost does what you want or both. That is how I created a new filter: anora.

I started out by looking for a template tag or filter that would determine whether or not to us "an" or "a" based on the contextual value of a given word. Django snippets returned a tag that Chris Beaven (aka SmileyChris) created that does this based on two regular expressions: [http://djangosnippets.org/snippets/1519/](http://djangosnippets.org/snippets/1519/)

Awesome, right? Yes. This is awesome. But in order to use this you'd have to double up your template context as follows:

{% highlight django %}
{% raw %}
{{ word | tag }} {{ word }}
{% endraw %}
{% endhighlight %}

Which would result in something like this: 'an owl' or 'a raccoon'.

Seems verbose and not very DRY (Don't Repeat Yourself). Thus, a need was found and created with anora: [https://github.com/juliaelman/anora/](https://github.com/juliaelman/anora/)

So now, you can simply do {% raw %}`{{ word|anora }}`{% endraw %} and 'a' or 'an' (and a space) will be added before your word based on it's phoenetic value.

Pretty simple, but can be very useful. Enjoy!
