

const d = document;
function crearTexto() {
    let formulario = d.getElementById("miFormulario");
    let resultado = d.getElementById("resultado");
    let nombre = formulario["nombre"].value;
    let color = formulario["color"].value;
    let fuente = formulario["fuente"].value;
    let tachado = formulario["tachado"].checked;
    let negrita = formulario["negrita"].checked;
    let cursiva = formulario["cursiva"].checked;
    let versalita = formulario["versalita"].checked;
    let subrayado = formulario["subrayado"].checked;

    resultado.replaceChildren(crearTextoConEstilos(nombre, color, fuente, tachado, negrita, cursiva, versalita, subrayado));

    let opciones = "left=100,top=100,width=250,height=300";
    let ventana = window.open("", "", opciones);

    let h1 = d.createElement("h1");
    h1.innerText = nombre;

    let hr = d.createElement("hr");
    let button = d.createElement("button");
    button.innerText = "cerrar";
    button.addEventListener("click", () => ventana.close());

    ventana.document.body.appendChild(h1);
    ventana.document.body.appendChild(hr);
    ventana.document.body.appendChild(crearTextoConEstilos(nombre, color, fuente, tachado, negrita, cursiva, versalita, subrayado));
    ventana.document.body.appendChild(button);

}

function crearTextoConEstilos(nombre, color, fuente, tachado, negrita, cursiva, versalita, subrayado) {
    let texto = document.createElement("p");
    texto.innerText = nombre;

    texto.style.textTransform = "capitalize";
    texto.style.color = color;
    texto.style.fontFamily = fuente;
    texto.style.fontSize = "3rem"; // 48px
    texto.style.textDecoration = tachado && "line-through";
    texto.style.fontWeight = negrita && "bold";
    texto.style.fontStyle = cursiva && "italic";
    texto.style.fontVariant = versalita && "small-caps";
    texto.style.textDecoration = subrayado && "underline";

    return texto;
}


