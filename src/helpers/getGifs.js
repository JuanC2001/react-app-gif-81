export const getGifs = async(categoria) => {

    // encodeURI: esta función de JavaScript se encarga de reemplazar los espacios por un porcentaje veinte (%20)
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria) }&limit=10&api_key=5wBbS3vFSlZ41h9B907O0VhhXuIaMr6X`
    const resp = await fetch(url); 
    const { data } = await resp.json();
    
    const gifs = data.map(img => {
        return {
            id : img.id,
            title : img.title,
            url : img.images.downsized_medium.url 
        }
    });
    
    return gifs;
}