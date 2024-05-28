import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { fetchPokemons } from './api/pokemon';
import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList';
import axios from 'axios';

const App: React.FC = () => {
  const {data, isLoading, error } = useQuery('pokemons', fetchPokemons,{
    staleTime: 1000*60*60,
  });
  const [search , setSearch] = useState('');

  if(isLoading) return <div>Loading...</div>;
  if(error) return <div>Loading...</div>;

// console.log(data,isLoading,error)
   
  const filteredPokemons = search ? 
  data?.filter((pokemon: any) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  ) : data;

  console.log(filteredPokemons)

  return (
    <div>
      <SearchBar onSearch={setSearch} />
      <PokemonList pokemons={filteredPokemons} />
    </div>
  );
};

export default App;
