export const usePriceSwitcher = () => {
  const switcher = document.querySelector('[data-price="switcher"]');
  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const enterprisePrice = document.querySelector('[data-price="enterprise"]');

  const starterPrice20 = function () {
    return 100 * 1.2;
  }
  const popularPrice20 = function () {
    return 1400 * 1.2;
  }
  const enterprisePrice20 = function () {
    return 2100 * 1.2;
  }

  const priceList = {
    starter: {
      default: starterPrice20(),
      withSale: 100,
    },
    popular: {
      default: popularPrice20(),
      withSale: 1400,
    },
    enterprise: {
      default: enterprisePrice20(),
      withSale: 2100,
    },
  };

  const setPricesWithSale = () => {
    starterPrice.textContent = priceList.starter.withSale;
    popularPrice.textContent = priceList.popular.withSale;
    enterprisePrice.textContent = priceList.enterprise.withSale;
  }

  const setDefaultPrices = () => {
    starterPrice.textContent = priceList.starter.default;
    popularPrice.textContent = priceList.popular.default;
    enterprisePrice.textContent = priceList.enterprise.default;
  }


  switcher.checked = true;
  setPricesWithSale();

  switcher.addEventListener('click', () => {
    if (switcher.checked) {
      setPricesWithSale();
    } else {
      setDefaultPrices();
    }
  });
}