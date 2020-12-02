---
layout: default
title: automations
slug: automations
categories: project
status: draft
description: my tools to automate
uses: header, style, bootstrap, jquery, favicon, open-graph
date: 2020-01-29 18:03:16 -0500
permalink: /:categories/:slug/
---
# Automating things

I'm upstate, away from home and office, and feeling very frazzled coz I depend on my cues to shift states. Without it, I get confused, forgetting:

1. That I should switch states
2. What to do to switch states

I am VERY GOOD at muscle memory, tho. So I decided to create some simple triggers to switch easily. I know I'll eventually switch without my conscious decision, and that's how I roll.

First, I'm on a mac and use:

1. [alfred](https://www.alfredapp.com/) for well, everything. everything is just a `⌘-space` away (I disable spotlight). 
1. [atext](https://www.trankynam.com/atext/) for global replacements. Like, any time (and anywhere) I type `-go`, replace it with `whatever`. 

There are other options, like alfred built-in snippets, but it's paid and it doesn't accept variables. [TextExpander](https://textexpander.com/) is a good alternative but expensive, and frankly, atext does the job.

## Settings

I enabled terminal integration on alfred, so typing `>` at the start of my query means "run it on terminal instead"

I also change "Prefer tabs when opening documents" as "Always" on system preferences > dock. ([sublime text-specific info here](https://medium.com/@panjeh/open-files-projects-folders-in-sublime-text-3-in-a-new-super-tab-in-the-same-window-on-mac-os-5d44254927eb))


## First trigger: `-work`

typing `>-work` and hitting enter then opens all different tools that need my attention: my jira tickets, work inbox, work calendar, teams, figma.

```
open 'FIRSTURL'
open 'SECONDURL'
open 'THIRD URL'
open -a FIRSTAPP

```

	I dunno exactly when to use `''` or not. If URL is simple, you shouldn't use it. If too complex, you should. It breaks either one way or another, so test first and stick with it.
	
	Also, remember to leave a blank line. That ensures all your commands will run.

## Second trigger: `-social`

Same thing, but opens [mastodon](https://mastodon.social/), [twitter](https://twitter.com), [savee](https://savee.it) and secure scuttlebutt (with `open -a Patchwork`)

## Third trigger: `-todo`

[Set Up Sublime Text for Markdown and Jekyll](https://lynn9388.github.io/2019/07/27/set-up-sublime-text-for-markdown-and-jekyll.html)

tags: #productivity #automation #exocortex