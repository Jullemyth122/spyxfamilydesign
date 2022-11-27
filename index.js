gsap.registerPlugin(ScrollTrigger)


const circle = document.querySelector('.circle')

const circleInside = document.querySelector('.circle-inside')

circle.addEventListener("mouseenter",() => {
    circle.addEventListener("mousemove",cursor)
    circleInside.classList.add('enlarge')
    function cursor(e) {
    
        var rect = e.target.getBoundingClientRect();
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        
        circleInside.style.top = y + "px"
        circleInside.style.left = x + "px"
    
    }
})

circle.addEventListener("mouseleave",() => {
    circleInside.classList.remove('enlarge')
})

var tl = gsap.timeline({
    ScrollTrigger:{
        trigger:".container",
        scrub:true,
        pin:true,
        // markers:true,
        toggleActions:"play reverse play reverse"
    }
})

gsap.utils.toArray(".p").forEach((layer) => {
    console.log(layer)
    const move = layer.dataset.move;
    const movement = layer.offsetHeight * move 
    const mq = window.matchMedia( "(max-width: 600px)");
    
    tl.fromTo(
        layer,
        {y:"0%"},
        {
            y:`${movement*movement/6}px`,
            ease:"none",
            scrollTrigger:{
                trigger:layer,
                // containerAnimation:tl,
                horizontal:false,
                start:"top center",
                scrub:move*5,
                // markers:true
            }
        },0)

        console.log(mq)
        if (mq == true) {
            tl.fromTo(
                layer,
                {y:"0%"},
                {
                    y:`${movement*movement}px`,
                    ease:"none",
                    scrollTrigger:{
                        trigger:layer,
                        // containerAnimation:tl,
                        horizontal:false,
                        start:"top center",
                        scrub:move*5,
                        // markers:true
                    }
                },0)        
        } 
})

tl.fromTo(
    '.picture',
    {width:"50px",height:"50px",borderRadius:"50%"},
    {
        opacity:1,
        width:"500px",
        height:"500px",
        ease:"none",
        scrollTrigger:{
            trigger:'.picture',
            // containerAnimation:tl,
            horizontal:false,
            start:"top center",
            end:"bottom center",
            scrub:3,
            // markers:{startColor:"pink",endColor:"violet"},
            toggleActions:"play reverse play reverse"
        }
    }
)
tl.fromTo('.hide h2',
    {
        y:'-100%',
    },
    {
        y:"0%",
        ease:"none",
        stagger: 0.25,
        scrollTrigger:{
            trigger:".hide h2",
            // markers:true,
            scrub:3,
        }
    }
)
tl.fromTo('.imgbox',
    {
        y:"0%",
    },{
        y:"100%",
        ease:"none",
        scrollTrigger:{
            trigger:".imgContainer",
            start:"center 80%",
            end:"bottom 90%",
            scrub:3,
            toggleActions:"play reverse play reverse"
            // markers:{startColor:"violet",endColor:"white"},
        }
    }
)

const cursorImg = document.querySelector('.cursor')
const cursorImgDot = document.querySelector(".cursor .dot")
const cursorInsideImg = document.querySelector(".slideContainer")

cursorInsideImg.addEventListener("mouseenter",() => {
    cursorInsideImg.addEventListener("mousemove",cursorImg_)
    function cursorImg_(e) {
        var rect = e.target.getBoundingClientRect();
        var x = e.clientX ; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        cursorImg.style.top = y + "px"
        cursorImg.style.left = x + "px"
    }
})


const sliders = document.querySelectorAll('.slideContainer .slide')

sliders.forEach((elem,i) => {
    elem.addEventListener("mouseleave",() => {
        console.log(elem)
        cursorImg.classList.remove("enlargeCursor")
        cursorImg.classList.remove("enlargeDot")
        cursorImg.style.backgroundColor = "rgba(231, 231, 231, 0.445)"
        const createElement = document.createElement("h5")
        cursorImg.removeChild(cursorImg.lastChild)
    })
    elem.addEventListener("mouseover",() => {
        console.log(elem)
        cursorImg.classList.add("enlargeCursor")
        cursorImg.classList.add("enlargeDot")
        cursorImg.style.backgroundColor = `${elem.dataset.color}`
        const createElement = document.createElement("h5")
        createElement.innerText = elem.dataset.name
        console.log(elem.dataset.name)
        cursorImg.appendChild(createElement)
    })
})

// tl.fromTo('.slideContainer',
//     {
//         x:"0",
//     },{
//         x:"20%",
//         ease:"none",
//         scrollTrigger:{
//             trigger:".slideContainer",
//             start:"center 80%",
//             end:"bottom 90%",
//             scrub:3,
//             markers:{startColor:"violet",endColor:"white"},
//             toggleActions:"play reverse play reverse"
//         }
//     }
// )