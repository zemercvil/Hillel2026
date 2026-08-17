const arr = ["Happiness", "Wonderful", "Time", "Task", "Joyful", "Apple"];
const pattern = /^[^Aa]{6,}$/;

function checkStr(arr) {
    let results = [];
    for (let i of arr) 
        if (pattern.test(i)) {
            results.push(i);
        }
    return results;


}
console.log(checkStr(arr));
