const jwt = require('jsonwebtoken');

function getToken(header) {
    const bearer = header.split(' ');
    if (bearer.length < 2) 
        throw new Error('invalid token');
    
    const token = bearer[1];
    return token;
}

function isTokenPresentInHeader(req) {
    const header = req.headers.authorization;
    if (! header) 
        throw new Error('no token provided.');
    
    return header;
}

const authenticateUser = (req, res, next) => {
    try { // Check if a token is included in the request headers
        const header = isTokenPresentInHeader(req);
        const token = getToken(header);

        jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if (error) 
                throw new Error(error.message);
            
            if (!decoded ?. id) 
                throw new Error('userId not found in jwt');

            req.user = decoded;
            next();
        });
    } catch (error) {
        console.error('Authentication error:', error);
        res.status(403).json({code: '000UN', message: error.message});
    }
};

module.exports = {
    authenticateUser
};
