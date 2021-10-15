/*
    ===== Código de TypeScript =====
*/


function add(a: number,b: number): string{
    return (a+b).toString();
}

const response = add(7,11);
console.log(response);


const addArrow = (a: number,b: number): string => {
    return (a+b).toString();
}
console.log(addArrow);

function product(number: number, base: number, number2?: number): number {
    return(number * base);
}

const productResponse = product(10,20);
console.log(productResponse);