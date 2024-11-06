// import convertUSDTo from "./currency.js";
import getConvertedPrice from "./currency.js";

let currencyCode = 'USD';

// export function getPriceFromBackend() {
function getPriceFromBackend(currencyCodeTo = null) {
    //get price from ajax
    let price = 1000;

    // if (currencyCodeTo && ['RUB', 'BYN', 'EUR'].includes(currencyCodeTo)) {
    //     currencyCode = currencyCodeTo;
    //     price = convertUSDTo(price, currencyCodeTo);
    // }
    [price, currencyCode] = getConvertedPrice(price, currencyCodeTo);
    return price;
}

// export  default getPriceFromBackend;
export { getPriceFromBackend, currencyCode as cc};