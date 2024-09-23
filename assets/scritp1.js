/* selectionner les element div et p qui vont changer au survol */
/* premier div1 */

let divmenbre1=document.querySelector('.div1');
let paragraphe1=document.querySelector('.p1')

divmenbre1.addEventListener('mouseover',()=>{
paragraphe1.style.color="#fff";
divmenbre1.classList.toggle('div1-changement');

})
/* pour le deuxiéme div */

let divmenbre2=document.querySelector('.div2');
let paragraphe2=document.querySelector('.p2')

divmenbre2.addEventListener('mouseover',()=>{
paragraphe2.style.color="#fff";
divmenbre2.classList.toggle('div2-changement');

})

/* troiziéme div */
let divmenbre3=document.querySelector('.div3');
let paragraphe3=document.querySelector('.p3')

divmenbre3.addEventListener('mouseover',()=>{
paragraphe3.style.color="#fff";
divmenbre3.classList.toggle('div3-changement');

})

/* quatriéme div */
let divmenbre4=document.querySelector('.div4');
let paragraphe4=document.querySelector('.p4')

divmenbre4.addEventListener('mouseover',()=>{
paragraphe4.style.color="#fff";
divmenbre4.classList.toggle('div4-changement');

})






