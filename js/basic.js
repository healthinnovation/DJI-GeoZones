(function () {
  const fill = new ol.style.Fill({
    color: 'rgba(17, 125, 82,0.8)',
  });
  var map = new ol.Map({
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      }),
      new ol.layer.Vector({
        source: new ol.source.Vector({
          url: 'https://raw.githubusercontent.com/ambarja/test2/main/data.kml',
          format: new ol.format.KML({extractStyles: false})
        }),
        style: [
          new ol.style.Style({
              stroke: new ol.style.Stroke({color: 'black', width: 5}),
              fill:fill
          })
      ]
      })
    ],
    target: 'map',
    view: new ol.View({
      projection: 'EPSG:4326',
      center: [-77.1326, -12.0597],
      zoom: 11
    })
  });

   var opt_options = {
    // You must use a proxy url to avoid CORS restrictions.
    // For testing, you can run `chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security` to
    // use a Google Chrome instance with CORS disabled.
    // In this example, allOrigins is a free and open source javascript (use it only for testing) 
    // For production deploy a custom instance or use yor own proxy.
    urlProxy: 'https://api.allorigins.win/raw?url=',
    drone: 'mavic-2',
    country: 'PE',
    displayLevels: [2, 6, 1, 0, 3, 4, 7],
    activeLevels: [0, 1, 2, 3, 4, 6, 7],
    createPanel: 'full',
    language: 'es',
    startCollapsed: false,
    theme: 'light',
    i18n: {
      labels: {
        djiGeoZones: 'My Geozones'
      }
    }
  };

  var djiGeozones = new DjiGeozones(opt_options);
  map.addControl(djiGeozones);

})();
