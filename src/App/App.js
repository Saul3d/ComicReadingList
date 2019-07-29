import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';

import Auth from '../components/Auth/Auth';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import MyLists from '../components/MyLists/MyLists';
import CharacterShelf from '../components/CharacterShelf/CharacterShelf';
import ComicShelf from '../components/ComicShelf/ComicShelf';
import getListData from '../helpers/data/getListData';
import SingleListView from '../components/SingleListView/SingleListView';

import './App.scss';

import fbConnection from '../helpers/data/connections';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
    lists: [],
  }

  getMyComicLists = () => {
    getListData.getListByListId()
      .then(lists => this.setState({ lists }))
      .catch(err => console.error('Could not get your comic list', err));
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
    // this.getMyComicLists();  t
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed, lists } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar authed={authed} lists={lists} />
            <div className="container-fluid">
              <div className="row d-flex flex-column">
                <Switch>
                  <PublicRoute path='/auth' component={Auth} authed={authed}/>
                  <PrivateRoute path='/home' component={() => (<MyLists lists={lists}/>)} authed={authed}/>
                  <PrivateRoute path='/characters' component={CharacterShelf} authed={authed}/>
                  <PrivateRoute path='/comics' component={ComicShelf} authed={authed}/>
                  <PrivateRoute path='list/:id' component={SingleListView} authed={authed}/>
                  <Redirect from="*" to="/auth" />
                </Switch>
              </div>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
