"use client";

import { Provider } from "react-redux";
import { store } from "../store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
// import { QueryClient ,  } from "react-query";
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
export function Providers({ children }: { children: React.ReactNode }) {
  let persistor = persistStore(store);
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
       {children}
      </QueryClientProvider>
        
      </PersistGate>
    </Provider>
  );
}
