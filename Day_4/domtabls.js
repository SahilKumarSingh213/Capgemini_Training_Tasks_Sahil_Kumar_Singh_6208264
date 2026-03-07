
let table = document.createElement("table");
table.border ="1"
table.cellSpacing="0"
for (let i = 0; i < 5; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 5; j++) {
        let cell = document.createElement("td");
        cell.style.padding="50px"
        row.appendChild(cell);
    }
    table.appendChild(row);
}
document.body.appendChild(table)