var binario = (num) => {
    let aux="";
    while(num > 1){
        if(num%2 == 0){
            aux=aux+"0";
        }
        else{
            aux=aux+"1";
        }
        num=Math.trunc(num/2);
    }
    if(num == 1){
        aux=aux+"1";
    }
    let splitString = aux.split("");
    var reverseArray = splitString.reverse();
    aux = reverseArray.join("");
    return aux;
}