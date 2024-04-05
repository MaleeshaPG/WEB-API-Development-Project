
function samplemiddleware(req, res, next) {
    const condition = req.body.isAllowed ? req.body.isAllowed : true;
    if (!condition) {
        return res.status(401).json({ message: "Not Allowed Permission - " + condition });
    }
    next();
}


module.exports={samplemiddleware}