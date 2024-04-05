"use strict"

//* 1. İstifadəçidən 3 ədəd alın. Bu ədədlərin üçbucağın tərəfi olub olmadığını yoxlayan proqram tərtib edin

let a = 3;
let b = 10;
let c = 8;
if (a + b > c && a + c > b && b + c > a) {
    console.log(` ${a}, ${b}, ${c} terefleri ile üçbucaq olar`);
} else {
    console.log(` ${a}, ${b}, ${c} terefleri ile üçbucaq olmaz`);
}

//* 2. İstifadəçidən 3 ədəd alın. Onların bərabərtərəfli üçbucaq olduğunu təyin edən proqram tərtib edin.
let d = 5;
let e = 2;
let f = 2;
if (d == e == f) {
    console.log(` ${d}, ${e}, ${f} terefleri ile beraberterefli üçbucaq olar`);
} else {
    console.log(` ${d}, ${e}, ${f} terefleri ile beraberterefli üçbucaq olmaz`);
}
//* 3. İstifadəçidən 2 ədəd alın. Hansının ən böyük olduğunu tapan proqram tərtib edin
let num1 = 6;
let num2 = 8;
if (num1 > num2) {
    console.log(` ${num1} ${num2}-den boyukdur`);
} else if (num1 < num2) {
    console.log(` ${num1} ${num2}-den kicikdir`);

} else {
    console.log(` ${num1} ${num2}-e beraberdir`);
}

//* 4. İstifadəçidən 3 ədəd alın. Hansının ən böyük olduğunu tərtib edin.
let num3 = 3;
let num4 = 99;
let num5 = 11;
if (num3 >= num4 && num3 >= num5) {
    console.log(`${num3} en botukdur`);
} else if (num4 >= num3 && num4 >= num5) {
    console.log(`${num4} en botukdur`);
} else if (num5 >= num4 && num5 >= num3) {
    console.log(`${num5} en botukdur`);
}
//* 5. İstifadəçidən 3 ədəd alın. Onları artan sıra ilə düzən proqram tərtib edin.
let eded1 = 999;
let eded2 = 1299;
let eded3 = 2202;
if (eded1 > eded2 && eded1 > eded3 && eded2 > eded3) {
    console.log(`${eded1}>${eded2}>${eded3}`);
} else if (eded1 > eded2 && eded1 > eded3 && eded3 > eded2) {
    console.log(`${eded1}>${eded3}>${eded2}`);
} else if (eded2 > eded1 && eded2 > eded3 && eded1 > eded3) {
    console.log(`${eded2}>${eded1}>${eded3}`);
} else if (eded2 > eded1 && eded2 > eded3 && eded3 > eded1) {
    console.log(`${eded2}>${eded3}>${eded1}`);
} else if (eded3 > eded1 && eded3 > eded2 && eded2 > eded1) {
    console.log(`${eded3}>${eded2}>${eded1}`);
} else if (eded3 > eded1 && eded3 > eded2 && eded1 > eded2) {
    console.log(`${eded3}>${eded1}>${eded2}`);
}

//* 6. Kinoteatra bilet satan proqram yazın. Şərtlər: Bilet qiyməti 10 AZN, yaş 18+ olmalıdır, yaş 18-dirsə minimum 3 bilet almalıdır.

let card = 9;
let age = 18;
if (age >= 18) {
    console.log("Bilet ala bilersiniz");
    if (card >= 3) {
        console.log("Halaldı sizə");
    } else {
        console.log("Minimum 3 biletiniz olmalıdır");
    }
} else {
    console.log("Bilet ala bilmezsiniz");
}

//* 7. Bankomat proqramı tərtib edin. 1-düyməsini seçdikdə balans ekranda göstərilsin. 2-düyməsini seçdikdə balansa mədaxil olunsun və balans ekranda göstərilsin,  3-düyməsini seçdikdə balansdan pul çıxarılsın. 4-düyməsini seçdikdə çıxış verilsin.

let button = 2;
let balance = 20;
let added = 10;
let out = 2;
if (button === 1) {
    console.log(`Balance: ${balance}`);
} else if (button === 2) {
    let sum = balance + added
    console.log(`Added: ${added}
Balance: ${sum}`);
} else if (button === 3) {
    sum = balance - out;
    console.log(`Out: ${out}
Balance: ${sum}`);
} else if (button === 4) {
    console.log("Çıxış etdiniz");
}
//* 8. Verilmiş array-in tək elementlərinin indeksini çapa verən proqram tərtib edin.
let arr = [3, 8, 2, 5, 4, 10, 7, 6];
let tekEded = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        tekEded.push(i)

    }
}
console.log("Tək elementin indeksleri:", tekEded.join(", "));

