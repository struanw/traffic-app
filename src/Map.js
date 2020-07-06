import React from 'react';
import './App.css';
import { GoogleApiWrapper } from 'google-maps-react';


function Map() {

    render() {
        return (
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        );
      }

      export default GoogleApiWrapper({
        apiKey: AIzaSyCJcJoGDA0X2PMtfefER6hBCRPx8HW83RA
      })(MapContainer);
      