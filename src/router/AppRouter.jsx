import { useState } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { AuthRouter } from "../auth";
import { InstantsRouter } from "../Instants";


export const AppRouter = () => {
   
   const [status, setStatus] = useState('not-authenticated')

   /* status: 'checking', 'not-authenticated', 'authenticated'  */


   return (
      <Routes>
         {
            (status === 'authenticated') ?
            <Route path="/*" element={<InstantsRouter/>}/>
            :
            <Route path="/auth/*" element={<AuthRouter/>}/>
         }
         <Route path='/*' element={ <Navigate to='/auth/login'/>}/>
      </Routes>

      
   );
};
