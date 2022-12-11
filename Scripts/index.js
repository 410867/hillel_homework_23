const body = document.querySelector('body');
const table = document.createElement('table');
let count = 1;

for(let i = 0; i < 10; i++) {
    const tr = document.createElement('tr');
    for(let j = 0; j < 10; j++) {
        const td = document.createElement('td');
        td.innerHTML = `${count}`;
        count++;
        tr.append(td);
    }
    table.append(tr);
}
body.append(table);
