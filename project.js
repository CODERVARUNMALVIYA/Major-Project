function swiperWorking(){
   var swiper = new Swiper(".mySwiper", {
     slidesPerView: "auto",
     pagination: {
       el: ".swiper-pagination",
       type:"fraction"
     },
     navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
       },
   });
 
 }
 
 swiperWorking()
var tl=gsap.timeline()
tl.from("#page1 svg", {
    marginTop:"-50%",
    opacity:0,
    duration:0.9,
    delay:0.1, 
    ease: Power2.easeOut
})
tl.from("#page1 img", {
   scale:0.5,
   duration:0.7,
   delay:-0.1,
   ease: Power2.easeOut,
   borderRadius:40

})
.from("#nav",{
    marginTop:"-50%",
    opacity:0,
    duration:0.9,
    delay:-0.4,
    ease: Power2.easeOut
})
var h3=document.querySelectorAll("#text h2")

 h3.forEach(function(elem){
    var mohit=""
    var h2=elem.textContent
    var data=h2.split("")

    data.forEach(function(e){  
        mohit+=`<span>${e}</span>`
    })
    // console.log(mohit)
    
  elem.innerHTML=mohit

 })
 gsap.to("#text h2 span",{
    stagger:0.1,
    color:"#E3E3C4",
    scrollTrigger:{
        scroller:"body",
        trigger:"#text h2 span",
        // markers:true,
        start:"top 60%",
        end:"top -5%",
        scrub:3
    }
    
 })
 gsap.to("#page2 #svg2",{
    right:0,
    duration:7,
    ease: Power0.easeNone,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page2 #svg2",
        // markers:true,
        scrub:3
    }
 })
 gsap.to("#page2 #svg3",{
    right:2,
    duration:10,
    ease: Power0.easeNone,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page2 #svg3",
        // markers:true,
        scrub:3
    }
 })
 var h4=document.querySelectorAll("#text2 h4")

 h4.forEach(function(o){
    var mohit1=""
    var p=o.textContent
    var data=p.split("")

    data.forEach(function(q){  
        mohit1+=`<span>${q}</span>`
    })
    // console.log(mohit)
    
  o.innerHTML=mohit1

 })
 gsap.to("#text2 h4 span",{
    stagger:0.6,
    color:"#E3E3C4",
    scrollTrigger:{
        scroller:"body",
        trigger:"#text2 h4 span",
        // markers:true,
        start:"top 70%",
        end:"top 30%",
        scrub:3
    }
    
 })
 gsap.from("#img1 img",{
    y : 150,
    opacity:0,   
    scrollTrigger:{
    scroller:"body",
    trigger:"#img1 img",
    // markers:true,
    start:"top 70%",
    end:"top 30%",
    scrub:3
   }
 })
 gsap.from("#img2 img",{
    marginTop:"15%",
    opacity:0,
   scrollTrigger:{
    scroller:"body",
    trigger:"#img2 img",
    // markers:true,
    start:"top 70%",
    end:"top 30%",
    scrub:3
   }
 })
 gsap.from("#img3 img",{
    marginTop:"12%",
    opacity:0,
   scrollTrigger:{
    scroller:"body",
    trigger:"#img3 img",
    // markers:true,
    start:"top 70%",
    end:"top 30%",
    scrub:3
   }
 })
 gsap.from("#text3",{
    marginTop:"8%",
    opacity:0,
   scrollTrigger:{
    scroller:"body",
    trigger:"#text3",
    // markers:true,
    start:"top 70%",
    end:"top 30%",
    scrub:3
   }
 })
 gsap.from("#text3-1",{
    marginTop:"5%",
    opacity:0,
   scrollTrigger:{
    scroller:"body",
    trigger:"#text3-1",
    // markers:true,
    start:"top 70%",
    end:"top 30%",
    scrub:3
   }
 })
 var h6=document.querySelectorAll("#text4 h5")

 h6.forEach(function(ele){
    var mohit2=""
    var h5=ele.textContent
    var data=h5.split("")

    data.forEach(function(el){  
        mohit2+=`<span>${el}</span>`
    })
    console.log(mohit2)
    
  ele.innerHTML=mohit2

 })
 gsap.to("#text4 h5 span",{
    stagger:0.1,
    color:"#E3E3C4",
    scrollTrigger:{
        scroller:"body",
        trigger:"#text4 h5 span",
      //   markers:true,
        start:"top 80%",
        end:"top 10%",
        scrub:3
    }  
 })
 gsap.from("#page6 #svg4",{
  right:2,
  duration:10,
  ease: Power0.easeNone,
  scrollTrigger:{
      scroller:"body",
      trigger:"#page6 #svg4",
      // markers:true,
      scrub:3
  }
})
gsap.to("#page6 #svg5",{
  left:-1,
  duration:10,
  ease: Power0.easeNone,
  scrollTrigger:{
      scroller:"body",
      trigger:"#page6 #svg5",
      // markers:true,
      scrub:3
  }
})
var h7=document.querySelectorAll("#text8 h3")

