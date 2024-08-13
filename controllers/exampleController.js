// Example Controller
exports.getExample = (req, res) => {
    return res.status(200).json({
        status: true,
        message: "Hello from Example Controller!"
    })
};