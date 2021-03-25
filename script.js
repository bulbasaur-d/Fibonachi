function fib(n = +prompt('Vvedite chislo:')) {

    let arr = []
    if (n === undefined) { return 0; } else if (n === 0) {
        arr.push(0);
    } else if (n === 1) {
        arr.push(0, 1)

    } else if (n === 2) {
        arr.push(0, 1, 1)

    } else {
        let a = 1;
        let b = 1;
        arr.push(0);
        arr.push(a);
        arr.push(b);
        for (let i = 3; i <= n; i++) {


            let c = a + b;
            a = b
            b = c
            arr.push(b);


        }
    }
    return alert('Rezultat: ' + arr);
}


fib();