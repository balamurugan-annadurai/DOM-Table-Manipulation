///////////////getting elements////////////////
const form = document.getElementById("form");
//
const firstName = document.getElementById("first-name");
const LastName = document.getElementById("last-name");
const email = document.getElementById("email");
const address = document.getElementById("address");
const pincode = document.getElementById("pincode");
const gender = document.getElementById("gender");
const state = document.getElementById("state");
const country = document.getElementById("country");
//
const submitBtn = document.getElementById("submit");
//
const table = document.getElementById("table");
const tbody = document.getElementsByTagName("tbody")[0];
////////////////////////////////////////////////////

///////////Enable and disable submit button//////////
form.addEventListener("input",()=>{
    if(firstName.value.trim() !== '' && LastName.value.trim() !== '' && email.value.trim() !== '' && address.value.trim() !== '' && pincode.value.trim() !== '' && gender.value.trim() !== '' && state.value.trim() !== '' && country.value.trim() !== ''){
        submitBtn.removeAttribute("disabled");
    }
    else{
        submitBtn.setAttribute("disabled","disabled")
    }
    
})
///////////////////////////////////////////////////////

////////function to get values from radio buttons//////
const foods = ["fruits","vegetables","dairy","snacks","desserts"];

function getFoodItems(foods){
    const selectedFoods = [];
    let count = 0;
    let foodNames = [];
    foods.forEach((food)=>{
        const isSelected = document.querySelector(`input[name=${food}]:checked`);
        if(isSelected){
            count++;
            selectedFoods.push(isSelected);
        }
    })
    if(count<2){
       alert("atleast select any 2 foods")
    }
    else{
      selectedFoods.forEach((food)=>{
         foodNames.push(food.value);
      })
    }
    return foodNames.join(",");
}

//////////////////////////////////////////////////////

///////////////Submit From action////////////////////
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    
    const selectedFoods = {
        value:getFoodItems(foods)
    }
    let inputIds = {
        a:firstName,
        b:LastName,
        c:email,
        d:address,
        e:pincode,
        f:gender,
        g:selectedFoods,
        h:state,
        i:country
    }
    
    if(selectedFoods.value != ""){
        const tr = document.createElement("tr");
        for(let key in inputIds){
            const td = document.createElement("td");
            td.textContent = inputIds[key].value.trim();
            tr.appendChild(td);
            tbody.appendChild(tr);
        } 
        form.reset();
        submitBtn.setAttribute("disabled","disabled")
    }
})
 /////////////////////////////////////////////////////