import { v4 as uuidv4 } from 'uuid';

function postCustomer (request, response) {
    const newCustomer = {...request.body, id: uuidv4()};
    response.json(newCustomer);
}



function customerForm(request, response) {
    response.send(`
    <form action="/customers" method="POST">
            <input type="text" name="customername" placeholder="first name">
            <input type="text" name="customername" placeholder="last name">
            <input type="text" name="customername" placeholder="email">
            <button>Add customer</button>
    </form>`
)}
;

export { postCustomer, customerForm }