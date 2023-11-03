const TouristSpots = require("../models/tourist_spots");
const {calculateDistance} = require("./HaverSineUtil/haversine");

const calculateTime = async (req, res) => {
    try {
        const {
            longitude,
            latitude,
            spotName,
            dailyCyclingHours, // in hours
            cyclingSpeed // in km/h
        } = req.body;

        const spot = await TouristSpots.findOne({
            where: {
                name: spotName
            }
        });

        if (! spot) {
            return res.status(404).json({message: 'Chosen spot does not exist'});
        }

        if (! spot.accessible_by_cycling) {
            return res.status(400).json({message: 'Chosen spot is not accessible for cycling'});
        }

        const distance = calculateDistance({
            latitude,
            longitude
        }, {
            latitude: spot.latitude,
            longitude: spot.longitude
        });

        const estimatedTime = Math.floor(distance) / Math.floor(cyclingSpeed * dailyCyclingHours);
        console.log(estimatedTime);
        res.status(200).json({estimatedTime}); // number of days required
    } catch (error) {
        console.error('Error calculating cycling time:', error);
        res.status(500).json({message: 'Internal server error'});
    }
};

module.exports = {
    calculateTime
};
