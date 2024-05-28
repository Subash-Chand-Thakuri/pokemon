// PokemonCard.tsx
import React from 'react';

interface PokemonCardProps {
  name: string;
  image: string;
  types: string[];
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, image, types }) => (
  <div className="pokemon-card place-self-center bg-slate-200 border-gray-100 border-[1px] text-black flex flex-col justify-center items-center h-[26rem] w-[18rem] rounded-xl p-4 hover:bg-[#1c6000] hover:text-white cursor-pointer shadow-2xl drop-shadow-xl hover:scale-110 transition-all">
    <img src={image} alt={name} className=' w-full' />
    <h2 className='font-bold text-2xl'>Name: {name}</h2>
    <div className=" flex">
      <h2 className='font-bold text-xl mr-3'>Types: </h2>
    <div className='  gap-1 mx-2 font-bold text-xl'>
      {types.map((type) => (
        <li key={type} className='tracking-tighter'>{type}</li>
      ))}
    </div>
    </div>
  </div>
);

export default PokemonCard;
