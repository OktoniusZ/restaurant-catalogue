/* eslint-disable new-cap */
import RestaurantSource from '../../data/restaurant-source';
import {createRestaurantItemTemplate} from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <!-- start hero element -->
      <main id="main">
        <div class="hero-img" title="Restoran Terbaik" 
        crossorigin="anonymous"></div>
        <div class="hero-info">
          <h1>Selamat datang di <span>restaurant</span> kami</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Unde iure ullam perferendis necessitatibus soluta
            dicta fugiat non corporis eius aspernatur aperiam, 
            tenetur repellat odit eum doloribus deleniti quae enim
            beatae.
          </p>
          <button 
            onclick="window.location.href='#daftar-restoran'" 
            id="hero-button" tabindex="1">Daftar Restoran 
          </button>
        </div>
      </main>
      <!-- end hero element -->
    
      <main class="main" id="daftar-restoran">
      <div class="judul">
        <h1>Daftar Restoran</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Repudiandae aperiam, illo temporibus veniam sapiente
          adipisci numquam excepturi reiciendis delectus earum unde 
          suscipit saepe dolorem voluptates. Totam tempore
          consequatur facere autem?</p>
      </div>
      <div>
        <div id="restaurants" class="card-section"></div>
      </div>
    </main>
      `;
  },
  async afterRender() {
    const restaurants = await RestaurantSource.Home();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
