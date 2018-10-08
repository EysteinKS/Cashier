import React from "react"
import withAuthorization from "./withAuthorization"
import AuthUserContext from "./AuthUserContext";
import HomeProfile from "./Home/HomeProfile";
import { auth } from "./Firebase"
import { Store } from "./store/Store"

class AccountPage extends React.Component{
  constructor(props){
    super(props)
    Store.addListener(this.onChange);
  }

  componentDidMount(){
    auth.getUserName()
  }

  componentWillUnmount() {
    Store.removeListener(this.onChange);
  }

  onChange =() => {
    this.forceUpdate()
  }

  render(){
    return(
      <AuthUserContext.Consumer>
        {authUser =>
          <div>
            <h1>Account: {Store["username"]}</h1>
            <div className="grid-container">
              <br/>
              <section className="grid-item-a" style={{ backgroundColor: "#97CAEF" }}>
                  <h3>Profile Page</h3>
                  <HomeProfile />
                  <li></li>
                </section>
              <br/>
              <section className="grid-item-a" style={{ backgroundColor: "#97CAEF" }}>
                <h3>Workplace</h3>
                <li>Current Workplace</li>       
                <li>Currency Selector</li>
                <li>Current Register</li>
              </section>
              <br/>
              <section className="grid-item-a" style={{ backgroundColor: "#97CAEF" }}>
              <h3>Register Shift</h3>
                <li>Start Shift Button</li>
                <li>End Shift Button</li>
              </section>
            </div>
          </div>
        }
      </AuthUserContext.Consumer>
    )
  }
}


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage)