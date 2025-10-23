document.addEventListener("DOMContentLoaded",()=>{
    
    // .........................poster-design button......................................


const poster_button=document.getElementById("Poster-design");

 poster_button.addEventListener("click",(event)=>{

    let poster=document.getElementById("poster");
    let portfolio=document.getElementById("portfolio-layout");

    console.log("hello")
    if(poster.style.display=="none"){
        
        poster.style.display="block"
        portfolio.style.display="none"
    }else{

         poster.style.display="none"
          portfolio.style.display="block"
    }

})
})