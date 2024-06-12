const giphyApiKey = "s5iorR92gxn0thWEItpynziK7wGbffSm";
const baseUrl = 'https://api.giphy.com/v1/gifs/';

class GiphyApi {
    constructor(baseUrl, giphyApiKey) {
        this.baseUrl = baseUrl;
        this.giphyApiKey = giphyApiKey;
    }

    // Get random Giphy based on a tag
    async getRGiphy(tag) {
        try {
            const res = await axios.get(`${this.baseUrl}random?api_key=${this.giphyApiKey}&tag=${tag}&rating=g`);
            return res.data.data.images.fixed_height.url; // Return the GIF URL
        } catch (error) {
            console.log(error);
        }
    }
}

const giphyApi = new GiphyApi(baseUrl, giphyApiKey);

// async function appendRGiphy() {
//     const response = await giphyApi.getRGiphy('cat'); // Use 'cat' as the default tag
//     const randomGiphyContainer = document.getElementById('randomGiphy');

//     randomGiphyContainer.innerText = "";

//     const imgElement = document.createElement('img');
//     imgElement.setAttribute('src', response);
//     imgElement.setAttribute('alt', 'Random Giphy');

//     randomGiphyContainer.appendChild(imgElement);
// }

// appendRGiphy();