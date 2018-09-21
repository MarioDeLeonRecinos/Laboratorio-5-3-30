var fibonacci = (num) => {
    if (num <= 1){
        return 1; 
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

var fibonacciT = (num) =>{
    var array=[];
    for(let i=1; i <=num; i++){
        array.push(fibonacci(i));
    }
    return array;
}