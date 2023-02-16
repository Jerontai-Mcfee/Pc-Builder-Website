import React from 'react'

const App = () => {

  return (

    <BrowserRouter>
      <Switch>
        <Route path="/profile/:id/edit">
          <CommentsEdit />
        </Route> 
        <Route path="/Components">
          <DrinksIndex />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/profile">
          <UserProfile />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App