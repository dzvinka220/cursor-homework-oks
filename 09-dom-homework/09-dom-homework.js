function generateColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16) // 16777215.toString(16)==ffffff
  };

function createTable(){
    const table = document.createElement("table");
    document.body.append(table);
    for (let i=0; i<5; i++){
      let tr = document.createElement("tr");
      table.append(tr);
      for (let i=0; i<5; i++){
        let td = document.createElement("td");
        tr.append(td);
      }
    }
  }
function setColor(){
  let box = document.querySelectorAll("td");
  box.forEach(element => {
    element.setAttribute("style", `background: ${generateColor()}; border: 3px dotted black; opacity: 0.77; `);
  });
  return box;
}  
setInterval (setColor, 1000);
createTable();
setColor();