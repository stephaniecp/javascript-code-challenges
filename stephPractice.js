

// Primitive concepts

    // Typeof uses
        typeof 42; // "number"
        typeof "random text"; // "string"
        typeof true; // "boolean"
        typeof undefined; // "undefined"
        typeof function() {}; // "function"
        typeof 10n; // "bigint" (bigint represent numeric values which are too large to be represented by the number primitive.) > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
        typeof [1, 2, 3]; // "object"
        typeof {}; // "object"
        typeof NaN; // "number"
        typeof undeclaredVariable; // "undefined"
        typeof /regex/; // "object"

    //  String concatenation
        1+"2"; // "12"
        1+1+"2"; // "22" (1 + 1 sum because before the string)
        1+2+"3"+"4"; // "334"
        "1"+"2"+3+4; // "1234" (3 + 4 does not num because before the string)
        "1"+"2"+(3+4); // "126"
        1+2+"3"+"4"+5+6; // "33456"

    // Conversions: numbers to strings + strings to numbers
       // Number to string
            const myNumber = 42;
            String(myNumber); // "42"
            myNumber.toString(); // "42"
            myNumber + ""; // "42
        // String to number
