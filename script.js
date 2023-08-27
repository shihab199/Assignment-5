function productAddToCart(name,price){
    const prodName = document.getElementById(name).innerHTML;
    const prodPrice= document.getElementById(price).innerHTML;
   
    const prodPriceFloat = parseFloat(prodPrice);
    const roundedPrice = Number(prodPriceFloat.toFixed(2));
 
    setItemsCart(prodName);
    setItemsCartPrice(roundedPrice)
    setItemsCartPrice(itemPrice)
}




function setItemsCart(itemName){
const itemsCard= document.getElementById('cart-items');
const count= itemsCard.childElementCount;
    const p=document.createElement('p');
    p.innerHTML= `${count+1}. ${itemName}`
    p.classList.add('text-[24px]')
    p.classList.add('font-medium')
    itemsCard.appendChild(p);
}

let totalPrice = 0;
function setItemsCartPrice(itemPrice) {
    itemPrices.push(itemPrice);
    totalPrice = itemPrice.reduce((sum, price) => sum + price, 0);
    const itemsPriceCard = document.getElementById('total-price');
    itemsPriceCard.innerHTML = totalPrice.toFixed(2);


    const makePurchaseBtn = document.getElementById('make-purchase-btn');
    if (totalPrice > 0) {
        makePurchaseBtn.removeAttribute('disabled');
    }

const total= totalPrice;


const totalCost= document.getElementById('total');
totalCost.innerHTML= total.toFixed(2);


}


const couponCode = document.getElementById('coupon-code').addEventListener('keyup', function(event){
    if(event.target.value==="SELL200" && totalPrice>=200 ){
        applyBtn.removeAttribute('disabled')
    }else{
        applyBtn.setAttribute('disabled', true)
    }
})


let discount=0;
function generateDiscount(){
    discount= totalPrice*0.2;
    calculateDiscount.innerHTML= discount.toFixed(2);


const total= totalPrice-discount;
const totalCost= document.getElementById('total');
totalCost.innerHTML= total.toFixed(2);
}

