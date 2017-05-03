/*
 * Archivo principal de funcionalidad de JS
 */
 var modal = document.getElementById("modalId");

 var modalImagen = document.getElementById("img01");
 var captText = document.getElementById("caption");
 var imagenes = [];
 var spans = [];


 for (var i = 0; i < 12; i++){
   imagenes[i]=document.getElementsByClassName("mostrar")[i];
   imagenes[i].addEventListener("click", desplegar);
 }

 function desplegar(){
   modal.style.display = "block";
   modalImagen.src = this.src;
   captText.innerHTML = this.alt;
 }

 for (var i = 0; i < 12; i++){
   spans[i]=document.getElementsByClassName("close")[0];
   spans[i].addEventListener("click",cerrar);
 }


 function cerrar() {
   modal.style.display = "none";
 }
