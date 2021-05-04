function Year(){
const year=(new Date().getFullYear()-1)+" - "+new Date().getFullYear();
document.getElementById('year').innerText=year;

}

Year();