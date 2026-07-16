import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import { predictStudent } from "../services/api";

const Prediction = () => {
  const location = useLocation();
  const selectedStudent = location.state?.student ?? null;
  const [result, setResult] = useState(null);
  const [formData, setFormData] = useState({
    attendance: "",
    studyHours: "",
    assignmentScore: "",
    previousGrade: "",
  });

  useEffect(() => {
    if (!selectedStudent) {
      return;
    }

    setFormData({
      attendance: selectedStudent.attendance,
      studyHours: selectedStudent.studyHours,
      assignmentScore: selectedStudent.grade,
      previousGrade: selectedStudent.grade,
    });
  }, [selectedStudent]);

  if (!selectedStudent) {
    return (
      <div className="grid gap-6">
        <Card>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
            Student required
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Select a student before prediction
          </h1>
          <p className="mt-3 text-slate-600">
            Open prediction from the students page so we know exactly whose grade is being predicted.
          </p>
          <div className="mt-6">
            <Button text="Go to Students" to="/students" variant="secondary" />
          </div>
        </Card>
      </div>
    );
  }

  const handlePrediction = async () => {
    try {
      const response = await predictStudent({
        attendance: Number(formData.attendance || 0),
        studyHours: Number(formData.studyHours || 0),
        assignmentScore: Number(formData.assignmentScore || 0),
        previousGrade: Number(formData.previousGrade || 0),
      });

      const performanceLevel = response.data.performanceLevel;
      const recommendation =
        performanceLevel === "Excellent"
          ? "Student is performing well. Keep the current learning path and revisit weekly."
          : performanceLevel === "Average"
            ? "Student is doing well, but regular progress checks will improve consistency."
            : "Student needs support. Focus on attendance, guided practice, and quick interventions.";

      setResult({
        grade: `${response.data.predictedGrade}%`,
        level: performanceLevel,
        confidence:
          performanceLevel === "Excellent"
            ? "90%+"
            : performanceLevel === "Average"
              ? "80%+"
              : "70%+",
        recommendation,
      });
    } catch (error) {
      console.error("Prediction failed", error);
    }
  };

  return (
    <div className="grid gap-6">
      <div className="rounded-3xl bg-white/85 p-6 shadow-xl shadow-slate-200/60 backdrop-blur">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
          Predictive model
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          Student Performance Prediction
        </h1>
        <p className="mt-2 text-slate-500">
          Enter student details to predict future performance using AI.
        </p>
        {selectedStudent ? (
          <div className="mt-4 inline-flex rounded-2xl bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
            Predicting for: {selectedStudent.name}
          </div>
        ) : null}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <h2 className="mb-5 text-xl font-bold text-slate-900">
            Student Information
          </h2>

          <div className="mb-5 rounded-2xl border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm text-indigo-700">
            Loaded student data from the students page. You can adjust it before predicting.
          </div>

          <div className="space-y-4">
            <input
              type="number"
              placeholder="Attendance (%)"
              value={formData.attendance}
              onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
            />

            <input
              type="number"
              placeholder="Study Hours"
              value={formData.studyHours}
              onChange={(e) => setFormData({ ...formData, studyHours: e.target.value })}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
            />

            <input
              type="number"
              placeholder="Assignment Score"
              value={formData.assignmentScore}
              onChange={(e) => setFormData({ ...formData, assignmentScore: e.target.value })}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
            />

            <input
              type="number"
              placeholder="Previous Grade"
              value={formData.previousGrade}
              onChange={(e) => setFormData({ ...formData, previousGrade: e.target.value })}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
            />

            <Button onClick={handlePrediction} text="Predict Performance" className="w-full" />
          </div>
        </Card>

        <Card>
          <h2 className="mb-5 text-xl font-bold text-slate-900">
            Prediction Result
          </h2>

          {result ? (
            <div className="space-y-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="grid grid-cols-2 items-center gap-4">
                  <div>
                    <p className="text-slate-500">Predicted Grade</p>
                    <p className="text-3xl font-bold text-indigo-600">{result.grade}</p>
                  </div>

                  <div className="flex items-center justify-end gap-3">
                    {result.level === "Excellent" ? (
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-2xl">✅</span>
                    ) : result.level === "Average" ? (
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-yellow-50 text-2xl">🟡</span>
                    ) : (
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 text-2xl">❌</span>
                    )}

                    <div className="text-right">
                      <p className="text-slate-500">Performance Level</p>
                      <p
                        className={
                          result.level === "Excellent"
                            ? "font-semibold text-emerald-700"
                            : result.level === "Average"
                              ? "font-semibold text-yellow-700"
                              : "font-semibold text-rose-700"
                        }
                      >
                        {result.level}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-slate-500">Confidence</p>
                <p className="font-semibold text-slate-900">{result.confidence}</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-slate-500">Recommendation</p>
                <p className="text-slate-700">{result.recommendation}</p>
              </div>
            </div>
          ) : (
            <p className="text-slate-500">
              Enter student details and click predict to see results.
            </p>
          )}

          <div className="mt-6">
            <Link to="/students" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
              Back to students
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Prediction;
