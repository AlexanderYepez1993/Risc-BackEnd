import { Router } from 'express'
const router = Router()

import {
    obtenerUsuarios, crearUsuario, obtenerUsuario, actualizarUsuario, eliminarUsuario, loginUsuario, obtenerTipoAmbito,
    obtenerDescripcionAmbito, actualizarPassword, validarPassword, obtenerIdPunto, validarDni, obtenerListaUsuarios
} from '../controllers/usuario.controller';

router.get('/usuarios', obtenerUsuarios);
router.get('/usuarios/:dni', obtenerUsuario);
router.get('/tipo_ambito/:tipo_ambito', obtenerTipoAmbito);
router.get('/id_punto/:descripcion_ambito', obtenerIdPunto);
router.post('/register', crearUsuario);
router.post('/login', loginUsuario);
router.post('/validarPassword', validarPassword);
router.post('/validarDni', validarDni);
router.put('/descripcion_ambito', obtenerDescripcionAmbito);
router.put('/lista_usuarios', obtenerListaUsuarios);
router.put('/usuarios/:dni', actualizarUsuario);
router.put('/changedPassword/:dni', actualizarPassword);
router.delete('/usuarios/:dni', eliminarUsuario);

export default router