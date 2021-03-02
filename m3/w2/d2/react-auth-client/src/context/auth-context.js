import React from 'react';
import authServices from './../services/auth-service';


const { Consumer, Provider } = React.createContext();


// Provider
class AuthProvider extends React.Component {
  state = {
    isLoggedIn: false,
    isLoading: true,
    user: null
  }

  componentDidMount() {
    authServices.me()
      .then((data) => {
        this.setState({ isLoggedIn: true, user: data, isLoading: false })
      })
      .catch( (err) => this.setState({ isLoggedIn: false, user: null, isLoading: false }));
  }

  login = () => { }
  signup = () => { }
  logout = () => {}


  render() {
    const { isLoggedIn, isLoading, user } = this.state;
    const { login, signup, logout } = this;

    return (
      <Provider value={{ isLoggedIn, isLoading, user, login, signup, logout }}>
        {this.props.children}
      </Provider>

    )
  }
}


// HOC to create consumers - to read data from the Context Provider
const withAuth = (WrappedComponent) => {
  
  return function (props) {
    return (
      <Consumer>
        { (value) => {
          const { isLoggedIn, isLoading, user, login, signup, logout } = value;

          return (
            <WrappedComponent
              isLoggedIn={isLoggedIn}
              isLoading={isLoading}
              user={user}
              login={login}
              signup={signup}
              logout={logout}
              {...props}
            />
          )
        }}
      </Consumer>  
    
    )
  }
}



export { withAuth, AuthProvider }
