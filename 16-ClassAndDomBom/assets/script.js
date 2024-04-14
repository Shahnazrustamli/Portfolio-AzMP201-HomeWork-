//* 1) Aşağıdakı parameter-lrə sahib bir Human class-ı yaradın.
//* Human class
//*- Name,
//* - Surname,
//* - Age (default sıfır),
//* - gender
//* - nationality
//* - getFullName() - method
//* - getBirthYear() - method - new Date() - currentYear

class Human {
    constructor(name, surname, age = 0, gender, nationality) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
    }
    getFullName() {
        return `${this.name} ${this.surname}`
    }
    getBirthYear() {
        const year = new Date().getFullYear()
        return year - this.age
    }
    getInfo() {
        console.log(`${this.name} ${this.surname} ${this.age} ${this.gender} ${this.nationality}`)
    }
}

//* Human classından miras alan User class-ı yaradın.
//* User class
//* - Username
//* - Email
//* - isAdmin (true/false)
//* - isLogged (true/false) => default false (constructor-da gondermirsiniz bu deyeri)
//* - password (minimum 5 simvol olmalidir)
//* - bio (maxlength 30 ola biler)
//* - changePassword() - method-u var ve 2 parameter qebul edir, currentPassword ve newPassword => yoxlayirki eger currentPassword dogrudursa, newPassword-u teyin edib update edir, eger yalnishdirsa, kohne password oldugu kimi qalir ve alert verir
//* Eger, kohne ve yeni password eyni olarsa, 'new password and current password is the same' return etmelidir
//* - changeEmail() - method parameter olaraq users array-i ve newEmail qebul etmelidir ve newEmail-in bashqa user-de olub-olmamasini yoxlayir.
//* Eger unique-dirse o zaman email-i update edir, eger unique deyilse, oldugu kimi qalir ve alert verir.
//* Eger, kohne ve yeni password eyni olarsa, 'new password and current password is the same' return etmelidir

class User extends Human {
    constructor(name, surname, age, gender, nationality, username, email, isAdmin, password, bio) {
        super(name, surname, age, gender, nationality)
        this.username = username;
        this.email = email;
        this.isAdmin = isAdmin;
        this.isLogged = false;
        this.password = password
        this.bio = bio;
    }
    getInfo() {

        return ` ${super.getInfo} +${this.username} ${this.email} ${this.isAdmin} ${this.isLogged} ${this.password} ${this.bio}`
    }
    passwordLength(password) {
        if (password.length >= 5) {
            this.password = password;
            alert`Succes`
        } else {
            alert`Minimum 5 xarakter olmalıdır`
        }
    }

    bioLength(bio) {
        if (bio.length <= 30) {
            this.bio = bio;
            return `Succes`
        } else {
            return `Maksimum 30 xarakter ola biler`
        }
    }

    changePassword(currentPassword, newPassword) {
        if (currentPassword = this.password) {
            if (currentPassword === newPassword) {
                return "New password and current password are the same";
            } else {
                this.password = newPassword;
                return "Password changed successfully";
            }
        } else {
            return "Incorrect current password";
        }
    }

    changeEmail(users, newEmail) {
        let existsEmail = false;
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === newEmail) {
                existsEmail = true;
                break;
            }
        }
        if (!existsEmail) {
            this.email = newEmail;
            return "Email changed successfully";
        } else {
            return "Email already exists";
        }
    }
}

//* 2) User class-ından istifadə edib bir neçə user yaradın və bir users array-inə yığın.
const user1 = new User("Shahnaz", "Rushtemli", 20, "female", "Azerbayjani", "shahnazrtm", "shahnazrtm@gmail.com", true, "12345678", "azmiuda tehsil aliram");
const user2 = new User("Gulchin", "Isgenderova", 29, "female", "Azerbayjani", "illuminate", "gwlcin23@gmail.com", true, "hbhgvgf7", "lorem ipsum dolor sit");
const user3 = new User("Mehriban", "Rushtemli", 16, "female", "Azerbayjani", "mehrRustamli", "mehriban@gmail.com", false, "salam21", "lorem ipsum dolor sit");
const user4 = new User("Ismail", "Rushtemli", 45, "male", "Azerbayjani", "ismail", "ismalinejj@gmail.com", true, "123456HJ78", "lorem ipsum dolor sit");
const users = [user1, user2, user3, user4];
console.log(users)
//* 1. sortUsersByUsername() - parameter array qəbul edir və geriyə username-ə görə A-Z sort edir.
function sortUsersByUsername(array) {
    return array.slice().sort((a, b) => a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1);
}
console.log(sortUsersByUsername(users))

