const sliders = document.querySelectorAll("input[type='range']");

sliders.forEach(function(slider){
    slider.addEventListener("input",calculateTip);
});

const billInput = document.getElementById("bill");
billInput.addEventListener("change",calculateTip);


function calculateTip(){
     let bill = parseFloat(billInput.value);
     let tipPercentage = document.getElementById("tip").value;
     let noOfPeople = document.getElementById("no-of-people").value;
     
     billInput.value = bill.toFixed(2);
     if(bill>=0)
     {    
     let tip=parseFloat(tipPercentage/100);
     let totalTip =(parseFloat(bill * tip)).toFixed(2);
     console.log(bill +parseFloat(totalTip))
     let total = (parseFloat(bill +parseFloat(totalTip))).toFixed(2);
     let tipPerPerson = (totalTip/ noOfPeople).toFixed(2);
     let totalPerPerson = (total/ noOfPeople).toFixed(2);
     

     document.getElementById("tip-percentage").innerHTML = tipPercentage+"%";
     document.getElementById("split-num").innerHTML = noOfPeople;
     document.getElementById("tip-per-person").innerHTML = "$"+tipPerPerson;
     document.getElementById("total-per-person").innerHTML = "$"+totalPerPerson;
     }
}
calculateTip();

