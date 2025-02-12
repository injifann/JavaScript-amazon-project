export const cart=[


];

export function addToCart(productid)
{
  let matchingItem;

  cart.forEach((CartItem)=>
    {
      if(productid===CartItem.productid)
      {
      matchingItem=CartItem;;
      }
  
    })
  
    if(matchingItem)
    {
      matchingItem.quantity+=1;
  
    }
    else
    {
      cart.push({
        productId:productid,
        quantity:1
  
      });
    }
  
}

