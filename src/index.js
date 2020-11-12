
//import { init } from './js/usuarios-page';
//init()
import { init } from './js/archivos-page';
init();


import * as CRUD from './js/crud-provider';

CRUD.getUsuario(1).then(console.log);

CRUD.crearUsuario({
    name: 'Fernando',
    job: 'Carpintero'
}).then(console.log);

CRUD.actualizarUsuario(1, {
    name: 'Melissa',
    job: 'Programadora'
}).then(console.log);

CRUD.borrarUsuario(1).then(console.log);