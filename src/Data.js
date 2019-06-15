import blueIndy from './data/BlueIndy_Car_Stations.json'
import busStops from './data/IndyGo_Bus_Stops.json'
import mentalHealth from './data/mental_health.json'
import snapLocations from './data/snap.json'
import tanf from './data/tanfData.json'

const dataObj = {
    blueIndy: blueIndy["features"],
    busStops: busStops["features"],
    mentalHealth: mentalHealth['features'],
    snapLocations: snapLocations['features'],
    tanf: tanf["features"]
}

export default dataObj