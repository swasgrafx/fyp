const fetchPromise = fetch("https://neodigm.github.io/FED_Programming_Challenge/products.json")
// Target main element
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);

  })
  .catch(function (err) {
    // console.log(err);
  });

function appendData(data) {
  var mainContainer = document.getElementById("main");
  for (var i = 0; i < data.length; i++) {
    // append each product to our page
    // console.log(data);
  var div = document.createElement("div");
//   console.log(data);

  div.innerHTML = 
    'Category: ' + data[i].cat + data[i].product + data[i].price + data[i].sale;

//   console.log(data);

  mainContainer.appendChild(div);
    }

}