import { db } from "../database/database.connection.js";

export async function pegarProdutos (req, res) {

    const { authorization } = req.headers;

    console.log(authorization)

    const token = authorization?.replace("Bearer ", "");
    

    if (!token) return res.sendStatus(401);


    try {

        const listaProdutos = await db.collection("produtos").find().toArray();
        console.log(listaProdutos)
        
        res.send(listaProdutos);

    } catch (err) {
        res.status(500).send(err.message);
    }
}