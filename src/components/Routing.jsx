import {  Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import About from './About';
import RecipiesList from './RecipiesList';
import Profile from './Profile';
import RecpieDetails from './RecpieDetails';

export const Routing = () => {
    return <>
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipies" element={<RecipiesList />} />
            <Route path="/recipeDetails/:id/:name" element={<RecpieDetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<><h1>404 Not Found</h1></>} />
        </Routes>
    </>
}