const tl = gsap.timeline()

tl.fromTo('.main__content .title', {x:-1000}, {x:0})
    .fromTo('.stars .star',  {opacity:0}, {opacity:1},0.2)
    .fromTo('.main__content .subtitle', {x:-1000}, {x:0}, 0.1)
    .fromTo('.main__content .decor__lines-block', {width:0}, {width:453}, 0.9)
    .fromTo('.main__content .text',  {x:-1000}, {x:0}, 0.5)
    .fromTo('.main__content .buttons__block',  {x:-1000}, {x:0}, 0.6)
    .fromTo('.main__content .tags',  {x:-1000}, {x:0},0.7)
    .fromTo('.main__right',  {x:1000}, {x:0},0.2)
    .fromTo('.right__line',  {x:1000}, {x:0},0.2)
    .fromTo('.header', {opacity:0}, {opacity:1}, 0.2)


gsap.from('.why .title, .why .text, .why .contained__btn', {
    scrollTrigger: {trigger: '.why', start: 'start center'},
    x: 900,
    stagger: 0.1
})
gsap.from('.why .img1, .why .img2, .why .img3', {
    scrollTrigger: {trigger: '.why', start: 'start center'},
    rotationY: -90,
    opacity: 0,
    stagger: 0.1
})

gsap.from('.live .section__header-title, .live .section__header-descr', {
    scrollTrigger: {trigger: '.why', start: 'end end'},
    opacity: 0,
    stagger: 0.1
})

gsap.from('.live .card', {
    scrollTrigger: {trigger: '.live', start: 'start center'},
    opacity: 0,
    rotationY: -90,
    stagger: 0.1
})

gsap.from('.road .section__header-title, .road .section__header-descr', {
    scrollTrigger: {trigger: '.road', start: 'start center'},
    opacity: 0,
    stagger: 0.2
})

// ROAD FIRST SECTION

gsap.fromTo('.road .road__line', {height:0}, {
        scrollTrigger: {trigger: '.road .section__header-descr', start: 'end center'},
    height: 136,
    stagger: 1
})
gsap.fromTo('.road .block-transform1', {opacity:0}, {
    scrollTrigger: {trigger: '.road .section__header-descr', start: 'end center'},
    opacity: 1,
    stagger: 1
})
gsap.fromTo('.road .block-transform2', {opacity:0}, {
    scrollTrigger: {trigger: '.block-transform1', start: 'end center'},
    opacity: 1,
    stagger:1
})


// ROAD SECOND SECTION

gsap.fromTo('.road .road__line', {height:136}, {
    scrollTrigger: {trigger: '.block-transform2', start: 'end center'},
    height: 346,
    stagger: 1
})
gsap.fromTo('.road .block-transform3', {opacity:0}, {
    scrollTrigger: {trigger: '.block-transform2', start: 'end center'},
    opacity: 1,
    stagger: 1
})
gsap.fromTo('.road .road__line', {height:346}, {
    scrollTrigger: {trigger: '.block-transform3', start: 'end center'},
    height: 470,
    stagger:1
})
gsap.fromTo('.road .block-transform4', {opacity:0}, {
    scrollTrigger: {trigger: '.block-transform3', start: 'end center'},
    opacity: 1,
    stagger: 1
})


// ROAD THIRD SECTION

gsap.fromTo('.road .road__line', {height:470}, {
    scrollTrigger: {trigger: '.block-transform4', start: 'end center'},
    height: 680,
    stagger: 1
})
gsap.fromTo('.road .block-transform5', {opacity:0}, {
    scrollTrigger: {trigger: '.block-transform4', start: 'end center'},
    opacity: 1,
    stagger: 1
})
gsap.fromTo('.road .road__line', {height:680}, {
    scrollTrigger: {trigger: '.block-transform5', start: 'end center'},
    height: 811,
    stagger: 1
})
gsap.fromTo('.road .block-transform6', {opacity:0}, {
    scrollTrigger: {trigger: '.block-transform5', start: 'end center'},
    opacity: 1,
    stagger: 1
})