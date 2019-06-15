import React from 'react'
import GoogleApiWrapper from './MapsContainer';
import dataObj from './Data'
import { Container, Row, Col } from 'react-bootstrap'
import './Map.css'

export default class Map extends React.Component {
    state = {
        selectedData: dataObj.busStops,
        selectVal: "busStops"
    }

    changeHandler(ev) {
        ev.preventDefault()
        this.setState({ selectedData: dataObj[ev.target.value], selectVal:ev.target.value })
    }

    render() {
        return(
            <Container>
                <div className="map-sidebar">
                    <select dataSelection onChange={this.changeHandler.bind(this)} value={this.state.selectVal}>
                        <option value="busStops" defaultValue>Bus Stops</option>
                        <option value="blueIndy">Blue Indy Locations</option>
                        <option value="snapLocations">SNAP Locations</option>
                        <option value="mentalHealth">Mental Health Facilities</option>
                        <option value="tanf">TANF Locations</option>
                    </select>
                </div>
                <GoogleApiWrapper displayData={this.state.selectedData} />
            </Container>
        )
    }
}