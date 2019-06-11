import React from "react";

// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Bar } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample2
} from "variables/charts.jsx";

import Header from "components/Headers/Header.jsx";

class Index extends React.Component {
  state = {
    activeNav: 1,
    chartExample1Data: "data1"
  };
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
    let wow = () => {
      console.log(this.state);
    };
    wow.bind(this);
    setTimeout(() => wow(), 1000);
    // this.chartReference.update();
  };
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col xl="6">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-muted ls-1 mb-1">
                        Skill
                      </h6>
                      <h2 className="mb-0">Total Count</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                    <Bar
                      data={chartExample2.data}
                      options={chartExample2.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
         
    
            <Col className="mb-5 mb-xl-0" xl="6">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Skills By Count</h3>
                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Skill name</th>
                      <th scope="col">Engineers</th>
                      <th scope="col">Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>java</th>
                      <td>10</td>
                      <td>25%</td>
                    </tr>
                    <tr>
                      <th>spring boot</th>
                      <td>15</td>
                      <td>35,5%</td>
                    </tr>
                    <tr>
                      <th>react</th>
                      <td>8</td>
                      <td>14%</td>
                    </tr>
                    <tr>
                      <th>python</th>
                      <td>3</td>
                      <td>8%</td>
                    </tr>
                    <tr>
                      <th>selenium</th>
                      <td>18</td>
                      <td>41,25%</td>
                    </tr>   
                  </tbody>
                </Table>
              </Card>
            </Col>
            </Row>
       
        </Container>
      </>
    );
  }
}

export default Index;
