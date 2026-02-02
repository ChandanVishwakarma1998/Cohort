var btn = document.querySelector("button")
 var main = document.querySelector("main")

btn.addEventListener("click" , function(){
     var box  = document.createElement("div")
      
     box.style.height = "90px";
     box.style.width = "90px";
     box.style.position="absolute";
     
     var c1 = Math.floor(Math.random()*256) ;
     var c2 = Math.floor(Math.random()*256) ;
     var c3 = Math.floor(Math.random()*256) ;
     box.style.backgroundColor=`rgb(${c1},${c2},${c3})`;
     console.log("cb")
      var x1 = Math.floor(Math.random()*80)
      var y1 = Math.floor(Math.random()*80)
      var z1 = Math.floor(Math.random()*360)

      box.style.left = x1+"%";
      box.style.top = y1 +"%";
      box.style.rotate= z1+"deg";
     main.appendChild(box)
})