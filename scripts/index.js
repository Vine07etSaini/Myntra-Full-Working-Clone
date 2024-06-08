let bagItems=[];
function onLoad(){
    bagItemsStr=localStorage.getItem('bagItems');
    bagItems=bagItemsStr ? JSON.parse(bagItemsStr) :[];
displayItemsOnHomePage();
displayBagIcon();
}
function displayItemsOnHomePage(){

let itemscontainerElement = document.querySelector('.items-container');
if(!itemscontainerElement){
    return;
}
let innerHtml='';
items.forEach(item=>{
    innerHtml+=`<div class="item-container">
    <img src=${item.image} class="item-image" alt="item image">
    <div class="rating">
        ${item.rating.stars} ⭐| ${item.rating.count}
    </div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount">(${item. discount_percentage}% OFF)</span>
    
    </div>
    <button class="btn-add-bag" onClick="addToBag(${item.id})">Add to Bag</button>
    </div>`
});
itemscontainerElement.innerHTML=innerHtml;

}
function displayBagIcon(){
   let bagItemCountElement=document.querySelector('.bag-item-count');
   if(bagItems.length>0){
    bagItemCountElement.style.visibility='visible';
    bagItemCountElement.innerText=bagItems.length;
   }
   else{
        bagItemCountElement.style.visibility='hidden';
   }
}
function addToBag(itemId){
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
   bagItems.push(itemId);
    displayBagIcon();
}
onLoad();