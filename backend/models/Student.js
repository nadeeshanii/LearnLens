import mongoose from "mongoose";


const studentSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },

    attendance: {
        type: Number,
        required: true
    },

    studyHours: {
        type: Number,
        required: true
    },

    assignmentScore: {
        type: Number,
        required: true
    },

    previousGrade: {
        type: Number,
        required: true
    },

    predictedGrade: {
        type: Number,
        default: null
    },

    performanceLevel: {
        type: String,
        default: null
    },

    recommendations: [{
        type: String
    }]

},
{
    timestamps: true
});


const Student = mongoose.model("Student", studentSchema);


export default Student;