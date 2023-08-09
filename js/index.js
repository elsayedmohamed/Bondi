

const h11= document.getElementById('title');


const btn = document.getElementById('change');

btn.onclick =()=>h11.innerHTML+=" salma".toUpperCase();

localStorage.setItem(JSON.stringify(btn))

console.log(localStorage.getItem(btn))
