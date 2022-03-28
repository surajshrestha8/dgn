import DrawerItem from './components/layout/Drawer';
import HomePage from './pages/home/homepage';
import CreateNews from './pages/news/create-news';
import News from './pages/news/news';
import '@progress/kendo-theme-default/dist/all.css';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import EditNews from './pages/news/edit-news';
import LoginPage from './pages/login/login';
import RegisterPage from './pages/register/register';


function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
      <Router>
        <DrawerItem>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<News />} />
          <Route path = "/news/create" element={<CreateNews />} /> 
          <Route path="/news/edit/:id" element={<EditNews />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        </DrawerItem>
        <ReactQueryDevtools initialIsOpen={true} />
      </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
