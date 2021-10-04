import 'styles/styles.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from 'pages/Login';
import Registro from 'pages/Registro';
import Admi from 'pages/admin/Index';
import Index from 'pages/Index';
import PublicLayout from 'layouts/PublicLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import AutheLayout from 'layouts/AutheLayout';
import Clientes from 'pages/admin/Clientes';
import Casas from 'pages/admin/Casas';

function App() {
  return (
    <Router>
      <Switch>
        <Route path ={['/admin', 'admin/clientes', '/admin/casas']}>
          <PrivateLayout>
            <Switch>
              <Route path="/admin/clientes">
                <Clientes/>
              </Route>
              <Route path="/admin/casas">
                <Casas/>
              </Route>
              <Route path="/admin">
                <Admi />
              </Route>
            </Switch>
          </PrivateLayout>
        </Route>

        <Route path ={['/login' , '/registro']}>
          <AutheLayout>
            <Switch>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/registro">
                <Registro/>
              </Route>
            </Switch>
          </AutheLayout>
        </Route>

        <Route path ={['/']}>
          <PublicLayout>
            <Switch>
              <Route path ="/">
                <Index/>
              </Route>
            </Switch>
          </PublicLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
