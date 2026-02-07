  
 let p = document.querySelector("p")

   const ogText = p.innerText
   const ogColor = getComputedStyle(p).color

  let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let iteration = 0

   let interval
   

   p.addEventListener("mouseenter" , () => {

  clearInterval (interval) 

  iteration = 0;

       interval = setInterval(()=>{

    const str = ogText
                .split("")
                .map(( char, index)=>{
                   if(index < iteration){
                         return char
                        }
                 return   characters.split("")[Math.floor(Math.random()*52)]
                }).join("")
               p.style.color = "limegreen"
                p.innerText=str;
                iteration += 0.2;

                 if (iteration >= ogText.length) {
      clearInterval(interval);
      p.innerText = ogText;

      // back to original color AFTER interval ends
      p.style.color = ogColor;
                 }
              
                 }, 10)
                } )

                p.addEventListener("mouseleave",()=>{
                    clearInterval(interval);
                    p.innerText = ogText
                    p.style.color=ogColor
                })



 