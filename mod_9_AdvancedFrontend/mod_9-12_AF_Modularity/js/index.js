// import getPrice from './price.js';
// import {cc, getPriceFromBackend as getPrice} from './price.js';
import * as Price from './price.js';

function showPrice() {
    //get price
    //show price
    const price = Price.getPriceFromBackend('EFT');
    console.log(`${price} ${Price.cc}`);
}

showPrice();