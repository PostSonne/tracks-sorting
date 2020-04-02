import ReactDOM from "react-dom";
import { App } from "./components/App";
import  React  from "react";
import {Tracks} from "./mock/data";

ReactDOM.render(<App tracls={Tracks}/>, document.getElementById("root"));