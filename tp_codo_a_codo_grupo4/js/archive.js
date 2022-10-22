function obtenerDatos(){

    var correcto = true;
    if(document.getElementById('name').value.length<2){
        correcto = false;
    }
    
    
    if(document.getElementById('last_name').value.length<2){
        correcto = false;
    }

    
    if(isNaN(document.getElementById('phone').value)){
        correcto = false;
    }

    
    if(document.getElementById('city').value == ''){
        correcto = false;
    }

    
    if(document.getElementById('msg').value.length<2){
        correcto = false;
    }

    if(!correcto){
        alert('Algunos valores no son correctos');
        alert('Por favor, revisar que los datos esten bien');
    }
    return correcto;
}