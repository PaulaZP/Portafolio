/*Formulario*/
const form = document.querySelector("form");
const inputs = document.querySelectorAll('.requerido');
const script = document.querySelector('script');
const formulario = form.parentElement;
const h2 = document.createElement('h2');
const h3 = document.createElement('h3');
let error = '';
let valido = '';

form.addEventListener("submit", function(e) {
  e.preventDefault();
  inputs.forEach(element =>{
    if(element.value != ''){
      element.style.border = 'solid 1px black';
      error = '';
      valido = "Su formulario fue enviado";
    }else{
      element.style.border = 'solid 1px red';
      error = 'Ocurrio un error';
      valido = "";
    }
  });
  h2.innerText = valido;
  h3.innerText = error;
  formulario.insertBefore(h2, script);
  h2.style.backgroundColor = "#b8daba";
  formulario.insertBefore(h3, form);
  h3.style.backgroundColor = "#fdb9a7";
});
