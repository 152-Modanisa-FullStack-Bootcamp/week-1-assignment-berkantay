import axios from "axios";

axios
  .get("https://my-json-server.typicode.com/modanisatech/bootcamp-db/products")
  .then((response) => {
    // Firstly, log response to the console,
    // inspect the response and see that it has data field
    console.log(response);
    // Assign data field of the response to
    // products variable below by destructuring
    // You can use alias
    const products = response.data;
    let product_names = [];
    let product_links = [];

    // Print names of all product to the console
    // by calling foreach  method (use arrow function)
    products.forEach((element) => {
      product_names.push(element.description);
    });

    // Get all products that contain "Şal" in their name (use filter method)
    // map filtered products to new object having only image and name field
    // assign mapped items to mappedProducts variable
    const match = product_names.filter((item) => {
      return item.includes("Şal");
    });
    console.log(match);

    match.forEach((element) => {
      for (let index = 0; index < product_names.length; index++) {
        if (element === products[index].description) {
          product_links.push(products[index].image);
        }
      }
    });

    const map = new Map();

    match.forEach((element, index) => {
      // console.log(element.description);
      map.set(element, product_links[index]);
    });
    const mappedProducts = map;
    console.log(mappedProducts);

    product_links = [];
    product_names = [];

    console.log(Array.from(mappedProducts.keys())[0]);

    appendData(mappedProducts);
    // appendData(product_json);

    // Display the images and names of mappedProducts
    // You need to add them to the DOM
    // you need to use forEach method
    // You need to use flexbox
    // Position of image and text is up to you
    // You can use any style you wish
  });

function appendData(data) {
  var mainContainer = document.getElementById("some-page-wrapper");
  for (var i = 0; i < data.size; i++) {
    var div_description = document.createElement("div");
    div_description.className = "description-area";
    var key = Array.from(data.keys())[i];
    div_description.innerHTML = "Name: " + Array.from(data.keys())[i];
    mainContainer.appendChild(div_description);
    var div_image = document.createElement("img");
    div_image.className = "image-area";
    div_image.src = data.get(key);
    mainContainer.appendChild(div_image);
  }
}
