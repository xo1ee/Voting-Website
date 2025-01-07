import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import './global.css'
import Home from './page'

const app = document.getElementById("app");
if (app) {
  const root = ReactDOM.createRoot(app);
  root.render(
	<StrictMode>
		<Home />
	</StrictMode>
  );
}