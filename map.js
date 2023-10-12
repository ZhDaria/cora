ymaps.ready(init);
function init() {
    let myMap = new ymaps.Map("map", {
        center: [55.75025460, 37.61597756],
        zoom: 10,
    });


    myMap.geoObjects
        .add(new ymaps.Placemark([55.83024017, 37.49135140], {
        balloonContentHeader: "Eparket.com",
        balloonContentBody: "Ленинградское ш., 34к2",
        balloonContentFooter: "10:00-20:00",
            }))
        .add(new ymaps.Placemark([55.71538467, 37.51607064], {
                balloonContentHeader: "CoraCompany.com",
                balloonContentBody: "ул. Мосфильмовская, 17/25",
                balloonContentFooter: "10:00-20:00",
            }))

}