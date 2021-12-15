// const fetchPromise = fetch("https://neodigm.github.io/FED_Programming_Challenge/products.json")
// Target main element
// .then(response => response.json())
// .then(productsArray => renderAllProducts(productsArray))

// function renderAllProducts(productsArray){
//     productsArray.forEach(product => renderOneProduct(product))
// }

// const findDiv = document.querySelector("#main")
// function renderOneProduct(products){
//     const newElement = document.createElement("div")
//     newElement.className = "content"
//     newElement.innerHTML = `
//     <div class="item-card">
//         <div class="center">
//         <h2>${products.cat}</h2>
//         <p>Price: $${products.price}</p><p>Sale Price: $${products.sale}</p>
//         <button class="add-item">Add to Cart</button>
//         <div>
//     <div>    
//     `
//     findDiv.append(newElement)
// }


const main = document.getElementById("main");

async function getProducts() {
    let url = 'https://neodigm.github.io/FED_Programming_Challenge/products.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderProducts() {
    let products = await getProducts();
    let html = '';

    products.map(product => {
        let htmlSegment = `<div class="main">
                            <h2>('#Cat') ('#Product')</h2>
                            <h2>('#Price') ('#Sale')</h2>
                            </div>`;
        console.log(products);
        html += htmlSegment;
    });
    // products.map(product => {
    //     let htmlSegment = `<div class="main">
    //                         <h2>${products.cat} ${products.product}</h2>
    //                         <h2>${products.price} ${products.sale}</h2>
    //                         </div>`;
    //     console.log(products);
    //     html += htmlSegment;
    // });

    let main = document.querySelector('.main');
    main.innerHTML = products;
    console.log(products);

}

renderProducts();