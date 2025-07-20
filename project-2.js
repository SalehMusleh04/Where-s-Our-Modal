// Variables

let openBtn = document.querySelector('#open-btn');
let ModalContainer = document.getElementById('modal-container');
let closeBtn = document.querySelector('#close-btn');

// Event Listeners

openBtn.addEventListener('click', function (){
   ModalContainer.style.display = 'block';
});

closeBtn.addEventListener('click',function(){
   ModalContainer.style.display = 'none';
});

window.addEventListener('click' , function(e){
  if(e.target === ModalContainer){
    ModalContainer.style.display = 'none';
  } /* لذلك عندما اضغط في مكان حولها يخفيها body  وهو  الparent يأخذ العرض والطول كامل لل  modal-container يختفي ايضا والسبب يعود اني جعلت ال  modal-container سيتم اخفاءه ولكن انا كل ما اضغط على الشاشة التي تحيط بال  modal-container يعني اذا ضغطت على ال  */
});

