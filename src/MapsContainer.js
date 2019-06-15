import config from './config.js'
import React from 'react'
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react'
import IndyBusJson from './data/IndyGo_Bus_Stops.json'
import customIcon from './images/star.png'

const mapsURLPre = "https://www.google.com/maps/"
const mapsAPISnippet = "?api=1"
const buildDirReqLatLong = (lat, long) => {
    return(mapsURLPre+"dir/"+mapsAPISnippet+`&destination=${lat},${long}`)
}

export class MapsContainer extends React.Component {
    

    constructor(props) {
        super(props)
        this.state = {
            activeMarker: null,
            infoWindowContents: null,
            infoWindowShowing: false,
            currentLocation: null,
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({currentLocation:{ lat: position.coords.latitude, lng: position.coords.longitude}})
            })
        } else {
            console.log("Location services not allowed")
        }
    }

    componentDidMount() {

    }
    
    render() {
        console.log(IndyBusJson)
        console.log(this.props.testProp)
        const indyBusData = IndyBusJson["features"];
        const displayData = this.props.displayData
        const markerClickHandler = (props, marker, ev) => {
            console.log(props, marker, ev)
            // ev.preventDefault()
            console.log(marker)
        }
        // console.log(indyBusData)
        // const indyBusExtract = Object.keys(Object.keys(indyBusData)[1]).map((val, index) => {})
        const style = {
            width: '100%',
            height: '100%',
        }
        return (
            <div>
                <Map style={style} google={this.props.google} initialCenter={this.state.currentLocation===null ? { lat: 39.768610, lng: -86.157370 } : this.state.currentLocation }>
                    {displayData.map((item) => {
                        return <Marker 
                            key={item["properties"]["OBJECTID"]} 
                            name={item["properties"]["DESCRIPTION"]}
                            position={{ lng: item["geometry"]["coordinates"][0], lat: item["geometry"]["coordinates"][1]}}
                            onClick={this.props.markerHandler} />
                    })}
                    {this.state.currentLocation ? 
                    <Marker 
                        name="Your Location" 
                        position={this.state.currentLocation} 
                        onClick={this.props.markerHandler} 
                        icon={{
                            url: customIcon,
                            anchor: new this.props.google.maps.Point(32,32),
                            scaledSize: new this.props.google.maps.Size(64,64)
                        }}
                        />  
                    : 
                    null}
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: config.__google_api_key__,
})(MapsContainer);