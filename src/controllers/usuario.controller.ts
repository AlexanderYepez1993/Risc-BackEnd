import {Request, Response} from 'express'
import {getRepository} from 'typeorm'
import {Usuarios_Risc} from '../entity/Usuario'

export const obtenerUsuarios = async (req: Request, res: Response): Promise<Response> =>{
    const usuarios = await getRepository(Usuarios_Risc).find();
    return res.json(usuarios);
};

export const obtenerUsuario = async (req: Request, res: Response): Promise<Response> =>{
    const resultados = await getRepository(Usuarios_Risc).findOne(req.params.id);
    return res.json(resultados);
};

export const crearUsuario = async (req: Request, res: Response): Promise<Response> =>{
    const nuevoUsuario = getRepository(Usuarios_Risc).create(req.body);
    const resultados = await getRepository(Usuarios_Risc).save(nuevoUsuario);
    return res.json(resultados);
};

export const actualizarUsuario = async (req: Request, res: Response): Promise<Response> =>{
    const usuario = await getRepository(Usuarios_Risc).findOne(req.params.id);
    if (usuario) {
        getRepository(Usuarios_Risc).merge(usuario, req.body);
        const resultados = await getRepository(Usuarios_Risc).save(usuario);
        return res.json(resultados);
    }
    return res.status(404).json({msg: 'USUARIO NO ENCONTRADO'});
};

export const eliminarUsuario = async (req: Request, res: Response): Promise<Response> =>{
    const usuario = await getRepository(Usuarios_Risc).findOne(req.params.id);
    if (usuario) {
        const resultados = await getRepository(Usuarios_Risc).delete(req.params.id);
        return res.json(resultados);
    }
    return res.status(404).json({msg: 'USUARIO NO ENCONTRADO'});
};