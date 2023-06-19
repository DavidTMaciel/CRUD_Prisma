import Express from "express";
import {router} from "./routes/routes";
const app = Express();

app.use(Express.json())
app.use(router);

app.listen(8081, ()=>{
    console.log("Serve is running on port 8081");
})