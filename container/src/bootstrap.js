import { mountProducts } from "products/ProductsIndex";
import { mountCart } from "cart/CartShow";

console.log("Container");

mountProducts(document.querySelector('#my-products'));
mountCart(document.querySelector('#cart-prod'));