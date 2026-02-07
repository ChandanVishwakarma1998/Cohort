const btn= document.querySelector("button")

const h2= document.querySelector("h2")

const innerDiv = document.querySelector(".inner")

bottomLine = document.querySelector(".bottomLine")
let  grow = 0
const randomDelay = Math.floor(Math.random() * (200));

btn.addEventListener("click", () =>{

      btn.disabled = true;   
        btn.style.opacity = 0.8;
      
   let interval=  setInterval(() => {
        grow++ ; 
        h2.innerText=grow+"%"
        innerDiv.style.width = grow+"%"
        console.log(grow)

         if (grow >= 100) {
      clearInterval(interval);
        btn.innerText="Downloaded";
        btn.style.opacity = 0.6;
console.log (`The downloading speed is ${randomDelay} Mbps.`)


         }
        
    },randomDelay );
   

 
})