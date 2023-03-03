import { Request, Response } from "express";

import { Pet } from "../models/Pet";
import { createMenuObject } from "../helpers/createMenuObject";

export const search = (req: Request, res: Response) =>{
    let query: string = req.query.q as string; //variavel reconhecer o foi enviado metodo GET

    let list = Pet.getFromName(query);//enviando o query para a busca

    if(!query) { //redireciona busca caso nada seja digitado
        res.redirect('/');
        return;
    }

    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query
    });
}