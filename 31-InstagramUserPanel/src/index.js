import express from "express"
import "dotenv/config"
import fs from "fs"
// import bodyParser from "body-parser"

const app = express()
const PORT = process.env.PORT || 3001


const database = JSON.parse(fs.readFileSync("./db.json"))

app.get("/api/users", getAllUsers)
app.get("/api/users/:id", getUser)
app.delete("/api/users/:id", deleteById)
app.post("/api/users", postNewUsers)
// app.use(bodyParser.json());

function getAllUsers(req, res) {
    const users = database.users
    res.send(users)
}
function getUser(req, res) {
    const { id } = req.params
    const dbUser = database.users.find((el) => el.id === id)
    if (!dbUser) return res.status(404).send("Post not found")
    res.send(dbUser)
}
function deleteById(req, res) {
    const del = database.users.filter((elem) => elem.id != req.params.id)
    res.send(del)
}
function postNewUsers(req, res) {
    const user=database.users
    const newPost={id:user.length+1, ...req.body}
    user.push(newPost)
    res.send("Posted")
}
//   app.put("/:id", (req, res) => {
//     let id = req.params.id;
  
//     let obj = req.body;
//     let elem = arr.findIndex((el) => el.id == id);
//     arr[elem] = { id: id, ...obj };
//     res.send(arr);
//   });
  
//   app.patch("/:id", (req, res) => {
//     let id = req.params.id;
//     let obj = req.body;
//     let elemIndex = arr.findIndex((el) => el.id == id);
//     let elem = arr.find((el) => el.id == id);
  
//     arr[elemIndex] = { ...elem, ...obj };
//     res.send(arr);
//   });
app.listen(PORT, () => {
    console.log(`Server listen ${PORT}`)
});

