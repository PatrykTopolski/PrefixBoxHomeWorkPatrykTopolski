function getProductNameByDataIdentifier(id){
 return document.querySelector(`[data-identifier='${id}']`).children[0].innerText;
}

function getProductByDataIdentifier(id){
    return document.querySelector(`[data-identifier='${id}']`).children[0];
}

function getAllProducts() {
    return document.querySelectorAll(`.product`);
}

function swapNamesOfProductsByDataIdentifier(productID1, productID2){
    let firstProduct = getProductByDataIdentifier(productID1);
    let secondProduct = getProductByDataIdentifier((productID2));
    const firstProductName = getProductNameByDataIdentifier(productID1);
    const secondProductName = getProductNameByDataIdentifier(productID2);
    firstProduct.innerText = secondProductName;
    secondProduct.innerText = firstProductName;
}

//exercise 1
function swapNamesEventHandler(){
    swapNamesOfProductsByDataIdentifier(3,2)
}


//exercise 2
function addPopUpsToProducts(){
    let products = getAllProducts();
    for (let i= 1; i<=products.length; i++){
        products[i-1].addEventListener("click", function(){alert(`product name: ${products[i-1].children[1].children[0].innerText} \nproduct ID: ${products[i-1].children[1].getAttribute('data-identifier')} \nprice: ${products[i-1].children[1].children[1].innerText}`)})
    }
}

//main
let product = getProductByDataIdentifier(3);
product.addEventListener("click", swapNamesEventHandler);
addPopUpsToProducts();