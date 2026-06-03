import React from "react";
import { Routes, Route } from "react-router-dom";

import Register from "./component/Register";
import Login from "./component/Login";

import { AdminDashboard } from "./admin/component/AdminDashboard";
import { AdminRequest } from "./admin/component/page/AdminRequest";
import AdminnLayout from "./layout/AdminLayout";

import { CanteenDashboard } from "./canteen/component/CanteenDashboard";
import { StatusPage } from "./canteen/page/StatusPage";
import { RequestPage } from "./canteen/page/RequestPage";
import CanteenLayout from "./layout/canteenLayout";
import SlotPage from "./canteen/page/SlotPage";
import BookingDetails from "./canteen/page/BookingDetails";

import UserDashboard from "./user/component/UserDashboard";
import { UserLayout } from "./layout/UserLayout";
import { AvailableCanteen } from "./user/component/pages/AvailableCanteen";
import { BookSlot } from "./user/component/pages/BookSlot";
import UserBookedDetails from "./user/component/pages/UserBookedDetails";

import {ProtectedRoute} from "./component/ProtectedRoute";
import CanteenList from "./canteen/page/CanteenList";
import CanteenSlots from "./canteen/page/CanteenSlots";

function App() {

  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />

      {/* Admin Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminnLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="request" element={<AdminRequest />} />
      </Route>

      {/* Canteen Routes */}
      <Route
        path="/canteen"
        element={
          <ProtectedRoute role="canteen">
            <CanteenLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<CanteenDashboard />} />
        <Route path="status" element={<StatusPage />} />
        <Route path="request" element={<RequestPage />} />
        <Route path="slot" element={<SlotPage />} />
        <Route path="booking-details/:id" element={<BookingDetails />} />
        <Route path="canteen-list" element = {<CanteenList /> } />
        <Route path="canteen-slots/:canteenId" element={<CanteenSlots />} />
      </Route>

      {/* User Routes */}
      <Route
        path="/user"
        element={
          <ProtectedRoute role="user">
            <UserLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<UserDashboard />} />
        <Route path="available-canteen" element={<AvailableCanteen />} />
        <Route path="book-slot/:id" element={<BookSlot />} />
        <Route path="user-booked-details" element={<UserBookedDetails />} />
      </Route>

    </Routes>
  );
}

export default App;