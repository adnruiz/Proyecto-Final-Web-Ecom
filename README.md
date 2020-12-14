# ProyectoFinal_web_emoc

# Create react app (frontend) npx create-react-app frontend

npm start --> Starts the development server.
npm run build --> Bundles the app into static files for production.
npm test --> Starts the test runner.
npm run eject --> Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:
cd frontend
npm start

# Bulding Product Screen

1. Install react-router-dom
2. Use BrowserRouter and Route for Home Screen
3. Create HomeScreen
4. Add product list
5. Create productScreen
6. Add new Route from product details to App

# Crating Node.js Server

1. run npm init in root folder
2. update package.json setting type 'module'
3. Add .js to imports
4. npm to install express
5. creating server.js
6. installing nodemon to listen to changes
7. add start command as node backend/server.js
8. require express
9. create route for /
10. move products.js from frontend to backend
11. create a route for /api/products

# Load Products From Backend

1. edit HomeScreen.js
2. define products, loading and error.
3. create useEffect
4. define async fetchData and call it
5. install axios
6. get data from /api/products
7. show then in the list
8. create Loading Component
9. create Message Box Component
10. use then in HomeScreen

# Install ESlint for code Linting

1. install VSCode eslint extension
2. npm install -D eslint
3. run ./node_modules/.bin/eslint --init
4. create ./frontend/.env
5. add SKIP_PREFLIGHT_CHEACK=true

# Add Redux to HomeScreen

1. npm install redux react-redux
2. create store.js
3. initState = {products:[]}
4. reducer = (state, action) => switch LOAD_PRODUCTS: {products: action.payload}
5. export default createStore(reducer, initState)
6. edit hHomeScreen
7. shopName = useSelector(reducer, initState)
8. const dispatch = useDispatch
9. useEffect(()=>dispatch({type: LOAD_PRODUCTS, payload: data}))
10. Add store to index.js

# Add Redux to ProductScreen

1. create product details constrants, actions and reducers
2. add reducer to store.js
3. use action in ProductScreen.js
4. add /api/product/:id to backend api