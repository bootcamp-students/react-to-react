import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import './index.css';

import App from './App';
import Ingredients from './routes/Ingredients';
import Wizards from './routes/Wizards';

const rootElement = document.getElementById("app"); // root element is in the index.html

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="elixirs" element={<Elixirs />} />
        <Route path="houses" element={<Houses />} />
        <Route path="wizards" element={<Wizards />} />
        <Route path="ingredients" element={<Ingredients />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

