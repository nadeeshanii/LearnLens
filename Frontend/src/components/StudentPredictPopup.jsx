const StudentPredictPopup = ({ student, onClose }) => {
  if (!student) return null;

  const gradeNum = Number(student.grade);
  const predictedGrade = Number(student.predictedGrade);
  const performanceLevel = student.performanceLevel || "Average";

  const getGradeBadge = (val) => {
    if (val >= 80) return { emoji: "✅", color: "text-emerald-700 bg-emerald-50", label: "Excellent" };
    if (val >= 65) return { emoji: "🟡", color: "text-yellow-700 bg-yellow-50", label: "Average" };
    return { emoji: "❌", color: "text-rose-700 bg-rose-50", label: "Needs Support" };
  };

  const predictedBadge = getGradeBadge(predictedGrade);

  const levelColorMap = {
    Excellent: "text-emerald-700 bg-emerald-100",
    Average: "text-yellow-700 bg-yellow-100",
    "Needs Support": "text-rose-700 bg-rose-100",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 py-6 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl shadow-slate-950/30 animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-200"
        >
          Close
        </button>

        {/* Header */}
        <div className="mb-5 pr-20">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
            Student Prediction
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">{student.name}</h2>
        </div>

        {/* Summary Grid */}
        <div className="mb-6 grid grid-cols-2 gap-4 rounded-2xl bg-slate-50 p-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Attendance</p>
            <p className="mt-1 text-lg font-bold text-slate-900">{student.attendance}%</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Study Hours</p>
            <p className="mt-1 text-lg font-bold text-slate-900">{student.studyHours} hrs</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Assignment Score</p>
            <p className="mt-1 text-lg font-bold text-slate-900">{student.grade}%</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Current Grade</p>
            <p className="mt-1 text-lg font-bold text-slate-900">{student.grade}%</p>
          </div>
        </div>

        {/* Predicted Grade */}
        <div className="mb-5 rounded-2xl border border-slate-200 p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">Predicted Grade</p>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${levelColorMap[performanceLevel] || "bg-slate-100 text-slate-700"}`}
            >
              {performanceLevel}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-4xl font-bold text-slate-900">{predictedGrade}%</span>
            <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-lg ${predictedBadge.color}`}>
              {predictedBadge.emoji}
            </span>
          </div>
        </div>

        {/* Performance Trend */}
        <div className="mb-5 flex items-center gap-2 rounded-2xl bg-indigo-50 p-3">
          <span className="text-lg">📊</span>
          <p className="text-sm font-medium text-indigo-800">
            {predictedGrade > gradeNum
              ? `Upward trend — predicted grade is ${(predictedGrade - gradeNum).toFixed(1)}% higher than current.`
              : predictedGrade < gradeNum
                ? `Downward trend — predicted grade is ${(gradeNum - predictedGrade).toFixed(1)}% lower than current.`
                : `Stable — predicted grade matches current grade.`}
          </p>
        </div>

        {/* Recommendations / Tips */}
        <div className="rounded-2xl bg-amber-50 p-4">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-lg">💡</span>
            <p className="text-sm font-bold uppercase tracking-wide text-amber-800">
              Tips to Improve
            </p>
          </div>
          {student.recommendations && student.recommendations.length > 0 ? (
            <ul className="space-y-2">
              {student.recommendations.map((rec, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-amber-900">
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-amber-700">No specific recommendations available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentPredictPopup;

