export default function Footer() {
  return (
    <footer className={`bg-color1 py-3 mt-3`}>
      <div className="footer-wrapper container text-color4">
        <section className="footer-credit row">
          <div className="col-12 col-lg-7">
            <p className="mb-5 mb-lg-0">{new Date().getFullYear()} Wallet-me. All right reserved.</p>
          </div>
          <div className="contacts col-12 col-lg-5 d-lg-flex justify-content-end">
            <p className="mb-2 me-lg-4 mb-lg-0">+62 5637 8882 9901</p>
            <p className="m-0">contact@wallet-me.com</p>
          </div>
        </section>
      </div>
    </footer>
  )
}