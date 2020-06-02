// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import HelloWorld from '../bundles/HelloWorld'
import App from '../bundles/HelloWorld/components/App'
import PropTypes from 'prop-types'

const Hello = props => (
  <div>Hellofhsga {props.name}!</div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    // <Hello name="React" />,
    <Router>
      <Route path="/" component={App} />
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})