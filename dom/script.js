  var card = document.querySelector('.card') ;

  var btn = document.querySelector('button');

  btn.addEventListener('click', function(){
    var c1 = Math.floor(Math.random()*256) ;
    var c2 = Math.floor(Math.random()*256)
    var c3 = Math.floor(Math.random()*256)

    card.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    card.innerHTML = `(${c1},${c2},${c3})`
    console.log(c1,c2,c3);
    
})


   
//    btn.style.backgroundColor ="blue";