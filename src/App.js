import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { VIEWS } from './App/Routing'

const Template = React.lazy(() => import('./App/Routing/Template'))

function App() {
  return (

    <>
      <React.Suspense fallback={<h1>Loading</h1>}>
        <Switch>
          { VIEWS.map((view, i) => {

            return (
              <Route 
                key={i} 
                exact 
                path={view.path} 
                render={_props => (
                  <Template 
                    {...view}
                    component={<view.component {..._props} />}
                  />
                )}
              />

          )})}
        </Switch>
      </React.Suspense>

    </>
  );
}

export default App;
