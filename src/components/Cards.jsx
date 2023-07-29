import { Link } from 'react-router-dom';

const Cards = ({ cardData }) => {
  console.log(cardData)
  return (
    <Link to={`/player/${cardData.id}`}> 
      <div className='bg-slate-500 sm:w-[15vw] w-[30vw] sm:h-[15vh] h-[10vh] ml-1 mt-10 rounded-[5px]'>
        <img className='rounded-[5px]' src={cardData.image} alt="" />
        <p className='flex justify-center items-center font-semibold text-secondary mt-2 sm:text-sm text-xs'>{cardData.title}</p>
        <p className='flex justify-center items-center font-semibold text-secondary mt-2 sm:text-[10px] text-[8px]'>{cardData.artist}</p>
      </div>
    </Link>
  );
};

export default Cards;