h7.forEach(function(w){
   var mohit4=""
   var h9=w.textContent
   var data1=h9.split("")

   data1.forEach(function(k){  
       mohit4+=`<span>${k}</span>`
   })
  //  console.log(mohit2)
   
 w.innerHTML=mohit4

})
gsap.to("#text8 h3 span",{
   stagger:0.1,
   color:"#E3E3C4",
   scrollTrigger:{
       scroller:"body",
       trigger:"#text8 h3 span",
     //   markers:true,
       start:"top 60%",
       end:"top 10%",
       scrub:3
   }  
})
gsap.from("#text9",{
  marginTop:"2%",
  opacity:0,
 scrollTrigger:{
  scroller:"body",
  trigger:"#text9",
  // markers:true,
  start:"top 70%",
  end:"top 30%",
  scrub:3
 }
})
gsap.from("#text9-1 img",{
  marginTop:"15%",
  opacity:0,
 scrollTrigger:{
  scroller:"body",
  trigger:"#text9-1 img",
  // markers:true,
  start:"top 80%",
  end:"top 60%",
  scrub:3
 }
})
gsap.from("#text9-3 img",{
  marginTop:"15%",
  opacity:0,
 scrollTrigger:{
  scroller:"body",
  trigger:"#text9-3 img",
  // markers:true,
  start:"top 80%",
  end:"top 60%",
  scrub:3
 }
})
gsap.from("#text9-5 img",{
  marginTop:"15%",
  opacity:0,
 scrollTrigger:{
  scroller:"body",
  trigger:"#text9-5 img",
  // markers:true,
  start:"top 80%",
  end:"top 60%",
  scrub:3
 }
})
gsap.from("#text9-7 ",{
  marginTop:"10%",
  opacity:0,
 scrollTrigger:{
  scroller:"body",
  trigger:"#text9-7",
  // markers:true,
  start:"top 90%",
  end:"top 60%",
  scrub:3
 }
})
gsap.to("#page6 #svg6",{
  right:0,
  duration:7,
  ease: Power0.easeNone,
  scrollTrigger:{
      scroller:"body",
      trigger:"#page6 #svg6",
      // markers:true,
      scrub:3
  }
})
gsap.to("#page6 #svg7",{
  right:2,
  duration:10,
  ease: Power0.easeNone,
  scrollTrigger:{
      scroller:"body",
      trigger:"#page6 #svg7",
      // markers:true,
      scrub:3
  }
})
var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page8-left",
    scroller:"body",
    start:"top 30%",
    end:"top 35%",
    scrub:3,
    // markers:true
  }
})
tl2.to("#page8-left",{
  transform:"translateX(-40%)",
  duration:1,
},"anim2")
tl2.to("#page8-right",{
  transform:"translateX(40%)",
  duration:1,
},"anim2")
tl2.from("#page8-center",{
  transform:"translateY(30%)",
  duration:1,
  opacity:0
},"anim2")
var h9=document.querySelectorAll("#text10-1 h6")

