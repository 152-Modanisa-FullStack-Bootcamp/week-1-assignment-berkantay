import axios from "axios";

axios
  .get("https://my-json-server.typicode.com/modanisatech/bootcamp-db/products")
  .then((response) => {
    // Firstly, log response to the console,
    // inspect the response and see that it has data field
    console.log(response)
    // Assign data field of the response to
    // products variable below by destructuring
    // You can use alias
    const products = response.data;
    const product_names = [];
    
   
    // Print names of all product to the console
    // by calling foreach  method (use arrow function)
    products.forEach((element, index) => {
      console.log(element.description);
      product_names.push(element.description);
    });


    const match = product_names.filter(item => {
      return item.includes('Şal');
    });
    console.log(match);

    const temp_map = new Map();
    
    match.forEach((element,index)=>{
      temp_map.set(element,)
    })

    // Get all products that contain "Şal" in their name (use filter method)
    // map filtered products to new object having only image and name field
    // assign mapped items to mappedProducts variable
    const mappedProducts = null;
  
    // Display the images and names of mappedProducts
    // You need to add them to the DOM
    // you need to use forEach method
    // You need to use flexbox
    // Position of image and text is up to you
    // You can use any style you wish
  });
