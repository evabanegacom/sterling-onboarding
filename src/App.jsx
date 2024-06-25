import React, { Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import Navbar from "./component/landing-page/navbar.jsx";
// import Footer from "./component/landing-page/footer.jsx";
import ErrorBoundary from "./error-boundary.jsx";
// import Loader from "./component/Loader.jsx";
import routes from './routes';

function App() {
  
  return (
    <>
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen">
              Loading...
            </div>
          }
        >
          <ErrorBoundary>
          <Routes>
                {routes.map((route, index) => {
                  if (route.children) {
                    return (
                      <Route key={index} path={route.path} element={route.element}>
                        {route.children.map((childRoute, childIndex) => (
                          <Route
                            key={childIndex}
                            path={childRoute.path}
                            element={childRoute.element}
                          />
                        ))}
                      </Route>
                    );
                  }
                  return (
                    <Route key={index} path={route.path} element={route.element} />
                  );
                })}
              </Routes>
          </ErrorBoundary>
        </Suspense>
      
      {/* <Footer /> */}
    </>
  );
}

export default App;
