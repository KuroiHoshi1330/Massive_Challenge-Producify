import React from 'react';
// import '../component/styleLogin.css';
import "../component/Semua.css";

export default function Login() {
  return (
    <>
    <body>
      <div className="global-container">
        <div className="card login-form" style={{ height: "auto" }}>
          <div className="card-body">
            <h1 className="card-title text-center">Producify</h1>
          </div>

          <div className="card-text">
            <form>
              <div className="mb-3">
                <label for="inputUsername" className="form-label">
                  Email/Username
                </label>
                <input type="username" className="form-control" id="inputUsername" placeholder="Enter your email/username..." />
              </div>
              <div className="mb-3">
                <label for="inputPassword" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="inputPassword" placeholder="Enter your password..." />
              </div>
            </form>
          </div>
          <button type="sign up" className="btn btn-primary">
            Log in
          </button>
          <br />
          <div className="d-flex align-items-center">
            <hr className="hr-light flex-grow-1" />
            <p className="mx-3" style={{ color: 'white', fontSize: '20px' }}>
              Or
            </p>
            <hr className="hr-light flex-grow-1" />
          </div>

          <div className="d-grid gap-3 col-6 mx-auto" style={{ marginTop: '10px' }}>
            <button type="google" className="btn btn-light">
              <img src="icon/google.png" alt="Google logo" className="rounded float-start" />
              <span style={{ fontWeight: '600' }}>Sign in with Google</span>
            </button>
            <button type="facebook" className="btn btn-light">
              <img src="icon/facebook.png" alt="Facebook logo" className="rounded float-start" />
              <span style={{ fontWeight: '600' }}>Sign in with Facebook</span>
            </button>
            <button type="apple" className="btn btn-light">
              <img src="icon/apple.png" alt="Apple ID logo" className="rounded float-start" />
              <span style={{ fontWeight: '600' }}>Sign in with Apple ID</span>
            </button>
          </div>

          <hr className="hr-light" style={{ marginTop: '40px' }} />

          <br />

          <div className="signinhere" style={{ fontSize: '20px', color: 'white', textAlign: 'center', marginTop: '10px' }}>
            <p style={{ display: 'inline-block' }}>Don't have an account?</p>
            <nav style={{ bsBreadcrumbDivider: '', display: 'inline-block' }} className="breadcrumb">
              <a href="register.html">Sign up here!</a>
            </nav>
          </div>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </body>
    </>
  );
}
