import { Router } from 'express'
const router = Router()

import { obtenerUsuarios, crearUsuario, obtenerUsuario, actualizarUsuario, eliminarUsuario, loginUsuario, obtenerTipoAmbito, obtenerDescripcionAmbito, actualizarPassword } from '../controllers/usuario.controller';

router.get('/usuarios', obtenerUsuarios);
router.get('/tipo_ambito/:tipo_ambito', obtenerTipoAmbito);
router.put('/descripcion_ambito', obtenerDescripcionAmbito);
router.post('/register', crearUsuario);
router.post('/login', loginUsuario);
router.get('/usuarios/:dni', obtenerUsuario);
router.put('/usuarios/:dni', actualizarUsuario);
router.put('/changedPassword/:dni', actualizarPassword);
router.delete('/usuarios/:dni', eliminarUsuario);

export default router