import React from 'react'
import GoogleApiWrapper from './MapsContainer';
import dataObj from './Data'
import { Container, Row, Col } from 'react-bootstrap'
import './Map.css'



export default class Map extends React.Component {
    state = {
        selectedData: dataObj.busStops,
        selectVal: "busStops",
        selectedLocation: null,
        selectedLocDir: null,
    }

    changeHandler(ev) {
        ev.preventDefault()
        this.setState({ selectedData: dataObj[ev.target.value], selectVal:ev.target.value })
    }

    

    render() {
        return(
            <Container fluid>
                <Row>
                    <Col xs={12} md={2}>
                        <div className="map-sidebar">
                            <select dataSelection onChange={this.changeHandler.bind(this)} value={this.state.selectVal}>
                                <option value="busStops" defaultValue>Bus Stops</option>
                                <option value="blueIndy">Blue Indy Locations</option>
                                <option value="snapLocations">SNAP Locations</option>
                                <option value="mentalHealth">Mental Health Facilities</option>
                                <option value="tanf">TANF Locations</option>
                            </select>
                            {this.state.selectedLocation !== null ? 
                                <div className="map-selected">
                                    <p>{this.state.selectedLocation}</p>
                                    <a href={this.state.selectedLocDir}>Click here for directions!</a>
                                </div> : null }
                        </div>
                    </Col>
                    <Col xs={12} md={9} style={{ minHeight: "70vh"}}>
                        <div style={{ width: "100%", height: "100%",}}>
                            <GoogleApiWrapper displayData={this.state.selectedData} />

                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}