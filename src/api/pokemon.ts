import axios from 'axios';

export const fetchPokemons = async () => {
  try {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
    // console.log(res.data.results)
    const promises = res.data.results.map(async (pokemon: any) => {
      const details = await axios.get(pokemon.url);
    //   console.log(details.data.name,details.data.sprites.front_default,details.data.types)
      return {
        name: details.data.name,
        image: details.data.sprites.front_default,
        types: details.data.types.map((type: any) => type.type.name),
      };
    });
    return Promise.all(promises);
  } catch (error) {
    console.error('Error fetching Pokemons:', error);
    throw error;
  }
};
