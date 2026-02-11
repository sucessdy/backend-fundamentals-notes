
import "@dotenvx/dotenvx/config";
import express  from "express"  // import the express 

const app = express() ;  // server instance 
// const port = process.env.PORT || 7000;

// const userData = [
    
//     { 
//     id:1, 
//     name: "mukta",
//     age :30, 
//     email : "mukta123@gmail.com", 
//     branch : "computer" , 
//     year: 2020 

    
// },

//  { 
//     id:2, 
//     name: "anuj",
//     age :31, 
//     email : "anuj123@gmail.com", 
//     branch : "computer" , 
//     year: 2023 

    
// },

//  { 
//     id:3, 
//     name: "manta",
//     age :30, 
//     email : "manta23@gmail.com", 
//     branch : "computer" , 
//     year: 2020 

    
// },
//  { 
//     id:4, 
//     name: "manine",
//     age :30, 
//     email : "manine123@gmail.com", 
//     branch : "computer" , 
//     year: 2020 

    
// },
//  { 
//     id:5, 
//     name: "rishi",
//     age :30, 
//     email : "rishi123@gmail.com", 
//     branch : "computer" , 
//     year: 2020 

    
// },

// ]

app.get("/" , (req, res) => { 
    res.send("heeeleee")
})
 
// app.route('students/').get((req, res)=> {  
// const id = Number(req.params.id)  ;
// const user = userData.filter((u )=> u.id === id) ;  
// res.send(user) ;  
// })

// app.route("api/users/:id").get((req, res) => {
//   const id = Number(req.params.id);
//   const user = users.filter((user) => user.id === id);
//   return res.send(user);
// }).put((req, res) => { return res.json({ status: "pending" }); }).delete((req, res) => { return res.json({ status: "pending" }); }) 



app.listen(8000, () => { 
console.log(`server is running at port : 8000`) // server listen at port number 9000
})