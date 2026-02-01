import type { GiphyRandomResponse } from "./data/giphy.response";

const API_KEY = "mMnlysYHa8TMRGe0WlNeVnurQXWO0fpz";
const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);

const createImageInsideDOM = (url: string) => {
    const imageUrl = url;
    console.log(imageUrl)
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    document.body.append(imgElement);
}

//Promesa anidada
myRequest
    .then(response => response.json())
    .then(({ data }: GiphyRandomResponse) => {
        const imageUrl = data.images.original.url;
        createImageInsideDOM(imageUrl);
    })
    .catch(err => console.error(err));
