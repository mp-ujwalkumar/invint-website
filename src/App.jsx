
import './App.css';

function App() {
  return (
    <div className="main-wrapper">
      <nav className="navbar">
        <div className="logo">Invint</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>


      <header className="hero" id="home">
        <h1>Professional, Personal Solutions</h1>
        <p>Bring your ideas to life!</p>
      </header>

      <section className="about" id="about">
        <h2>About Us</h2>
        <p>
          At Invint, we transform your digital vision into reality. Our team of experienced software engineers and designers work closely with clients to deliver personalized solutions that meet unique business needs. We believe in transparent communication, rigorous testing, and a commitment to quality at every stage of development. Whether you are a startup or an established enterprise, our goal is to help you succeed in a fast-paced technology landscape with reliable, scalable, and innovative software.
        </p>

      </section>
      <div className="section-divider"></div>

      <section className="services">
        <div className="service">
          <img src="https://img1.wsimg.com/isteam/stock/87399/:/cr=t:0%25,l:16.67%25,w:66.67%25,h:100%25/rs=w:365,h:365,cg:true" alt="Personalized Software" />
          <h2>Personalized Software</h2>
          <p>We turn your digital dreams into reality, working closely with you to ensure alignment with your goals.</p>
        </div>
        <div className="service">
          <img src="https://img1.wsimg.com/isteam/stock/8qNYpPY/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365" alt="Rigorous Testing" />
          <h2>Rigorous Testing</h2>
          <p>Meticulous bug checks and testing are included in every development package for quality assurance.</p>
        </div>
        <div className="service">
          <img src="https://img1.wsimg.com/isteam/stock/87348/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365" alt="Quality Guaranteed" />
          <h2>Quality Guaranteed</h2>
          <p>We provide high-quality products and professional customer service, no matter your budget.</p>
        </div>
      </section>

      <div className="section-divider"></div>
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <p>For inquiries, please email us at <a href="mailto:info@invint.in">info@invint.in</a></p>
      </section>

      <footer className="footer">
        <p>Copyright © 2025 Invint - All Rights Reserved.</p>
        <p className="cookie-notice">This website uses cookies to analyze traffic and optimize your experience.</p>
      </footer>
    </div>
  );
}

export default App;
