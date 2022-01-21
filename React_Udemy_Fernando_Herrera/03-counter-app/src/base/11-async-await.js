/* const getImagenPromesa = () => 
    new Promise(resolve => resolve('http://sfsdfdsfsdfd.com'));

getImagenPromesa().then(console.log); */

export const getImagen = async (apiKey) => {
    //const apiKey = 'RHHTxfPP13Hp2qPjeceyWuqAzfCetKkv';
    //const apiKey = 'RHHTxfPP13Hp2qPjeceyWuqAzfCetKkvf';
    try {
        const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await respuesta.json();
        const {url} = data.images.original;
        /* const img = document.createElement('img');
        img.src = url;
        document.body.append(img); */
        return url;
    } catch (error) {
        //console.error(error);
        return 'No existe';
    }
}
//getImagen();