import axios from "axios";
import type { GiphyResponse } from "../interfaces/giphy.response";

export const getGifsBySearch = async (query: string): Promise<Gif[]> => {
    const baseURL: string = "https://api.giphy.com/v1/gifs/search";
    const response = await axios.get<GiphyResponse>(baseURL, {
        params: {
            api_key: "vbbQRsqXzxMlat1cURTUihYWUSlPuMAd",
            q: query,
            limit: 10,
            lang: "en"
        }
    });
    return response.data.data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: parseInt(gif.images.original.width),
        height: parseInt(gif.images.original.height),
    }));
}