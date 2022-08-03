const $ = selector => document.querySelector(selector)

const $formMonto = $('#formMonto');
const $monto = $('#monto');
const $submit = $('#convertirButton');
const $resultado = $('#resultado');
const eleccionConversor = $("#eleccionConversor");

eleccionConversor.onchange = () => {
	let select = document.querySelector("#eleccionConversor");
	let value = select.options[select.selectedIndex].value;

	
	switch (value) {
		case "sinOpcion":
               swal({
                    title: "Error",
                    text: "Debes elegir una opción de conversión",
                    icon: "error",
                    confirm: "ok",
                    timer: 2000
               })
			

		case "1":
			console.log('case 1');
               convertir1();
			break;
			
		case "2":
			console.log('case 2');
			convertir2();
			break;
			
		default:
			break;
	}
}
