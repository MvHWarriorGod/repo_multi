const argv = require('yargs');
const colors = require('colors');
.command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;




const { crearArchivo, listarArchivo, crearArchivo1 } = require('./multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo1(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');

}




console.log(argv.base);
console.log(argv.limite);
//console.log(argv.limite);
//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];


/*crearArchivo(base)
    .then(archivo => console.log(`archivo creado: ${archivo}`))
    .catch(e => console.log(e));*/