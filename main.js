var favs=Array.from(document.querySelectorAll('.fa-heart'));
var deleteBtns=Array.from(document.querySelectorAll('.fa-trash-alt'));
var cards = Array.from (document.querySelectorAll(".card"));
var plusBtns=Array.from (document.querySelectorAll(".fa-plus-circle"));
var minusBtns=Array.from (document.querySelectorAll(".fa-minus-circle"));


/* LIke */
for (let fav of favs)
(
    fav.addEventListener("click",
    function(){
        if (fav.style.color=="black"){
            fav.style.color="red"
        } else {
            fav.style.color="black"
        }
    }
    )
)

/* delete */
for (let i in deleteBtns) {
    deleteBtns[i].addEventListener("click",
    function(){
        cards[i].remove(),
        total()
    })
}



/* plus*/
for (let plusBtn of plusBtns) {
    plusBtn.addEventListener("click",
    function(){
        plusBtn.nextElementSibling.innerHTML++
        total()
    })
}

/*minus*/
for (let minusBtns of minusBtns) {
    minusBtn.addEventListener("click",
    function(){
        minusBtn.previousElementsibling.innerHTML > 0 ?
        minusBtn.previousElementsibling.innerHTML-- :
        null,
        total()
    })
}
function total(){
    let qte=Array.from(doccument.querySelectorAll(".qute"));
    let price=array.from(document.querySelectorAll(".unitt-price")
    let s=0
    for(let i=0 ; i<price.length ; i++)
    {
        s=s+price[i].innerHTML*qte[i].innerHTML ;
    )
    document.getElementById("total-price").innerHTML= s
}












