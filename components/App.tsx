import * as React from "react";
import { Filters } from "./Filters";
import { TracksList } from "./TracksList";

class App extends React.Component {
  state = {
    tracksList: [],
    // stops: Array(4).fill(true)
  };
  tracks: [];
  getInfo(): Promise<void> {
    return fetch("data.json")
    .then((response: Response) => response.json())
    .then((data) => {
      this.tracks = data.tracks;
      this.setState({tracksList: this.tracks});
    })
    .catch((e) => {
      console.error("ERROR")
    })

  }

  render(){
    return (
        <>
          <div className="mainPage">
            <Filters/>
            <TracksList/>
          </div>
        </>
    )
  }
}

export {App};