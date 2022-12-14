mapboxgl.accessToken =
  'pk.eyJ1IjoidGhvbWFzMzMiLCJhIjoiY2pzYWFpcXNwMDAxbzN5cGZneGxia3U3ZCJ9.sigYT2nlLnC1siycJ3im-Q';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-0.5800364, 44.841225],
  zoom: 13
});

fetch('js/items.json')
  .then(res => res.json())
  .then(items => {
    let listCard = document.querySelector('.list-card');
    listCard.innerHTML = '';

    items.map(item => {
      new mapboxgl.Marker({
        color: 'rgba(0,0,0,.4)'
      })
        .setLngLat([item.lng, item.lat])
        .addTo(map);

      let card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
            <div class="card">
                <div class="img-card" style="background-image:url(${item.imageSrc})"></div>
                <div class="card-content">
                    <h1>${item.title}</h1>
                    <span>
                        <i class="fas fa-map-marker-alt"></i>
                        ${item.address}, ${item.city}, ${item.postalCode} 
                    </span>
                    <p>${item.description}</p>
                </div>
            </div>
        `;

      card.addEventListener('mouseenter', function () {
        let cursorItem = document.getElementById('cursorItem');
        cursorItem.style.transform = `translateY(${this.offsetTop}px)`;
        cursorItem.style.height = this.offsetHeight + 'px';

        let markerHover = new mapboxgl.Marker({
          color: 'rgba(0,0,0,1)'
        })
          .setLngLat([item.lng, item.lat])
          .addTo(map);

        card.addEventListener('mouseleave', function () {
          markerHover.remove();
        });
      });

      listCard.append(card);
    });
  });
