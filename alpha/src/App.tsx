import React from "react"
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardList from "./components/CardList/CardList";
import CardDetail from "./components/CardDetail/CardDetail";
import FilterButton from "./components/FilterButton/FilterButton";
import { Provider } from "react-redux";
import store from "./redux/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <h1>Список карточек</h1>
          <FilterButton/>
          <Routes>
            <Route path="/" element={<CardList/>} />
            <Route path="/card/:id" element={<CardDetail />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  )
}

export default App
