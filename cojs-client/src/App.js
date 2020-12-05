import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProblemPage from "./pages/ProblemPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import UserListPage from "./pages/UserListPage";
import UserEditPage from "./pages/UserEditPage";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/signin" component={SigninPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/problem/:id" component={ProblemPage} />
          <Route path="/admin/userlist" component={UserListPage} />
          <Route path="/admin/user/:id/edit" component={UserEditPage} />
          <Route path="/" component={HomePage} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
