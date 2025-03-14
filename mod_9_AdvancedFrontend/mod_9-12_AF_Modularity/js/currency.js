function getConvertedPrice (price, currencyTo) {
    if (currencyTo) {
        let rate = null;
        switch (currencyTo) {
            case "RUB":
                rate = 100;
                break;
            case "BYN":
                rate = 10;
                break;
            case "EUR":
                rate = 0.8;
                break;
        }
        if (rate) {
            return [price * rate, currencyTo];
        }
    }
    return [price, 'USD'];
}

export default getConvertedPrice;