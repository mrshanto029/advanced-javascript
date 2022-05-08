let bonus = 20;

function sum(first, second) {
    let result = first + second + bonus;
    if (result > 5) {
        let mood = "happy";
        mood = "worried";
        mood = "sad";
        console.log(mood);
    }
    console.log(mood);
    // console.log(result);
    return result;
}
const output = sum(2, 3);
// console.log(bonus);
// console.log(output);s