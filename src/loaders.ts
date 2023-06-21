// import 'dotenv/config'
// import.meta.env.VITE_UNSPLASH_ACCESS_KEY

export async function getPhotos(query: string) {
    const data = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`);
    const res = await data.json();
    // console.log(res);
    return res.results
}

export async function getPhoto(id: string) {
    const data = await fetch(`https://api.unsplash.com/photos/${id}?client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`);
    const res = await data.json()
    console.log('photo res', res)
    return res
}