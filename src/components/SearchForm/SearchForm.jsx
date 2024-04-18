import toast from "react-hot-toast";
import css from "./SearchForm.module.css";

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
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        name="searchMovie"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies here!"
      />
      <button className={css.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
