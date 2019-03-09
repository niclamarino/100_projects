import axios from 'axios';

export default class Recipe {
	constructor(id) {
		this.id = id;
	}

	async getRecipe() {
		try {
			const res = await axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.id}`);
			this.title = res.data.meals[0].strMeal;
			this.area = res.data.meals[0].strArea;
			this.img = res.data.meals[0].strMealThumb;
			// this.url = res.data.meals[0].strMealThumb;
			// this.ingredients = res.data.meals[0].strMealThumb;
			console.log(res)

		} catch(error) {
			console.log(error);
		}
	}
}