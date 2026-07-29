let x = 7;
let y = 2;


function pow(x,y) {
    let exponentiation = x;
    if (y === 0)
    {
        exponentiation = 1;
    }
    else if (y < 0)
    {
        console.log(`Значення ступеню негативне = ${y}. Введіть значення y >=0.`)
        return null;
    }
    else 
    {
            for (let i = 2; i <= y; i++)
            {
    
                exponentiation = exponentiation * x;

            }
    }
    return exponentiation;

}
const result = pow(x, y);
console.log(`Результат возведення ${x} в ступінь ${y} = ${result}`)