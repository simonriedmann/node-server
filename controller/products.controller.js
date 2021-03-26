import { v4 as uuidv4 } from 'uuid';

import { loadFromDb, writeToDb } from '../lib/DatabaseHelpers.js'

function postProduct (request, response) {
    const newProduct = {
        ...request.body, id: uuidv4()
    }

    const database = JSON.parse(fileContents)
    const products = database.products;
    products.push(newProduct)

    fs.readFile('db.json', (error, fileContents) => {
        if (error) {
            console.error(error.message)
        }

    const database = JSON.parse(fileContents);
    const products = database.products;

    products.push(newProduct);

    writeToDb(database);

    response.json(newProduct);
    });
}


function getProducts(request, response) {
    const database = loadFromDb();
    response.json({ products: database.products })
}


function findProduct(request, response) {
    const productId = request.params.productId;

    const database = loadFromDb();

    const targetProduct = database.products.find(
        (product) => product.id === productId
    );

    if (targetProduct) {
        response.json(targetProduct);
    } else {
        response.json({
            message: 'Product with ID' + productId + ' could not be found.'
        });
    }
}

export { postProduct, getProducts, findProduct };

