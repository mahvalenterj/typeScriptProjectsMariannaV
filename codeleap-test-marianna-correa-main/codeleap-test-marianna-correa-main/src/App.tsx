import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Home } from './pages/Home'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { store, persistor } from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { useEffect, useState } from 'react'
import { Loader } from './components/Loader'

export function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false)
    }, 1000 * 4)

    return () => {
      clearTimeout(delay)
    }
  }, [])
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {isLoading ? (
        <Loader />
      ) : (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<DefaultLayout />}>
                  <Route path="/" element={<Home />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </PersistGate>
        </Provider>
      )}
    </ThemeProvider>
  )
}
