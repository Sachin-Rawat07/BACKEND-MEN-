
var tl=gsap.timeline();

tl.from(".navbar img",{
    y:-200,
    duration:0.3,
    delay:0.2
})
tl.from(".nav-part1",{
    y:-200,
    duration:0.3,
    delay:0.1,
    // stagger:true
    // yoyo:true
})
tl.from(".nav-part2",{
    y:-200,
    duration:0.3,
    delay:0.1,
    // stagger:true
    // yoyo:true
})

gsap.from(".content1 h4",{
    opacity:0.2,
   
    duration:2
})

gsap.from(".content2 h1",{
    
    x:-800,
    duration:0.9
})