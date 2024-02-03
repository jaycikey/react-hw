export const SearchForm = ({ onSearch }) => {
  const hanleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    onSearch(form.elements.topic.value);
    form.reset();
  };
  return (
    <form onSubmit={hanleSubmit}>
      <input type="text" name="topic" placeholder="Search articles..." />
      <button>Search</button>
    </form>
  );
};
