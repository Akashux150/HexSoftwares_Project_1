function generateFibonacci() {

    let number = document.getElementById("numberInput").value;
    number = parseInt(number);

    if (isNaN(number) || number <= 0) {
        document.getElementById("result").innerHTML = "Enter valid number";
        return;
    }

    let fib = [];

    for (let i = 0; i < number; i++) {
        if (i == 0) {
            fib.push(0);
        } 
        else if (i == 1) {
            fib.push(1);
        } 
        else {
            fib.push(fib[i-1] + fib[i-2]);
        }
    }

    document.getElementById("result").innerHTML = fib.join(", ");
}
