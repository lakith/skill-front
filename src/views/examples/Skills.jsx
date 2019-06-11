import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  Button,
  Table,
  CardBody,
  Container,
  Row,
  FormGroup,
  Form,
  Col,
  ButtonToolbar
} from "reactstrap";
// core components
import Header from "components/Headers/Header.jsx";

import {Typeahead} from 'react-bootstrap-typeahead';
import StarRatingComponent from 'react-star-rating-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faSave,faTrash } from "@fortawesome/free-solid-svg-icons";

class Skills extends React.Component {

  constructor(){

    super();
    this.state={
      multiple: false,
      rating: 1,
      options : [
        {id: 'Art', name: 'java'},
        {id: 'John', name: 'spring'},
        {id: 'Miles', name: 'react'},
        {id: 'Herbie', name: 'aws'},
        {id: 'Charlie', name: 'javascript'},
        {id: 'Tony', name: 'mongodb'},
      ]
    };
  

  }


  onStarClick = (nextValue, prevValue, name) => {
    this.setState({rating: nextValue});
  }

  addNewSkill = () => {
    console.log('Add new skill clicked !');
  }

  render() {

    const { options, rating } = this.state;


    return (
      <>
        <Header />
     
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
           
            <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Skill Information</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
              
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                     Add New Skills
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                          
                          <React.Fragment>
                              <Typeahead
                                labelKey="name"
                                multiple={false}
                                options={options}
                                placeholder="Choose a skill..."
                                ref={(ref) => this._typeahead = ref}
                              />
                            <ButtonToolbar style={{marginTop: '10px'}}>
                                <Button
                                  className="btn-outline-secondary"
                                  onClick={() => this._typeahead.clear()}>
                                  Clear
                                </Button>
                                <Button
                                  className="btn-outline-secondary"
                                  onClick={() => this._typeahead.focus()}>
                                  Focus
                                </Button>
                                <Button
                                  className="btn-outline-secondary"
                                  onClick={() => this.addNewSkill}>
                                  Add
                                </Button>
                            </ButtonToolbar>
                          </React.Fragment>
                            
                          </FormGroup>
                        </Col>
                      </Row>
                      
                    <Row>
                        <Col lg="6">
                            <Row>
                                <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light">
                                      <tr>
                                        <th scope="col">Skill name</th>
                                        <th scope="col">Rating</th>
                                        <th scope="col"></th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <th>java</th>
                                        <td>
                                          <StarRatingComponent 
                                                    name="rate1" 
                                                    starCount={5}
                                                    value={rating}
                                                    onStarClick={this.onStarClick}/>
                                                
                                        </td>
                                        <td><FontAwesomeIcon icon={faTrash} /></td>
                                      </tr>
                                      <tr>
                                        <th>spring boot</th>
                                        <td>
                                          <StarRatingComponent 
                                                    name="rate1" 
                                                    starCount={5}
                                                    value={rating}
                                                    onStarClick={this.onStarClick}/>
                                              
                                        </td>
                                        <td>
                                          <FontAwesomeIcon icon={faTrash} />
                                        </td>
                                      </tr>
                                    </tbody>
                                    <Button
                                  className="btn-outline-primary"
                                  onClick={() => this.addNewSkill}>
                                  Add to Profile
                                </Button>
                            </Table> 
                        </Row>
                      </Col>
                    </Row>
                    
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Current Skills
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                      <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light">
                                      <tr>
                                        <th scope="col">Skill name</th>
                                        <th scope="col">Rating</th>
                                        <th scope="col"></th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <th>java</th>
                                        <td>
                                          <StarRatingComponent 
                                                    name="rate1" 
                                                    starCount={5}
                                                    editing={false}
                                                    value={5}
                                                    onStarClick={this.onStarClick}/>
                                                
                                        </td>
                                        <td>
                                          <FontAwesomeIcon  style={{marginRight: '10px'}} icon={faEdit} />
                                          <FontAwesomeIcon  style={{marginRight: '10px'}} icon={faSave} />
                                          <FontAwesomeIcon icon={faTrash} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <th>spring boot</th>
                                        <td>
                                          <StarRatingComponent 
                                                    name="rate1" 
                                                    starCount={5}
                                                    editing={false}
                                                    value={4}
                                                    onStarClick={this.onStarClick}/>
                                              
                                        </td>
                                        <td>
                                          <FontAwesomeIcon  style={{marginRight: '10px'}} icon={faEdit} />
                                          <FontAwesomeIcon  style={{marginRight: '10px'}} icon={faSave} />
                                          <FontAwesomeIcon icon={faTrash} />
                                        </td>
                                      </tr>
                                    </tbody>
                                    
                            </Table> 
                      </Row>
                    </div>
                  
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Skills;
