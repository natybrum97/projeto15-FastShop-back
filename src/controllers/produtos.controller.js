import { ObjectId } from "mongodb";
import { db } from "../database/database.connection.js";

export async function registraCompra(req,res){
    try {
        const compra = await db.collection("compras").insertOne(req.body)
        res.status(200).send("Compra realizada com sucesso")
    } catch (err) {
        return res.status(500).send(err.message);
    }
}




export async function getProdID(req,res){

    const { id } = req.params;

    try {

        const prod = await db.collection("produtos").findOne({ _id: new ObjectId(id)});

        if(!prod) return res.status(404).send({message:"Produto não encontrado pelo id", id});

        return res.status(200).send(prod);

    } catch (err) {

        return res.status(500).send(err.message);

    }
}

export async function pegarProdutos (req, res) {

    try {

        const listaProdutos = await db.collection("produtos").find().toArray();
        
        res.send(listaProdutos);

    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function pegarProdutosPorCategoria (req, res) {

    const { categoria } = req.params;

    try {

        const listaProdutosPorCategoria = await db.collection("produtos").find({ "categoria": categoria }).toArray();

        res.send(listaProdutosPorCategoria);

    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function postRegistraCarrinho (req, res) {

    const { categoria, description, nome, url, valor, quantidade } = req.body;

    const { sessao } = res.locals;
    
    try {

        const carrinho = await db.collection("ColocaNoCarrinho").insertOne({ categoria, description, nome, url, valor, quantidade, idUsuario: sessao.idUsuario });
        const documentoInserido = await db.collection("ColocaNoCarrinho").findOne({ _id: carrinho.insertedId });
        console.log(documentoInserido);
        res.sendStatus(201);

    } catch (err) {
        res.status(500).send(err.message);
    }

}

export async function pegarCarrinho (req, res) {

    const { sessao } = res.locals;

    try {
        const listaCarrinho = await db.collection("ColocaNoCarrinho").find({idUsuario: sessao.idUsuario}).toArray();

        console.log(listaCarrinho);
        
        res.send(listaCarrinho);

    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function deletaProduto (req, res) {

    const { id } = req.params;
    
    try {
    const result = await db.collection("ColocaNoCarrinho").deleteOne({ _id: new ObjectId(id) })
    if (result.deletedCount === 0) return res.status(404).send("Esse produto não existe no carrinho!");
    res.status(204).send("Produto deletado com sucesso!");
    } catch (err) {
    res.status(500).send(err.message);
    }
    }

    export async function deletaTudoDoCarrinho(req, res) {
        try {
          const result = await db.collection("ColocaNoCarrinho").deleteMany({});
          
          if (result.deletedCount === 0) {
            return res.status(404).send("O carrinho está vazio!");
          }
      
          res.status(204).send("Todos os produtos foram removidos do carrinho!");
        } catch (err) {
          res.status(500).send(err.message);
        }
      }
      