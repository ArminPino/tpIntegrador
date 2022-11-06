
window.addEventListener('load', function(){
   
    let botonBorrar = document.getElementById('borrar');
    let botonResumen = document.getElementById('resumen');

    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let correo = document.getElementById('correo');
    let cantidad = document.getElementById('cantidad');

    let categoria = document.getElementById('categoria');

    let resultado = document.getElementById('resultado');

    botonBorrar.addEventListener('click', function(){
        nombre.value = "";
        apellido.value = "";
        correo.value = "";
        cantidad.value = "";
        resultado.innerText = "Total a pagar: $"
    });

    botonResumen.addEventListener('click', function(){
        if( nombre.value == ""){
            alert("Nombre Obligatorio");
            return;
        }

        if( apellido.value == ""){
            alert("Apellido Obligatorio");
            return;
        }

        if( correo.value == ""){
            alert("Correo Obligatorio");
            return;
        }

        if( cantidad.value == ""){
            alert("Cantidad Obligatorio");
            return;
        }
       
        
       
        switch(categoria.options[categoria.selectedIndex].value) {
            case "1":
                resultado.innerText = "Total a pagar: $" + (parseInt(cantidad.value) * 40).toFixed(2);
                break;
            case "2":
                resultado.innerText = "Total a pagar: $" + (parseInt(cantidad.value) * 100).toFixed(2);
                break
            case "3":
                resultado.innerText = "Total a pagar: $" + (parseInt(cantidad.value) * 170).toFixed(2);
                break;
        }
    });
});