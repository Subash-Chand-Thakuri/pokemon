
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';


const queryClient = new QueryClient();


const Main: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      
        <App />
     
    </QueryClientProvider>
  );
};

export default Main;