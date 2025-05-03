function validarFormulario(){
    formularioValido= true;

        nombre=document.getElementById("nombre");
        errorNombre=document.getElementById("errorNombre");

        if(nombre.value.trim() == ""){
        errorNombre.textContent= "Te has equivocado esta vacio";
        formularioValido=false;
        errorNombre.style.color= "red";
        }
       
        else if (nombre.value.trim().length < 3){
            errorNombre.textContent = "El nombre debe tener al menos 3 caracteres"
            formularioValido=false;
        }
        else{
            errorNombre.textContent="";
        }

        Password=document.getElementById("password")
        errorPassword=document.getElementById("errorPassword")

        if(Password.value.trim() == ""){
            errorPassword.textContent="Rellena la contraseña";
            formularioValido=false;
            errorPassword.style.color="red";
        }

        else{
            errorPassword.textContent="";
        }

        checkbox=document.getElementById("terminos");
        errorTerminos=document.getElementById("errorTerminos");

        if(checkbox.checked == false){
           
            errorTerminos.textContent= "Acepta los terminos y condiciones antes de avanzar";
            formularioValido=false;
            errorTerminos.style.color="red"

        }

        else{
            errorTerminos.textContent="";
        }

        radio=document.getElementsByName("genero");
        errorGenero=document.getElementById("errorGenero");
        generoseleccionado=false;
       
        for(i = 0; i< radio.length ; i++){
            if(radio[i].checked)
            generoseleccionado=true;
        }

        if (!generoseleccionado){

            errorGenero.textContent="Por favor, selecciona un genero";
            formularioValido=false;
            errorGenero.style.color="red"
        }

        else{
            errorGenero.textContent="";
        }


        pais=document.getElementById("pais");
        errorPais=document.getElementById("errorPais");

        if(pais.value.trim() == ""){
            errorPais.textContent="Selecciona un pais";
            formularioValido=false;
            errorPais.style.color="red";
        }

        else{
            errorPais.textContent="";
        }

        comentarios=document.getElementById("comentarios");
        erorrComentarios=document.getElementById("errorComentarios");

        if(comentarios.value.trim() == ""){
            erorrComentarios.textContent="Haz un comentario";
            formularioValido=false;
            erorrComentarios.style.color="red";
        }

        else{
            erorrComentarios.textContent="";
        }

        if(formularioValido){
            alert("El formulario se ha enviado")
        }
}