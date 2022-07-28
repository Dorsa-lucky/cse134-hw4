document.getElementById("userInput").innerHTML = load_data();

// getting data
export function getElem(id){
    let actual_element = document.getElementById(id);
    return actual_element;
}

// input dialog
export function showAdd(){
    getElem("addDialog").show();
}

// edit dialog 
export function showEdit(tmp_element){
    getElem("editDialog").show();
    let edit_elem = tmp_element;
}

export function add_li(str){
    let inputList = elem("list");
    let li = document.createElement("li");
    let btnEdit = document.createElement("button");
    btnEdit.className = "editBtn"
    btnEdit.innerHTML = "Edit";
    let btnDelet = document.createElement("button");
    btnDelet.className = "deletBtn"
    btnDelet.innerHTML = "Delete";
    
    li.innerHTML = str ;
    li.appendChild(editBtn);
    li.appendChild(deletBtn);
    ulist.appendChild(li);
}

export function delete_li(tmp_ul){
    tmp_ul.parentNode.remove();
}

export function edit_li(tmp_elem){
    showAdd(temp_elem);
}

function saveData(str){
    localStorage.setItem('userInput', JSON.stringify(str));
}

function loadData() {
    let getData = JSON.parse(localStorage.getItem('userInput'));
    return getData;
}
