import { configureStore } from '@reduxjs/toolkit';
import adventuresReducer from './adventuresSlice';
import hotelsReducer from './hotelsSlice';
import bookingReducer from "./bookingsSlice"; 
import usersReducer from './userSlice'; 
import dashboardReducer from './dashboardSlice'
import statsReducer from './statsSlice'
import sidebarReducer from './sidebarSlice'
import headerReducer from './headerSlice' 
import authReducer from './authSlice'
import destinationReducer from './destinationSlice'
import performanceReducer from './performanceSlice';


export const store = configureStore({
  reducer: {
    adventures: adventuresReducer,
    hotels : hotelsReducer,
    booking : bookingReducer,
    users:usersReducer, 
    dashboard: dashboardReducer,
    stats: statsReducer,
    sidebar: sidebarReducer,
    header: headerReducer,// Ensure you have usersReducer imported 
    auth: authReducer,
    destinations:destinationReducer,
    performance: performanceReducer
  }
});




