let hora = parseInt (prompt("que hora es? formato de 24h"))

if (hora>0 && hora<6){
document.write("buena madrugada")
}
else if(hora>=6 && hora<=12){
document.write("buenos dias")
}
else if(hora>12 && hora<=19){
    document.write("buenas tardes")
}
else if(hora>19 && hora<=23){
    document.write("buenas noches")
}