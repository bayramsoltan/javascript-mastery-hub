const baseUrl = "https://api.tvmaze.com";



const searchShows = (query) => {
  const url = `${baseUrl}/search/shows?q=${query}`;
  fetch(url)
  .then((resp) => resp.json())
  .then((data) =>console.log(data))
};



const getShowDetails = () => {};

export { searchShows, getShowDetails };
