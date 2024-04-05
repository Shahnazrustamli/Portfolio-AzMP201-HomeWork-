//* 21. 4 funksiya yazın. Hər biri 2 parametr qəbul etsin və riyazi əməlləri yerinə yetirsin.

function sum(a, b) {
    let sum = a + b;
    return sum
}
console.log(sum(2, 4));

function hasil(a, b) {
    let c = a * b
    // console.log(c); 
    return c
}
hasil(4, 5)

let nisbet = function (a, b) {
    let c = a / b
    return c;
}
console.log(nisbet(29, 9));

let mix = (a, b) => {
    let d = (nisbet(a, b) + hasil(a, b)) * sum(a, b)
    return d
}
console.log(mix(10, 2));

//* 22. Elə bir funksiya yazın ki, 3 parametr qəbul etsin, 2 ədəd və 1 ədəd operator. Operatora uygun nəticəni return etsin.
function hesab(a, b, operator) {
    if (operator === "+") {
        let c = a + b
        return c
    } else if (operator === "-") {
        let d = a - b
        return d
    } else if (operator === "*") {
        let d = a * b
        return d
    } else if (operator === "/") {
        if (b !== 0) {
            return a / b;
        } else {
            return "Sıfıra bölmə mümkün deyil.";
        }
    } else {
        return "Yalnız " * ", " - ", " + ", " / " əməllərini icra edə bilərsiniz!"
    }
}
console.log(hesab(3, 6, "+"));
console.log(hesab(12, 6, "/"));
console.log(hesab(3, 6, "*"));
console.log(hesab(3, 6, "-"));
// ! 23,24,25,26,27 bunlar asan idi yazmadım
//* 28. Array-in bütün elementlərini kvadrata yüksəldib yeni array qaytaran proqram yazın.
let arr = [2, 6, 8, 1, 0, 9]
let newArr = []
let square = (array) => {
    for (let i = 0; i < array.length; i++) {
        newArr.push(array[i] ** 2);
    }
    return newArr

}
console.log(square(arr));

//* 29. Array-in müsbət elementlərinin cəmini tapan funksiya yazın. Əgər array-in bütün elementləri mənfidirsə geriyə 0 qaytarsın.
let array = [2, 6, 8, 1, 0,] // -3,-5,-6,-8
let cem = 0
function gulcin(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            cem += arr[i]
            continue
        } else {
            console.log(`0`);
            break
        }
    }
    return cem

}
console.log(gulcin(array));


//* 30. Array-in median və ədədi ortasını obyekt tərkibində return edən funksiya yazın. Median- ən kiçik   element ilə ən böyük elementin ədədi ortasıdır.
let arr1 = [2, 6, 8, 1, 0, 9, 2];
let max = arr1[0];
let min = arr1[0];
let obj = {};
let median = 0;
let edediOrta = 0;
function obyekt(array) {
    for (let i = 0; i < array.length; i++) {
        edediOrta += array[i]
        if (max < array[i]) {
            max = array[i];
        } else if (min > array[i]) {
            min = array[i];
        }
    }
    median = (max + min) / 2
    obj.Median = median
    obj.EdediOrta = edediOrta / array.length


    return obj
}
console.log(obyekt(arr1));

//* 31. Hər hansı bir cümlədə istənilən  baş hərflə olan simvolları birləşdirib qaytaran funksiya yazın. "My name is Gurban" - "MniG"

let string = "Azerbaycan z Memerlıq İnshaat Universiteti"
let abrt = ""
function abr(string) {
    let word = string.split(" ");
    // console.log(word);
    for (let i = 0; i < word.length; i++) {
        abrt += word[i][0]
    }
    return abrt
}
console.log(abr(string));


//* 32. Cümlədə olan bütün sözləri ixtisar edən proqram tərtib edin. Əgər söz 4 hərfdən azdırsa o qısaldılmır. İxtisar zamanı başdakı və sondakı hərflər saxlanılır, ortada olan hərflərin sayı yazılır. Cümlədə heç bir durğu işarəsi olmayacaq. Məsələn qurban-q4n, stəkan-s4n, javascript-j8t
function ixtisarEt(cumle) {
    let words = cumle.split(' ');
    // console.log(words);
    for (let i = 0; i < words.length; i++) {
        let letter = words[i];
        if (letter.length > 4) {
            let IlkSon = letter[0] + (letter.length - 2) + letter[letter.length - 1];
            words[i] = IlkSon;
        }
    }

    return words;
}

let cumle = "Salam men Shahnaz";
console.log(ixtisarEt(cumle));
//* 33. İçərisində name və age key-ləri olan obyektlərdən təşkil olunmuş bir array var. Ən az yaşı olan ilə ən çox yaşı olan elementin yaşlarını və onların fərqini array şəklində qaytaran funksiya yazın. Məsələn - [13,67,54]
let arr2 = [
    {
        name: "Gurban",
        age: 30
    },
    {
        name: "Shahnaz",
        age: 21
    },
    {
        name: "Gulcin",
        age: 20
    },
    {
        name: "Gular",
        age: 8
    },
    {
        name: "Vusala",
        age: 25
    }
];

function Find(array) {
    let minAge = array[0].age;
    let maxAge = array[0].age;
    let ferq = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i].age < minAge) {
            minAge = array[i].age
        }
        if (array[i].age > maxAge) {
            maxAge = array[i].age
        }
        ferq = maxAge - minAge
    }
    console.log(minAge, maxAge, ferq)
}
Find(arr2)

//* 34. N faktorialı hesaplayan funksiya yazın.

function Factorial(eded) {
    if (eded === 0 || eded === 1) {
        return 1;
    } else {
        return eded * Factorial(eded - 1);
    }
}
let eded = 4;
console.log(eded + "-un faktorialı:", Factorial(eded));
