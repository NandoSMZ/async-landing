const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCzrM_068Odho89mTRrrxqbA&part=snippet%2Cid&order=date&maxResults=10';

const content = null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dcdd76345fmsh67dae72951a8e0bp12c4a3jsneb8c1e578308',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi,options)
    const data = await response.json()
    return data
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
            <div class="flex flex-col items-center mr-4">
                <div class="w-64 bg-gray-200 aspect-w-16 aspect-h-9 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4">
                    <h3 class="text-sm text-gray-700">
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
        `).slice(0, 4).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();

/* try {
	const response = await fetch(API, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
} */