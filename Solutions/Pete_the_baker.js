/**
 * Pete, the baker
 * http://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript
 */

function cakes(recipe, available) {
    var maxOfCakes = 0;
    for (ingredient in recipe) {
        if (recipe.hasOwnProperty(ingredient)) {
            if (!available.hasOwnProperty(ingredient)) {
                return 0;
            }

            var cakes = Math.floor(available[ingredient] / recipe[ingredient]);
            if (cakes === 0) {
                return 0;
            }

            maxOfCakes = maxOfCakes === 0 ? cakes : Math.min(cakes, maxOfCakes);
        }
    }

    return maxOfCakes;
}