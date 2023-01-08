// import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import GetUserTest from './components/getUserTest/GetUserTest';
import SetUser from './components/setUser/SetUser';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
       <GetUserTest/> 
       <SetUser/>
      </QueryClientProvider>
      
    </div>
  );
}

export default App;