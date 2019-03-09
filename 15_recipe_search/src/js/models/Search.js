const axios = require('axios');

export default class Search {
    constructor (query) {
        this.query = query
    }

    async getResults() {
      const res = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.query}`);
      this.result = res.data.meals;
    }
}
