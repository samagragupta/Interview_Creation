import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HelloWorld from './HelloWorld'
import About from './About'
import CreateParticipant from './CreateParticipant'
import DetailInterview from './DetailInterview'
import CreateInterview from './Createinterview'
import EditInterview from './EditInterview'

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={HelloWorld} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/createparticipant" component={CreateParticipant} />
                        <Route exact path="/interviews/:id" component={DetailInterview} />
                        <Route exact path="/createinterview" component={CreateInterview} />
                        <Route exact path="/editinterview/:id" component={EditInterview} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App
