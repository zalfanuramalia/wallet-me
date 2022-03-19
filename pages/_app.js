import '../styles/globals.css'
import '../styles/login.scss'
import '../styles/signup.scss'
import '../styles/profil.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {useEffect} from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'

function MyApp({ Component, pageProps }) {
  useEffect (()=> {
    import('bootstrap/dist/js/bootstrap')
  })
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
