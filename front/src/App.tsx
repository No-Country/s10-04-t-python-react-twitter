import { QueryClient, QueryClientProvider } from "react-query";
import AppRouter from "./router/AppRouter";
import Data from "./services/Data";

function App() {
  const queryClient = new QueryClient();
  return (
    
    <QueryClientProvider client={queryClient}>
      <Data>
      <AppRouter />
      </Data>
    </QueryClientProvider>
    
  );
}

export default App;
