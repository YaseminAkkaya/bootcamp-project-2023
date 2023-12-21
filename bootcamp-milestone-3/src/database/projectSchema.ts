import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
type Project = {
    name: string;
    description: string; // for preview
    image: string;
    link: string;
};


// mongoose schema 
const projectSchema = new Schema<Project>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true },
})

// defining the collection and model
const Project = mongoose.models['projects'] ||
mongoose.model('projects', projectSchema);

export default Project;