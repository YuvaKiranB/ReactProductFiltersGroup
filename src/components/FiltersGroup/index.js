import {FaSearch} from 'react-icons/fa'

import './index.css'

const FiltersGroup = props => {
  const {
    category,
    rating,
    getCategoryId,
    getRatingId,
    activeCategory,
    activeRating,
    searchInput,
    searchValue,
    clearFilter,
    searchClicked,
  } = props

  const changeSearch = event => {
    searchInput(event.target.value)
  }

  const search = event => {
    if (event.key === 'Enter') {
      searchClicked()
    }
  }

  return (
    <div className="filters-group-container">
      <h1>Filters Group</h1>
      <div className="searchContainer">
        <input
          value={searchValue}
          onChange={changeSearch}
          type="search"
          onKeyDown={search}
          placeholder="Search"
          className="searchInput"
        />

        <FaSearch className="searchIcon" />
      </div>
      <div className="categoryContainer">
        <h1 className="categoryHeading">Category</h1>
        <ul className="categoryList">
          {category.map(eachItem => {
            const clickedCategory = () => {
              getCategoryId(eachItem.categoryId)
            }

            const categoryClass =
              eachItem.categoryId === activeCategory ? 'activeCategory' : ''

            return (
              <li className="categoryName" key={eachItem.categoryId}>
                <p
                  className={`categoryPara ${categoryClass}`}
                  onClick={clickedCategory}
                >
                  {eachItem.name}
                </p>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="ratingContainer">
        <h1 className="ratingHeading">Rating</h1>
        <ul className="ratingList">
          {rating.map(eachItem => {
            const clickedRating = () => {
              getRatingId(eachItem.ratingId)
            }

            const ratingClass =
              eachItem.ratingId === activeRating ? 'activeRating' : ''

            return (
              <li className="ratingName" key={eachItem.ratingId}>
                <button
                  className={`ratingButton ${ratingClass}`}
                  type="button"
                  onClick={clickedRating}
                  key={eachItem.ratingId}
                >
                  <img
                    className="ratingImage"
                    src={eachItem.imageUrl}
                    alt={`rating ${eachItem.ratingId}`}
                  />
                  & up
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="clearFiltersContainer">
        <button
          onClick={clearFilter}
          type="button"
          className="clearFiltersButton"
        >
          Clear Filters
        </button>
      </div>
    </div>
  )
}

export default FiltersGroup
