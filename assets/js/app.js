const tl = gsap.timeline({ defaults: { ease: 'power4' } })
const tl2 = gsap.timeline({ defaults: { duration: 1.5, delay: 1 } })
tl.to('.fixed-top', { opacity: 0, duration: 0 })
tl.to('.btn-hero', { opacity: 0, duration: 0 })

// tl.to('.text', {
//     y: '0%', duration: .7
// })

// tl.to('.intro2', { x: '0%', duration: 1, delay: .7 })

// tl.to('.text2', { y: '0%', duration: .8 })

// tl.to('.intro', { y: '-100%', duration: .5, delay: .5 })
// tl.to('.intro2', { y: '-100%', duration: 1 })
tl.to('.fixed-top', { opacity: 1, duration: 1 })
tl.from('.heading-hero', { opacity: 0, duration: .5 })
tl.from('.hero-img', { y: "190%", opacity: 0, duration: 1.5 })
tl2.to('.hero-img img', { y: 15, repeat: -1, yoyo: true, duration: 2 })
tl.to('.btn-hero', { opacity: 1, duration: .3 })
tl2.to('.btn-hero', { y: 15, repeat: -1, yoyo: true, duration: .8 })