import DrawerItem from './components/layout/Drawer';
import CreateNews from './pages/news/create-news';
import News from './pages/news/news';
import '@progress/kendo-theme-default/dist/all.css';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import EditNews from './pages/news/edit-news';
import LoginPage from './pages/login/login';
import RegisterPage from './pages/register/register';
import ForgotPassword from './pages/login/forgotpassword';
import ProtectedRoutes from './routes/ProtectedRoutes';
import { useAuthStore } from './store/app.store';
import authRoutes from './routes/authRoutes';
import ResetPassword from './pages/login/resetpassword';
import CreateRole from './pages/roles/create-roles';


function App() {
  const queryClient = new QueryClient();
  const { isLoggedIn } = useAuthStore();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
      <Router>
        {!isLoggedIn && (
          <Routes>
          {authRoutes.map((routes)=>(
            <Route key={routes.id} path={routes.path} element={
              <ProtectedRoutes>
                {routes.element}
              </ProtectedRoutes>
            }
            />
          ))}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/password/forgot" element={<ForgotPassword />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/password/reset" element={<ResetPassword />} />
          </Routes>
        )}
  
      {isLoggedIn && (
        <DrawerItem>
          <Routes>
            <Route path="/news" element={<News />} />
            <Route path = "/news/create" element={<CreateNews />} /> 
            <Route path="/news/edit/:id" element={<EditNews />} />
            <Route path= "/roles" element = {<CreateRole />} />
          </Routes>  
        </DrawerItem>
      )}
      <ReactQueryDevtools initialIsOpen={false} />
      </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
