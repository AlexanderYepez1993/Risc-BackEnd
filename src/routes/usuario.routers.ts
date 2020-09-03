import { Router } from 'express'
const router = Router()

import {
    obtenerUsuarios, crearUsuario, obtenerUsuario, actualizarUsuario, eliminarUsuario, loginUsuario, obtenerTipoAmbito,
    obtenerDescripcionAmbito, actualizarPassword, validarPassword, obtenerIdPunto, validarDni, obtenerListaUsuarios,
    restablecerPassword, obtenerRoles, obtenerRolesUsuario, actualizarUsuarioLogged, actualizarEstado
} from '../controllers/usuario.controller';

router.get('/usuarios', obtenerUsuarios);
router.get('/usuarios/:dni', obtenerUsuario);
router.get('/tipo_ambito/:descripcion_ambito', obtenerTipoAmbito);
router.get('/id_punto/:descripcion_ambito', obtenerIdPunto);
router.get('/roles_selectedUsuario/:dni', obtenerRolesUsuario);
router.post('/register', crearUsuario);
router.post('/login', loginUsuario);
router.post('/validarPassword', validarPassword);
router.post('/validarDni', validarDni);
router.put('/descripcion_ambito', obtenerDescripcionAmbito);
router.put('/lista_usuarios', obtenerListaUsuarios);
router.put('/roles', obtenerRoles);
router.put('/usuarios/:dni', actualizarUsuario);
router.put('/actualizar_estado/:dni', actualizarEstado);
router.put('/usuario_logged/:dni', actualizarUsuarioLogged);
router.put('/changedPassword/:dni', actualizarPassword);
router.put('/restorePassword/:dni', restablecerPassword);
router.delete('/usuarios/:dni', eliminarUsuario);

export default router