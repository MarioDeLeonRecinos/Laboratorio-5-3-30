var palindroma = (n) => {
    let limite = n.length;
    let assist = n.split("");
    for (let i=0; i < limite; i++) {
        if (assist[i] != assist[limite - i -1]) {
            return false;
        }
    }
    return true;
}