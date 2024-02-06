import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const authRequire = (req, res, next) => {
    const { token } = req.cookies;
    if(!token) return res.status(401).json({ message: "Token not found, authorization denied" });

    jwt.verify(token, TOKEN_SECRET, (err, decodedToken) => {
        if(err) return res.status(403).json({ message: "Invalid token" });

        console.log(decodedToken);
        req.user = decodedToken;
        next()
    });
}