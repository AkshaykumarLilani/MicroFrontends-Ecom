import faker from 'faker';

const mountCart = (el) => {
    const cartText = `<div>You have a ${faker.random.number()} items in your cart</div>`;

    el.innerHTML = cartText;
}

/*
    Context/Situation #1
    We are running this file in development in isolation
    We are using our local index.html file
    Which DEFINITELY has an element with an id of 'cart-dev'
    We want to immediately render our app into that element
*/
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#cart-dev');

    // Assumming our container doesnt have an element with the id of 'cart-dev'
    if (el) mountCart(el);
}


/*
    Context/Situation #2
    We are running this file in development or in production
    through a CONTAINER app
    NO GURANTEE that an element with an id of 'cart-dev' exists in the container
    WE DO NOT WANT to try to immediately render the app
*/

export { mountCart };