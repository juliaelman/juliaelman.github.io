---
layout: post
title: Simplifying Django
comments: false
---

**The original post is listed on the O'Reilly Radar blog: [http://radar.oreilly.com/2014/04/simplifying-django.html](http://radar.oreilly.com/2014/04/simplifying-django.html)**

Despite Django's popularity and maturity, some developers believe that it is an outdated web framework made primarily for "content-heavy" applications. Since the majority of modern web applications and services tend not to be rich in their content, this reputation leaves Django seeming like a less than optimal choice as a web framework.

Let's take a moment to look at Django from the ground up and get a better idea of where the framework stands in today's web development practices.

### Plain and Simple Django

A web framework's primary purpose is to help to generate the core architecture for an application and reuse it on other projects. Django was built on this foundation to rapidly create web applications. At its core, Django is primarily a Web Server Gateway Interface (WSGI) application framework that provides HTTP request utilities for extracting and returning meaningful HTTP responses. It handles various services with these utilities by generating things like URL routing, cookie handling, parsing form data and file uploads.

Also, when it comes to building those responses Django provides a dynamic template engine. Right out of the box, you are provided with a long list of filters and tags to create dynamic and extensible templates for a rich web application building experience.

By only using these specific pieces, you easily see how you can build a plain and simple micro-framework application inside a Django project.

We do know that there are some readers who may enjoy creating or adding their own utilities and libraries. We are not trying to take away from this experience, but show that using something like Django allows for fewer distractions. For example, instead of having to decide between Jinja2, Mako, Genshi, Cheetah, etc, you can simply use the existing template language while you focus on building out other parts. Fewer decisions up front make for a more enjoyable application building process.

### Onboarding New Django Users

A bigger issue the Django community, and other web frameworks, continue to battle is the onboarding process of new users. For example, these new users typically begin learning Django through it's official tutorial where you [build a polling application](https://docs.djangoproject.com/en/stable/intro/tutorial01/). Many of us seasoned Django developers consider it a “rite of passage” into the Django community. But is it the best way to begin learning Django? Probably not.

