import * as React from "react";
import { Filters } from "./Filters";
import { TracksList } from "./TracksList";
import { FC } from "react";

interface AppProps {
  trackList?: [];
  tracks?: [];
}

export const handleSetFilters= (type: string, index: number, checked: boolean) => {
  let newFilters: any[] | never[] = [];
  /*let newTrackList = [];
  const filteringPredicate = (item) => {
    return !!((item.stops < 4) && (newFilters[item.stops]));
  };*/
  switch (type) {
    case "all": {
      newFilters = Array(4).fill(checked)
    }
      break;
    case "only": {
      newFilters = Array(4).fill(false);
      newFilters[index] = true
    }
      break;
    case "one": {
      // newFilters = this.state.stops.slice();
      newFilters[index] = !newFilters[index]
    }
  }
  /*newTrackList= this.TICKETS.filter((item) => filteringPredicate(item));
  this.setState({stops: newFilters, ticketsList: newTrackList})*/
};

const App: FC<AppProps> = () => {
  /*const getInfo = async (): Promise<void> => {
    return fetch("data.json")
    .then((response: Response) => response.json())
    .then((data) => {
      tracks = data.tracks;
      trackList = tracks})
    .catch((e) => {
      console.error("ERROR")
    })
  };*/
    return (
        <>
          <div className="mainPage">
            <Filters/>
            <TracksList/>
          </div>
        </>
    )
};

export {App};