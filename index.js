import ReactDOM from "react-dom";
import { App } from "./components/App";
import  React  from "react";
import {Tracks} from "./mock/data";

ReactDOM.render(<App tracks={Tracks}/>, document.getElementById("root"));