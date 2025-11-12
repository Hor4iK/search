  /* -- SEARCH  -- */
  const searchBoxArray = document.querySelectorAll('.search__container');
  if (searchBoxArray && searchBoxArray.length > 0) {
    searchBoxArray.forEach(searchBox => {
      const search = searchBox.querySelector('.search');
      const searchBtn = searchBox.querySelector('.search__button');
      const input = search.querySelector('input');

      input.addEventListener('focus', () => {
        search.classList.add('open');
      })

      input.addEventListener('blur', () => {
        search.classList.remove('open');
        search.classList.remove('active');
      })

      if (searchBtn) {
        searchBtn.addEventListener('click', () => {
          search.classList.add('active');
        })
      }
    })
  }
  /* -- END SEARCH  -- */
