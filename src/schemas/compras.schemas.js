import Joi from "joi";

export const schemaCompra = Joi.object({
    carrinho: Joi.array().min(1).required(),
    userid: Joi.string().required(),
    valor: Joi.number().required(),
    parcelas: Joi.number().min(1).max(12).required(),
    tipo: Joi.string().valid("Boleto","Cartão de Crédito").required(),
    ccnumber: Joi.string().creditCard()
})