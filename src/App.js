// import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <p>random</p>
      </QueryClientProvider>
      
    </div>
  );
}

export default App;
