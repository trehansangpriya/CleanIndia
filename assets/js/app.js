const tl = gsap.timeline({ default: { ease: 'power4' } })
tl.to('.fixed-top', { opacity: 0, duration: 0 })

tl.to('.text', {
    y: '0%', duration: .7
})

tl.to('.intro2', { x: '0%', duration: 1, delay: .7 })

tl.to('.text2', { y: '0%', duration: .8 })

tl.to('.intro', { y: '-100%', duration: .5, delay: .5 })
tl.to('.intro2', { y: '-100%', duration: 1 })
tl.to('.fixed-top', { opacity: 1, duration: 1 })
