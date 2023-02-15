document.getElementById('add-cart').addEventListener('click',function(){
    const quantityField = document.getElementById('quantity-field').value;
    const quantity = parseFloat(quantityField);
    
    const priceKGFiled= document.getElementById('price-kg').innerText;
    const priceKG = parseFloat(priceKGFiled);
    const Price = priceKG * quantity;

    const totalPriceField = document.getElementById('total-price').innerText;
    const totalPrice = parseFloat(totalPriceField);
    const netTotal = Price + totalPrice;
    document.getElementById('total-price').innerText = netTotal;
    document.getElementById('quantity-field').value = '';
    document.getElementById('add-cart').setAttribute('disabled',true);   
})

document.getElementById('btn-apply').addEventListener('click', function(){
    const totalPriceField = document.getElementById('total-price').innerText;
    const totalPrice = parseFloat(totalPriceField);
    
    const couponCodeField = document.getElementById('coupon-code').value;
    // const couponCode = parseFloat(couponCodeField);
    let netPayableAmount = 0;
    if(couponCodeField == 'DISC30'){
        netPayableAmount = totalPrice * 0.7;        
    }
    else{
      netPayableAmount = totalPrice;
    }

    // const netPayableAmount = totalPrice * 0.7;
    document.getElementById('net-price').innerText = netPayableAmount;
    document.getElementById('coupon-code').value = '';
    document.getElementById('btn-apply').setAttribute('disabled',true)
})