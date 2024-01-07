let bagItems;
onLoad();

function onLoad()
{
  let bagItemStr = localStorage.getItem('bagItems');
  bagItems= bagItemStr ? JSON.parse(bagItemStr):[];
  displayItemsHome();
  displayCount();
 
}

function displayItemsHome()
{
  let containerElement= document.querySelector('.item_container');

  if(!containerElement){return;}


let innerHTML='';
items.forEach(item=>{
innerHTML+=`<div class="items">
<img class="item_image" src="${item.image}" alt="image">
<div class="rating">${item.rating.stars}⭐ | ${item.rating.count}</div>
<div class="company_name">${item.company}</div>
<div class="item_name">${item.item_name}</div>
<div class="price">
  <span class="current_price">Rs ${item.current_price}</span>
  <span class="original_price">Rs ${item.original_price}</span>
  <span class="discount">(${item.discount_percentage}% OFF)</span>
</div>
<button class="addTo_bag" onclick="addToBag(${item.id})" >    <span class="material-symbols-outlined action_icon">
shopping_bag
</span>ADD TO BAG</button>
</div>

`
})
containerElement.innerHTML=innerHTML;

}


function addToBag(itemId)
{
  bagItems.push(itemId);
  localStorage.setItem('bagItems',JSON.stringify(bagItems));
  displayCount();

  
  
    
}

function displayCount()
{
  let count = document.querySelector('.bagItemCount');

  if(bagItems.length>0)
  {
    count.style.visibility ='visible';
    count.innerText = bagItems.length;
  }
  else 
  {
    count.style.visibility ='hidden';
  }
}


