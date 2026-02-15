import "@dotenvx/dotenvx/config";
import app from "./src/app.js";
import connectDB from "../database/src/db/db.js";

const port = process.env.PORT || 7000 
async function startServer() {
    try{ 
        await connectDB() ; 
        app.listen(port, ()=> {
console.log(`Server is runnning port : ${port}`)
})


    }catch(err){
       console.error(err) ;
process.exit(1) ; 

    }
}


startServer();
 

