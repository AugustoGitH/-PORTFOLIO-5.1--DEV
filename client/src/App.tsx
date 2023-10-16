import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import { Page } from './pages'
import { Auth } from './components/Auth'
import { Layout } from './patterns/Layout'


function App() {
  const navigation = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [navigation])

  return (
    <Routes>
      <Route path="*" element={<Layout.PageNotFound />} />
      <Route path="/" element={<Page.Home />} />
      <Route path="/login" element={<Page.Login />} />
      <Route path="/panel" element={
        <Auth.PrivateRouter redirect='/'>
          <Page.Panel />
        </Auth.PrivateRouter>
      } />
    </Routes>
  )
}

export default App
