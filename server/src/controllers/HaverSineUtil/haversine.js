function calculateDistance(coord1, coord2) {
    const earthRadius = 6371; // Radius of the Earth in kilometers

    const toRadians = (degrees) => (degrees * Math.PI) / 180;

    const {latitude: lat1, longitude: lon1} = coord1;
    const {latitude: lat2, longitude: lon2} = coord2;

    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = earthRadius * c; // Distance in kilometers

    return distance;
}

module.exports = {calculateDistance};
