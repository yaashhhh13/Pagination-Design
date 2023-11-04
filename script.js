var click = 0
document.querySelector("#nxtpage i").addEventListener("click",function(){

    if(click == 0){
        gsap.to("#pg1head h2",{
            top: "200px",
            duration: .3
        })
        gsap.to("#pg1head h1",{
            top: "150px",
            duration: .3
        })
        gsap.to("#pg1body h2",{
            top: "-100px",
            duration: .3
        })
        gsap.to("#pg1body p",{
            top: "-450px",
            duration: .3
        })
        gsap.to("#line",{
            width: "0%",
            duration: .3
        })
        gsap.to("#page1",{
            width: "50vw",
            height: "30vw",
            delay: .5,
            duration: .5
        })
        gsap.to("#page1",{
            left: "-50%",
            delay: .7 
        })
        gsap.to("#page2",{
            width: "50vw",
            height: "30vw",
            left: "-30%",
            delay: .7,
        })
        gsap.to("#page3",{
            width: "50vw",
            height: "30vw",
            left: "-30%",
        })
        gsap.to("#page4",{
            width: "50vw",
            height: "30vw",
            left: "-30%",
        })
        gsap.to("#pages",{
            gap: "40px",
            delay: .5
        })
        click = 1;
    }


    else if(click == 1){
        gsap.to("#pg2head h2",{
            top: "600px",
            duration: .4
        })
        gsap.to("#pg2head h1",{
            top: "540px",
            duration: .4,
            delay: .1
        })
        gsap.to("#p2line",{
            width: "0%",
            duration: .4,
            delay: .1
        })
        gsap.to("#pg2body h2",{
            top: "-80px",
            duration: .4,
            delay: .2
        })
        gsap.to("#pg2body p",{
            top: "-300px",
            duration: .4,
            delay: .3
        })
        gsap.to("#page2",{
            width: "50vw",
            height: "30vw",
            left: "-120%",
            duration: .5,
            delay: .4
        })
        gsap.to("#page3",{
            width: "50vw",
            height: "30vw",
            left: "-80%",
            // duration: .5,
            // delay: .5
        })
        gsap.to("#page1",{
            width: "50vw",
            height: "30vw",
            // left: "0%",
            // duration: .5,
            // delay: .5
        })
        gsap.to("#page4",{
            width: "50vw",
            height: "30vw",
            // left: "-30%",
            // duration: .5,
            // delay: .5
        })
        gsap.to("#pages",{
            gap: "40px",
            delay: .5
        })
        click = 2
    }


    else if(click == 2){
        gsap.to("#p3line",{
            width: "0%",
            duration: .2,
            delay: 1.1
        })
        gsap.to("#pg3head h1",{
            top: "540px",
            duration: .4,
            delay: 1.2
        })
        gsap.to("#pg3head h2",{
            top: "600px",
            duration: .4,
            delay: 1.3
        })
        gsap.to("#pg3body h2",{
            top: "-80px",
            duration: .4,
            delay: 1.4
        })
        gsap.to("#pg3body p",{
            top: "-300px",
            duration: .4,
            delay: 1.5
        })
        gsap.to("#page3",{
            width: "50vw",
            height: "30vw",
            left: "-180%",
            duration: .5,
            delay: 1
        })
        gsap.to("#page4",{
            width: "50vw",
            height: "30vw",
            left: "-130%",
            duration: .5,
            delay: 1
        })

        click = 0
    }
})


document.querySelector("#page2").addEventListener("click",function(){
    gsap.to("#page1",{
        left: "-100%",
        duration: .00001
    })
    gsap.to("#page2",{
        left: "-50%",
    })
    gsap.to("#page2",{
        width: "100vw",
        height: "100vh",
        duration: 1,
        delay: .1
    })
    gsap.to("#p2line",{
        width: "75%",
        duration: .2,
        delay: 1.1
    })
    gsap.to("#pg2head h1",{
        top: "0px",
        duration: .4,
        delay: 1.2
    })
    gsap.to("#pg2head h2",{
        top: "0px",
        duration: .4,
        delay: 1.3
    })
    gsap.to("#pg2body h2",{
        top: "0px",
        duration: .4,
        delay: 1.4
    })
    gsap.to("#pg2body p",{
        top: "0px",
        duration: .4,
        delay: 1.5
    })
    document.querySelector("#nxtpage h1").innerHTML = "II"
    document.querySelector("#page3").style.width = "100vw";
    document.querySelector("#page3").style.height = "100vh";
    document.querySelector("#page4").style.width = "100vw";
    document.querySelector("#page4").style.height = "100vh";
})


