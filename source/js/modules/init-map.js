import { MAIN_COORDS } from './data';

const initMap = () => {

  ymaps.ready(init);

  function init() {

    var map = new ymaps.Map('map', {
      center: [MAIN_COORDS.lat, MAIN_COORDS.lng],
      zoom: 12,
      controls: ['zoomControl'],
      behaviors: ['drag'],
    },
      {
        searchControlProvider: 'yandex#search'
      }
    )

    var placemark = new ymaps.Placemark([MAIN_COORDS.lat, MAIN_COORDS.lng], {
      hintContent: 'г. Санкт-Петербург, пр. Просвещения, д. 99, кв. 152',
    },
      {
        iconLayout: 'default#image',
        iconImageHref: 'img/icon-pin.svg',
        iconImageSize: [27, 39],
      }
    );

    var myPlacemark

    map.events.add('click', function (e) {
      var coords = e.get('coords');
      if (myPlacemark) {
        myPlacemark.geometry.setCoordinates(coords);
      }
      else {
        myPlacemark = createPlacemark(coords);
        map.geoObjects.add(myPlacemark);
        myPlacemark.events.add('dragend', function () {
          getAddress(myPlacemark.geometry.getCoordinates());
        });
      }
      getAddress(coords);
    });

    function createPlacemark(coords) {
      return new ymaps.Placemark(coords, {
        iconCaption: 'поиск...'
      }, {
        preset: 'islands#violetDotIconWithCaption',
        draggable: true
      });
    }
    // (обратное геокодирование).
    function getAddress(coords) {
      myPlacemark.properties.set('iconCaption', 'поиск...');
      ymaps.geocode(coords).then(function (res) {
        var firstGeoObject = res.geoObjects.get(0);

        myPlacemark.properties
          .set({
            // Формируем строку с данными об объекте.
            iconCaption: [
              // Название населенного пункта или вышестоящее административно-территориальное образование.
              firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
              // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
              firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
            ].filter(Boolean).join(', '),
            // В качестве контента балуна задаем строку с адресом объекта.
            balloonContent: firstGeoObject.getAddressLine()
          });
      });
    }

    var suggest = new ymaps.SuggestView('suggest')

    $('#button-address').bind('click', function (e) {
      geocode();
    });

    function geocode() {
      var request = $('#suggest').val();
      ymaps.geocode(request).then(function (res) {
        var obj = res.geoObjects.get(0),
          error;

        if (obj) {
          switch (obj.properties.get('metaDataProperty.GeocoderMetaData.precision')) {
            case 'exact':
              break;
            case 'number':
            case 'near':
            case 'range':
              error = 'Неточный адрес. Уточните, пожалуйста, номер дома';
              break;
            case 'street':
              error = 'Неполный адрес. Уточните, пожалуйста, номер дома';
              break;
            case 'other':
            default:
              error = 'Неточный адрес. Уточните, пожалуйста, полный адрес';
          }
        } else {
          error = 'Адрес не найден. Уточните, пожалуйста, адрес';
        }
        // Если геокодер возвращает пустой массив или неточный результат, то показываем ошибку.
        if (error) {
          showError(error);
        } else {
          showResult(obj);
        }
      }, function (e) {
        console.log(e)
      })
    }

    function showResult(obj) {
      $('#suggest').removeClass('input--invalid');
      $('#error').css('display', 'none');
      var mapContainer = $('#map'),
        bounds = obj.properties.get('boundedBy'),
        // Рассчитываем видимую область для текущего положения пользователя.
        mapState = ymaps.util.bounds.getCenterAndZoom(
          bounds,
          [mapContainer.width(), mapContainer.height()]
        ),
        // Сохраняем укороченный адрес для подписи метки.
        shortAddress = [obj.getThoroughfare(), obj.getPremiseNumber(), obj.getPremise()].join(' ');
      // Убираем контролы с карты.
      mapState.controls = [];
      // Создаём карту.
      createMap(mapState, shortAddress);
    }

    function showError(message) {
      $('#error').text(message);
      $('#suggest').addClass('input--invalid');
      $('#error').css('display', 'block');
    }

    function createMap(state, caption) {
      map.setCenter(state.center, state.zoom);
      placemark.geometry.setCoordinates(state.center);
      placemark.properties.set({ iconCaption: caption, balloonContent: caption });
    }

    map.geoObjects.add(placemark, suggest)
  }
}

export { initMap };
