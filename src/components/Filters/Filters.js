import { LIST_AUTO } from 'constants/listAuto';
import { ROOT_FILTERS } from 'constants/root';
import { Cards } from '../Cards/Cards';
class Filters {
    render() {
        const html = `
    <div class="filter-container">
    <div class="menu-accordion">
      <div class=".menu-accordion__item">
        <div data-tab="tab-1" class="menu-accordion__title">
          <span>＋</span>
          <label>Цена, €</label>
        </div>
        <div id="tab-1" class="accordion__content">
          <div class="price-filter">
            <div class="inputs">
              <label class="price-filter-price__label">
                <span class="price-filter-price__text">От</span>
                <input
                  type="number"
                  class="range-min"
                  id="priceFrom"
                  placeholder="500"
                />
              </label>

              <label class="price-filter-price__label">
                <span class="price-filter-price__text">До</span>
                <input
                  type="number"
                  class="range-max"
                  id="priceTo"
                  placeholder="50000"
                />
              </label>
            </div>
            <div class="range-slider">
              <div class="range-slider__progres"></div>
              <input
                type="range"
                id="priceRangeFrom"
                class="range-from"
                min="500"
                max="50000"
                value="500"
              />
              <input
                type="range"
                id="priceRangeTo"
                class="range-to"
                min="500"
                max="50000"
                value="50000"
              />
            </div>
          </div>
        </div>
      </div>
      <div class=".menu-accordion__item">
        <div data-tab="tab-2" class="menu-accordion__title">
          <span>＋</span>
          <label for="type">Тип транспорта</label>
        </div>
        <div id="tab-2" class="accordion__content">
          <select id="type">
            <option value="">Выберите тип транспорта</option>
            <option value="truk">Грузовик</option>
            <option value="bus">Автобус</option>
            <option value="universal">Универсал</option>
            <option value="sedan">Седан</option>
            <option value="suv">Внедорожник</option>
            <option value="сrossover">Кроссовер</option>
            <option value="hatchback">Хэтчбек</option>
          </select>
        </div>
      </div>
      <div class=".menu-accordion__item">
        <div data-tab="tab-3" class="menu-accordion__title">
          <span>＋</span>
          <label for="manufacturer">Производитель</label>
        </div>
        <div id="tab-3" class="accordion__content">
          <fieldset>
            <legend id="manufacturer"></legend>
            <input
              type="checkbox"
              id="volkswagen"
              name="manufacturer"
              value="volkswagen"
            />
            <label for="volkswagen">Volkswagen</label><br />
            <input type="checkbox" id="man" name="manufacturer" value="man" />
            <label for="man">Man</label><br />
            <input
              type="checkbox"
              id="mercedes-benz"
              name="manufacturer"
              value="mercedes-benz"
            />
            <label for="mercedes-benz">Mercedes benz</label><br />
            <input
              type="checkbox"
              id="scania"
              name="manufacturer"
              value="scania"
            />
            <label for="scania">Scania</label><br />
            <input
              type="checkbox"
              id="volvo"
              name="manufacturer"
              value="volvo"
            />
            <label for="volvo">Volvo</label><br />
            <input
              type="checkbox"
              id="iveco"
              name="manufacturer"
              value="iveco"
            />
            <label for="volvo">Iveco</label><br />
            <input
              type="checkbox"
              id="van-hool"
              name="manufacturer"
              value="van-hool"
            />
            <label for="volvo">Van Hool</label><br />
            <input
              type="checkbox"
              id="opel"
              name="manufacturer"
              value="opel"
            />
            <label for="volvo">Opel</label><br />
            <input
              type="checkbox"
              id="renault"
              name="manufacturer"
              value="renault"
            />
            <label for="volvo">Renault</label><br />
            <input
              type="checkbox"
              id="nissan"
              name="manufacturer"
              value="nissan"
            />
            <label for="volvo">Nissan</label><br />
            <input
              type="checkbox"
              id="audi"
              name="manufacturer"
              value="audi"
            />
            <label for="volvo">Audi</label><br />
            <input
              type="checkbox"
              id="ford"
              name="manufacturer"
              value="ford"
            />
            <label for="volvo">Ford</label><br />
            <input
              type="checkbox"
              id="fiat"
              name="manufacturer"
              value="fiat"
            />
            <label for="volvo">Fiat</label><br />
          </fieldset>
        </div>
      </div>
      <div class=".menu-accordion__item">
        <div data-tab="tab-4" class="menu-accordion__title">
          <span>＋</span>
          <label for="country">Страна местонахождения</label>
        </div>
        <div id="tab-4" class="accordion__content">
          <input
            type="text"
            id="country"
            list="countryList"
            placeholder="Выберите/введите страну"
          />
          <datalist id="countryList">
            <option value="Россия"></option>
            <option value="Китай"></option>
            <option value="Германия"></option>
            <option value="Япония"></option>
            <option value="Корея"></option>
          </datalist>
        </div>
      </div>
      <div class=".menu-accordion__item">
        <div data-tab="tab-5" class="menu-accordion__title">
          <span>＋</span>
          <label for="legend-kpp">Коробка передач</label>
        </div>
        <div id="tab-5" class="accordion__content">
          <fieldset>
            <legend id="legend-kpp"></legend>
            <input
              type="checkbox"
              id="automatic"
              name="transmission"
              value="automatic"
            />
            <label for="automatic">Автоматическая</label><br />
            <input
              type="checkbox"
              id="manual"
              name="transmission"
              value="manual"
            />
            <label for="manual">Механическая</label><br />
          </fieldset>
        </div>
      </div>
      <div class="accordion">
        <div data-tab="tab-6" class="menu-accordion__title">
          <span>＋</span>
          <label for="legend-ad-type">Тип объявления</label>
        </div>
        <div id="tab-6" class="accordion__content">
          <fieldset>
            <legend id="legend-ad-type"></legend>
            <input type="checkbox" id="sale" name="adType" value="sale" />
            <label for="sale">Продажа</label><br />
            <input
              type="checkbox"
              id="auction"
              name="adType"
              value="auction"
            />
            <label for="auction">Аукцион</label><br />
            <input
              type="checkbox"
              id="request"
              name="adType"
              value="request"
            />
            <label for="request">По запросу</label><br />
            <input
              type="checkbox"
              id="leasing"
              name="adType"
              value="leasing"
            />
            <label for="leasing">Лизинг</label><br />
            <input type="checkbox" id="rent" name="adType" value="rent" />
            <label for="rent">Сдается в аренду</label><br />
          </fieldset>
        </div>
      </div>
      <div class="container__button">
        <button id="applyFilters" onclick="applyFilters()">Применить</button>
      </div>
    </div>
  </div>
    `;
        if (ROOT_FILTERS) {
            ROOT_FILTERS.innerHTML = html;
        }
    }
}
const filters = new Filters();
filters.render();
const titles = document.querySelectorAll('.menu-accordion__title');
const contents = document.querySelectorAll('.accordion__content');
titles.forEach((item) => item.addEventListener('click', () => {
    const activeContent = document.querySelector('#' + item.getAttribute('data-tab'));
    if (activeContent && activeContent.classList.contains('active')) {
        activeContent.classList.remove('active');
        item.classList.remove('active');
        activeContent.style.maxHeight = '0';
        item.querySelector('span').innerHTML = '＋';
        if (item instanceof HTMLElement) {
            item.style.borderBottom = '1px solid #e8e9e8';
        }
        activeContent.style.borderBottom = 'none';
    }
    else {
        item.classList.add('active');
        activeContent === null || activeContent === void 0 ? void 0 : activeContent.classList.add('active');
        activeContent === null || activeContent === void 0 ? void 0 : activeContent.classList.add('active');
        if (activeContent) {
            activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
        }
        item.querySelector('span').innerHTML = '－';
        if (item instanceof HTMLElement) {
            item.style.borderBottom = 'none';
        }
    }
}));
export function applyFilters() {
    const priceFromElement = document.getElementById('priceFrom');
    const priceToElement = document.getElementById('priceTo');
    const selectedTypeElement = document.getElementById('type');
    const selectedManufacturersElements = document.querySelectorAll('input[type="checkbox"][name="manufacturer"]:checked');
    const countryElement = document.getElementById('country');
    const selectedTransmissionElements = document.querySelectorAll('input[type="checkbox"][name="transmission"]:checked');
    const selectedAdTypesElements = document.querySelectorAll('input[type="checkbox"][name="adType"]:checked');
    if (!priceFromElement ||
        !priceToElement ||
        !selectedTypeElement ||
        !selectedManufacturersElements ||
        !countryElement ||
        !selectedTransmissionElements ||
        !selectedAdTypesElements) {
        throw new Error('Не найден один или более обязательный элемент');
        return;
    }
    const priceFrom = priceFromElement instanceof HTMLInputElement ? priceFromElement.value : '';
    const priceTo = priceToElement instanceof HTMLInputElement ? priceToElement.value : '';
    const selectedType = selectedTypeElement instanceof HTMLSelectElement
        ? selectedTypeElement.value
        : '';
    const selectedManufacturers = Array.prototype.map.call(selectedManufacturersElements || [], (input) => input.value);
    const country = countryElement instanceof HTMLInputElement ? countryElement.value : '';
    const selectedTransmission = Array.prototype.map.call(selectedTransmissionElements || [], (input) => input.value);
    const selectedAdTypes = Array.prototype.map.call(selectedAdTypesElements || [], (input) => input.value);
    const filteredCards = LIST_AUTO.filter((card) => {
        let passPriceFilter = true;
        if (priceFrom && priceTo) {
            passPriceFilter =
                card.price >= parseInt(priceFrom) && card.price <= parseInt(priceTo);
        }
        const passTypeFilter = !selectedType ||
            card.classType.toLowerCase() === selectedType.toLowerCase();
        const passManufacturerFilter = selectedManufacturers.length === 0 ||
            selectedManufacturers.some((manufacturer) => {
                if (typeof manufacturer !== 'string')
                    return false;
                if (!card.manufacturer)
                    return false;
                return (card.manufacturer
                    .toLowerCase()
                    .indexOf(manufacturer.toLowerCase()) !== -1);
            });
        const passCountryFilter = !country ||
            (card.country && card.country.toLowerCase() === country.toLowerCase());
        const passTransmissionFilter = selectedTransmission.length === 0 ||
            selectedTransmission.indexOf(card.transmissionType.toLowerCase()) !== -1;
        const passAdTypeFilter = selectedAdTypes.length === 0 ||
            selectedAdTypes.indexOf(card.adType.toLowerCase()) !== -1;
        return (passPriceFilter &&
            passTypeFilter &&
            passManufacturerFilter &&
            passCountryFilter &&
            passTransmissionFilter &&
            passAdTypeFilter);
    });
    const cards = new Cards();
    cards.render(filteredCards);
}
