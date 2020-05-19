var faker =require('faker');

const express = require("express");
const app = express();
const port = 8000;

app.use(express.json() );
app.use(express.urlencoded({extended:true}) );


app.listen(port, () => console.log("listening on port 8000 "))


class User {
    constructor(){
        this.Name=faker.name.findName();
        this.PhoneNumber=faker.internet.email();
        this.email=faker.internet.email();
        this.passsword=faker.internet.email();
    }   
}

class Company {
    constructor(){
        this.id=faker.internet.email();
        this.name=faker.internet.email();
        this.address=faker.internet.email();
    }
}

app.get("/api", (req,res)=>{
    res.json({message: "Hello world"})
});

app.get("/api/users/new", (req, res)=>{

    const person = new User();
    console.log(person);

    res.json(person);
});

app.get("/api/companies/new", (req, res) =>{
    const newComp = new Company();
    console.log(newComp);

    res.json(newComp);
})



app.get("/api/user/company", (req, res) =>{
    
    const person = new User();
    console.log(person);

    const newComp = new Company();
    console.log(newComp);

    res.json({person, newComp});
    
});

