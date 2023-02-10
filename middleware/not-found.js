const notFound = (req,res)=> res.status(404).send("Route doesn't Exist");

module.exports = notFound;