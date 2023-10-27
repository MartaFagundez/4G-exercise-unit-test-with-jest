// Importar las funciones del archivo app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// ============= 1 - FROM EURO TO DOLLAR ============= //
// 1.1- Uso correcto básico
test("100 euros deben equivaler a 107 dólares", function() {
    expect(fromEuroToDollar(100)).toBe(107);
})

// 1.2- Caso borde superior
test("10 millones de euros deben equivaler a 10 millones 700 mil dólares", function() {
    expect(fromEuroToDollar(10000000)).toBe(10700000);
})

// 1.3- Caso borde inferior
test("0.1 euros deben equivaler a 0.10700000000000001 dólares", function() {
    expect(fromEuroToDollar(0.1)).toBe(0.10700000000000001);
})

// 1.4- Argumento incorrecto: string
test("Si el argumento es un string, devuelve false", function() {
    expect(fromEuroToDollar("10")).toBe(false);
})

// 1.5- Argumento incorrecto: booleano
test("Si el argumento es el booleano true, devuelve false", function() {
    expect(fromEuroToDollar(true)).toBe(false);
})

// 1.6- Argumento incorrecto: undefined
test("Si el argumento es undefined, devuelve false", function() {
    expect(fromEuroToDollar(undefined)).toBe(false);
})

// 1.7- Argumento incorrecto: null
test("Si el argumento es null, devuelve false", function() {
    expect(fromEuroToDollar(null)).toBe(false);
})

// 1.8- Argumento incorrecto: objeto
test("Si el argumento es un objeto, devuelve false", function() {
    expect(fromEuroToDollar({euro: 17})).toBe(false);
})

// 1.9- Argumento incorrecto: array
test("Si el argumento es un array, devuelve false", function() {
    expect(fromEuroToDollar([1,2])).toBe(false);
})

// 1.10- Argumento incorrecto: función
test("Si el argumento es un array, devuelve false", function() {
    function sayHello() {
        console.log("Hello");
    }

    expect(fromEuroToDollar(sayHello)).toBe(false);
})

// 1.11- Sin argumento
test("Si se llama la función sin argumento, devuelve false", function() {
    expect(fromEuroToDollar()).toBe(false);
})

// 1.12- Con más de un argumento
test("Si se llama la función con más de un argumento, devuelve false", function() {
    expect(fromEuroToDollar(10, 20)).toBe(false);
})



// ============= 2 - FROM DOLLAR TO YEN ============= //
// 2.1- Uso correcto básico
test("100 dólares deben equivaler a 14626.168224299066 yenes", function() {
    expect(fromDollarToYen(100)).toBe(14626.168224299066);
})

// 2.2- Caso borde superior
test("10 millones de dólares deben equivaler a 1462616822.4299066 yenes", function() {
    expect(fromDollarToYen(10000000)).toBe(1462616822.4299066);
})

// 2.3- Caso borde inferior
test("0.1 dólares deben equivaler a 14.626168224299066 yenes", function() {
    expect(fromDollarToYen(0.1)).toBe(14.626168224299066);
})

// 2.4- Argumento incorrecto: string
test("Si el argumento es un string, devuelve false", function() {
    expect(fromDollarToYen("10")).toBe(false);
})

// 2.5- Argumento incorrecto: booleano
test("Si el argumento es el booleano true, devuelve false", function() {
    expect(fromDollarToYen(true)).toBe(false);
})

// 2.6- Argumento incorrecto: undefined
test("Si el argumento es undefined, devuelve false", function() {
    expect(fromDollarToYen(undefined)).toBe(false);
})

// 2.7- Argumento incorrecto: null
test("Si el argumento es null, devuelve false", function() {
    expect(fromDollarToYen(null)).toBe(false);
})

// 2.8- Argumento incorrecto: objeto
test("Si el argumento es un objeto, devuelve false", function() {
    expect(fromDollarToYen({dollar: 17})).toBe(false);
})

// 2.9- Argumento incorrecto: array
test("Si el argumento es un array, devuelve false", function() {
    expect(fromDollarToYen([1,2])).toBe(false);
})

// 2.10- Argumento incorrecto: función
test("Si el argumento es un array, devuelve false", function() {
    function sayHello() {
        console.log("Hello");
    }

    expect(fromDollarToYen(sayHello)).toBe(false);
})

// 2.11- Sin argumento
test("Si se llama la función sin argumento, devuelve false", function() {
    expect(fromDollarToYen()).toBe(false);
})

// 2.12- Con más de un argumento
test("Si se llama la función con más de un argumento, devuelve false", function() {
    expect(fromDollarToYen(10, 20)).toBe(false);
})



// ============= 3 - FROM YEN TO POUND ============= //
// 3.1- Uso correcto básico
test("100 yenes deben equivaler a 0.5559105431309904 libras", function() {
    expect(fromYenToPound(100)).toBe(0.5559105431309904);
})

// 3.2- Caso borde superior
test("10 millones de yenes deben equivaler a 55591.05431309904 libras", function() {
    expect(fromYenToPound(10000000)).toBe(55591.05431309904);
})

// 3.3- Caso borde inferior
test("0.1 yenes deben equivaler a 0.0005559105431309904 libras", function() {
    expect(fromYenToPound(0.1)).toBe(0.0005559105431309904);
})

// 3.4- Argumento incorrecto: string
test("Si el argumento es un string, devuelve false", function() {
    expect(fromYenToPound("10")).toBe(false);
})

// 3.5- Argumento incorrecto: booleano
test("Si el argumento es el booleano true, devuelve false", function() {
    expect(fromYenToPound(true)).toBe(false);
})

// 3.6- Argumento incorrecto: undefined
test("Si el argumento es undefined, devuelve false", function() {
    expect(fromYenToPound(undefined)).toBe(false);
})

// 3.7- Argumento incorrecto: null
test("Si el argumento es null, devuelve false", function() {
    expect(fromYenToPound(null)).toBe(false);
})

// 3.8- Argumento incorrecto: objeto
test("Si el argumento es un objeto, devuelve false", function() {
    expect(fromYenToPound({dollar: 17})).toBe(false);
})

// 3.9- Argumento incorrecto: array
test("Si el argumento es un array, devuelve false", function() {
    expect(fromYenToPound([1,2])).toBe(false);
})

// 3.10- Argumento incorrecto: función
test("Si el argumento es un array, devuelve false", function() {
    function sayHello() {
        console.log("Hello");
    }

    expect(fromYenToPound(sayHello)).toBe(false);
})

// 3.11- Sin argumento
test("Si se llama la función sin argumento, devuelve false", function() {
    expect(fromYenToPound()).toBe(false);
})

// 3.12- Con más de un argumento
test("Si se llama la función con más de un argumento, devuelve false", function() {
    expect(fromYenToPound(10, 20)).toBe(false);
})