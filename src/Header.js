import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">Book Store</Navbar.Brand>
          <Nav className="me-auto nav_nav_wrapper">
            {
              localStorage.getItem('user-info') ?
                <>
                  <Link to="/add">Add Product</Link>
                  <Link to="/update">Updates Product</Link>
                 
                </>
                :
                <>
                  <Nav.Link href="/list">Home</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/register">Register</Nav.Link>
                </>
            }
          </Nav>
        </Container>
      </Navbar>
    </div>

  )
}
export default Header