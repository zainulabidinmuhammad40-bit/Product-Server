import express from "express"


const app =express()
app.use(express.json())
let products = [
    {
        id: 3,
        name: "samsung A35",
        price: 50000,
        imageUrl:"https://hips.hearstapps.com/hmg-prod/images/samsung-galaxy-promo-007-68f2b27d156b5.jpg?crop=0.512xw:0.683xh;0.342xw,0.141xh&resize=640:*",
        desc:"A cimfrodable and high-quality gaming.",

    },
   {
        id: 2,
        name: "samsung A35",
        price: 50000,
        imageUrl:"https://hips.hearstapps.com/hmg-prod/images/samsung-galaxy-promo-007-68f2b27d156b5.jpg?crop=0.512xw:0.683xh;0.342xw,0.141xh&resize=640:*",
        desc:"A cimfrodable and high-quality gaming.",

    },
];
app.get("/products",(req,res)=>{
    res.json(products);
})
app.post("/products",(req,res)=>{
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json(newProduct);
})
app.delete("/products/:id",(req,res) => {
    const {id} = req.params;
    products = products.filter((products) => products.id !==parseInt(id));
    res.status(204).send();
})

app.listen(5050,()=>{
    console.log("server is running on prot 5050")
})

