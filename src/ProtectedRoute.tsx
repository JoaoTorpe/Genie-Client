import {Navigate} from "react-router-dom";
import { isAuthenticated } from './DataAccess/Storage.ts';
import React from 'react';

interface ProtectedProps{
    element:JSX.Element
}

export const ProtectedRoute:React.FC<ProtectedProps> = ({element}) => {
    return isAuthenticated() ? element : <Navigate to="/login" />;
  };

  export const AlredyAuthenticated:React.FC<ProtectedProps> = ({element}) => {
    return !isAuthenticated() ? element : <Navigate to="/app" />;
  };
