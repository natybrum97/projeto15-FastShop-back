import { ObjectId } from "mongodb";
import { db } from "../database/database.connection.js";

export async function getPID(req,res){
    const {id} = req.params
    try {
        const prod = await db.collection("produtos").findOne({ _id: new ObjectId(id)})
        if(!prod) return res.status(404).send({message:"Produto não encontrado pelo id",id})
        return res.status(200).send(prod)   
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

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