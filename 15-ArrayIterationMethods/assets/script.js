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
        gender: "man",
        boyfriendGirlfriend: false,
        fail: true,
        avgPoint: 76,
        salaryAZN: 100,
    },
];

//~ - Bütün elementləri konsola yazın
let Name = students.map(elem => console.log(elem))
//~ - Bütün tələbələrin adlarını konsola yazın - ad: Qurban
let Surname = students.filter(elem => console.log("Ad:", elem.name))
//~ - Bütün tələbələrin adlarını və soyadlarını konsola yazın - ad: Qurban, soyad: Qurbanzada
let fulName = students.map(elem => console.log(`Ad: ${elem.name}, Soyad: ${elem.surname}`))
//~ - Kəsri olan tələbələrin ad və soyadını çapa verin
let fail = students.map(elem => {
    if (elem.fail === true) {
        console.log(`Ad: ${elem.name} ${elem.surname}`)
    }
})
//~ - Ən çox hobbisi olan tələbənin ad və hobbilərini çapa verin
function MoreHobby(array) {
    let maxHobby = array[0].hobbies.length;
    let student = array[0];
    array.forEach(elem => {
        if (elem.hobbies.length > maxHobby) {
            maxHobby = elem.hobbies.length
            student = elem
        }
    })
    console.log(`Ad: ${student.name}, Hobby: ${student.hobbies}`)

}
MoreHobby(students)
//~ - Ortalaması ən böyük olan tələbənin ad və soyadını çapa verin
function Ortalama(array) {
    let ortalama = 0
    let student = array[0]
    array.forEach(elem => {
        if (elem.avgPoint > ortalama) {
            ortalama = elem.avgPoint
            student = elem
        }
    })
    console.log(`Ad: ${student.name} ${student.surname}`)
}
Ortalama(students)
//~ - Parolu ən uzun olan tələbənin username və adını çapa verin
function Password(array) {
    let password = array[0].loginDetail.password
    let student = array[0]
    array.forEach(elem => {
        if (elem.loginDetail.password.length >= password.length) {
            password = elem.loginDetail.password
            student = elem
        }
    })
    console.log(`Username: ${student.loginDetail.username}, Ad: ${student.name}`)
}
Password(students)
//~ - boyfriend-i olan tələbələrin adlarını və username-lərini çapa verin
function ChekBoyFriend(array) {
    array.map(elem => {
        if (elem.boyfriendGirlfriend === true) {
            console.log(`Sevgilisi olan telebelerin Ad: ${elem.name} Username: ${elem.loginDetail.username}, `)
        }
    })
}
ChekBoyFriend(students)
//~ - yaşı 20 olan tələbələrin adlarını və müəllim adlarını çapa verin
function ChekAge(array) {
    let element = array.filter(elem => elem.age === 20)
    element.forEach(elem => {
        console.log(`Ad: ${elem.name}`)
        console.log(`Müəllimlər:`);
        elem.teacher.forEach(a => {
            console.log(`             ${a.name}`)
        })
        console.log("*********************************")
    })
}
ChekAge(students)
//~ - Bütün tələbələrə təqaüdlərinin dollar ilə görünməsini təmin edin
function SalaryUsd(array) {
    let toUSD = 1.7
    let salaryUSD;
    array.forEach(elem => {
        salaryUSD = Math.floor(elem.salaryAZN / toUSD)
        console.log(`Ad: ${elem.name}, Təqaüd (USD): ${salaryUSD} USD`);
    })
}
SalaryUsd(students)
//~ - Müəllimlərin baş hərflərini böyük hərflə yazın
function TeacherName(array) {
    array.forEach(elem => {
        let teacher = elem.teacher
        console.log("Muellimler:")
        teacher.forEach(elem => {
            uppercase = elem.name.charAt(0).toUpperCase() + elem.name.slice(1).toLowerCase()
            console.log(`${uppercase}`)
        })
        console.log("***************************")
    })
}
TeacherName(students)
//~ - Şifrəsində rəqəm olmayan tələbələri tapın
// function CheckPassword(array) {
//     array.forEach(elem => {
//         elem.loginDetail.forEach(a => {

//         })
//     })
// }

// CheckPassword(students)

//~ - Qızların arasında id-si 3 olan müəllimlərin adını deyin
// function CheckGender(array) {
//     let filter = array.filter(elem => elem.gender === "girl")
// }


// function ThreethTeacherName(array) {
//     let filteredStudents =CheckGender(array)
//     let thirdTeacher = filteredStudents.flatMap(student => student.teacher.find(teacher => teacher.id === 3));
//     if (thirdTeacher) {
//         console.log("Qızların arasında id-si 3 olan müəllim:", thirdTeacher.name);
//     } else {
//         console.log("Qızların arasında id-si 3 olan müəllim yoxdur.");
//     }

// }
// ThreethTeacherName(students)

//~ - Tələbələrin adlarını və müəllim saylarını çapa verin
// - Tələbələrin adlarını username və şifrələrindən ibarət yeni array yaradın [{name:qurban,username:qurban123,password:qqq123}]
// - Müəllimlərin adlarından sonra müəllim sözünü əlavə edin. String metod istifadə edin
// - Hamının şifrəsinin əvvəlinə 3 ədəd boşluq əlavə edin. String metod istifadə edin
// - Hamının şifrəsinin ilk 4 simvolu görsənsin yerdə qalanlar "*" ilə əvəz olunsun. String metod istifadə edin
// - Hamının soyadının uzunluğu adının uzunluğu qədər olsun. String metod istifadə edin
// - Bütün tələbələrin yaşlarının toplamı nə qədərdir
// - Bütün tələbələrin cəmi bal ortalaması nə qədərdir
// - "book" həvəsini olan tələbələrin siyahısını çap edin
// - Tələbələrin yaş ortalaması nədir?
// - Hər bir tələbə üçün cinsiyət və yaşı göstərən bir obyekt yaradin
// - Bütün tələbələrin ad və soyadlarının uzunluqlarının cəmi hansıdır
// - Tələbələrin adlarını tərsinə çevirin.
// - "gamig" həvəsi olan tələbələrin array-ini yaradın
// - Bütün tələbələrin hobbiləri olan array yaradın?
