

## [Play](https://www.nonlinear.nyc/play)

1. creative code
1. browser-based
1. mobile-friendly
1. self-contained

---

### Methodology for feature publication

1. define scope
1. research libraries
1. develop/test cycle (isolated)
1. develop/test cycle (integrated)
1. packaging (version, documentation, wish list)
1. publish (discuss promotion)
1. feedback (rebuild wish list, collaborators)

---

### Grid feature
#### [isolated development link](https://glitch.com/edit/#!/join/5d296832-f632-4ae8-be86-dad95ed88e0b)

1. ~~column~~
1. ~~grid~~
1. ~~stack~~ 2020-10-12
1. grid-on-cell (define parent feature)
1. text on cell (test, [reference](https://creative-coding.decontextualize.com/text-and-type/))
1. irregular cells (2, 1, 3)
1. rows
1. detect remaining space, alert if object is more than that (we decide what to do later)

---

### Peripherals

1. Share page [On the Web Share API | CSS-Tricks](https://css-tricks.com/on-the-web-share-api/)
1. QR code
1. sensor request, unified (make it fullscreen)
1. notes (very buried, maybe a specific click?)

---

### Typography

1. new fonts
1. line height, kerning, other font editing features
1. detecting and activating ligatures
1. isolating letters or words for effects
1. input text (forms)
1. variable fonts

---

### Database

1. json or yml?
1. importing from common services (headless CMS)
1. best practices, troubleshooting

---

### Device Sensors

1. click, drag, double-tap, two-finger
1. drag velocity, directions
1. accelerator
1. scroll via p5
1. location
1. camera
1. mic
1. ML detection

---

### SVG

1. import svg ([Load an SVG to a P5 sketch](https://stackoverflow.com/questions/40389179/load-an-svg-to-a-p5-sketch))
1. import svg, editing points, objects, id/class
1. import svg with link (if svg updates, it doesn't break)
1. export as svg (alerts if mismatch?)

---

### Generative Design

1. random, noise, universe of variation, weights
1. reload 
1. random history feature
	- a code that pins version
	- code history (browser-based, not shared)
	- ability to get code from URL ([A URL builder library for JavaScript](https://github.com/balazsbotond/urlcat))
	- variations limited by pinned codes?

---

### Other topics

1. import/export raster images
1. import/control videos

## Running it locally

Navigate to folder on terminal then run:

```
open http://127.0.0.1:4000/
bundle exec make serve
```

(you need [node](https://nodejs.org/en/download/) for npm, and [jekyll](https://jekyllrb.com/docs/installation/macos/))
