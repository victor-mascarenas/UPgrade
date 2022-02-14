export const fileUpload = async (file) => {
    let url;
    const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dry754epk/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);
    const resp = await fetch(cloudinaryUrl, {
        method: 'POST',
        body: formData
    });
    if (resp.ok) {
        const cloudinaryResp = await resp.json();
        url = cloudinaryResp.secure_url;
    }
    return url;
};