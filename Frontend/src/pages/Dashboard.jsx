import { useEffect, useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import StudentPredictPopup from "../components/StudentPredictPopup";
import { fetchStudents, batchPredictAll } from "../services/api";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [predictionStudent, setPredictionStudent] = useState(null);

  const openPredictionPopup = (student) => {
    setPredictionStudent({
      id: student.id,
      name: student.name,
      attendance: String(student.attendance ?? ""),
      studyHours: String(student.studyHours ?? ""),
      grade: String(student.assignmentScore ?? ""),
      predictedGrade: String(student.predictedGrade ?? ""),
      performanceLevel: student.performanceLevel ?? "Average",
      recommendations: student.recommendations ?? [],
    });
  };

  const closePredictionPopup = () => setPredictionStudent(null);

  useEffect(() => {
    const loadStudents = async () => {
      try {
        await batchPredictAll();
      } catch {
        // ignore
      }

      try {
        const res = await fetchStudents();
        setStudents(
          (res.data ?? []).map((s) => ({
            id: s._id ?? s.id,
            name: s.name,
            attendance: s.attendance ?? 0,
            studyHours: s.studyHours ?? 0,
            assignmentScore: s.assignmentScore ?? 0,
            predictedGrade: s.predictedGrade,
            performanceLevel: s.performanceLevel,
            recommendations: s.recommendations ?? [],
            createdAt: s.createdAt,
          })),
        );
      } catch (e) {
        console.error("Failed to load students", e);
      }
    };

    loadStudents();
  }, []);

  const totalStudents = students.length;
  const totalPredictions = students.filter((s) => s.predictedGrade != null).length;
  const avgGrade =
    totalPredictions > 0
      ? Math.round(
          students
            .filter((s) => s.predictedGrade != null)
            .reduce((sum, s) => sum + s.predictedGrade, 0) / totalPredictions,
        )
      : 0;
  const atRiskStudents = students.filter(
    (s) => s.performanceLevel === "Needs Support",
  ).length;

  const latestStudents = students.slice(0, 3);

  const getStatusColor = (level) => {
    switch (level) {
      case "Excellent":
        return "text-green-600";
      case "Average":
        return "text-yellow-600";
      case "Needs Support":
        return "text-red-500";
      default:
        return "text-slate-400";
    }
  };

  const getStatusText = (level) => {
    switch (level) {
      case "Excellent":
        return "Good";
      case "Average":
        return "Average";
      case "Needs Support":
        return "Needs Support";
      default:
        return "No prediction";
    }
  };

  const getGradeLetter = (score) => {
    if (score == null) return "\u2014";
    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 50) return "D";
    return "F";
  };

  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-3 rounded-3xl bg-white/85 px-6 py-4 shadow-xl shadow-slate-200/60 backdrop-blur lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Overview
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Monitor student performance and AI predictions.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button text="View Students" to="/students" variant="secondary" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <h3 className="text-slate-500">Total Students</h3>
          <p className="mt-3 text-3xl font-bold text-indigo-600">{totalStudents}</p>
        </Card>
        <Card>
          <h3 className="text-slate-500">Predictions</h3>
          <p className="mt-3 text-3xl font-bold text-indigo-600">{totalPredictions}</p>
        </Card>
        <Card>
          <h3 className="text-slate-500">Average Grade</h3>
          <p className="mt-3 text-3xl font-bold text-indigo-600">
            {avgGrade > 0 ? `${avgGrade}%` : "\u2014"}
          </p>
        </Card>
        <Card>
          <h3 className="text-slate-500">At Risk Students</h3>
          <p className="mt-3 text-3xl font-bold text-red-500">{atRiskStudents}</p>
        </Card>
      </div>

      <Card className="p-0">
        <div className="border-b border-slate-100 px-6 py-5">
          <h2 className="text-xl font-bold text-slate-900">Recent Students</h2>
          <p className="mt-1 text-sm text-slate-500">
            Latest 3 student records and their prediction status.
          </p>
        </div>
        <div className="overflow-x-auto px-6 py-5">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 text-slate-500">
                <th className="py-3">Name</th>
                <th>Attendance</th>
                <th>Grade</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {latestStudents.length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-slate-400">
                    No students yet. Add students from the Students page.
                  </td>
                </tr>
              ) : (
                latestStudents.map((student) => (
                  <tr
                    key={student.id}
                    className="border-b border-slate-100 cursor-pointer transition hover:bg-slate-50"
                    onClick={() => openPredictionPopup(student)}
                  >
                    <td className="py-4 font-medium text-indigo-600 underline-offset-2 hover:underline">
                      {student.name}
                    </td>
                    <td>{student.attendance}%</td>
                    <td>{getGradeLetter(student.predictedGrade)}</td>
                    <td className={getStatusColor(student.performanceLevel)}>
                      {getStatusText(student.performanceLevel)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>

      {predictionStudent && (
        <StudentPredictPopup
          student={predictionStudent}
          onClose={closePredictionPopup}
        />
      )}
    </div>
  );
};

export default Dashboard;
