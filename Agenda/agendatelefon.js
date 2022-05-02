let state = {
    list:[
        {
        nume: "Petrica",
        telefon:"0755667788",
        },
    ],
    idxEdit:null,
};

function draw(){
    let table = document.querySelector("#list tbody");
    let str = "";
    for (i = 0; i<state.list.length; i++){
        let elem = state.list[i];
        str+=` <tr>
                <td><a href="${elem.nume}">${elem.nume}</a></td>
                <td><a href="${elem.telefon}">${elem.telefon}</a></td>
                <td>
                <button onclick="del(${i})">Delete</button>
                <button onclick="edit(${i})">Modifica</button>
                </td>
            </tr> 
            `;
    }
    table.innerHTML = str;
}

function edit(idx){
    let elem = state.list[idx];
    document.querySelector("[name ='Nume']").value = elem.nume;
    document.querySelector("[name ='Numar']").value = elem.telefon;

state.idxEdit = idx;
}


function del(idx){
    if(
        confirm(`Esti sigur ca vrei sa stergi contactul :${state.list[idx].nume}?` )
     ){
    state.list.splice(idx,1);
    draw();
    }
}
///#b6aac0


function adauga(event){
    event.preventDefault();
    let nume = document.querySelector("[name ='Nume']").value.trim();
    let numar = document.querySelector("[name ='Numar']").value.trim();
    if(state.idxEdit === null) {
        state.list.push({
            nume: nume,
            telefon: numar,
        });
    }else {
        state.list[state.idxEdit]={
            nume: nume,
            telefon: numar,
        };
        state.idxEdit = null;
    }
   
    document.querySelector("form").reset();
    draw();
}

