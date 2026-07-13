import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";

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

  const handlePrediction = () => {
    const attendance = Number(formData.attendance || 0);
    const studyHours = Number(formData.studyHours || 0);
    const assignmentScore = Number(formData.assignmentScore || 0);
    const previousGrade = Number(formData.previousGrade || 0);

    const score = Math.round(
      attendance * 0.28 + studyHours * 6 + assignmentScore * 0.22 + previousGrade * 0.28,
    );
    const grade = Math.max(35, Math.min(98, score));
    const level =
      grade >= 80
        ? "Excellent Performance"
        : grade >= 65
          ? "Good Performance"
          : "Needs Support";
    const confidence = `${Math.min(99, Math.max(72, grade + 12))}%`;
    const recommendation =
      grade >= 80
        ? "Student is performing well. Keep the current learning path and revisit weekly."
        : grade >= 65
          ? "Student is doing well, but regular progress checks will improve consistency."
          : "Student needs support. Focus on attendance, guided practice, and quick interventions.";

    setResult({
      grade: `${grade}%`,
      level,
      confidence,
      recommendation,
    });
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
                <p className="text-slate-500">Predicted Grade</p>
                <p className="text-3xl font-bold text-indigo-600">{result.grade}</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-slate-500">Performance Level</p>
                <p className="font-semibold text-emerald-600">{result.level}</p>
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
