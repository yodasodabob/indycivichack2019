import config from './config.js'
import React from 'react'
import { GoogleApiWrapper } from 'google-maps-react'

export class MapsContainer extends React.Component {
    render() {
        if (!this.props.loaded) {
            return <div>Loading...</div>
        }
            return (
                <div>Map will go here</div>
            )
    }
}

export default GoogleApiWrapper({
    apiKey: config.__google_api_key__,
})(MapsContainer);