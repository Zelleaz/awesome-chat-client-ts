import React from 'react';
import {Navigate, Route, Routes } from 'react-router-dom';
import Auth from "../../Pages/Auth/Auth";

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Auth />} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    );
}

export default PublicRoutes;