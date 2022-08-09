//! guardar ultima conversion en storage



const guardarStorage = (anterior) => {
     
     const enJSON = JSON.stringify(anterior)
     localStorage.setItem("anterior", enJSON)
     
};



window.addEventListener('DOMContentLoaded',  (e) => {
     if (localStorage.getItem("anterior") != null){
          let anterior = JSON.parse(localStorage.getItem("anterior"))
          
          const renderAnterior = $("#anterior");
          
          renderAnterior.innerHTML = `${anterior}`
     } else {
          const renderAnterior = $("#anterior");
          
          renderAnterior.innerHTML = `Aún no ha hecho ningúna conversión.`
     }
});



// display block || none, de la ultima conversion
$submit.onclick = () => {
     const displayAnterior = $("#anterior");
     
     displayAnterior.style.display === "block" ? displayAnterior.style.display = "none" : displayAnterior.style.display = "block"
};