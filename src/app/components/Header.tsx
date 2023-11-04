import SearchBar from '@/components/Searchbar';

const Header = () => {
  return (
    <div className='flex w-full justify-end bg-white p-4 shadow-md sticky top-0 z-10 mb-4 md:mb-8'>
      <SearchBar />
    </div>
  );
};

export default Header;
