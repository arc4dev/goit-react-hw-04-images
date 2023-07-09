import styles from './SearchBar.module.css';

export const SearchBar = ({ query, handleChange, handleSubmit }) => {
  return (
    <header className={styles.searchBar}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.searchForm_button}></button>
        <input
          className={styles.searchForm_input}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};
