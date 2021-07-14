/*setting quantity to 1*/
let quantities = Array.from(document.querySelectorAll('.qte'))
for (let quantity of quantities){
    quantity.setAttribute('value',1)
}
/* setting first pice */
let price = [45, 24, 20, 42, 33 ];
let pq = [1, 1, 1, 1, 1 ];
for (let i = 0; i < price.length; i++){
    document.querySelector(`.p-${i}`).innerHTML = price[i]  
}


/* function that calculates the total */
function total(price,pq) {
    let total = 0;
    for (let i = 0; i < price.length; i++) {
            let it= price[i] * pq[i]
            total += it
    }
    return total;
}
tt = total(price,pq)
document.querySelector('.tp').innerHTML = tt

/* setting the heart icon */
let hearts = Array.from(document.querySelectorAll('.fa-heart'))
for (let heart of hearts) {
    heart.addEventListener("click", function (e) {
        heart.style.setProperty('color', 'red')
    });
}


/* setting the delete icon */
for(let i=0; i< pq.length; i++){
    document.querySelector(`.icon-${i}`)
           .addEventListener("click", function(e) {
               pq[i] = 0;
               tt = total(price, pq)
               document.querySelector('.tp').innerHTML = tt
               nbri(pq);
               nbr = nbri(pq)
               document.querySelector('.nbr').innerHTML = nbr
               document.querySelector(`.it-${i}`).remove();
    });
}

/* setting the + btn */
for(let i=0;i<price.length;i++){
    document.querySelector(`.plus-btn-${i}`)
  .addEventListener("click", function(e) {
      document.querySelector(`.qte-${i}`).setAttribute('value',
      Number(document.querySelector(`.qte-${i}`).getAttribute('value')) + 1);
      pq[i] += 1;
      tt = total(price, pq)
      document.querySelector('.tp').innerHTML = tt
      nbri(pq);
      nbr = nbri(pq)
      document.querySelector('.nbr').innerHTML = nbr
      document.querySelector(`.p-${i}`).innerHTML = price[i]*pq[i]
  });
}

/* setting the - btn */
for (let i=0;i<price.length;i++){
    document.querySelector(`.minus-btn-${i}`)
  .addEventListener("click", function(e) {
      if(Number(document.querySelector(`.qte-${i}`).getAttribute('value')) >1){
          document.querySelector(`.qte-${i}`).setAttribute('value',
          Number(document.querySelector(`.qte-${i}`).getAttribute('value'))-1);
          pq[i] -= 1;
          tt = total(price, pq)
          document.querySelector('.tp').innerHTML = tt
          nbri(pq);
          nbr = nbri(pq)
          document.querySelector('.nbr').innerHTML = nbr
          document.querySelector(`.p-${i}`).innerHTML = price[i]*pq[i]
      } else {
          document.querySelector(`.qte-${i}`).setAttribute('value',1);
      }
      
  });
  }

/* function that calculate the number of items */
function nbri(pq) {
    let nbri = 0
    for (let i = 0; i < pq.length; i++){
        nbri = nbri + pq[i];
    }
    return nbri;
}
let nbr = nbri(pq)
document.querySelector('.nbr').innerHTML = nbr