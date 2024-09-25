import Navigation from "./Navigation";

const Layout = ({children}) => {
  return (
    <div className="parentLayout">
    <header className="blue section">
    <Navigation />
    </header>
    <main className="coral section">{children}</main>
    <footer className="purple section">Footer Content</footer>
  </div>
  
  )
}

export default Layout;


