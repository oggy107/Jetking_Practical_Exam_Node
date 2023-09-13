const fact = (n) => {
    if (n == 1)
        return 1;

    return n * fact(n - 1);
}

const main = () => {
    console.log("Factorial of 5:", fact(5));
    console.log("Factorial of 4:", fact(4));
    console.log("Factorial of 6:", fact(6));
}

main();