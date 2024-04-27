$(document).ready(function(){
$("#Registro").submit(function(event){

    event.preventDefault();
}
);


var nombre =$("#nombre").val();
var app =$("#app").val();
var email =$("#email").val();
var pass =$("#pass").val();
var conPass =$("#conPass").val();
var direccion =$("#direccion").val();

if (nombre==" ",app ==" ",email==" ",pass==" ",conPass==" ",direccion==" "){
    alert("ingresa algo po shiorooooo");
    return;
}



}
);