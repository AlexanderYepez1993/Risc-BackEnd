import {Router} from 'express'
const router = Router()

import {obtenerUsuarios,crearUsuario,obtenerUsuario,actualizarUsuario,eliminarUsuario} from '../controllers/usuario.controller'

router.get('/usuarios', obtenerUsuarios);
router.post('/usuarios', crearUsuario);
router.get('/usuarios/:id', obtenerUsuario);
router.put('/usuarios/:id', actualizarUsuario);
router.delete('/usuarios/:id', eliminarUsuario);

export default router