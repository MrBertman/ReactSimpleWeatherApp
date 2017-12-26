import React, { Component } from 'react';
import Display from './Display'
import TodoApp from "./TodoApp";
import logo from './logo.svg';
import './App.css';
import { Navbar, NavItem, Nav, Grid, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

const city =[
    {
        name: "Trokovychi",
        zip: '12345'
    },
    {
        name: "Villars-le-Grand",
        zip: '1566'
    },
    {
        name: "Fedorivka",
        zip: '64364'
    }
]

class App extends Component {
    constructor() {
        super()

        this.state = {
            activePlace: 0
        }
    }

    render() {
        const activePlace = this.state.activePlace
        return (
          <div className="App">
              <Navbar>
                  <Navbar.Header>
                      <Navbar.Brand>
                          React Simple Weather App
                      </Navbar.Brand>
                  </Navbar.Header>
              </Navbar>
              <Grid>
                  <Row>
                      <Col md={4} sm={4}>
                          <h3>Select city</h3>
                          <Nav
                              bsStyle="pills"
                              stacked
                              activeKey={activePlace}
                              onSelect={index => {
                                  this.setState({ activePlace: index });
                              }}
                          >
                              {city.map((place, index) => (
                                  <NavItem key={index} eventKey={index}>{place.name}</NavItem>
                              ))}
                          </Nav>
                      </Col>
                      <Col md={8} sm={8}>
                          <Display key={activePlace} zip={city[activePlace].zip} />
                      </Col>
                  </Row>
              </Grid>
          </div>
        );
    }
}

export default App;
