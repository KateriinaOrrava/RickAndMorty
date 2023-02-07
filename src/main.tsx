import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import "./index.css";
import App from "./App";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);

//  React.StrictMode is a tool that helps you find potential problems in your React code.
//  It runs extra checks and warnings for various features in development mode, to help 
//  you identify potential problems and improve the quality of your code. For example, 
//  it will help you identify accidental usage of legacy or unsafe lifecycle methods, or 
//  usage of deprecated APIs.
//  It is important to note that React.StrictMode is intended for development only and 
//  should not be used in production. The extra checks and warnings that it provides can
//  slow down your application and may impact performance, so it's recommended to remove
//  it or wrap it around only the minimum necessary components when you're ready to deploy.

// BrowserRouter is a component in the React Router library that is used to provide 
// routing functionality to a React web application. It uses the HTML5 history API to 
// keep track of the navigation history, so that you can navigate between different 
// pages in your app without reloading the whole page. To use it, you wrap your main 
// component with BrowserRouter and use other components like Link and Route to define 
// the different routes in your application.