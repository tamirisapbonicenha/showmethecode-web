import dotenv from "dotenv"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { ConnectedRouter } from "connected-react-router"
import { Container } from "react-grid-system"

import { GlobalStyle } from "./components"
import store, { history, persistor } from "./redux-flow/stores/store"
import Routes from "./routes"
import * as serviceWorker from "./serviceWorker"

dotenv.config()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Container>
          <GlobalStyle />
          <Routes />
        </Container>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
