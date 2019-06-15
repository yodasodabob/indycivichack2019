import config from './config.js'
import React from 'react'
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react'
import IndyBusJson from './data/IndyGo_Bus_Stops.json'
import customIcon from './images/star.png'

const mapsURLPre = "https://www.google.com/maps/"
const mapsAPISnippet = "?api=1"
const buildDirReqLatLong = (lat, long) => {
    return(mapsURLPre+"dir/"+mapsAPISnippet+`&destination=${lat},${long}`)
}
const buildInfoWindowContents = (name, lat, long) => {
    return(
        <React.Fragment>
            <h5>{name}</h5>
            <p><a href={buildDirReqLatLong(lat, long)}>Click here for directions!</a></p>
        </React.Fragment>
    )
}

export class MapsContainer extends React.Component {
    

    constructor(props) {
        super(props)
        this.state = {
            activeMarker: null,
            infoWindowContents: null,
            infoWindowShowing: false,
            currentLocation: null,
            selectedLocation: null,
            selectedLocDir: null,
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({currentLocation:{ lat: position.coords.latitude, lng: position.coords.longitude}})
            })
        } else {
            console.log("Location services not allowed")
        }
    }

    markerHandler(props, marker, ev) {
        const position = props.position;
        this.setState({ activeMarker: marker, selectedLocation: props.name, selectedLocDir: buildDirReqLatLong(position.lat, position.lng), infoWindowContents: buildInfoWindowContents(props.name, position.lat, position.lng), infoWindowShowing: true})
        console.log(props, marker, ev)
    }

    hideInfoWindow(){
        if (this.state.infoWindowShowing === true) {
            this.setState({ infoWindowShowing: false })
        }
    }
    
    render() {
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
                <Map style={style} onClick={this.hideInfoWindow.bind(this)} google={this.props.google} initialCenter={this.state.currentLocation===null ? { lat: 39.768610, lng: -86.157370 } : this.state.currentLocation }>
                    {displayData.map((item) => {
                        const name = item["properties"]["DESCRIPTION"] ? item["properties"]["DESCRIPTION"] : item["properties"]["Provider Name"]? item["properties"]["Provider Name"] : item["properties"]["LOCATION"] 
                        const key = item["properties"]["OBJECTID"] ? item["properties"]["OBJECTID"] : item["properties"]["ADDRESS"] ? item["properties"]["ADDRESS"] : item["properties"]["Address"]
                        return <Marker 
                            key={key} 
                            name={name}
                            position={{ lng: item["geometry"]["coordinates"][0], lat: item["geometry"]["coordinates"][1]}}
                            onClick={this.markerHandler.bind(this)} />
                    })}
                    {this.state.currentLocation ? 
                    <Marker 
                        name="Your Location" 
                        position={this.state.currentLocation} 
                        onClick={this.markerHandler.bind(this)} 
                        icon={{
                            url: customIcon,
                            anchor: new this.props.google.maps.Point(32,32),
                            scaledSize: new this.props.google.maps.Size(64,64)
                        }}
                        />  
                    : 
                    null}
                    <InfoWindow marker={this.state.activeMarker} visible={this.state.infoWindowShowing}>
                        {this.state.infoWindowContents}
                    </InfoWindow>
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: config.__google_api_key__,
})(MapsContainer);