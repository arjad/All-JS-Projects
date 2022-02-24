let names = [
  "Ayla",
  "Jake",
  "Sean",
  "Henry",
  "Brad",
  "Stephen",
  "Taylor",
  "Timmy",
  "Cathy",
  "John",
  "Amanda",
  "Amara",
  "Sam",
  "Sandy",
  "Danny",
  "Ellen",
  "Camille",
  "Chloe",
  "Emily",
  "Nadia",
  "Mitchell",
  "Harvey",
  "Lucy",
  "Amy",
  "Glen",
  "Peter",
];
//Sort names 
let sortedNames = names.sort();

//reference
let input = document.getElementById("input");
input.addEventListener("keyup", (e) => {

  //Initially remove all 
  removeElements();

  for (let i of sortedNames) {
    //convert input to lowercase and compare with each string

    if ( i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != "" ) 
    {

      let listItem = document.createElement("li");
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";

      listItem.setAttribute("onclick", "displayNames('" + i + "')");
      
      //Display matched part in bold
      let word = "<b>" + i.substr(0, input.value.length) + "</b>";
      word += i.substr(input.value.length);
      
      listItem.innerHTML = word;
      document.querySelector(".list").appendChild(listItem);
    }
  }
});


function displayNames(value) 
{
  input.value = value;
  removeElements();
}

function removeElements() {
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}
