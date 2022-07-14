

// function para guardar cosas en el localStorage
const guardarLocal = (key, value) => {
     localStorage.setItem(key, value);
};




// function para esconder y mostrar cosas en el DOM
const hideAndSeek= (etiqueta) => {
     if (etiqueta.style.display === "none") {
          etiqueta.style.display = "block"
     } else {
          etiqueta.style.display ="none";
     }
};





//function para actualizar la eleccion del conversor en la lista desplegable
function actualizarEleccion() {
     
};





// function para buscar en el array segun el id del tipo de cambio
const busqueda = (id) => {
     let valorEncontrado = monedas.find( monedas => monedas.id === id)
     let retorno = parseFloat(valorEncontrado.valor);
     return retorno.toFixed(3)
};






//function que hace la magia 
calculoDivisaPor = (number) => {
     const formMonto = document.querySelector("#formMonto");     // formulario del monto

     formMonto.onsubmit= (e) => {
          e.preventDefault();
          
          let monto = document.querySelector("#monto").value;    // input de monto
          let busqueda = monedas.find( moneda => moneda.id === number);    // busqueda en el array moneda
          let conversion = parseFloat(busqueda.valor) * monto;     // calculo de divisa
          
          const resultado = document.querySelector("#resultado");
          
          // renderizo en el DOM
          resultado.innerHTML = `
                    La conversión es de ${conversion.toFixed(3)}
               `
          
          
     };
     
     
};

calculoDivisaDiv = (number) => {
     const formMonto = document.querySelector("#formMonto");     // formulario del monto

     formMonto.onsubmit= (e) => {
          e.preventDefault();
          
          let monto = document.querySelector("#monto").value;    // input de monto
          let busqueda = monedas.find( moneda => moneda.id === number);    // busqueda en el array moneda
          let conversion = monto / parseFloat(busqueda.valor);     // calculo de divisa
          
          const resultado = document.querySelector("#resultado");
          
          // renderizo en el DOM
          resultado.innerHTML = `
                    La conversión es de ${conversion.toFixed(3)}
               `
          
          
     };
     
     
};