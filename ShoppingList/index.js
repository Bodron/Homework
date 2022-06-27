let state ={
    list:[
        {
        nume:"carnati",
        cumpara:false
    },
    {
        nume:"pastrama",
        cumpara:false
    },
    ],
    idxEdit:null,
    sortColumn:null,
    sortDirection:1, // 1 asc, -1 desc

};

function sortTableAsc(){
    let aux = "";
    for(let i=0; i < state.list.length; i++){
        for(let j = i+1; j< state.list.length; j++){
            if(state.list[i].nume > state.list[j].nume){
                aux = state.list[i].nume ;
                state.list[i].nume  = state.list[j].nume;
                state.list[j].nume = aux;
            }
        }

    }
    draw();
}

function sortTableDesc(){
    let aux = "";
    for(let i=0; i < state.list.length; i++){
        for(let j = i+1; j< state.list.length; j++){
            if(state.list[i].nume < state.list[j].nume){
                aux = state.list[i].nume ;
                state.list[i].nume  = state.list[j].nume;
                state.list[j].nume = aux;
            }
        }

    }
    draw();
}


function adauga(event){
    event.preventDefault();
    let nume = document.querySelector("[name=item]").value.trim();
    state.list.push({
        nume:nume,
        cumpara:false
    });
    document.querySelector("form").reset();
    draw();
}

function draw(){
    let table = document.querySelector("#list tbody");
    let str = "";
    for (let i = 0; i<state.list.length; i++){
        let elem = state.list[i];
        str+=`
        <tr>
                <td  style="${elem.cumpara === true ? 'text-decoration: line-through' : '' }" id="${i}"><a href="${elem.nume}">${elem.nume}</a></td>
                <td>
                <button onclick="cut(${i})">Mark as Buyed</button>
                <button onclick="del">Delete</button>
                </td>
        </tr>
        `;
    }
    table.innerHTML = str;
}
function cut(idx){
    
    state.list[idx].cumpara = true;
   
    draw();
}
