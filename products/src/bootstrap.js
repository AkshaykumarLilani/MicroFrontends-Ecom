import faker from "faker";

const mountProducts = (el) => {
    let products = "";

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    el.innerHTML = products;
}

/*
    Context/Situation #1
    We are running this file in development in isolation
    We are using our local index.html file
    Which DEFINITELY has an element with an id of 'dev-products'
    We want to immediately render our app into that element
*/
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');

    // Assumming our container doesnt have an element with the id of 'dev-products'
    if (el) mountProducts(el);
}


/*
    Context/Situation #2
    We are running this file in development or in production
    through a CONTAINER app
    NO GURANTEE that an element with an id of 'dev-products' exists in the container
    WE DO NOT WANT to try to immediately render the app
*/

export { mountProducts };