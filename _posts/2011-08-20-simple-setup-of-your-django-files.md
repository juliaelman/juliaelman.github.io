---
layout: post
title: simple set-up of your django project files
---

I like organization. Keeping things clean, simple and easy to find make for a seamless work flow and helps to keep everyone in sync when working on a team.

I am constantly working on improving the way I set-up my projects file structure. Here is how I try to keep things clean:

{% highlight html %}
myproject/
    apps/
        django-showcase/
    dev/
        __init__.py
        admin.py
        manage.py
        settings.py
    static/
       images/
       stylesheets/
       scripts/
    templates/
    urls.py
{% endhighlight %}

First up, is the top level folder name of your Django project. I'm calling this one `myproject`.

Next up is your apps folder. This is where you will keep your various Django applications that help make your site run. For example, I've included my application `django-showcase` inside of this folder, as I use it on my site. Also, don't forget to add your applications into your `settings.py` file under the `INSTALLED_APPLICATIONS` list.

Now moving onto the most important part of my organization is the dev folder. This is where all of my development files are located, hence the name dev. Inside of here you'll see the magically important `__init__.py` and other files that help make the other magic parts of Django run. I do this so that I don't have any floating files hanging out in my project. To make this work correctly, you'll need to make sure to set your `DJANGO_SETTINGS_MODULE` to this folder.

`static` is the folder where all of my static media is stored. So all of my front-end stylesheets, images and scripts go here. You'll need to set the path to this folder in `settings.py` file under `STATIC_ROOT`.

The `templates` folder is where all of the custom templates for your site will live. You'll also need to define where this is in your `settings.py` under your `TEMPLATES_DIRS`.

And finally, my `urls.py` configuration file. I place this outside of the dev folder mainly because it might cause issues if there are specific urls tied to various applications in my apps folder. A lot of reusable applications have their own url configuration files inside of them. By making `urls.py` a top-level file, it can access those other urls and make it the main "hub" for your sites url structure. You'll need to set the path for your `ROOT_URLCONF` to point here.

This is a super simple way to organize your files using Django. Overall, the most important thing is that you use a method that easiest for you and/or your team to be most efficient in your production.

To learn more about the Django `settings.py` various options, check out the docs at:
[https://docs.djangoproject.com/en/dev/topics/settings/](https://docs.djangoproject.com/en/dev/topics/settings/)