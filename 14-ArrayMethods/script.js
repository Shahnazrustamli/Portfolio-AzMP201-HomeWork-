
let students = [
    {
        id: 1,
        name: "Nurane",
        surname: "Ismayilzade",
        age: 21,
        hobbies: ["music", "walking", "watchingfilm"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "cavid" },
            { id: 4, name: "alisa" },
        ],
        loginDetail: { username: "nurana21", password: "nunu123" },
        gender: "girl",
        boyfriendGirlfriend: false,
        fail: false,
        avgPoint: 88,
        salaryAZN: 144,
    },
    {
        id: 2,
        name: "Gizilgul",
        surname: "Allahverdiyeva",
        age: 20,
        hobbies: ["book", "writing code"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "babaxan" },
            { id: 4, name: "gulshen" },
        ],
        loginDetail: { username: "allahverdieva1", password: "salam123" },
        gender: "girl",
        boyfriendGirlfriend: true,
        fail: false,
        avgPoint: 70,
        salaryAZN: 100,
    },
    {
        id: 3,
        name: "Xanim",
        surname: "Nuriyeva",
        age: 21,
        hobbies: ["book", "music"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "hikmet" },
            { id: 4, name: "gulsen" },
        ],
        loginDetail: { username: "xanim123", password: "salamBaku" },
        gender: "girl",
        boyfriendGirlfriend: false,
        fail: false,
        avgPoint: 80,
        salaryAZN: 145,
    },
    {
        id: 4,
        name: "Minaya",
        surname: "Binnetova",
        age: 21,
        hobbies: ["book", "gaming", "movie", "music"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "anar" },
        ],
        loginDetail: { username: "binnetova", password: "hello123" },
        gender: "girl",
        boyfriendGirlfriend: false,
        fail: false,
        avgPoint: 90,
        salaryAZN: 142,
    },
    {
        id: 5,
        name: "Sabina",
        surname: "Hatamli",
        age: 21,
        hobbies: ["shopping", "listen to music"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "Mirvari" },
        ],
        loginDetail: { username: "sebine123", password: "salam123" },
        gender: "girl",
        boyfriendGirlfriend: true,
        fail: false,
        avgPoint: 81,
        salaryAZN: 146,
    },

    {
        id: 6,
        name: "Ləman",
        surname: "Şamilova",
        age: 20,
        hobbies: [
            "watching movies",
            "reading books",
            "painting",
            " walking",
            " listen to music",
        ],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
        ],
        loginDetail: { username: "lemanshamilova", password: "salamBaku" },
        gender: "girl",
        boyfriendGirlfriend: false,
        fail: false,
        avgPoint: 85.8,
        salaryAZN: 145,
    },
    {
        id: 7,
        name: "Narmin",
        surname: "Musayeva",
        age: 21,
        hobbies: ["book", "gaming", "painting", "walking"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "fidan" },
            { id: 4, name: "Irada" },
        ],
        loginDetail: {
            username: "narmin0",
            password: "narmin01",
        },
        gender: "girl",
        boyfriendGirlfriend: false,
        fail: false,
        avgPoint: 80,
        salaryAZN: 196,
    },

    {
        id: 8,
        name: "Fatima",
        surname: "Akhundzada",
        age: 20,
        hobbies: ["drawing", "sleeping"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "Valida" },
        ],
        loginDetail: { username: "aynur123", password: "salamBaku" },
        gender: "girl",
        boyfriendGirlfriend: true,
        fail: false,
        avgPoint: 76,
        salaryAZN: 100,
    },
    {
        id: 9,
        name: "Elmir",
        surname: "Huseynov",
        age: 21,
        hobbies: ["book", "ice skating", "Tennis", "Karting"],
        student: true,
        teacher: [
            { id: 1, name: "Gurban" },
            { id: 2, name: "Hajar" },
            { id: 3, name: "Morad" },
            { id: 4, name: "Fikrat" },
        ],
        loginDetail: { username: "huseynovelmirr", password: "maxverstappen" },
        gender: "man",
        boyfriendGirlfriend: false,
        fail: true,
        avgPoint: 76,
        salaryAZN: 120,
    },
    {
        id: 10,
        name: "Fidan",
        surname: "Rehimli",
        age: 21,
        hobbies: ["book", "gaming"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "Turan" },
        ],
        loginDetail: { username: "fidan123", password: "fidanrahimli" },
        gender: "girl",
        boyfriendGirlfriend: true,
        fail: true,
        avgPoint: 75,
        salaryAZN: 98,
    },
    {
        id: 11,
        name: "Aynur",
        surname: "Aynurova",
        age: 20,
        hobbies: ["book", "gaming"],
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
        ],
        loginDetail: { username: "aynur123", password: "salamBaku" },
        gender: "girl",
        boyfriendGirlfriend: true,
        fail: true,
        avgPoint: 81,
        salaryAZN: 120,
    },

    {
        id: 12,
        name: "Elman",
        surname: "Muradov",
        age: 20,
        hobbies: [
            "book",
            "gaming",
            "sking",
            "wrestling",
            "swiming",
            "arguing about philosophy",
            "solving sudoku",
            "hiking",
            "walking",
        ],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "jale" },
            { id: 4, name: "akhmed" },
        ],
        loginDetail: { username: "elman17", password: "elman12345" },
        gender: "girl",
        boyfriendGirlfriend: false,
        fail: true,
        avgPoint: 76,
        salaryAZN: 100,
    },
];
//! - Bütün elementləri konsola yazın
function Check(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
// Check(students);


//! - Bütün tələbələrin adlarını konsola yazın - ad: Qurban
function Name(array) {
    for (let i = 0; i < array.length; i++) {
        console.log("ad-- : ", array[i].name);
    }
}
// Name(students);


//! - Bütün tələbələrin adlarını və soyadlarını konsola yazın - ad: Qurban, soyad: Qurbanzada
function surname(array) {
    for (let i = 0; i < array.length; i++) {
        console.log("ad soyad--", array[i].name + " " + array[i].surname);
    }
}
surname(students);

//! - Kəsri olan tələbələrin ad və soyadını çapa verin
function fail(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].fail == true) {
            console.log("kesri var---", array[i].name + " " + array[i].surname);
        }
    }
}
// fail(students);


