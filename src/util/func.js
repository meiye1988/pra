const setItems=(data)=>{
    console.log(data);
    localStorage.setItem("state",JSON.stringify(data));
}
const getItems=()=>{
   // console.log(localStorage.getItem('state'));
     return localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : '';
}
const removeItems=()=>{
    localStorage.removeItem("state")
}
export default{
    setItems,
    getItems,
    removeItems
}