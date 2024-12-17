import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateCalendar from './pages/CreateCalendar';
import ModifyCalendar from './pages/ModifyCalendar';
import CalendarList from './pages/CalendarList';
import CalendarView from './pages/CalendarView';
import ShareCalendar from './pages/ShareCalendar';
import ForgotPassword from './pages/ForgotPassword';
import AdminDashboard from './pages/AdminDashboard';
import AdminRoute from './components/AdminRoute';
import { useAuthStore } from './stores/authStore';

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-green-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            {isAuthenticated && (
              <>
                <Route path="/create" element={<CreateCalendar />} />
                <Route path="/modify" element={<ModifyCalendar />} />
                <Route path="/calendars" element={<CalendarList />} />
                <Route path="/calendars/:id" element={<CalendarView />} />
                <Route path="/share/:id" element={<ShareCalendar />} />
                {user?.isAdmin && (
                  <Route
                    path="/admin"
                    element={
                      <AdminRoute>
                        <AdminDashboard />
                      </AdminRoute>
                    }
                  />
                )}
              </>
            )}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;