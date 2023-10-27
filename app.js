const fromEuroToDollar = function(valueInEuro) {
    if (arguments.length === 1 && typeof valueInEuro === "number" && valueInEuro > 0) {
        // Convertimos el valor a dólares
        let valueInDollar = valueInEuro * 1.07;
        // Retornamos el valor en dólares
        return valueInDollar;
    }
    // Si el parámetro no es un número o no es un número positivo, retorna false.
    else {
        return false;
    }
    
}

const fromDollarToYen = function(valueInDollar) {
    if (arguments.length === 1 && typeof valueInDollar === "number" && valueInDollar > 0) {
        // Convertimos el valor a euros
        let valueInEuro = valueInDollar * (1 / 1.07);
        // Convertimos el valor a yenes
        let valueInYen = valueInEuro * 156.5;
        // Retornamos el valor en yen
        return valueInYen;
    }
    // Si el parámetro no es un número o no es un número positivo, retorna false.
    else {
        return false;
    }
}

const fromYenToPound = function(valueInYen) {
    if (arguments.length === 1 && typeof valueInYen === "number" && valueInYen > 0) {
        // Convertimos el valor a euros
        let valueInEuro = valueInYen * (1 / 156.5);
        // Convertimos el valor a libras
        let valueInPound = valueInEuro * 0.87;
        // Retornamos el valor en libras
        return valueInPound;
    }
    // Si el parámetro no es un número o no es un número positivo, retorna false.
    else {
        return false;
    } 
}


// Exportar las funciones para usarla en otros archivos 
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
