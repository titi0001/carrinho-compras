# :convenience_store: FrontEnd Online Store! :convenience_store:

This was our first front-end module group work! It was a job in which we put agile methodologies into practice, using the Trello tool to organize the requirements.
We organized ourselves in pair programming and did the entire work in pairs or in trios. We open a branch by requirement, then open a pull request and wait for code review from other members to approve and merge into our main branch.

### But what is the online store front-end all about?
We need to develop an online store powered by the free market API. Where it would be possible for the customer to filter products by category, search in the search bar, add, remove and change the quantity of the product in the cart and then complete the purchase on a checkout page.


### API endpoints
<li>To list available categories: https://api.mercadolibre.com/sites/MLB/categories </li>
<li>To search for items by term: https://api.mercadolibre.com/sites/MLB/search?q=${search-value} </li>
<li>To search for items by category: https://api.mercadolibre.com/sites/MLB/search?category=${category-id} </li>
<li>To search for items in a category by term: https://api.mercadolibre.com/sites/MLB/search?category=${category-id}&q=${search-value}</ li>
<li>To fetch details for a specific item: https://api.mercadolibre.com/items/${product-id}

## Technologies used
frontend:
> Developed using: React, CSS3, HTML5, ES6
  
## Installing Dependencies
> Frontend
```bash
cd src/
npm install
```
## Running application
* To run the frontend:

   ```
     cd src/ && npm start
   ```

## Running Tests

* To run all tests:

   ```
     npm test
   ```
