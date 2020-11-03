var corsApiUrl = "https://cors-anywhere.herokuapp.com/";
var apiToken = "?token=ELB-1Rcnhl8VX2o-Iwm45-KVLKt6yUPdrDi8ih7GsvI";

// DON'T CHANGE THIS: fetches the data from the API endpoint
const doCORSRequest = (options) => {
  var x = new XMLHttpRequest();
  x.open("GET", corsApiUrl + options.url);
  x.send(options.data);
  return x;
};

const corsPromise = () =>
  new Promise((resolve, reject) => {
    const request = doCORSRequest({
      url: "https://trefle.io/api/v1/plants" + apiToken,
    });
    resolve(request);
  });

corsPromise().then(
  (request) =>
    (request.onload = request.onerror = function () {
      let data = JSON.parse(request.response);
      console.log(data);

      addToPage = "";
      data.data.forEach(function(plant) {
          addToPage += '<h3>' + plant.common_name + '</h3>' + '<h5>' + plant.scientific_name + '</h5>' + '<img src=' + plant.image_url + ' width=30%' + '>'
      })
    
      document.getElementById("body").innerHTML = addToPage;
    })
);

