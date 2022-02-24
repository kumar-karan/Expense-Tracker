const inputBox= document.querySelector(".inputField input")
const addBtn= document.querySelector(".inputField button")
const Finance= document.querySelector(".Finance")
const deleteAllBtn= document.querySelector(".footer button")
inputBox.onkeyup = ()=>{
    let userData= inputBox.value;
    if(userData.trim() !=0){
        addBtn.classList.add("active");
    }
    else{
        addBtn.classList.remove("active");
    }
}

showItem(); 


addBtn.onclick = ()=>{
    let userData= inputBox.value;
    let getLocalStorage = localStorage.getItem("New Item");
    if(getLocalStorage==null){
        listArr=[];

    }
    else{
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New Item", JSON.stringify(listArr));
    showItem(); 
}



function showItem(){
    let getLocalStorage = localStorage.getItem("New Item");
    if(getLocalStorage==null){
        listArr=[];

    }
    else{
        listArr = JSON.parse(getLocalStorage)
    }
    let newLiTag= '';
    listArr.forEach((element,index) =>{
        newLiTag +=  `<li> ${element} <span onclick=deleteItem(${index})><i class="fa-solid fa-trash"></i></span></li>`;
    });
    Finance.innerHTML = newLiTag;
    inputBox.value="";


}

function deleteItem(index){
    let getLocalStorage = localStorage.getItem("New Item");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index,1); 
    localStorage.setItem("New Item", JSON.stringify(listArr));
    showItem(); 
}

deleteAllBtn.onclick = () => {
    listArr = [];
    localStorage.setItem("New Item", JSON.stringify(listArr));
    showItem(); 
}
