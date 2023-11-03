const TouristSpots = require("../models/tourist_spots");

const getTouristSpots = async (req, res) => {
    try {
        const touristSpots = await TouristSpots.findAll({
            attributes: ['name', 'accessible_by_cycling']
        });
        res.status(200).json(touristSpots);
    } catch (error) {
        console.error('Error fetching tourist spots:', error);
        res.status(500).json({message: 'Internal server error'});
    }
};

const getSpotDetails = async (req, res) => {
    try {
        const spotName = req.params.spotName;
        const spot = await TouristSpots.findOne({
            where: {
                name: spotName
            }
        });

        if (! spot) {
            return res.status(404).json({message: 'Tourist spot not found'});
        }

        res.status(200).json(spot);
    } catch (error) {
        console.error('Error fetching tourist spot details:', error);
        res.status(500).json({message: 'Internal server error'});
    }
};

module.exports = {
    getTouristSpots,
    getSpotDetails
};
