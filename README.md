

### About Play

I'm carving up some space on my schedule to focus on #creative-code experiments. I'm   thinking one project per week, to get the momentum.

For now, I'm setting the environment.  Scope is mostly #p5js (because vector-friendly and browser-based), but with a tad of #SASS (that I know A LOT, so it helps me to bridge the gap) and #jekyll (because browser-based requires easy publishing).

I prefer if experiments are stand-alone, but I'm keeping a somewhat hidden directory [here](https://www.nonlinear.nyc/play) (mouseover left of screen). Here's [play github repo](https://github.com/nonlinear/play/).

I setup p5js template as fullscreen (p5js doesn't respect the DOM by default, appearing where it wants) with space for about when you hover on the left. #creative-code is mostly remix of previous code, so documentation is important.

I even found a way to link to original post on github using `{{page.path}}` #jekyll variable. See it in action [here](https://www.nonlinear.nyc/play/stars/) (again, mouseover left of screen)

#jekyll has a handy `_include` feature, so the idea is to [collect reusable code](https://github.com/nonlinear/play/tree/master/_includes/) and just point to it. Think tools like accelerometer, save as image/vector, request location, etc.

---

## Phases

I'm trying to be diligent with my weekly challenges, separating it into proper phases:

- **planning**: some time to decide *what* I wanna build this week. Deadline is wednesday morning (2 days)
- **research**: checking previous code, comparing libraries, watching tutorials, asking experts. Deadline is friday morning (2 days)
- **execution**: actually tying the pieces together, and publishing. I maaaay setup a proper time and broadcast it via [whereby](https://whereby.com/praxis_nyc) *or* record it and publish it on youtube, for documentation. Deadline is sunday night (3 days)

I thought of a **promotion** phase too, but frankly, my results will be subpar for a while, I'm not looking for quality but experimentation.

---

## TODO

- [x] Move `creative-code` to `play`
- [x] create play template, as slide
- [x] Get screenflow
- [ ] remove elastic scroll
- [ ] QR code on about
- [ ] about icon affordance
- [ ] remove toolbar
- [ ] Set date
  - [ ] Sunday: delivery
  - [ ] Monday: planning
  - [ ] Wednesday: researching
  - [ ] Friday: Execution
- [ ] Mailing list


---

## Ideas

### Enivronment

- Present jekyll
- P5js editor, codepen, open processing

### Basics

- functions
- Get list of notes

### Deconstruct

find existing ones to deconstruct

### Snippets

Explain

---

## Running it locally

Navigate to folder on terminal then run:

```
open http://127.0.0.1:4000/
bundle exec make serve
```

(you need [node](https://nodejs.org/en/download/) for npm, and [jekyll](https://jekyllrb.com/docs/installation/macos/))
