import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAbU7H5w7Si3VQYQC4Sz2_bh_bwv9BFRpo';

YTSearch({key: API_KEY, term: 'beyonce'}, function(data) {
  console.log(data);
})


// Create a new component. This component should produce some HTML.

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}


// Take this component's generated HTML and put it on the page (in the DOM).

ReactDOM.render(<App />, document.querySelector('.container'));
