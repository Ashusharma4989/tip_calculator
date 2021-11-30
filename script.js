const tipcalcy=()=>{
    let amount=document.getElementById('bill_amount').value;
    let perc=document.getElementById('tip_percent').value;
    let tip=amount*(perc/100);
    let total_bill=tip+amount;
    document.getElementById('tip_amount').value=tip;
    document.getElementById('total_bill').value=total_bill;
}