//! - Ən çox hobbisi olan tələbənin ad və hobbilərini çapa verin
function hobbies(array) {
    let max = "";
    let x;

    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element.hobbies.length > max.length) {
            max = element.hobbies;
            x = element;
        }
    }
    console.log("en cox hobbisi olan telebe ve say--", x.name + ": " + x.hobbies);
}
hobbies(students);


//! - Ortalaması ən böyük olan tələbənin ad və soyadını çapa verin

function ortalama(array) {
    let max = 0;
    let x;
    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        if (element.avgPoint > max) {
            max += element.avgPoint;
            x = element;
        }
    }
    console.log(
        "ortalamasi en boyuk olan--",
        x.name + " " + x.surname + ": " + x.avgPoint
    );
}
ortalama(students);


//! - Parolu ən uzun olan tələbənin username və adını çapa verin
function parol(array) {
    let max = "";
    let x;
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element.loginDetail.password > max) {
            max = element;
            x = element;
        }
    }
    console.log(
        "parol--",
        x.name + " " + x.surname + ": " + x.loginDetail.password
    );
}
parol(students);


//! - boyfriend-i olan tələbələrin adlarını və username-lərini çapa verin
function boyfriend(array) {
    let max = "";
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element.boyfriendGirlfriend == true) {
            max = element.boyfriendGirlfriend;
            console.log(
                "boyfriend--",
                element.name +
                " " +
                element.surname +
                ": " +
                element.boyfriendGirlfriend
            );
        }
    }
}
boyfriend(students);


//! - yaşı 20 olan tələbələrin adlarını və müəllim adlarını çapa verin
function teacher(array) {
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        let x;
        if (element.age === 20) {
            x += element
        }
        console.log(
            "Sevimli muellim--",
            element.name + " " + element.surname + ": " + element.teacher[0].name + " " + element.teacher[1].name + " " + element.teacher[2].name
        );
    }
}
teacher(students);
//! - Bütün tələbələrə təqaüdlərinin dollar ilə görünməsini təmin edin
//! - Müəllimlərin baş hərflərini böyük hərflə yazın
//! - Şifrəsində rəqəm olmayan tələbələri tapın
//! - Qızların arasında id-si 3 olan müəllimlərin adını deyin
//! - Tələbələrin adlarını və müəllim saylarını çapa verin
//! - Tələbələrin adlarını username və şifrələrindən ibarət yeni array yaradın [{name:qurban,username:qurban123,password:qqq123}]

// Aşağıda verilən tapşırıqları array & string methodlarını istifadə edərək yerinə yetirin.