//* 9. Verilmiş array-in tək indeksli elementlərini çapa verən proqram tərtib edin.
// let arr = [3, 8, 2, 5, 4, 10, 7, 6];

let tekIndex = [];

for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
        tekIndex.push(arr[i])

    }
}
console.log("Tək indekslilerin elementi:", tekIndex.join(", "));

//* 10. Verilmiş array-in max elementini çapa verən proqram tərtib edin.
// let arr = [3, 8, 2, 5, 4, 10, 7, 6];

let max = arr[0]
for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i]
    }
}
console.log(max);

//* 11. Verilmiş array-in cüt elementlərinin max elementini çapa verən proqram tərtib edin.
// let arr = [3, 8, 2, 5, 4, 10, 7, 6];

let maxCut = arr[0]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && maxCut < arr[i]) {
        maxCut = arr[i]
    }

}
console.log(maxCut);
//* 12. Verilmiş array-in min elementinin indeksini çapa verən proqram tərtib edin.
// let arr = [3, 8, 2, 5, 4, 10, 7, 6];

let minCut = arr[0]
for (let i = 0; i < arr.length; i++) {
    if (minCut > arr[i]) {
        maxCut = arr[i]
    }

}
console.log(minCut);

//* 13. Verilmiş array-in min elementi ilə max elementinin yerini dəyişən proqram tərtib edin
// let arr = [3, 8, 2, 5, 4, 10, 7, 6];

let minI = 0;
let minValue = arr[0];
let maxI = 0;
let maxValue = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minValue) {
        minValue = arr[i]
        minI = i
    }
    // console.log(max);
    if (arr[i] > maxValue) {
        maxValue = arr[i]
        maxI = i
    }
    //   console.log(max);
}
console.log("Min index:", minI, "Max index:", maxI);
console.log("Deyishdirilmemish array", arr);
console.log("Deyishecek olan indexler", maxI, minI);
let changedArr = arr[minI];
arr[minI] = arr[maxI]
arr[maxI] = changedArr
console.log("Deyishdirilmish array", arr);

//* 15. Daxil olunan ədədin array-də olub olmadığını təyin edən proqram tərtib edin.
//!promta gore sherhe almisham
// let eded = Number(prompt("eded daxil edin"));
// let isFound = false;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === eded) {
//         isFound = true;
//         break;
//     }
// }
// console.log(isFound);

//* 16. Verilmiş array-də min və max elementi nəzərə almadan yerdə qalan bütün elementlərin cəmini tapın.

let min = arr[0];
let maxx = arr[0];
let newarr = 0;
for (let i = 0; i < arr.length; i++) {
    newarr += arr[i]
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];

    }
}
newarr -= max;
newarr -= min;

console.log(newarr);



//* 17. Verilmiş array-in bool tipinde olan elementin qonsu elementlerini ekrana cixaran proqram yazin

let arr1 = [2, 9, -5, -4, "AzerBayCan", 12, true, "LANKARAN", "LimOn", 182, 4];

for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] === 'boolean') {
        if (i > 0) {
            console.log("Sol qonshu", arr1[i - 1])
        }
        if (i < arr.length - 1) {
            console.log("Sag qonshu", arr1[i + 1])
        }

    }

}

//* 18. Verilmiş array-in ən uzun sözünü ekrana çıxaran proqram yazın
let maxLength = " "
for (let i = 0; i < arr1.length; i++) {
    if (maxLength.length <= arr1[i].length) {
        maxLength = arr1[i]
    }
}
console.log("En uzun soz:", maxLength)

//* 19. Verilmiş array-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın.
let uppercase = "";
for (let i = 0; i < arr1.length; i++) {
    if (typeof (arr1[i]) === 'string' && arr1[i].toUpperCase() === arr1[i]) {
        if (arr1[i].length > uppercase.length) {
            uppercase = arr1[i]
        }
    }
}
console.log("Uppercase word", uppercase)

//* 20. Verilmiş array-in 2-dən artıq böyük hərfi olan elementlərini çapa çıxaran proqram yazın
let uppercaseCount = 0;
for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] === 'string') {
        for (let j = 0; j < arr1[i].length; j++) {
            if (arr1[i][j] >= 'A' && arr1[i][j] <= 'Z') {
                uppercaseCount++;
            }
            if (uppercaseCount >= 2) {
                console.log("2den artq boyuk herfi olan soz:", arr1[i]);
                break;
            }
        }
    }

}

