import { FiSearch } from 'react-icons/fi'; // Import the required icons

const Search = () => {
  return (
    <section>
      <div className='relative'>
        
        <input
          className='z-[2] sm:w-[95vw] w-[88vw] h-12 rounded-[10px] ml-6 rounded-50 pl-12 text-black fixed bottom-5 left-0 border-t-[1px] border-secondary'
          type="text"
          placeholder="Search Music, Artist"
        />
      </div>
    </section>
  );
};

export default Search;
