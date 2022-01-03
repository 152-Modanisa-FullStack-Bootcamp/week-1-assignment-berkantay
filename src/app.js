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

    // Print names of all product to the console
    // by calling foreach  method (use arrow function)

    // Get all products that contain "Şal" in their name (use filter method)
    // map filtered products to new object having only image and name field
    // assign mapped items to mappedProducts variable
    const match = products.filter((item) => {
      return item.description.includes("Şal");
    });
    console.log(match);

    appendData(match);

    // Display the images and names of mappedProducts
    // You need to add them to the DOM
    // you need to use forEach method
    // You need to use flexbox
    // Position of image and text is up to you
    // You can use any style you wish
  });

function appendData(data) {
  var mainContainer = document.getElementById("some-page-wrapper");
  for (var i = 0; i < data.length; i++) {
    var div_description = document.createElement("div");
    div_description.className = "description-area";
    div_description.innerHTML = "Name: " + data[i].description;
    mainContainer.appendChild(div_description);
    var div_image = document.createElement("img");
    div_image.className = "image-area";
    div_image.src = data[i].image;
    mainContainer.appendChild(div_image);
  }
}
