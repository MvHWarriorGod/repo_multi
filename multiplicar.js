//reaquiereds
const fs = require('fs');
let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('no es un numero');
            return;
        }
        let data = '';
        for (i = 1; i <= 10; i++) {
            data += `${base} x ${i} = ${base*i}\n`;
        }
        fs.writeFile('tabla_multiplicar.txt', data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`el archivo multiplacar${base}.txt`);

        });
    })
}
let crearArchivo1 = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('no es un numero');
            return;
        }
        let data = '';
        for (i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base*i}\n`;
        }
        fs.writeFile('tabla_multiplicar.txt', data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`el archivo multiplacar${base}.txt`);

        });
    })
}

let listarArchivo = (base, limite = 10) => {
    for (i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base*i}\n`);
    }
}


module.exports = {
    crearArchivo,
    listarArchivo,
    crearArchivo1
}