# BeLaundry

## Back-End
### API Endpoint 
| Entity | Method | Route | Description |
| ------- |------- | ----- | ----------- |
| Product | GET    | /products | Get list Product | 
|         | POST   | /products | Create a new Product |
|         | GET    | /products/:id | Get product by parameters id |


#### Command to run the application.
```bash
$ npm run start
```
or
```bash
$ DEBUG=belaundry-server:* nodemon start
```

## Front-End

### Path

| Page | Path | Description |
| -------| ----- | ----------- |
| Products | / | Displays all available products | 
| Detail Product | /product/detail/:id | Display products by id |
| Invoices | /product/invoice | Display invoice or order list |
| Add Product | /product/add | Added a new product |

#### Command to run the application.
```bash
$ npm run start
```


`Express.js` `MongoDB` `Node.js` 
`React.js` `Redux.js` `Tailwindcss`