// 1. Write a JavaScript function to get the first element of an array.Passing a parameter 'n' will return the first 'n' elements of the array.
// (Array method - lardan istifadə edin)
// Example:
// console.log(getFirst([1, 73, 99, 20])) -> 1
// console.log(getFirst([1, 73, 99, 20], 2)) -> [1, 73]
// console.log(getFirst([1, 73, 99, 20], 0)) -> []
// console.log(getFirst([1, 73, 99, 20], 4)) -> [1, 73, 99, 20]


// 2. Write a simple JavaScript function to join all elements of the following array into a string.
//     console.log(join([1, 73, 99, 20], "*")) -> 1 * 73 * 99 * 20
// console.log(join([1, 73, 99, 20], "/")) -> 1 / 73 / 99 / 20


// 3. Write a JavaScript program(function) that accepts a string as input and swaps the case of each character.For example, if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'
// Example:
// console.log(convert('saLamNecesen)) -> SAlAMnECESEN


// 4. Write a method that clears the array from all unnecessary elements, like false, undefined, empty strings, zero, null.
//     console.log(clear([0, 1, false, 2, undefined, '', 3, null]); -> [1, 2, 3]


// 5. Write a method that returns a duplicate - free array.
//     console.log(clearDuplicate([1, 2, 1, 2, 3])); -> [1, 2, 3]
// console.log(clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false])); -> ['a', 2, 'd', 14, 's', false]


// 6. Write a function that compares two arrays and returns true if they are identical.
//     console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4])) -> true
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5])) -> false
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false])) -> false
// console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false])) -> true



// 7. Bir string ve bir char qebul eden bir function yazın.Əgər daxil olunmuş char string - də varsa char - ın yerləşdiyi indekslərin cəmini yoxdursa - 1 return etsin.Məsələn salam və 'a' daxil olunarsa output 1 + 3=4 olmalıdır.

// 8. Bir function yazın parametr olaraq bir array, bir index və bir string qəbul edir.Və daxil olunmuş indeksə əsasən göndərilmiş string - i həmin array - ə əlavə edib return etsin.Məsələn arqument olaraq - ['a', 'salam', 'b', 'world'], 3, "dev" göndərilərsə o zaman dev string - ini 3cu indekse elave etmelidir, eger gonderilmish indeks array -in uzunlugundan boyuk olarsa o zaman hemin string array -in en sonuna elave edilsin.

// 9. Bir function yazın, parametr olaraq 2 array qebul edir və bir char qebul edir.gonderilmish char - a esasen hemin iki array - i ve elementlerini birleshdirib bir string olaraq return etmelidir.Meselen -> [1, 2][3, 4] '*' gonderilerse output -> 1 * 2 * 3 * 4 string - i olmalidir.


// 10.
// { name: "Ali", scores: [90, 85, 92] },
// { name: "Davud", scores: [100, 100, 100] },
// { name: "Mammal", scores: [75, 80, 85] },
// { name: "Camil", scores: [90, 95, 85] },
// ];

// #studentlərin ortalama score'nu yeni bir arrayda yığın

// 11.

// const webTechs = [
//     "HTML",
//     "CSS",
//     "JS",
//     "React",
//     "JS",
//     "Redux",
//     "Node",
//     "JS",
//     "MongDB",
// ];


// # webTechs arrayında olan elementlərin uzunluğu 4'dən böyük olanları yeni bir arraya yığın


// 12.
// const products = [
//     {
//         id: 1,
//         title: "Smartphone",
//         description: "A high-end smartphone with the latest features.",
//         price: 799.99,
//     },
//     {
//         id: 2,
//         title: "Laptop",
//         description: "Powerful laptop with a large screen and fast processor.",
//         price: 1299.99,
//     },
//     {
//         id: 3,
//         title: "Coffee Maker",
//         description: "An automatic coffee maker with a built-in grinder.",
//         price: 99.99,
//     },
//     {
//         id: 4,
//         title: "Headphones",
//         description: "Wireless over-ear headphones with noise-cancellation.",
//         price: 199.99,
//     },
//     {
//         id: 5,
//         title: "Smart TV",
//         description: "55-inch 4K Smart TV with streaming apps built-in.",
//         price: 699.99,
//     },
// ];

// # product arrayindəki producların qiymətləri cəmini və ortalamasını tapın\

// // 13.let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];

// countries arrayində a ilə başlayıb a ilə bitən ölkələri tapın

// 14.# Verilmiş ədədin bölənlərinin sayını tapan funksiya tərtib edin.

// function findNumberOfDivisors(n) {
//   ...
// }

// 15.daxil edilmiş cümlə daxilində boşluqların sayini tapan function yazin

// function findSpaceCounts(str) {
//         ...
// }