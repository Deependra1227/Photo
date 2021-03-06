import React from "react";

function Footer() {
  return (
    <footer class="page-footer font-small indigo">
      <hr />
      <div class="container">

        <div class="row text-center d-flex justify-content-center pt-5 mb-3">

          <div class="col-md-2 mb-3">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!">About us</a>
            </h6>
          </div>
          <div class="col-md-2 mb-3">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!">Products</a>
            </h6>
          </div>
          <div class="col-md-2 mb-3">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!">Awards</a>
            </h6>
          </div>
          <div class="col-md-2 mb-3">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!">Help</a>
            </h6>
          </div>
          <div class="col-md-2 mb-3">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!">Contact</a>
            </h6>
          </div>

        </div>
        <hr class="rgba-white-light" style={{ margin: "0 15%" }} />

        <div class="row d-flex text-center justify-content-center mb-md-0 mb-4">

          <div class="col-md-8 col-12 mt-5">
            <p style={{ lineHeight: "1.71rem" }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
          </div>

        </div>
        <hr class="clearfix d-md-none rgba-white-light" style={{ margin: "10% 15% 5%" }} />
        <br></br>

      </div>
      <div class="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
      </div>

    </footer>
  );
}

export default Footer;
