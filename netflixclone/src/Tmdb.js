const API_KEY = '888e61310cb2c9ecdf93ba2b89adb90c';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- originais da netflix
- recomendados/destaques (trending)
- Em alta (top rated)
- ação
- cómedia
- terror
- romance
- documentários
*/

/*
async função de requisição para um serviço externo
em baixo traz a resposta e preenche nos items abaixos
*/

const basicFetch = async (endpoint) => {
    const req = await fetch (`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}


// eslint-disable-next-line
export default {
    getHomeList: async () => {
        return[
          {
            slug: 'originals',
            title: 'Originais do Netflix',
            items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
          },
          {
            slug: 'trending',
            title: 'Recomendados para Você',
            items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
         },
         {
            slug: 'toprated',
            title: 'Em Alta',
            items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
          },
          {
            slug: 'action',
            title: 'Ação',
            items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
         },
         {
            slug: 'Commedy',
            title: 'Comédia',
            items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
          },
          {
            slug: 'horror',
            title: 'Terror',
            items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
         },
         {
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
         },
         {
            slug: 'documentary',
            title: 'Documentários',
            items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
          },
     ];
    }
}