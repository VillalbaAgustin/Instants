import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPages, RegisterPage } from "../pages";


export const AuthRouter = () => {
   return (
      <Routes>
         <Route path="register" element={<RegisterPage />} />
         <Route path="login" element={<LoginPages/>} />

         <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
   );
};
