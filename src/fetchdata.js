const fetchDataApi = () => {

  fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then(response => response.json())
    .then(data => console.log(data));
};

export default fetchDataApi;
