var myCity = [

    {
        "name": "Dubai",
        "country": "UAE",
        "place": "Dubai Mall"
    },

    {
        "name": "Dubai",
        "country": "UAE",
        "place": "Knowledge Village"
    },

    {
        "name": "Dubai",
        "country": "UAE",
        "place": "Wilson Residence"
    }

]

function displayCities(city) {
    var cityInfo = '';
    city.forEach(function (item) {
      cityInfo += `
        <div class="city-card">
          <h2>${item.name}, ${item.country}</h2>
          <p>${item.place}</p>
        </div>
      `;
    });
    $('#city-info').html(cityInfo);
}

$('#btn').click(function() {
    displayCities(myCity);
});