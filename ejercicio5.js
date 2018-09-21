var area = () => {
    var radio = prompt("Ingrese el radio de la circunferencia", 5);
    if(radio<=0){
        return -1;
    }
    else{
        return Math.PI*(radio**2); 
    }
}