Currently, there are a total of six parts to complete the polls app tutorial. While each part has it's significance, it isn't until [part three](https://docs.djangoproject.com/en/dev/intro/tutorial03/) that you finally write your first public facing view and start building out your HTTP responses. This is a far cry from the more simple “Hello World” tutorial you'll see on the front pages of popular Python micro-frameworks (e.g. Flask or Bottle). The answer we see happening is to create less of a barrier to entry for learning the parts and pieces of Django and focus on the basic request to response interaction. New users can then build from there to see how the other pieces of the framework help you with common web tasks, like session management, user authentication or the built-in admin interface.

To show what we mean, let's build out a sample of what a more simplified Django tutorial might look like:

{% highlight python %}
import sys
 
from django.conf import settings
from django.conf.urls import patterns
from django.http import HttpResponse
from django.core.management import execute_from_command_line
 
settings.configure(
    DEBUG=True,
    SECRET_KEY='placerandomsecretkeyhere',
    ROOT_URLCONF=sys.modules[__name__],
)
 
def index(request):
    return HttpResponse('Powered by Django')
 
urlpatterns = patterns('', 
    (r'^$', index),
)
 
if __name__ == "__main__":
    execute_from_command_line(sys.argv)
{% endhighlight %}

Simple, right? This small bit of code is all you need to run a Django project. Let's break down each component to explain the necessity for each part.

First, we'll need to make sure to include Django's HTTP response request utility and return the values we want to have in that response:

{% highlight python %}
from django.http import HttpResponse
 
def index(request):
    return HttpResponse('Powered by Django')
{% endhighlight %}

Normally, this code would be implemented in the standard <code>views.py</code> file of a typical Django project. For the simplicity of this project, we'll be placing most of the code to run our application in this single file.

The next portion of the application ties in nicely in with this portion is the url structure. The code above expects the index url, so we'll need to create that:

{% highlight python %}
from django.conf.urls import patterns
from django.http import HttpResponse
 
def index(request):
    return HttpResponse('Powered by Django')
 
urlpatterns = patterns('', 
    (r'^$', index),
)
{% endhighlight %}

From only seven lines of code we have already created the basics to run an application in Django! Now, we'll implement the basic settings to make the application runnable:

{% highlight python %}
import sys
 
from django.conf import settings
from django.conf.urls import patterns
from django.http import HttpResponse
 
settings.configure(
    DEBUG=True,
    SECRET_KEY='placerandomsecretkeyhere',
    ROOT_URLCONF=sys.modules[__name__],
)
 
def index(request):
    return HttpResponse('Powered by Django')
 
urlpatterns = patterns('', 
    (r'^$', index),
)
{% endhighlight %}

You'll notice in the example that we have stripped down the settings and have specifically excluded the database configuration. We see these options as a particular barrier to entry for new users with the confusion it causes when trying to determine what databases they should use. We want to make sure that we focus on specific parts to implementing our project to drop the barrier levels.

**NOTE:** Be sure to make a private and random <code>SECRET_KEY</code> value in your <code>settings.configure</code> for the default session and cross-site request forgery (CSRF) protection.

Since we are not generating this structure by using the <code>startproject</code> command, we are missing the typical <code>manage.py</code> file that is generated. We'll need to add the relevant portions that are part of <code>manage.py</code> and used to run our project:

{% highlight python %}
import sys
 
from django.conf import settings
from django.conf.urls import patterns
from django.http import HttpResponse
from django.core.management import execute_from_command_line
 
settings.configure(
    DEBUG=True,
    SECRET_KEY='placerandomsecretkeyhere',
    ROOT_URLCONF=sys.modules[__name__],
)
 
def index(request):
    return HttpResponse('Powered by Django')
 
urlpatterns = patterns('', 
    (r'^$', index),
)
 
if __name__ == "__main__":
    execute_from_command_line(sys.argv)
{% endhighlight %}

You should now be able to go to your command line to start your application:

{% highlight bash %}
python project_name.py runserver
{% endhighlight %}

Now when you browse out to your localhost at 127.0.0.1:8000, you'll get the output of “Powered by Django” in the window!

![Browser window that display Powered by Django](/assets/images/simplifying_django_fig_1.png)

Now you may be asking yourself, “where is the views.py or models.py?!” First off, take a deep breath and relax. Remember what Django really is: it's a Python web framework with a whole host of utilities you can easily import to do the things you need to do to run your application. This is where we see the next portion of the tutorial in teaching new users how to import those utilities. For example, building out a simple template seems like the most natural progression in this process. So, let's do that!

The basic understanding of adding templates is through the way we define our settings and urls. We'll need to first tell Django where our template files are located by adding the necessary settings. Let's start by adding a variable to point to your where your project lives:

{% highlight python %}
import os
import sys
 
BASE_PATH = os.path.dirname(__file__)
 
from django.conf import settings
from django.conf.urls import patterns, url
from django.core.management import execute_from_command_line
from django.shortcuts import render
 
settings.configure(
    DEBUG=True,
    SECRET_KEY='placerandomsecretkeyhere',
    ROOT_URLCONF=sys.modules[__name__],
    TEMPLATE_DIRS=(
        os.path.join(BASE_PATH, 'templates'),
    ),
)
 
def index(request):
    return render(request, 'index.html', {'request': request})
 
urlpatterns = patterns('', 
    url(r'^$', index, name='index'),
)
 
if __name__ == "__main__":
    execute_from_command_line(sys.argv)
{% endhighlight %}

You'll notice at the top, we've added an import of the <code>os.path</code> Python module. By doing this, we have created an easy way for new users to point to their project folder. Now we can easily add in our <code>TEMPLATE_DIRS</code> setting to point to this template directory and start taking advantage of Django's built-in tags and filters!

As you can see, by decomposing the basics of creating a Django application into smaller parts, we can create an easier way to onboard new users. We need to re-learn how to teach Django by building Django applications without the ORM and without the Django admin. These parts of Django need to be seen for what they really are: built-in features. They aren't necessary in order to use the framework and you don't lose much if you don't feel the need to implement them. We should start with the pieces of Django, just like you would learn the Python standard library, for the good parts and not feel the weight. Let's start moving past that and see it for the open source, feature rich utility it really is.

So, with all of this in mind, what are some applications you are considering building that could be developed in this light-weight manner?