function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento");)
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.projetame.com/");
    window.location.href= "https://www.projetame.com/";//abre na mesma página'
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";

}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    //alert("trocar texto");
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    alert(elemento.value);

}






//var nome = "Marcos Granado";
//var idade = 26;
//alert(nome + " tem " + idade + " anos" );
/*var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("maior de idade");
}
else{
    alert("menor de idade");
};*/
/*
var count = 5;
while(count <5){
    console.log(count);
    alert(count);
    count = count ++;;
}

var counter;
for(counter=0; counter<=0; couter ++){
    alert(count);
};*/
/*var d = new Date();
//alert(d);
alert(d.getDay());*/

/*function soma(n1, n2){
    return n1+n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));*/
/*
function validaIdade(idade){
    
    if(idade>=18){
        validar = true
    }
    else{
        validar = false
    }
    return validar;
}
var idade = prompt("qual a sua idade?")
console.log(validarIdade(idade));*/