const buttonpress = document.getElementById('button-addon2').addEventListener('click', function() {
    const inputField = document.getElementById('input-field')
    const inputvalue = inputField.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputvalue}`
    fetch(url)
        .then(res => res.json())
        .then(data => showDisplay(data.meals))
})

const showDisplay = meals => {
    const searchResult = document.getElementById('show-display')
    for (meal of meals) {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = ` 
        <div onclick="mealid(${meal.idMeal})" class="card mt-5">
          <img src="${meal.strMealThumb}" class="card-img-top w-100 p-5" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
          </div>
        </div>
      `

        searchResult.appendChild(div)
    }
}


const mealid = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaymeal(data.meals[0]))
}

const displaymeal = meal => {
    const mealDetails = document.getElementById('search-id');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    mealDetails.appendChild(div);
}