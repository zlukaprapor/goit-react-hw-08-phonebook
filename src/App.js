import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRouter';
import Container from './components/Container';
import AppBar from './components/AppBar';
import { authOperations, authSelectors } from './redux/auth';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

export default function App() {
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <Oval wrapperClass="Loader" arialLabel="loading-indicator" />
      ) : (
        <>
          <AppBar />
          <Switch>
            <Suspense fallback={<Oval wrapperClass="Loader" arialLabel="loading-indicator" />}>
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>

              <PublicRoute exact path="/register" restricted>
                <RegisterView />
              </PublicRoute>

              <PublicRoute exact path="/login" restricted>
                <LoginView />
              </PublicRoute>

              <PrivateRoute path="/contacts">
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </Container>
  );
}
