let b: number[] = [1, 2, 3, 4, 5, 6];

b.push(7, 8, 9);
console.log(b);

let a: any[] = [1, 2, '3', 4, 5, true];

function Sum(c: number, d: number): number {
    return c + d;
}

console.log(Sum(2, 4));

function Any(c: number, d: number): void {
    console.log(c + d);
}

Any(3, 5);

const names = ['Roma', 'Alex', 'Anton'];
names.forEach(name => {
    name.toUpperCase();
});

// type Coordinates = { x: number, y: number, name: string };

interface CoordinatesXY {
    x: number,
    y: number,
    name: string
}

interface CoordinatesXYZ extends CoordinatesXY {
    x: number,
    y: number,
    z?: number,
    name: string
}

const coordinates: CoordinatesXYZ = {x: 1.33, y: 1.02, z: 1.01, name: 'point1'};

function setCoordinates(coordinates: CoordinatesXYZ) {
    // some code
}

setCoordinates(coordinates);

function Sum2(c: number, d: number, z?: number): number {
    let sum = c + d;
    if (z) {
        sum += z;
    }
    return sum;
}

console.log(Sum2(2, 4));

interface CoordinatesAny {
    x: number | string,
    y: number | string,
    z?: number,
    name: string
}

const coordinates2: CoordinatesAny = {x: '1.33', y: '1.02', z: 1.01, name: 'point2'};

function setCoordinates2(coordinates2: CoordinatesAny) {
    // some code
}

setCoordinates2(coordinates2);

function Sum3(c: number | string, d: number | string): number {
    if (typeof d === 'string') {
        d = parseFloat(d);
    }
    if (typeof c === 'string') {
        c = parseFloat(c);
    }
    return c + d;
}

console.log(Sum3('2', '4'));

let x: 'hello' = 'hello';

// type currencyName = 'USD' | 'RUB'

enum currencyName {
    USD,
    RUB,
    EUR,
}

function convertRate(amount: number, currencyCodeFrom: currencyName | null | undefined, currencyCodeTo: currencyName | null): number {
    // some code converting values
    if (currencyCodeFrom === currencyName.EUR) {
        // ...
    } else if (currencyCodeFrom === currencyName.RUB) {
        // ...
    } else if (currencyCodeFrom === currencyName.USD) {
        // ...
    }
    return amount;
}

// convertRate(100, 'USD', 'RUB');
convertRate(100, currencyName.USD, currencyName.RUB);

//generic type

enum currencyNameString {
    USD = 'USD',
    RUB = 'RUB',
    EUR = 'BYN',
}

enum currencyNameNum {
    USD = 840,
    RUB = 643,
    EUR = 930,
}

function convertRate2<T>(amount: number, currencyCodeFrom: T, currencyCodeTo: T): number {
    // some code converting values
    console.log(currencyCodeFrom);
    console.log(currencyCodeTo);
    // ajax with ....
    return amount;
}

// convertRate(100, 'USD', 'RUB');
convertRate2<currencyNameString>(100, currencyNameString.USD, currencyNameString.RUB);
convertRate2<currencyNameNum>(100, currencyNameNum.USD, currencyNameNum.RUB);

