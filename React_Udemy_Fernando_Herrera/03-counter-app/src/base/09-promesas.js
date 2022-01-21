import { getHeroeById, getHeroesByOwner } from "./08-imp-exp";

/* const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        //console.log('2 segundos despues');
        //Tarea
        //1. Importar getHeroeById
        const heroe = getHeroeById(2);
        resolve(heroe);
        //reject('No se pudo encontrar el heroe');
    }, 1000);
});

promesa.then((heroe) => {
    console.log(heroe);
})
.catch((error) => console.warn(error)); */

export const getHeroeByIdAsync = (id) => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (!heroe) {
                reject('Not Found');
            }
            resolve(heroe);
        }, 1500);
    });
    return promesa;
}

//getHeroeByIdAsync(1)
    //.then(heroe => console.log('Heroe: ', heroe))
    //.then(console.log)
    //.catch(error => console.log(`Error: ${error}`));