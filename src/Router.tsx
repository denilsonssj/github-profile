import {
  BrowserRouter, Routes, Route, RouteProps,
} from 'react-router-dom';

import MainLayout from 'layouts/Main/MainLayout';
import Profile from 'views/Profile';

const routes: Array<RouteProps> = [
  { path: '/', element: <Profile /> },
];

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {
            routes.map(({ path, element, ...rest }: RouteProps) => (
              <Route
                key={path}
                path={path}
                element={(
                  <MainLayout>
                    {element}
                  </MainLayout>
                )}
                {...rest}
              />
            ))
        }
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
