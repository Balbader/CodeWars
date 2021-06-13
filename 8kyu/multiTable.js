/*Your goal is to return multiplication table for number that is always an integer from 1 to 10.*/

const multiTable = (number) => {
    const table = [];
    for (let i = 1; i < 11; i++) {
        table.push(`${i} * ${number} = ${number * i}`);
    }
    return (table.join('\n'));
}

console.log(multiTable(5));
