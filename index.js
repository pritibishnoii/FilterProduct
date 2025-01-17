//  https://fakestoreapi.com/products

let grid = document.querySelector(".products");
console.log(grid);
let filterInput = document.getElementById("filterInput");
// console.log(filterInput);

// fetch("https://fakestoreapi.com/products")
fetch("./database/store.json")
  .then((res) => res.json())
  //   console.log(res)
  .then((data) => {
    // iterating products
    for (let d of data) {
      //   console.log(d);
      addElm(grid, d);
    }
  });

//get the value from api dynamic --
const addElm = (appendIn, value) => {
  let div = document.createElement("div");
  div.className = "item justify-self-center";

  let { image, title, category, price } = value;
  div.innerHTML = `
    <img src="${image}" class="bg-cover img" alt="img1">
    <div class="text-center py-3 font-poppins">
        <h1 class="text-lg title">${title}</h1>
        <a href="#" class="block"><span class="text-sm text-red-400">${category}</span></a>
        <span class="block py-3">$<span class="text-md">${price}</span></span>
        <button class="border-2 px-8 py-1 bg-yellow-400 border rounded-md">Buy Now</button>
    </div>
    `;
  appendIn.appendChild(div);
};
// addElm();

// add event listener
filterInput.addEventListener("keyup", filterProducts);

// callback function
function filterProducts() {
  let filterValue = filterInput.value.toUpperCase();
  let item = grid.querySelectorAll(".item");
  console.log(filterValue);

  for (let i = 0; i < item.length; i++) {
    console.log(item[i]);
    let span = item[i].querySelector(".title");
    // console.log(span)
    if (span.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      item[i].style.display = "initial";
    } else {
      item[i].style.display = "none";
    }
  }
}
