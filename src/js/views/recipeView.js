import View from './view';

import icons from 'url:../../img/icons.svg';
import Fraction from 'fraction.js';

class RecipeView extends View {
  _parentElement = document.querySelector('.recipe');
  _errorMessage = 'We could not find that recipe, Please try another one!';
  _message = '';

  _generateMarkupIngredient(ing) {
    return `
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${icons}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${
          ing.quantity ? new Fraction(ing.quantity).toFraction(true) : ''
        }</div>
        <div class="recipe__description">
          <span class="recipe__unit">${ing.unit}</span>
          ${ing.description}
        </div>
      </li>
    `;
  }
}

export default new RecipeView();
