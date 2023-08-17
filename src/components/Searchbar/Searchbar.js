export const Searchbar = ({ submit }) => {
  return (
    <header>
      <form
        onSubmit={evt => {
          submit(evt);
        }}
      >
        <input
          type="text"
          name="query"
          //   autocomplete="off"
          //   autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">
          {' '}
          <span>Search</span>
        </button>
      </form>
    </header>
  );
};
