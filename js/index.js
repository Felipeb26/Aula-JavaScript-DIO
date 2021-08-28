
function clicou(){
    document.getElementById("agrade").innerHTML="Boa sorte"
    //alert("agradecido");
}

function redirect(){
    window.open("https://www.kabum.com.br/")
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML="é nozes"
    elemento.innerHTML = "é nozes"
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML="passe o mouse aq"
    elemento.innerHTML = "passe o mouse aq"
}

function load(){
    alert("carregou")
}

function funcaoChange(elemento){
    alert(elemento.value)
}


/*var validar;
function validaIdade(idade){
    if (idade>=18){
        validar = true
    }else{
        validar = false
    }
}
var idade = prompt("qual a sua idade?")


function setReplace(frase, name, new_name){
    return frase.replace(name, new_name)
}

alert(setReplace("vai japao", "japao", "brasil"))

function soma(n1, n2){
    return n1+n2
}

alert(soma(5,10))

var d = new Date();
alert(d.getDate() + "/" + (d.getMonth()+1))

var count;
for(count=0; count<=5; count++){
    alert(count);
}

var count = 0;
while(count < 5){
    alert(count);
    count++;
}
var idade = prompt ("qual a sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}

ar lista =["maça","pêra","laranja"]
console.log(lista)
lista.push('uva')
lista.pop()*/