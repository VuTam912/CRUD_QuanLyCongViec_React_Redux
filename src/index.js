import React from 'react'; // nạp thư viện react
import ReactDOM from 'react-dom/client'; // nạp thư viện react-dom
import './index.css';
import App from './App';

// Redux:  Store 
// create index.js in reducers folder
import { createStore } from 'redux';
import myReducer from './components/reducers/index';  
import { Provider } from 'react-redux';
const store = createStore(
    myReducer,
    // ReduxDevTools in chromes 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );


// // Render App -> old version
// ReactDOM.render(
//     <Provider store={ store }>
//         <App />
//     </Provider>,
//      document.getElementById('root')
// );

// Thay the cho ReactDOM.render()
// React 18 -> new version
const root = document.getElementById('root');
const rootElement = (
    <React.StrictMode>
        <Provider store={ store }>
            <App />
        </Provider>,
    </React.StrictMode>
);

// Sử dụng createRoot API để thay thế cho ReactDOM.render()
const rootApp = ReactDOM.createRoot(root);
rootApp.render(rootElement);