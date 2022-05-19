import React from 'react';
const Footer = () =>{
    return(
        <footer className="bg-dark text-center text-white opacity-75 customfooter">
          <div className="container py-2">
            <section>
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="bi bi-facebook"></i></a>
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="bi bi-twitter"></i></a>
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="bi bi-google"></i></a>
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="bi bi-instagram"></i></a>
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="bi bi-linkedin"></i></a>
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="bi bi-github"></i></a>
            </section>
          </div>
          <div className="bg-dark text-center text-white opacity-75 p copywrite">
            © 2022 Copyright:
            <a className="text-white" href="https://Gurucool.com/">Gurucool.com</a>
          </div>
        </footer> 
    );
}

export default Footer;