import config from './config.js'
import React from 'react'
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react'
import IndyBusJson from './data/IndyGo_Bus_Stops.json'

const mapsURLPre = "https://www.google.com/maps/"
const mapsAPISnippet = "?api=1"
const buildDirReqLatLong = (lat, long) => {
    return(mapsURLPre+"dir/"+mapsAPISnippet+`&origin=${lat},${long}`)
}

export class MapsContainer extends React.Component {
    state = {

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
                <Map style={style} google={this.props.google} initialCenter={{ lat: 39.768610, lng: -86.157370 }}>
                    {displayData.map((item) => {
                        return <Marker 
                            key={item["properties"]["OBJECTID"]} 
                            name={item["properties"]["DESCRIPTION"]}
                            position={{ lng: item["geometry"]["coordinates"][0], lat: item["geometry"]["coordinates"][1]}}
                            onClick={this.props.markerHandler} />
                    })}
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: config.__google_api_key__,
})(MapsContainer);