import RestaurantIdb from '../../data/restaurant-idb';
import {createRestaurantItemTemplate} from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <main class="main" id="daftar-restoran">
      <div>
      <div id="restaurants" class="card-section"></div>
      </div>
    </main>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
