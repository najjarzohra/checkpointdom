








var btnplus = document.getElementsByClassName('btn-plus')
console.log('btn-plus',btnplus)

for (let j=0;j<btnplus.length ; j++){
btnplus[j].addEventListener('click',function(){
    btnplus[j].previousElementSibling.innerText ++
    
})

}
var btnmoins=document.getElementsByClassName('btn-moins')
console.log('btn-moins',btnmoins)
for (let i=0;i<0;i--){

    btnmoins[i].addEventListener('click',function(){
btnmoins[i].nextElementSibling.innerText--
})
}


var deletbtn = document.querySelectorAll('.btn-delete')
console.log('delet',deletbtn)

for (let k=0;k<deletbtn.length;k++){

deletbtn[k].addEventListener('click',()=>{
deletbtn[k].parentElement.parentElement.remove()


})
}


