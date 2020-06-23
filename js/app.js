/*Mi version*/
//Esto es como el document ready
document.addEventListener('DOMContentLoaded',()=>{
  //creamos una simple alert para ver si funciona alert("funciona");
  cargaPortafolio();
});

//USO DE FETCH API FUNCTONA IGUAL QUE AJAX SOLO QUE NATIVO sin serverx
function cargaPortafolio(){
  fetch('datos.json')
  //ACCEDEMOS A LO QUE SE LLAMA PROTO
  .then( (respuesta)=>{
    //console.log(respuesta);
    return respuesta.json();
  })
  //ACCEDEMOR A LOS DATOS UNA VEZ ENTRANDO A PROTO
  .then((datos)=>{
    //console.log(datos);
    let html='';
    //console.log(datos.portafolio);
    datos.portafolio.forEach( portafolio => {
            // crear el template
            html += `
                <div class="elemento">
                    <img src="img/${portafolio.id}.jpg">
                    <div class="contenido">
                        <h3>${portafolio.nombre}</h3>
                        <p>${portafolio.desc}</p>
                    </div>
                </div>
            `;
        });
        // despues de recorrer, lo inyectamos
        document.querySelector('#listado').innerHTML = html;
      })
       .catch(function(error) {
           console.log(error);
       });
}