document.querySelector("#page3").addEventListener("click",function(){
    gsap.to("#pages",{
        gap: "0px",
    })
    gsap.to("#page2",{
        left: "-100%"
    })
    gsap.to("#page3",{
        left: "-100%",
        duration: .3
    })
    gsap.to("#page3",{
        width: "100vw",
        height: "100vh",
        duration: 1,
        delay: .4
    })
    gsap.to("#p3line",{
        width: "75%",
        duration: .2,
        delay: 1.1
    })
    gsap.to("#pg3head h1",{
        top: "0px",
        duration: .4,
        delay: 1.2
    })
    gsap.to("#pg3head h2",{
        top: "0px",
        duration: .4,
        delay: 1.3
    })
    gsap.to("#pg3body h2",{
        top: "0px",
        duration: .4,
        delay: 1.4
    })
    gsap.to("#pg3body p",{
        top: "0px",
        duration: .4,
        delay: 1.5
    })
    document.querySelector("#nxtpage h1").innerHTML = "III"
    document.querySelector("#page4").style.width = "100vw";
    document.querySelector("#page4").style.height = "100vh";
})


document.querySelector("#page4").addEventListener("click",function(){
    gsap.to("#page4",{
        left: "-150%",
        duration: .4
    })
    gsap.to("#page4",{
        width: "100vw",
        height: "100vh",
        duration: .4
    })
    gsap.to("#p4nav",{
        opacity: 1,
        delay: .5
    })
    gsap.to("#p4sociallinks",{
        opacity: 1,
        delay: .5
    })
    gsap.to("#p4head h1",{
        top: "0px",
        duration: .3,
        delay: .6
    })
    gsap.to("#p4subhead",{
        width: "40%",
        duration: .2,
        delay: .6
    })
    gsap.to("#p4subhead h2",{
        top: "0px",
        duration: .3,
        delay: .6
    })
    gsap.to("#back",{
        opacity: 1,
        delay: .7
    })
    gsap.to(".place img",{
        opacity: 1,
        marginTop: "0px",
        duration: .3,
        delay: .8
    })
})

document.querySelector("#back, #back i, #back h1").addEventListener("click",function(){
    gsap.to("#blackscreen",{
        top: "0%",
        duration: .5,
    })
    gsap.to("#blackscreen",{
        top: "100%",
        duration: .5,
        delay: 1.2
    })
    gsap.to("#page1",{
        width: "100vw",
        height: "100vh",
        left: "0%",
        delay: 2
    })
    gsap.to("#page2",{
        width: "100vw",
        height: "100vh",
        left: "0%",
        delay: 2
    })
    gsap.to("#page3",{
        width: "100vw",
        height: "100vh",
        left: "0%",
        delay: 2
    })
    gsap.to("#page4",{
        width: "100vw",
        height: "100vh",
        left: "0%",
        delay: 2
    })
    gsap.to("#pg1head h2",{
        top: "0px",
        delay: 1
    })
    gsap.to("#pg1head h1",{
        top: "0px",
        delay: 1
    })
    gsap.to("#pg1body h2",{
        top: "0px",
        delay: 1
    })
    gsap.to("#pg1body p",{
        top: "0px",
        delay: 1
    })
    gsap.to("#line",{
        width: "70%",
        delay: 1
    })
    gsap.to("#p4nav",{
        opacity: 0,
        delay: 1
    })
    gsap.to("#p4sociallinks",{
        opacity: 0,
        delay: 1
    })
    gsap.to("#p4head h1",{
        top: "100px",
        delay: 1
    })
    gsap.to("#p4subhead",{
        width: "0%",
        delay: 1
    })
    gsap.to("#p4subhead h2",{
        top: "100px",
        delay: 1
    })
    gsap.to("#back",{
        opacity: 0,
        delay: 1
    })
    gsap.to(".place img",{
        opacity: 0,
        marginTop: "40px",
        delay: 1
    })
    document.querySelector("#nxtpage h1").innerHTML = "I"
})