import React, { Suspense } from "react";
import AllRouter from "./routers/AllRouter";
import LoadingOverlay from "./components/icons/LoadingOverlay";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      {/* <Register /> */}
      <Suspense
        fallback={
          <div>
            <LoadingOverlay />
          </div>
        }
      >
        <AllRouter />
        <ToastContainer />
      </Suspense>
    </div>
  );
}

export default App;
