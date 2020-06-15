import {Request, Response} from 'express'
import {getRepository} from 'typeorm'
import {Usuarios_Risc} from '../entity/Usuario'
import jwt from 'jsonwebtoken'
import bycrypt from 'bcryptjs'

const SECRET_KEY = 'SecretKeyRISC';

export const obtenerUsuarios = async (req: Request, res: Response): Promise<Response> =>{
    const usuarios = await getRepository(Usuarios_Risc).find();
    return res.json(usuarios);
};

export const obtenerUsuario = async (req: Request, res: Response): Promise<Response> =>{
    const resultados = await getRepository(Usuarios_Risc).findOne(req.params.dni);
    return res.json(resultados);
};

export const crearUsuario = async (req: Request, res: Response): Promise<Response> =>{
    try{
        const nuevoUsuario = {
            dni: req.body.dni,    
            password: bycrypt.hashSync(req.body.password),
            email: req.body.email,
            apellido_paterno: req.body.apellido_paterno,
            apellido_materno: req.body.apellido_materno,
            nombres: req.body.nombres,
            tipo_ambito: req.body.tipo_ambito,
            descripcion_ambito: req.body.descripcion_ambito
        }
        const newUser = getRepository(Usuarios_Risc).create(nuevoUsuario);
        const usuarioExistente = await getRepository(Usuarios_Risc).findOne({ where: {dni: newUser.dni} });
        if(usuarioExistente?.dni==newUser.dni){
            return res.status(409).send({ message: 'USUARIO YA EXISTE'})
        }else{
            const resultados = await getRepository(Usuarios_Risc).save(newUser);
            const expiresIn = 30 * 60;
            const accessToken = jwt.sign({resultados},SECRET_KEY,{expiresIn: expiresIn});
            const dataUser = {
                dni: resultados.dni,
                email: resultados.email,
                tipo_ambito: resultados.tipo_ambito,
                descripcion_ambito: resultados.descripcion_ambito,
                accessToken: accessToken,
                expiresIn: expiresIn
            }
            return res.json(dataUser);
        }
    }catch(err){
        return res.status(409).send({ message: 'USUARIO YA EXISTE'})
    }
};

export const loginUsuario = async (req: Request, res: Response): Promise<Response> =>{
    try{
        const userData = await getRepository(Usuarios_Risc).findOne({ where: {dni: req.body.dni} });
        if(!userData){
            //DNI NO PERTENECE A NINGÚN USUARIO
            return res.status(409).send({ message: 'VERIDICAR SU USUARIO Y/O CONTRASEÑA'})
        }else{
            const resultPassword = bycrypt.compare(userData.password, req.body.password);
            if(resultPassword){
                const expiresIn = 30 * 60;
                const accessToken = jwt.sign({userData},SECRET_KEY,{expiresIn: expiresIn});
                const dataUser = {
                    dni: userData.dni,
                    email: userData.email,
                    tipo_ambito: userData.tipo_ambito,
                    descripcion_ambito: userData.descripcion_ambito,
                    accessToken: accessToken,
                    expiresIn: expiresIn
                }
                return res.send({dataUser});
            }else{
                //CONTRASEÑA INCORRECTA
                return res.status(409).send({ message: 'VERIDICAR SU USUARIO Y/O CONTRASEÑA'})   
            }
        }
    }catch(err){
        return res.status(409).send({ message: 'VERIDICAR SU USUARIO Y/O CONTRASEÑA'})
    }
};

export const actualizarUsuario = async (req: Request, res: Response): Promise<Response> =>{
    const usuario = await getRepository(Usuarios_Risc).findOne(req.params.dni);
    if (usuario) {
        getRepository(Usuarios_Risc).merge(usuario, req.body);
        const resultados = await getRepository(Usuarios_Risc).save(usuario);
        return res.json(resultados);
    }
    return res.status(404).json({msg: 'USUARIO NO ENCONTRADO'});
};

export const eliminarUsuario = async (req: Request, res: Response): Promise<Response> =>{
    const usuario = await getRepository(Usuarios_Risc).findOne(req.params.dni);
    if (usuario) {
        const resultados = await getRepository(Usuarios_Risc).delete(req.params.dni);
        return res.json(resultados);
    }
    return res.status(404).json({msg: 'USUARIO NO ENCONTRADO'});
};