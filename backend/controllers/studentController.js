import Student from "../models/Student.js";

// Helper: run prediction and return { predictedGrade, performanceLevel, recommendations }
const runPrediction = ({ attendance, studyHours, assignmentScore, previousGrade }) => {
  const predictedGrade =
    (attendance + studyHours * 5 + assignmentScore + previousGrade) / 4;

  let performanceLevel = "Average";
  if (predictedGrade >= 80) {
    performanceLevel = "Excellent";
  } else if (predictedGrade < 50) {
    performanceLevel = "Needs Support";
  }

  // Generate improvement recommendations
  const recommendations = [];
  if (attendance < 75) {
    recommendations.push(`⚠️ Attendance is low (${attendance}%). Aim for at least 75% — attend more classes regularly.`);
  }
  if (studyHours < 4) {
    recommendations.push(`📚 Study hours are low (${studyHours}h). Try to study at least 4 hours daily to improve understanding.`);
  }
  if (assignmentScore < 60) {
    recommendations.push(`📝 Assignment score (${assignmentScore}%) needs improvement. Review topics and practice more problems.`);
  }
  if (previousGrade < 60) {
    recommendations.push(`📖 Your previous grade (${previousGrade}%) indicates weak fundamentals. Consider revisiting core concepts.`);
  }
  if (predictedGrade >= 80 && recommendations.length === 0) {
    recommendations.push("🌟 Excellent performance! Keep up the good work and maintain your study routine.");
  }
  if (predictedGrade >= 60 && predictedGrade < 80 && recommendations.length === 0) {
    recommendations.push("📈 You're on the right track! Increase study hours slightly and stay consistent for better results.");
  }
  if (recommendations.length === 0) {
    recommendations.push("💪 Keep pushing! Focus on weak areas and practice regularly to boost your grade.");
  }

  return {
    predictedGrade: Math.round(predictedGrade * 100) / 100,
    performanceLevel,
    recommendations,
  };
};

// Add Student (with auto-prediction)
export const createStudent = async (req, res) => {
  try {
    const { attendance, studyHours, assignmentScore, previousGrade } = req.body;

    const prediction = runPrediction({
      attendance,
      studyHours,
      assignmentScore,
      previousGrade: previousGrade ?? assignmentScore,
    });

    const student = await Student.create({
      ...req.body,
      predictedGrade: prediction.predictedGrade,
      performanceLevel: prediction.performanceLevel,
      recommendations: prediction.recommendations,
    });

    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// Get All Students (latest first)
export const getStudents = async (req, res) => {

    try {

        const students = await Student.find().sort({ createdAt: -1 });

        res.json(students);

    } catch(error) {

        res.status(500).json({
            message:error.message
        });

    }

};


// Update Student (with re-prediction)
export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { attendance, studyHours, assignmentScore, previousGrade } = req.body;

    const prediction = runPrediction({
      attendance,
      studyHours,
      assignmentScore,
      previousGrade: previousGrade ?? assignmentScore,
    });

    const updated = await Student.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        attendance,
        studyHours,
        assignmentScore,
        previousGrade,
        predictedGrade: prediction.predictedGrade,
        performanceLevel: prediction.performanceLevel,
        recommendations: prediction.recommendations,
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

