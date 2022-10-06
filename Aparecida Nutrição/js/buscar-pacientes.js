var buscarPacientes = document.querySelector("#buscar-pacientes");

buscarPacientes.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes11111");

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        
        if(xhr.status == 200){
        erroAjax.classList.add("invisivel");
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);

        pacientes.forEach(function(pacientes){
            adicionaPacientesNaTabela(pacientes);
        });
        }
    else{
        erroAjax.classList.remove("invisivel");
    }
    });
    xhr.send();
});