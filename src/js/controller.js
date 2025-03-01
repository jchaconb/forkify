import * as model from './model';
import recipeView from './views/recipeView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

// Listen for URL hash changes or page load to update and display the recipe
['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe));
