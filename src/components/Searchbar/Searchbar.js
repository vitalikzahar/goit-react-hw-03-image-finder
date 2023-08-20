import { GrSearch } from 'react-icons/gr';
import {
  Search,
  SearchForm,
  SearchFormButton,
  SearchInput,
} from './Searchbar.styled';

export const Searchbar = ({ submit }) => {
  return (
    <Search>
      <SearchForm
        onSubmit={evt => {
          submit(evt);
        }}
      >
        <SearchFormButton type="submit">
          <span>
            <GrSearch />
          </span>
        </SearchFormButton>
        <SearchInput
          type="text"
          name="query"
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Search>
  );
};
