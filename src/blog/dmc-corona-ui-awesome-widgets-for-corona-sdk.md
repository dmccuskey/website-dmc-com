---
title: DMC Corona Widgets
date: 2018-04-01 20:47:18
excerpt: My Widget LIbrary
type: post
blog: true
tags:
    - Code Sample
    - Geek
---

I'm happy to announce the release of my new library **DMC Corona UI** – *Widgets for Corona SDK*. It's been a couple of months in the works and now I feel it's stable enough for others to use. I put together the following screencast to give some insight into what it can do.

@[vimeo](125632027)

The library is comprised of Widgets, Styles and Controls.

Many of the **Widgets**, like Text or TextField, wrap other OpenGL or platform-native objects to make them behave more consistently and without a doubt give them a lot more Awesome. Some of their important core functionality is based around concepts learned from Adobe Flex.
The other items like the ScrollView and TableView are evolutions based on both code I've written in the past and ideas from the UIKit API from Apple iOS.
*All of the components are style/theme-aware*.

The **Styles** represent a powerful way to manage style properties and can be linked together to form an inherited cascade of style goodness. There are a couple of ways in which they can be organized, and putting everything into a single location or into full themes is really easy.

The **Controls**, like Navigation, are totally new and again borrow a lot of lessons from iOS. This one alone saves me from writing a lot of navigation code for complex projects. There are more cool Controls still to build.

Even though some of the ideas are from iOS, I spent a lot of time thinking about WWCD (*What Would Corona Do*) as I think the Corona API is one of its many strong points. At times this required more coding to ensure this complex system was easy to use. I think the result is a good blend of the two worlds.

As "side projects" to this endeavor, I re-vamped my documentation site from an aging wiki server to a sleek, modern static-website (old is new again!) which has many benefits one of which is being blazingly fast. I also put a build system in place (snakemake) to help wrangle all of the updates to the modules in the DMC Libraries (now over 40+).

There's more work to be done for sure, but I think we're off to a really good start. :)

* <http://docs.davidmccuskey.com>
* <http://github.com/dmccuskey>

Enjoy !

~ dmc
