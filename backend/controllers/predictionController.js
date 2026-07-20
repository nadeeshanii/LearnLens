import Student from "../models/Student.js";

export const predictStudent = async (req, res) => {
  const { attendance, studyHours, assignmentScore, previousGrade } = req.body;

  // temporary prediction
  const prediction =
    (attendance + studyHours * 5 + assignmentScore + previousGrade) / 4;

  let level = "Average";
  if (prediction >= 80) {
    level = "Excellent";
  } else if (prediction < 50) {
    level = "Needs Support";
  }

  res.json({
    predictedGrade: Number(prediction.toFixed(2)),
    performanceLevel: level,
  });
};

// Batch predict all students that have no prediction yet
export const batchPredictAll = async (req, res) => {
  try {
    const students = await Student.find({ predictedGrade: null });

    const updates = students.map(async (student) => {
      const attendance = student.attendance || 0;
      const studyHours = student.studyHours || 0;
      const assignmentScore = student.assignmentScore || 0;
      const previousGrade = student.previousGrade ?? assignmentScore;

      const predictedGrade =
        (attendance + studyHours * 5 + assignmentScore + previousGrade) / 4;

      let performanceLevel = "Average";
      if (predictedGrade >= 80) {
        performanceLevel = "Excellent";
      } else if (predictedGrade < 50) {
        performanceLevel = "Needs Support";
      }

      // Generate recommendations
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

      await Student.findByIdAndUpdate(student._id, {
        predictedGrade: Math.round(predictedGrade * 100) / 100,
        performanceLevel,
        recommendations,
      });
    });

    await Promise.all(updates);

    res.json({
      message: `Predictions completed for ${updates.length} students`,
      count: updates.length,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
