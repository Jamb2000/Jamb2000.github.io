(function(){

    const tittlePreguntas =[...document.querySelectorAll('.preguntas__tittle')];
    console.log(tittlePreguntas)
    
    tittlePreguntas.forEach(preguntas=>{
        preguntas.addEventListener('click',()=>{
           let height=0;
           let answer= preguntas.nextElementSibling;
           let addPadding= preguntas.parentElement.parentElement;


           addPadding.classList.toggle('peguntas__padding--add');
           preguntas.children[0].classList.toggle('preguntas__arrow--rotate');//para rotar despues de la configuracion en css


           if(answer.clientHeight===0){
            height= answer.scrollHeight;
           }
           answer.style.height = `${height}px`;
        })
    })
})();