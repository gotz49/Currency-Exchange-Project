
// Guardo precios de monedas en el localStorage
const verPrecios = document.querySelector("#verPrecios");

verPrecios.onclick = () => {
	let precios = document.querySelector("#precios");

	hideAndSeek(precios);
};

const cambiarPrecio = document.querySelector("#divisas");

cambiarPrecio.onsubmit = () => {
	const cero = document.querySelector("#usdToArg").value;
	const uno = document.querySelector("#argToUsd").value;
	const dos = document.querySelector("#usdToUyu").value;
	const tres = document.querySelector("#uyuToUsd").value;
	const cuatro = document.querySelector("#uyuToArg").value;
	const cinco = document.querySelector("#argToUyu").value;

	const monedas = [
		{
               id: 0, 
               valor:cero
          },
		{
               id: 1, 
               valor:uno
          },
		{
               id: 2, 
               valor:dos
          },
		{
               id: 3, 
               valor:tres
          },
		{
               id: 4, 
               valor:cuatro
          },
		{
               id: 5, 
               valor:cinco
          }
     ];

	guardarLocal("Monedas", JSON.stringify(monedas));
};


// Renderizado de los precios de monedas desde el localStorage
const monedas = JSON.parse(localStorage.getItem("Monedas"));

let verMonedas = document.querySelector("#verMonedas");

verMonedas.onclick = () => {
	let monedasDOM = document.querySelector("#monedasDOM");

	hideAndSeek(monedasDOM);

	if (monedas === null) {
		alert(` 
               No hay tipos de cambio aún.
               Por favor agreguelos con el botón "Editar tipos de Cambio"
          `);
	} else {
		monedasDOM.innerHTML = `
               <h1>Tipos de Cambio</h1>
               
               <p>USD -> $ARG = ${busqueda(0)}</p>
               <p>$ARG -> USD = ${busqueda(1)}</p>
               <p>USD -> $UYU = ${busqueda(2)}</p>
               <p>$UYU -> USD = ${busqueda(3)}</p>
               <p>$UYU -> $ARG = ${busqueda(4)}</p>
               <p>$ARG -> $UYU = ${busqueda(5)}</p>
          `;
	}
};



// eleccion del tipo de cambio
const eleccionConversor = document.querySelector("#eleccionConversor");

eleccionConversor.onchange = () => {
	let select = document.querySelector("#eleccionConversor");
     let value = select.options[select.selectedIndex].value;
     console.log(value);
	
	switch (value) {
          case "sinOpcion":
               alert("Elija una opción para la conversión que desea hacer.")
               break;
               
          case "cero":
               calculoDivisaPor(0);
               break;
          case "uno":
               calculoDivisaDiv(1);
               break;
          case "dos":
               calculoDivisaPor(2);
               break;
          case "tres":
               calculoDivisaDiv(3);
               break;
          case "cuatro":
               calculoDivisaPor(4);
               break;
          case "cinco":
               calculoDivisaDiv(5);
               break;
     
          default:
               break;
     }
};