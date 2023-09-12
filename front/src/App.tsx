import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "./router/AppRouter";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
