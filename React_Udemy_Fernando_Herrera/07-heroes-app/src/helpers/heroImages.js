const heroeImages = require.context('../assets', true);

export const getImage = (id) => {
    return heroeImages(`./${id}.jpg`);
};