const User = require("../models/user.model");

const getUsersForSidebar = async (req, res) => {
    try {
        const currentUserId = req.user._id;

        const filteredUsers = await User.find({ _id: { $ne: currentUserId }}).select("-password");

        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("Error in getUsersForSidebar controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = { getUsersForSidebar };