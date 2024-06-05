

function setItem(item:string){
sessionStorage.setItem("token",item)
}

function getItem(){

    return sessionStorage.getItem("token")

}

function clearStorage(){
    sessionStorage.clear()
}

export {setItem,getItem,clearStorage}
