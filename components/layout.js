import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen main-page font-sans">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
