---
layout: post
title: installing pygame on osx mountain lion
comments: true
---

Setting up local development environment is par for the course when programming. We've all had to do it at one time or another in our careers and shared in the pain points it brings with it.

My battle this week? Dun, dun, dun...installing [pygame](http://www.pygame.org/wiki/about) on OSX Mountain Lion.

Yes yes, I know. [I just received this awesome Raspberry Pi](/blog/2013/03/20/thoughts-after-attending-my-second-pycon/) which has the Raspian distribution of pygame already installed on it. Well friends, I have other plans for that little device at the moment. So it's reserved for later. Stay tuned...

I started doing some reading as to what was the best way to go about getting pygame installed. My initial assumption was to begin by creating a virtualenv. Bad idea. After doing some quick research, I found that virtualenv can cause various issues when setting up pygame. So, I opted out and went for the global install instead.

Here is what you should have installed as a precursor to installing pygame. You might already have them installed, but I wanted to make sure to list them just in case you don't. I've also included a link to installation instructions for each of these as well, if you don't already have them set up:

- [XCode v4.6.1](https://developer.apple.com/xcode/)
- [XQuartz 2.7.4](http://xquartz.macosforge.org/landing/)
- [pip v1.3.1](http://www.pip-installer.org/en/1.3.1/installing.html)
- [hg v2.5.2](http://mercurial.berkwood.com/)
- [homebrew v0.9.4](https://github.com/mxcl/homebrew/wiki/Installation)

Next, you'll need all the little bits &amp; pieces that make pygame go. Here is a quick explanation of all of those items (thank you Wikipedia!).

####simple directmedia layer (sdl)

[http://www.libsdl.org/](http://www.libsdl.org/)

Simple DirectMedia Layer is a cross-platform, free and open source multimedia library written in C that presents a simple interface to various platforms' graphics, sound, and input devices. It's a wrapper that supports all of the primary functionality to create your game. There are several sub-systems that are also installed to support basic functionality:

- sdl_image: support for multiple image formats
- sdl_mixer: complex audio functions, mainly for sound mixing
- sdl_ttf: [TrueType font](http://en.wikipedia.org/wiki/TrueType) rendering support

####sql mpeg library (smpeg)

[http://icculus.org/smpeg/](http://icculus.org/smpeg/) 

smpeg is a mpeg decoding library. It interfaces with the Simple DirectMedia Layer to provide cross-platform MP3 playback for games.

####portmidi

[http://portmedia.sourceforge.net/portmidi/](http://portmedia.sourceforge.net/portmidi/)

PortMidi is a computer library for real time input and output of MIDI data to aid in any music you would like to create for your game. 

####installation

First, you will need to install all of the SDL goodness:

	brew install sdl sdl_image sdl_mixer sdl_ttf portmidi

You'll notice that `smpeg` is missing from this list. This was a little bit more complicated and I had to do some tapping to get this to install correctly:

	brew tap homebrew/headonly
	brew install smpeg --HEAD

As explained in [this Github comment](https://github.com/samueljohn/homebrew-python/issues/22#issuecomment-14958411), these options pull the latest (and possible unstable) version of smpeg. This is not ideal, but this is what ended up working for me.

And now, onto pygame! I really don't like installing pre-packaged distributions and much rather work with active code. So, I installed via hg in order for it to work properly, and run `sudo` because of my folder permissions setup (I swear, I'll fix that one day!):

	sudo pip install hg+http://bitbucket.org/pygame/pygame

Now, open up a python shell prompt and type `import pygame`. Did it work? If so, congratulations! pygame is now installed on your machine.

