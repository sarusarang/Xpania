import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';



const queryClient = new QueryClient()



createRoot(document.getElementById('root')).render(


  <BrowserRouter>

    <QueryClientProvider client={queryClient}>


      <GoogleOAuthProvider clientId='497499738943-or63o18djrrdokq8mjh80p711cktfkmo.apps.googleusercontent.com'>


        <App />


      </GoogleOAuthProvider>


    </QueryClientProvider>


  </BrowserRouter>,




)
