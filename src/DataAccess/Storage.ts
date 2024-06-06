

function setItem(item:string){
sessionStorage.setItem("token",item)
}

function isAuthenticated(){
    return !!getItem()
}

function getItem(){

    return sessionStorage.getItem("token")

}

function clearStorage(){
    sessionStorage.clear()
}

export {setItem,getItem,clearStorage,isAuthenticated}
