document.write("ejercicio 1","<br>")
let hora = parseInt (prompt("que hora es? formato de 24h"))

if (hora>=0 && hora<6){
document.write("buena madrugada ")
}
else if(hora>=6 && hora<=12){
document.write("buenos dias ")
}
else if(hora>12 && hora<=19){
    document.write("buenas tardes ")
}
else if(hora>19 && hora<=23){
    document.write("buenas noches ")
}
document.write("<br>","ejercicio 2 ","<br>")
let altura = parseFloat (prompt("cual es su altura? "))
let peso =parseFloat (prompt("cual es su peso? "))
let imc = peso/(altura*altura)

if(imc<18.5){
 document.write("usted esta en el rango de peso insuficiente")
}
    else if(imc>18.5 && imc<25.0){
    document.write("usted esta en el rango de peso normal o saludable")
    }
        else if(imc>25.0 && imc>30.0){
        document.write("usted esta en el rango de sobrepeso")
        }
            if(imc>30.0){
            document.write("usted esta en el rango de obesidad")
            }

document.write("<br>","ejercicio 3","<br>")
let numO =parseInt((Math.random()*100)+1);
console.log(numO)
alert("adivina el numero")

let opor = 6
while(opor>0){
    alert(`tienes ${opor} oportunidades`)
    let numA = parseInt(prompt("ingresa un numero"))
    if (numA==numO){
        document.write("!!Ganaste!!")
        break
    }
        else if (numA>numO){
        alert("el numero es mayor al numero secreto")
         }
            else if (numA<numO){
            alert("el numero es menor al numero secreto")
            }
    opor--
}
if (opor==0){
    document.write("Perdiste")
}