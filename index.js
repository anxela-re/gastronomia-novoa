import { createFooter } from './footer';
import { createNavbar } from './navbar';
import AOS from './node_modules/aos';
import Splide from '@splidejs/splide';

function checkPosition() {
  let categorias = document.getElementsByClassName('categoria');
  if (categorias.length) {
    for (let cat of categorias) {
      let positionFromTop = cat.getBoundingClientRect().top;
      if (positionFromTop - window.innerHeight <= 0) {
        cat.classList.add('categoria-animation');
      } else {
        cat.classList.remove('categoria-animation');
      }
    }
  }
}

function createPaginatorMar() {
  let offsetMarList, countMarList;
  const marList = document.querySelector('#mar-category-list');
  const seeMoreMarBtn = document.querySelector('#seeMoreMarBtn');
  const offsetMarListEl = document.querySelector('#offsetMarList');
  const countMarListEl = document.querySelector('#countMarList');

  offsetMarList = 10;
  if (marList) {
    countMarList = marList.children.length;
    offsetMarListEl.textContent = offsetMarList;
    countMarListEl.textContent = countMarList;
  }

  if (seeMoreMarBtn) {
    seeMoreMarBtn.addEventListener('click', () => {
      if (marList) {
        let top =
          offsetMarList + 6 < countMarList ? offsetMarList + 6 : countMarList;
        for (let i = offsetMarList; i < top; i++) {
          const item = marList.children.item(i);
          if (item) item.style.display = 'inherit';
        }
        offsetMarList = top;
        if (offsetMarList === countMarList) {
          seeMoreMarBtn.disabled = true;
        }
        offsetMarListEl.textContent = offsetMarList;
      }
    });
  }
}

function createPaginatorTierra() {
  let offsetTierraList, countTierraList;

  const tierraList = document.querySelector('#tierra-category-list');
  const seeMoreTierraBtn = document.querySelector('#seeMoreTierraBtn');
  const offsetTierraListEl = document.querySelector('#offsetTierraList');
  const countTierraListEl = document.querySelector('#countTierraList');

  offsetTierraList = 10;

  if (tierraList) {
    countTierraList = tierraList.children.length;
    offsetTierraListEl.textContent = offsetTierraList;
    countTierraListEl.textContent = countTierraList;
  }

  if (seeMoreTierraBtn) {
    seeMoreTierraBtn.addEventListener('click', () => {
      if (tierraList) {
        let top =
          offsetTierraList + 6 < countTierraList
            ? offsetTierraList + 6
            : countTierraList;
        for (let i = offsetTierraList; i < top; i++) {
          const item = tierraList.children.item(i);
          if (item) item.style.display = 'inherit';
        }
        offsetTierraList = top;
        if (offsetTierraList === countTierraList) {
          seeMoreTierraBtn.disabled = true;
        }
        offsetTierraListEl.textContent = offsetTierraList;
      }
    });
  }
}

window.addEventListener('scroll', checkPosition, { passive: true });

window.addEventListener('load', () => {
  createFooter();
  createNavbar();

  checkPosition();

  if (window.location.pathname.includes('detail')) {
    import('./node_modules/aos')
      .then((module) => module.default)
      .then(AOS.init());
  }

  createPaginatorMar();
  createPaginatorTierra();

  if (document.querySelector('.splide')) {
    import('./node_modules/@splidejs/splide')
      .then((module) => module.default)
      .then(
        new Splide('.splide', {
          type: 'loop',
          perPage: Math.floor(document.querySelector('body').clientWidth / 350),
          height: '9rem',
          cover: true,
          breakpoins: {
            640: {
              height: '6rem',
            },
          },
          gap: '1rem',
        }).mount()
      );
  }
});
