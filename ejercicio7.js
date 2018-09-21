var bisiesto = (anno) => {

    if((anno%4 == 0 && anno%100 != 0) || anno%400 == 0){
        return "Es año bisiesto";
    }
    return "No es año bisiesto";

}