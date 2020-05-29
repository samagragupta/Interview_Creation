// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import HelloWorld from '../bundles/HelloWorld'
import App from '../bundles/HelloWorld/components/App'
import PropTypes from 'prop-types'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducers from "../bundles/HelloWorld/reducers/index.js";

let store = createStore(reducers, applyMiddleware(thunk))


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    // <Hello name="React" />,
    <Provider store={store}><App /></Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
