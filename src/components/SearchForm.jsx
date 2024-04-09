import toast from "react-hot-toast";

const SearchForm = ({ onHandleSearch }) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = event.target.searchMovie.value.toLowerCase().trim();

    if (!formData.length) {
      toast("This field is empty!");
      return;
    }

    onHandleSearch(formData);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="searchMovie"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies here!"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
