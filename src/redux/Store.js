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
import reviewsReducer from './reviewsSlice'


export const store = configureStore({
  reducer: {
    adventures: adventuresReducer,
    hotels : hotelsReducer,
    booking : bookingReducer,
    users:usersReducer, 
    dashboard: dashboardReducer,
    stats: statsReducer,
    sidebar: sidebarReducer,
    header: headerReducer,
    auth: authReducer,
    destinations:destinationReducer,
    performance: performanceReducer,
    reviews: reviewsReducer
  }
});




