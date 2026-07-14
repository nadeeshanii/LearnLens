import Student from "../models/Student.js";


// Add Student
export const createStudent = async (req, res) => {

    try {

        const student = await Student.create(req.body);

        res.status(201).json(student);

    } catch(error) {

        res.status(500).json({
            message:error.message
        });

    }

};



// Get All Students
export const getStudents = async (req, res) => {

    try {

        const students = await Student.find();

        res.json(students);

    } catch(error) {

        res.status(500).json({
            message:error.message
        });

    }

};


// Update Student
export const updateStudent = async (req, res) => {

    try {
        const { id } = req.params;

        const updated = await Student.findByIdAndUpdate(
            id,
            {
                name: req.body.name,
                attendance: req.body.attendance,
                studyHours: req.body.studyHours,
                assignmentScore: req.body.assignmentScore,
                previousGrade: req.body.previousGrade,
            },
            { new: true, runValidators: true }
        );

        if (!updated) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Delete Student
export const deleteStudent = async (req, res) => {

    try {
        const { id } = req.params;

        const deleted = await Student.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json({ message: "Student deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
