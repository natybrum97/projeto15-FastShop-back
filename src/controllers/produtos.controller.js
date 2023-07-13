import { ObjectId } from "mongodb";
import { db } from "../database/database.connection.js";

export async function getProdID(req,res){
    const {id} = req.params
    try {
        const prod = await db.collection("produtos").findOne({ _id: new ObjectId(id)})
        if(!prod) return res.status(404).send({message:"Produto não encontrado pelo id",id})
        return res.status(200).send(prod)   
    } catch (err) {
        return res.status(500).send(err.message)
    }
}
