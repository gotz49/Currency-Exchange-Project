

// function para guardar cosas en el localStorage
const guardarLocal = (key, value) => {
     localStorage.setItem(key, value);
};




// function para esconder y mostrar cosas en el DOM
const hideAndSeek= (etiqueta) => {
     etiqueta.style.display === "none" 
          ? etiqueta.style.display = "block" 
          : etiqueta.style.display ="none"
};







// function para buscar en el array segun el id del tipo de cambio
const busqueda = (id) => {
     let valorEncontrado = monedas.find( moneda => moneda.id === id)
     let retorno = parseFloat(valorEncontrado.valor);
     return retorno
};






//function que hace la magia 
calculoDivisaPor = (number) => {
     const formMonto = document.querySelector("#formMonto");     // formulario del monto

     formMonto.onsubmit= (e) => {
          e.preventDefault();
          
          let monto = document.querySelector("#monto").value;    // input de monto
          let conversion = busqueda(number) * monto;     // calculo de divisa
          
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
          let conversion = monto / busqueda(number);     // calculo de divisa
          
          const resultado = document.querySelector("#resultado");
          
          // renderizo en el DOM
          resultado.innerHTML = `
                    La conversión es de ${conversion.toFixed(3)}
               `
          
          
     };
     
     
};