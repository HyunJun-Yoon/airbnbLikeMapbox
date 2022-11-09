mapboxgl.accessToken =
  'pk.eyJ1IjoibXVyYWthbm8iLCJhIjoiY2w5MzVuMHRoMXF4MTN4bm5yZmJ2anFqNSJ9.QsHu-CR2d9mwAZCyG0p2pQ';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11'
});

fetch('/js/items.json')
  .then(res => res.json())
  .then(items => {
    let listCard = document.querySelector('.list-card');
    listCard.innerHTML = '';

    items.map(item => {
      console.log(item);

      let card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="card">
        <img src="https://via.placeholder.com/300" alt=""/>
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non ad ab sunt corrupti. Dolorem repudiandae, reprehenderit aliquam pariatur necessitatibus minima eum ipsam repellat, mollitia esse quibusdam consequatur? Corporis, veniam?</p>
        </div>
      `;

      listCard.append(card);
    });
  });
