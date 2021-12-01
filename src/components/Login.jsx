import React, { Component } from "react";
import qs from "qs";
import scrapeIt from "scrape-it";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: qs.parse(this.props.location.search, { ignoreQueryPrefix: true })
        .code,
    };
  }
  componentDidMount() {
    console.log(this.state.code);
    if (!this.state.code) {
      window.location.assign(
        "https://connect.deezer.com/oauth/auth.php?app_id=516102&redirect_uri=http://localhost:3000/login&perms=basic_access,email"
      );
      return;
    }
    this.getToken(this.state.code);
  }
  render() {
    return <></>;
  }

  getToken = async (code) => {
    try {
      const uri = `https://connect.deezer.com/oauth/access_token.php?app_id=516102&secret=3206a4dde5e68a5292a512c665147824&code=${code}&output=json`;
      /*const options = {
          body: "body",
          cors: "no-cors"
      }
      const result = await scrapeIt(uri, options);
      console.log(result);*/
      const response = await fetch(uri, {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      const r = await response.access_token
      console.log(response)
      console.log(r);
      //console.log(uri)

      /*const d = await response.text();
      console.log(d);*/
    } catch (err) {
      console.log(err);
    }
  };
}
