  
 let img = document.querySelector(".cardImg")

 let love = document.querySelector("#love")

img.addEventListener("dblclick" , () =>{
   

love.style.opacity = 1 ; 
love.style.transform = "translate(-50%, -50%) scale(1)   " ;
console.log("g");

setTimeout(()=>{
    love.style.transform = "translate(-50%, -350%) scale(1) " ;
     love.style.opacity = 0;
} ,500)
setTimeout(()=>{
    love.style.transform = "translate(-50%, -50%) scale(0) " ;
    love.style.opacity = 0;
} ,1000)
})