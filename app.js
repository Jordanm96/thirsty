async function fetchData() {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
  try {
    removeCocktail()
    let response = await axios.get(url)
    let data = response.data.drinks[0]
    showCocktailData(data)
  } catch (error) {
    console.error(error)
  }
}

function showCocktailData(data) {
  const cocktailData = document.querySelector('#cocktail-data')
  const cocktailInfo = `
  <h2>${data.strDrink}</h2>
  <img src="${data.strDrinkThumb}" alt="drink"/>
  <ul>Ingredients: 
  <li>${data.strMeasure1} ${data.strIngredient1}</li>
  <li>${data.strMeasure2} ${data.strIngredient2}</li>
  <li>${data.strMeasure3} ${data.strIngredient3}</li>
  <li>${data.strMeasure4} ${data.strIngredient4}</li>
  <li>${data.strMeasure5} ${data.strIngredient5}</li>
  <li>${data.strMeasure6} ${data.strIngredient6}</li>
  <li>${data.strMeasure7} ${data.strIngredient7}</li>
  <li>${data.strMeasure8} ${data.strIngredient8}</li>
  </ul>
  <p>How to make: ${data.strInstructions}</p>
  `
  cocktailData.insertAdjacentHTML("beforeend", cocktailInfo)
}

const button = document.querySelector('button')
button.addEventListener('click', (e) => {
  e.preventDefault()
  fetchData()
})

function removeCocktail() {
  const cocktailContainer = document.querySelector('#cocktail-data')
    while (cocktailContainer.lastChild) {
      cocktailContainer.removeChild(cocktailContainer.lastChild)
    }
  }