h9.forEach(function(m){
   var mohit5=""
   var h9=m.textContent
   var data3=h9.split("")

   data3.forEach(function(l){  
       mohit5+=`<span>${l}</span>`
   })
  //  console.log(mohit2)
   
 m.innerHTML=mohit5

})
gsap.to("#text10-1 h6 span",{
   stagger:0.1,
   color:"#E3E3C4",
   scrollTrigger:{
       scroller:"body",
       trigger:"#text10-1 h6 span",
     //   markers:true,
       start:"top 60%",
       end:"top 10%",
       scrub:3
   }  
})
gsap.from("#text10-2",{
  marginTop:"2%",
  opacity:0,
 scrollTrigger:{
  scroller:"body",
  trigger:"#text10-2",
  // markers:true,
  start:"top 70%",
  end:"top 30%",
  scrub:3
 }
})
gsap.from("#page10 #svg8",{
  right:2,
  duration:10,
  ease: Power0.easeNone,
  scrollTrigger:{
      scroller:"body",
      trigger:"#page10 #svg8",
      // markers:true,
      scrub:3
  }
})
gsap.to("#page10 #svg9",{
  left:-1,
  duration:10,
  ease: Power0.easeNone,
  scrollTrigger:{
      scroller:"body",
      trigger:"#page10 #svg9",
      // markers:true,
      scrub:3
  }
})
gsap.from("#text10-3",{
  marginTop:"10%",
  opacity:0,
 scrollTrigger:{
  scroller:"body",
  trigger:"#text10-3",
  // markers:true,
  start:"top 90%",
  end:"top 60%",
  scrub:3
 }
})
gsap.from("#text10-4",{
  marginTop:"10%",
  opacity:0,
 scrollTrigger:{
  scroller:"body",
  trigger:"#text10-4",
  // markers:true,
  start:"top 90%",
  end:"top 60%",
  scrub:3
 }
})
gsap.from("#text10-5",{
  marginTop:"10%",
  opacity:0,
 scrollTrigger:{
  scroller:"body",
  trigger:"#text10-5",
  // markers:true,
  start:"top 90%",
  end:"top 60%",
  scrub:3
 }
})
gsap.from("#text10-6 ",{
  marginTop:"10%",
  opacity:0,
 scrollTrigger:{
  scroller:"body",
  trigger:"#text10-6",
  // markers:true,
  start:"top 90%",
  end:"top 80%",
  scrub:3
 }
})
gsap.from("#page11-1 ",{
  marginTop:"10%",
  opacity:0,
 scrollTrigger:{
  scroller:"body",
  trigger:"#page11-1",
  // markers:true,
  start:"top 90%",
  end:"top 80%",
  scrub:3
 }
})
gsap.from("#page11-2",{
  marginTop:"10%",
  opacity:0,
 scrollTrigger:{
  scroller:"body",
  trigger:"#page11-2",
  // markers:true,
  start:"top 90%",
  end:"top 80%",
  scrub:3
 }
})
gsap.from("#page11-3",{
  marginTop:"10%",
  opacity:0,
 scrollTrigger:{
  scroller:"body",
  trigger:"#page11-3",
  // markers:true,
  start:"top 90%",
  end:"top 80%",
  scrub:3
 }
})
gsap.from("#page11-4",{
  marginTop:"10%",
  opacity:0,
 scrollTrigger:{
  scroller:"body",
  trigger:"#page11-4",
  // markers:true,
  start:"top 90%",
  end:"top 80%",
  scrub:3
 }
})
gsap.from("#page11-5",{
  marginTop:"10%",
  opacity:0,
 scrollTrigger:{
  scroller:"body",
  trigger:"#page11-5",
  // markers:true,
  start:"top 90%",
  end:"top 80%",
  scrub:3
 }
})
gsap.from("#page11-6",{
  marginTop:"10%",
  opacity:0,
 scrollTrigger:{
  scroller:"body",
  trigger:"#page11-6",
  // markers:true,
  start:"top 90%",
  end:"top 80%",
  scrub:3
 }
})
gsap.from("#page11-7",{
  marginTop:"10%",
  opacity:0,
 scrollTrigger:{
  scroller:"body",
  trigger:"#page11-7",
  // markers:true,
  start:"top 90%",
  end:"top 80%",
  scrub:3
 }
})
gsap.from("#page11-8",{
  marginTop:"10%",
  opacity:0,
 scrollTrigger:{
  scroller:"body",
  trigger:"#page11-8",
  // markers:true,
  start:"top 90%",
  end:"top 80%",
  scrub:3
 }
})
gsap.from("#page12-1",{
  marginTop:"10%",
  opacity:0,
 scrollTrigger:{
  scroller:"body",
  trigger:"#page12-1",
  // markers:true,
  start:"top 90%",
  end:"top 80%",
  scrub:3
 }
})



    // var h3=document.querySelector("#text h2").textContent
    // var h3data=h3.split("")
    // var mohit=""
    // h3data.forEach(function(elem){  
    //     mohit+=`<span>${elem}</span>`
    // })
    // document.querySelector("#text h3").innerHTML=mohit


    


    
