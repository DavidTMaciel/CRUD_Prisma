import Express from "express";
const app = Express();

app.use(Express.json())

app.get("/",(req, res)=>{
    return res.json({hello: 'world'});
})

app.listen(8081, ()=>{
    console.log("Serve is running on port 8081");
})