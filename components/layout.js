import Header from '../components/header'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <div className="min-h-screen main-page font-itim">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
