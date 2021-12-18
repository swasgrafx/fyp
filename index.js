let dropdown = document.getElementById('product-cat');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose Product Category';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const fetchPromise = fetch("https://neodigm.github.io/FED_Programming_Challenge/products.json")
// Target main element
  .then(function (response) {
  // return response.json(
  // Examine the text in the response  
  response.json().then(function(data) {  
    let option;
    // console.log(data);

  for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[i].cat;
      dropdown.add(option);
  }    
  
  var mainContainer = document.getElementById("main");
  for (var i = 0; i < data.length; i++) {

  // append each product to our page
  var div = document.createElement("div");

  div.innerHTML = 
    // 'Category: ' + data[i].cat +
    data[i].product +
    data[i].price +
    data[i].sale;
  // console.log(data);

  function show(div) {
    // Get the selected value from <select> element and show it.
    var main = document.getElementById('main');
    main.innerHTML = 'Product: <b>' + data[i].product + '</b> </br>' +
        'Price: <b>' + data[i].price + '</b>';
}
  mainContainer.appendChild(div);
  // xhr.open(method, url, true);
  // xhr.send();
  }

});


  })  
  .then(function (data) {
    // appendData(data);

  })
  
  .catch(function (err) {
    console.log(err);
  });

