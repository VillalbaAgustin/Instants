import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { InstantsPages } from "../pages/InstantsPages";

export const InstantsRouter = () => {
   return (
      <Routes>
         <Route path="/" element={<InstantsPages />} />
         <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
   );
};
