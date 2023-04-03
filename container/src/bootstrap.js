import { mount as productMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";

console.log("Container");

console.log(document.querySelector("#my-products"));
console.log(document.querySelector("#my-cart"));

productMount(document.querySelector("#my-products"));
cartMount(document.querySelector("#my-cart"));