//* 2. filterByBirthYear() - parameter olaraq users array-i, bir year qəbul edir və həmin ildən böyük olan user-ləri filter edir.
function filterByBirthYear(arr, year) {
    return arr.filter(elem => elem.getBirthYear() < year)
}
console.log(filterByBirthYear(users, 2000))


//* 3. Login() - parameter olaraq users array-i, bir username və bir password qəbul edir. Və əgər
//* a. username-də bir user tapılmazsa, 'user not found!'
//* b. username ve ya password yalnish olarsa, 'incorrect username or password'
//* c. her ikisi dogru olarsa, ancaq her hansi bir user-in isLogged deyeri true olarsa, o zaman 'another user currently logged in' return etmelidir
//* d. her ikisi dogru olarsa hemin user-in isLogged deyeri true olur ve alert('successfully logged in') verir
// ! bunu alındıra bilmedim :(
function Login(arr, username, password) {
    let findUsername = arr.find(user => user.username === username)
    // let findPassword = arr.find(user => user.password === password)

    if (!findUsername) {
        return 'user not found!'
    }
    // if (!findUsername || !findPassword) {
    //     return 'incorrect username or password'
    // }
    return findUsername
}
console.log(Login(users, "Ismail", "123456HJ78"))


//* 3. LogOut() - parameter olaraq bir users array-i ve username qebul, Eger,
//* a. Daxil olunmush username-de bir user tapmazsa 'user not found'
//* b. Daxil olunmush username-de user tapsa, ancaq isLogged deyeri false olarsa o zaman, 'user did not logged in to log out!'
//* c. Daxil olunmush username-de user tapsa ve isLogged deyeri true olarsa o zaman, user-in isLogged deyeri false olur ve 'successfully' logged out




//* 4. CreateUser() - parameter olaraq bir array ve bir User obj qebul edir ve hemin user-i array-e elave edir

function CreateUser(arr, userObj) {
    arr.push(userObj)
    return arr
}
let userobj = {
    age: 59,
    bio: "lorem ipsum dolor sit",
    email: "slamjb23@gmail.com",
    gender: "male",
    isAdmin: false,
    isLogged: false,
    name: "Adem",
    nationality: "Azerbayjani",
    password: "adem1234",
    surname: "Hemidbeyov",
    username: "admHemidbyv"

}
console.log(CreateUser(users, userobj))

//* 5. DeleteUser() - parameter olaraq bir array ve bir username qebul edir ve daxil olunmush username-de user tapilarsa hemin User-i silir,
//* tapmazsa o zaman 'user not found' return edir.

function DeleteUser(arr, username) {
    let user = arr.find(elem => elem.username === username)

    if (user !== -1) {
        arr.splice(user, 1);
        return arr;

    } else {
        return `user not found`
    }
}
console.log(DeleteUser(users, "Shahnaz"))


//!burada azca dom istifade ederek yazmisham. Önceden yazdigim funksiyani istifade ede bilmedim. birdeki password inputunun typei password olanda ishlemir
let passwordInput = document.querySelector("#password");
let submitButton = document.querySelector(".submit");
let bioInput = document.querySelector("#bio");

submitButton.addEventListener("click", function () {
    let a = passwordInput.value
    // console.log(a)
    if (a.length >= 5) {
        this.password = password;
        alert`Succes`
    } else {
        alert`Password minimum 5 xarakter olmalıdır`
    }
})
submitButton.addEventListener("click", function () {
    a = bioInput.value
    if (a.length <= 30) {
        this.bio = bio;
        return `Succes`
    } else {
        alert`Maksimum 30 xarakter ola biler`
    }
})


