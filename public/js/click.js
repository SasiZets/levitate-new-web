document.addEventListener("DOMContentLoaded",()=>{
    
    // .........................poster-design button......................................

  let poster_option=document.getElementById("option1");

    let poster=document.getElementById("poster");

    let portfolio=document.getElementById("portfolio-layout");
  

 poster_option.addEventListener("click",(event)=>{

    if(poster.style.display=="none"){
        
        poster.style.display="block"
      poster_option.classList.add("active");
        portfolio.style.display="none"
    }else{

         poster.style.display="none"
          portfolio.style.display="block"
          poster_option.classList.remove("active");
           
          
    }

})
})