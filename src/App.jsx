import './app.css'
import JobList from './component/JobList';
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const { jobs, loading, error} = JobList()

  return (
    <div>
      {/* <div className='navbar '>
        <span className="navbar-text">Tell me info about your self i can help you find a dreamjob</span>
      </div>
      <Container>
        <h1>senior ui/ux designer  <button class="btn btn-light btn-lg float-right rounded-circle" type="submit">like</button></h1> 


      </Container> */}
      <JobList />
    </div>
  );
}

export default App;
