import { LIST_AUTO } from '../../constants/listAuto';
import { ROOT_CARDS } from '../../constants/root';
import { applyFilters } from '../Filters/Filters';
export class Cards {
    render(filteredCards) {
        let htmlListAuto = '';
        const imgLocation = 'img/carbon_location.png';
        const cardsData = filteredCards && filteredCards.length ? filteredCards : LIST_AUTO;
        cardsData.map(({ id, img, type, name, yearProd, weight, mileage, location, price, transmissionType, }, index) => {
            const displayStyle = index >= 4 ? 'none' : '';
            const transmissionDisplay = transmissionType === 'automatic' ? 'АКПП' : 'МКПП';
            htmlListAuto += `
        <li class="cards-element" style="display: ${displayStyle};">
          <img class="cards-element__img" src="${img}" />
          <span class="cards-element__type">${type}</span>
          <span class="cards-element__name">${name}</span>
          <div class= "cards-element__sub-info">
            <span class="cards-element__yearProd">${yearProd}</span>
            <span class="cards-element__weight">${weight} kg</span>
            <span class="cards-element__mileage">${mileage.toLocaleString()} km</span>
            <span class="cards-element__transmissionType">${transmissionDisplay}</span>
          </div>
          <div class="cards-element__details">
            <span class="cards-element__location"><img src="${imgLocation}"> ${location}</span>
            <span class="cards-element__price">${price.toLocaleString()} €</span>
          </div>
        </li>`;
        });
        const finishHtml = `
    <div class="selected-filters" id='sel-flt'>
      <label class="selected-filters__label" for="input1">Filter name</label>
      <div class="selected-filters__input-container">
        <input class="selected-filters__input" type="text" id="input1" value=''/>
        <button class="selected-filters__button" onclick="clearСurrentFilter()">
        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.53564 4.46436L10.6067 11.5354" stroke="#009661" stroke-width="2" />
        <path d="M10.6067 4.46458L3.53564 11.5356" stroke="#009661" stroke-width="2" />
        </svg></button>
      </div>
      <label class="selected-filters__label" for="input2">Filter name</label>
      <div class="selected-filters__input-container">
        <input class="selected-filters__input" type="text" id="input2" value=''/>
        <button class="selected-filters__button" onclick="clearСurrentFilter()">
        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.53564 4.46436L10.6067 11.5354" stroke="#009661" stroke-width="2" />
        <path d="M10.6067 4.46458L3.53564 11.5356" stroke="#009661" stroke-width="2" />
        </svg></button>
      </div>
      <button id="btn-delete-filters" onclick="clearAllFilters()">Очистить все</button>
    </div>
  

      <ul class="cards-container">
        ${htmlListAuto}
      </ul>
      <div class="button-container">
        <button id="btn-show" class="show-more" onclick="showMoreClick()">
          Показать еще
        </button>
      </div>`;
        if (ROOT_CARDS) {
            ROOT_CARDS.innerHTML = finishHtml;
            this.updateShowMoreButton();
        }
    }
    updateShowMoreButton() {
        const cardsElements = document.querySelectorAll('.cards-element');
        const hiddenCards = [];
        cardsElements.forEach((card) => {
            if (card.style.display === 'none') {
                hiddenCards.push(card);
            }
        });
        const showMoreButton = document.getElementById('btn-show');
        if (showMoreButton) {
            showMoreButton.style.display =
                hiddenCards.length === 0 ? 'none' : 'block';
        }
    }
}
function clearСurrentFilter(number) {
    const input = document.getElementById(`input${number}`);
    if (input instanceof HTMLInputElement) {
        input.value = '';
    }
}
function showMoreClick() {
    const cardsElements = document.querySelectorAll('.cards-element');
    const hiddenCards = [];
    cardsElements.forEach((card) => {
        if (card.style.display === 'none') {
            hiddenCards.push(card);
        }
    });
    if (hiddenCards.length > 0) {
        hiddenCards.slice(0, 2).forEach((card) => {
            card.style.display = '';
        });
    }
    cards.updateShowMoreButton();
}
function clearAllFilters() {
    function isHTMLInputElement(element) {
        return 'value' in element;
    }
    const priceFrom = document.getElementById('priceFrom');
    if (priceFrom && isHTMLInputElement(priceFrom)) {
        priceFrom.value = '';
    }
    const priceTo = document.getElementById('priceTo');
    if (priceTo && isHTMLInputElement(priceTo)) {
        priceTo.value = '';
    }
    const type = document.getElementById('type');
    if (type && isHTMLInputElement(type)) {
        type.value = '';
    }
    const manufacturersCheckboxes = document.querySelectorAll('input[type="checkbox"][name="manufacturer"]:checked');
    manufacturersCheckboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });
    const country = document.getElementById('country');
    if (country && isHTMLInputElement(country)) {
        country.value = '';
    }
    const transmissionCheckboxes = document.querySelectorAll('input[type="checkbox"][name="transmission"]:checked');
    transmissionCheckboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });
    const adTypeCheckboxes = document.querySelectorAll('input[type="checkbox"][name="adType"]:checked');
    adTypeCheckboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });
    applyFilters();
    const selFlt = document.getElementById('sel-flt');
    if (selFlt && isHTMLInputElement(selFlt)) {
        selFlt.value = '';
    }
    const inputContainer = document.getElementsByClassName('selected-filters__input-container');
    [...inputContainer].forEach((container) => {
        if (container instanceof HTMLElement) {
            container.style.display = 'none';
        }
    });
}
const cards = new Cards();
cards.render(LIST_AUTO);
