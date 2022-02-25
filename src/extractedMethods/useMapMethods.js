import { Loader } from "@googlemaps/js-api-loader";

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export default () => {
  let map, service, google;

  const getMap = async (geocodeResult, onPlacesServiceLoad) => {
    const location = new google.maps.LatLng(
      geocodeResult.results[0].geometry.location.lat,
      geocodeResult.results[0].geometry.location.lng
    );
    map = new google.maps.Map(document.getElementById("map"), {
      center: location,
      zoom: 14,
    });
    const requestOptions = {
      location: location,
      radius: "5000",
      type: ["restaurant"],
    };
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(requestOptions, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        onPlacesServiceLoad(results);
        for (let i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
        map.setCenter(results[0].geometry.location);
      }
    });
  };

  const createMarker = (place) => {
    new google.maps.Marker({
      map,
      position: place.geometry.location,
    });
  };

  const getGeocode = async (zipcode) => {
    try {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:${zipcode}&key=${apiKey}`;
      const fetched = await fetch(url);
      const geocodeResult = await fetched.json();
      return geocodeResult;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const loadMapFromZipCode = async (zip, onPlacesServiceLoad) => {
    try {
      const loader = new Loader({
        apiKey: apiKey,
        version: "weekly",
        libraries: ["places"],
      });
      // load google maps api
      google = await loader.load();
      // load google geocode api
      const geocodeResult = await getGeocode(zip);
      // feed geocoded location lat/lng to initMap() function
      getMap(geocodeResult, onPlacesServiceLoad);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    loadMapFromZipCode,
  };
};
