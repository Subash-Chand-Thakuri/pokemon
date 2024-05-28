import React, { useState } from 'react';
import PokemonCard from './PokemonCard';
import { TypeAnimation } from 'react-type-animation';

interface Pokemon {
  name: string;
  image: string;
  types: string[];
}

interface PokemonListProps {
  pokemons?: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate the current items to display based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPokemons = pokemons?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = pokemons ? Math.ceil(pokemons.length / itemsPerPage) : 0;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='flex flex-col mt-12'>
      <h1 className='text-4xl pt-2 font-bold tracking-tighter m-auto bg-clip-text text-transparent bg-gradient-to-r from-[orange] to-slate-200 border-white border-r-2 text-center px-4'>
        <TypeAnimation
          sequence={[
            'Welcome To The World',
            1000,
            'Welcome To The World Of Pokemon...',
            1000,
            'Welcome To The World Of Curiosity',
            1000,
            'Welcome To The World Of Adventure',
            1000,
          ]}
          speed={50}
          style={{ fontSize: '2em' }}
          repeat={Infinity}
        />
      </h1>
      <div className="pokemon-list grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-x-2 lg:gap-x-0 gap-y-12 mb-6 mt-12 p-4">
        {currentPokemons?.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            image={pokemon.image}
            types={pokemon.types}
          />
        ))}
      </div>
      <div className="pagination-controls flex justify-center mt-4 mb-8 font-bold items-center">
        <button
          className={`px-4 py-2 mx-2 rounded ${currentPage === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#0184cf] hover:bg-gray-700 text-white'}`}
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2 mx-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className={`px-4 py-2 mx-2 rounded ${currentPage === totalPages ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#0184cf] hover:bg-gray-700 text-white'}`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
