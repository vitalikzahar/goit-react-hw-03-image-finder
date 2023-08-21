import { GrSearch } from 'react-icons/gr';
import {
  Search,
  SearchForm,
  SearchFormButton,
  SearchInput,
} from './Searchbar.styled';

export const Searchbar = ({ changeQuery }) => {
  const onSubmit = evt => {
    evt.preventDefault();
    changeQuery(evt.target.elements.query.value);
    evt.target.reset();
  };
  return (
    <Search>
      <SearchForm
        onSubmit={evt => {
          onSubmit(evt);
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
