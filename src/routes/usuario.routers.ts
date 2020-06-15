import {Router} from 'express'
const router = Router()

import { obtenerUsuarios, crearUsuario, obtenerUsuario, actualizarUsuario, eliminarUsuario, loginUsuario } from '../controllers/usuario.controller';

router.get('/usuarios', obtenerUsuarios);
router.post('/register', crearUsuario);
router.post('/login', loginUsuario);
router.get('/usuarios/:dni', obtenerUsuario);
router.put('/usuarios/:dni', actualizarUsuario);
router.delete('/usuarios/:dni', eliminarUsuario);

export default router