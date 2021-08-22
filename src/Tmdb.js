const API_KEY = '6919806652e69808bc81f1c8be0180d4'
const API_BASE = 'https://api.themoviedb.org/3'

async function basicFetch(endpoint) {
    let result
    await fetch(`${API_BASE}/${endpoint}`)
    .then(req => {
        return req.json()
    })
    .then(json=>{
        result = json
    })

    return result
}

let homeList = {
    getHomeList: async () => {
        return [{
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`discover/tv?language=pt-BR&api_key=${API_KEY}&with_network=213`)
            },

            {
                slug: 'top rated',
                title: 'Em alta',
                items: await basicFetch(`movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },

            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },

            {
                slug: 'romance',
                title: 'romance',
                items: await basicFetch(`discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },

            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },

            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },

            {
                slug: 'documentary',
                title: 'Documentario',
                items: await basicFetch(`discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    },

    getMovieInfo: async (id, type) => {
        let info = {}

        switch (type) {
            case 'tv':
                info = await basicFetch(`/tv/${id}?language=pt-BR&api_key=${API_KEY}`)
            break;
            case 'movie':
                info = await basicFetch(`/movie/${id}?language=pt-BR&api_key=${API_KEY}`)                
            break;

            default:
                info = null;
            break;
        }

        return info
    }

}
export default homeList