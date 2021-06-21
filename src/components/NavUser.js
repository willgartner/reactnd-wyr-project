import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { clearAuthUser } from "../actions/authUser";

class NavUser extends Component {
  logoutUser = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(clearAuthUser());
  };

  render() {
    const { authUser, name, avatar } = this.props;

    return authUser ? (
      <Fragment>
        <Navbar.Brand>
          <Image
            variant="top"
            src={avatar}
            roundedCircle
            className="nav-user-image"
          />
        </Navbar.Brand>
        <Navbar.Text className="font-weight-bold">{name}</Navbar.Text>
        <Button
          variant="info"
          size="sm"
          className="ml-3"
          onClick={this.logoutUser}
        >
          Logout
        </Button>
      </Fragment>
    ) : (
      <Fragment>
        <Button variant="info" size="sm" className="ml-3" disabled>
          Select User Below
        </Button>
      </Fragment>
    );
  }
}

function mapStateToProps({ authUser, users }) {
  return {
    authUser,
    name: users[authUser] ? users[authUser].name : null,
    avatar: users[authUser] ? users[authUser].avatarURL : null,
  };
}

export default connect(mapStateToProps)(NavUser);
