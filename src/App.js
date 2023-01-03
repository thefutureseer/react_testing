// import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import GetUserTest from './components/getUserTest/getUser';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
       <GetUserTest/> 
      </QueryClientProvider>
      
    </div>
  );
}

export default App;