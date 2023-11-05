import SearchBar from '@/components/Searchbar';

const Header = () => {
  return (
    <div className='bg-blue sticky items-center top-0 z-10 -ml-4 flex w-full -skew-x-6 justify-between border-b-2 border-r-2 border-black bg-white p-4 pl-8 shadow-md md:w-4/5'>
      <p className='text-shadow text-3xl text-orange-400 md:text-6xl'>
        A Jornada do Herói
      </p>

      <SearchBar />
    </div>
  );
};

export default Header;
