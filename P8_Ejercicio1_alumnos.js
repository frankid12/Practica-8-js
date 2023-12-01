const d = document;
function crearTexto(params) {
    let formulario = d.getElementById("miFormulario");
    let nombre = formulario["nombre"].value;
    let color = formulario["color"].value;
    let fuente = formulario["fuente"].value;
    // let color = d.getElementById("color").value.toLowerCase();
    // let fuente = d.getElementById("fuente").value.toLowerCase();
    console.log(formulario["negrita"].checked);
}

