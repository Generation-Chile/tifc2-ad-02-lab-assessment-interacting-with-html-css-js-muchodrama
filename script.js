// Modifica el primer "¡Hola mundo!" para que diga "Adiós"
document.getElementById("rojo").textContent = "Adiós";

// Cambia el color de fuente del primer h1 a naranja
document.querySelector("h1").style.color = "orange";

// Hace que el encabezado con id "clickeable" cambie su color a marrón al hacer clic
document.getElementById("clickeable").addEventListener("click", function() {
  this.style.color = "brown";
});