var CookBook = (function(){
	
	var title = "Makkelijke recepten";
	var recipes = [];
	
	var _createDescription = function(title, ingredients){
		return "Voor het maken van " + title + " zijn de volgende ingredienten nodig: " + ingredients.join(", ");
	};
	
	var giveRecipe = function(el){
		console.log(_createDescription(el.title, el.ingredients));
	};
	
	var giveRecipes = function(){
		recipes.forEach(function(value, index, ar){
			giveRecipe(value);
		});
	};
	
	return {
		title: title,
		recipes: recipes,
		giveRecipes: giveRecipes,
		giveRecipe: giveRecipe
	};
	
})();


var PancakesRecipe = (function(CookBook){
	
	var recipe = {};
	recipe.title = "Pannenkoeken";
	recipe.ingredients = ["250gr bloem", "2 eieren", "500ml melk", "boter"];
	
	CookBook.recipes.push(recipe);
	
	return CookBook;
	
})(CookBook);


var ToastRecipe = (function(CookBoox){
	
	var recipe = {};
	recipe.title = "Tosti";
	recipe.ingredients = ["Cheese", "Bread"];
	
	CookBook.recipes.push(recipe);
	
	return CookBook;
	
})();