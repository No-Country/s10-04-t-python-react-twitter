// import AppRouter from "./router/AppRouter";

// function App() {
//   return (
//     <>
//       <AppRouter />
//     </>
//   );
// }

// export default App;

import { QueryClient, QueryClientProvider } from "react-query";
import AppRouter from "./router/AppRouter";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
}

export default App;
