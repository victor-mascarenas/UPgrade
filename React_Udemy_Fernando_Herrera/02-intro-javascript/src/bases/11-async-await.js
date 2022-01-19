/* const getImagenPromesa = () => 
    new Promise(resolve => resolve('http://sfsdfdsfsdfd.com'));

getImagenPromesa().then(console.log); */

const getImagen = async () => {
    const apiKey = 'RHHTxfPP13Hp2qPjeceyWuqAzfCetKkv';
    try {
        const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await respuesta.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.error(error);
    }
}
getImagen();