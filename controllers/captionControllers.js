const captionService = require("../services/captionServices");

exports.updateCaption = async (req, res) => {
    try {
        const { captionId, text } = req.body;
        const updatedCaption = await captionService.updateCaption(captionId, text);
        res.status(200).json({ message: "Caption updated successfully", caption: updatedCaption });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteCaption = async (req, res) => {
    try {
        const { captionId } = req.params;
        await captionService.deleteCaption(captionId);
        res.status(204).json({ message: "Caption deleted successfully" });
        
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete caption' });
    }
};
