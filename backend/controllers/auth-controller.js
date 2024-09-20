// For home:

const home = async (req, res) =>{

    try {
        res
        .status(200)
        .send("welcome to home using controller")
    } catch (error) {
        console.error(error);
        
    }
}

// for register
const register = async (req, res) => {
    try {
        res
        .status(201)
        .json({message: req.body});
        
    } catch (error) {
        console.error(error);
        
    }
}

module.exports = {home, register};