import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Home from './Home'
import Pokemon from './Pokemon'
import Contact from './Contact'
import NotFound from './NotFound'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/pokemon/:name">
          <Pokemon />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
