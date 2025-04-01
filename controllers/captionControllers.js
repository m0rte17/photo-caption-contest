const captionService = require("../services/captionServices");

exports.updateCaption = async (req, res) => {
    try {
        const { captionId, text } = req.body;
        if (!req.session.userId) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        const updatedCaption = await captionService.updateCaption(captionId, text, req.session.userId);
        res.status(200).json({ message: "Caption updated successfully", caption: updatedCaption });
        
    } catch (error) {
        if (error.message === "Unauthorized" || error.message === "Caption not found") {
            res.status(403).json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
};

exports.deleteCaption = async (req, res) => {
    try {
        const { captionId } = req.params;
        if (!req.session.userId) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        await captionService.deleteCaption(captionId, req.session.userId);
        res.status(200).json({ message: "Caption deleted successfully" });
        
    } catch (error) {
        if (error.message === "Unauthorized" || error.message === "Caption not found") {
            res.status(403).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Failed to delete caption' });
        }
    }
};
