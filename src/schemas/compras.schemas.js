import Joi from "joi";

export const schemaCompra = Joi.object({
    carrinho: Joi.array().min(1).required(),
    userid: Joi.string().required(),
    valor: Joi.number().required(),
    parcelas: Joi.number().min(1).max(12).required(),
    tipo: Joi.string().valid("Boleto","Cartão de Crédito").required(),
    ccnumber: Joi.string().creditCard(),
    cvv: Joi.number().min(3),
    expirationDate: Joi.date(),
    nomeCartao: Joi.string(),
    nomeCompleto: Joi.string().required(),
    telefone: Joi.string().min(10).required(),
    cep: Joi.string().min(8).max(8).required(),
    rua: Joi.string().required(),
    numeroCasa: Joi.number().required(),
    state: Joi.string().required(),
    cidade: Joi.string().required(),
    bairro: Joi.string().required(),
    cpf: Joi.string().min(11).max(11).required()
})