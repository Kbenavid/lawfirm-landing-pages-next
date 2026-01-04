import mongoose from "mongoose";
// Define the shape of a "Lead" document
const LeadSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, match: [/.+\@.+\..+/, 'Please fill a valid email address']},
    phone: { type: String },
    message: { type: String },
    createdAt: { type: Date, default: Date.now},
}); 
// Prevent model overwrite errors in development
export default mongoose.models.Lead || mongoose.model("Lead", LeadSchema);