import React, { PropTypes } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import JsonVerifier from '../features/jsonverifier';
import NotFound from 'components/NotFound';
import { withRouter } from 'react-router';

class App extends React.Component {

  componentWillReceiveProps() {
    //if you need to dispatch location
    //changes for your application
    //in react-router-redux style
    //you can do it here by dispatching
    //some action based on this.props.location.pathname
  }

  render() {
    return (
      <div className="page-container container">
        <Row>
          <Switch>
            <Route exact path='/' component={JsonVerifier}/>
            <Route exact path='/fancy' component={NotFound} />
            <Redirect from="/*" to='/404' />
          </Switch>
        </Row>
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.object.isRequired
}

//withRouter makes the global router props
// available to the wrapped component

export default withRouter(App);