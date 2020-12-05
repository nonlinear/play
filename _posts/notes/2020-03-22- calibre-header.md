---
layout: default
title: Calibre PDF Conversion
slug: Calibre
categories: note
status: public
description: how to convert epubs to pdfs
uses: header, style, bootstrap, jquery, favicon, open-graph
date: 2020-01-29 18:03:16 -0500
permalink: /:categories/:slug/
---


## Instructions

- Convert Book
- Univers-Light-Normal 120%
- Text Left Align
- Layout 1 em
- pdf output A5
- header template
- check page total, change header and run again

## Title and Author template

<div
    style="border-radius: 0 0 5px 5px;
      background-color: #000;
      color: white;
      padding: 10px;"
  >
    <div style="display: grid; grid-template-columns: 1fr 1fr; grid-gap: 30px; font-size: 80%">
      <p style="text-align: left">
        _TITLE_
      </p>
      <p style="text-align: right">
        _AUTHOR_
      </p>
    </div>
   <div style="display: grid; grid-template-columns: calc((_PAGENUM_ * 100)/1173)% 1fr; grid-gap: 0; height: 3px">
     <p style="
      background-color: white;"
      ></p>
     <p style="
      background-color: black;"
      ></p>
  </div>
</div>

>

## Title-only template

```html
<div
  style="text-align: center;
    border-radius: 0 0 5px 5px;
    background-color: #000;
    color: white;
    padding: 10px;"
>
  <div style="height: 30px;">
    <p style=" margin: 0; font-size: 80%; text-align: center">
      _TITLE_
    </p>

  </div>
  <div
    style="   width: 100%;
    display: block;
    height: 3px;
    background-color: black;"
  >
    <div
      style="      width: calc((_PAGENUM_ * 100%)/1173);
    background-color: white;
    display: block;
    height: 3px;"
    ></div>
  </div>
</div>
```
