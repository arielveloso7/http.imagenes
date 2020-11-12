
const urlUsuarios = 'https://reqres.in/api/users?page=2';

//Cloudinary
const cloudPreset = 'tnocqise';
const cloudUrl = 'https://api.cloudinary.com/v1_1/ariel739/upload';

const obtenerUsuarios = async () => {
    try {

        const resp = await fetch(urlUsuarios);

        const { data: usuarios } = await resp.json();

        return usuarios;

    } catch (err) {

        throw err;
    }

}

// archivoSubir es tipo File
const subirImagen = async (archivoSubir) => {
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivoSubir);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        })
        if (resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
    } catch (error) {
        throw error;
    }
}



export {
    obtenerUsuarios,
    subirImagen
}
