function checkProbabilityTheory (count)
{
let even = 0;
let odd = 0;
let percentEven, percentOdd;

    for (let i=0; i<count; i++)
    {
    let num = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    num%2 === 0 ? even = even + 1 : odd = odd + 1;
    console.log(`Згенероване число #${i+1}: ${num}`);
    }

    percentEven = (even/count)*100;
    percentOdd = (odd/count)*100;

    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${even}`);
    console.log(`Непарних чисел: ${odd}`);
    console.log(`Відсоток парних: ${percentEven}%`);
    console.log(`Відсоток непарних: ${percentOdd}%`);

}

checkProbabilityTheory(100);
