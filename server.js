import express from 'express';
import bodyParser from 'body-parser';

import productRouter from './router/products.route.js'
import customerRouter from './router/customers.route.js'

const app = express();

//Register middleware
app.use(bodyParser.json());

app.use(productRouter);
app.use(customerRouter)


app.listen(4000)