import { SearchBar } from '@jdh/components/Searchbar';

/**
 * Renders the header component.
 * @returns JSX.Element
 */
const Header = () => {
  return (
    <div className='sticky top-0 z-10 -ml-1 w-2/3 min-w-fit -skew-x-6 border-b-2 border-r-2 border-black md:w-1/3'>
      <SearchBar />
    </div>
  );
};

export default Header;
