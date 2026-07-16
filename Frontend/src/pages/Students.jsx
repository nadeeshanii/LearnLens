import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import {
  createStudent,
  deleteStudent,
  fetchStudents,
  updateStudent,
} from "../services/api";


const emptyStudent = {
  name: "",
  attendance: "",
  studyHours: "",
  grade: "",
};

const Students = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const loadStudents = async () => {
      try {
        const res = await fetchStudents();
        // backend returns Mongo docs with _id; map to id
        setStudents(
          (res.data ?? []).map((s) => ({
            id: s._id ?? s.id,
            name: s.name,
            attendance: String(s.attendance ?? ""),
            studyHours: String(s.studyHours ?? ""),
            grade: String(s.assignmentScore ?? s.grade ?? ""),
          })),
        );
      } catch (e) {
        // fallback: keep empty list
        console.error("Failed to load students", e);
      }
    };

    loadStudents();
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(emptyStudent);

  const editingStudent = useMemo(
    () => students.find((student) => student.id === editingId) ?? null,
    [editingId, students],
  );

  const openAddModal = () => {
    setEditingId(null);
    setFormData(emptyStudent);
    setIsModalOpen(true);
  };

  const openEditModal = (student) => {
    setEditingId(student.id);
    setFormData({
      name: student.name,
      attendance: student.attendance,
      studyHours: student.studyHours,
      grade: student.grade,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setFormData(emptyStudent);
  };

  const handleSaveStudent = async (event, action = "save") => {
    event.preventDefault();

    const name = formData.name.trim();
    const attendance = Number(formData.attendance);
    const studyHours = Number(formData.studyHours);
    const assignmentScore = Number(formData.grade);

    if (!name) return;

    const payload = {
      name,
      attendance,
      studyHours,
      assignmentScore,
      previousGrade: assignmentScore,
    };

    try {
      if (editingStudent) {
        const res = await updateStudent(editingStudent.id, payload);
        setStudents((cur) =>
          cur.map((s) => (s.id === editingStudent.id ? mapStudent(res.data) : s)),
        );

        if (action === "predict") {
          navigate("/prediction", { state: { student: { ...mapStudent(res.data) } } });
        }
      } else {
        const res = await createStudent(payload);
        const created = mapStudent(res.data);
        setStudents((cur) => [...cur, created]);

        if (action === "predict") {
          navigate("/prediction", { state: { student: created } });
        }
      }
    } catch (e) {
      console.error("Save failed", e);
      return;
    } finally {
      closeModal();
    }
  };

  const mapStudent = (doc) => ({
    id: doc._id ?? doc.id,
    name: doc.name,
    attendance: String(doc.attendance ?? ""),
    studyHours: String(doc.studyHours ?? ""),
    grade: String(doc.assignmentScore ?? doc.grade ?? ""),
  });

  const handleDeleteStudent = async (studentId) => {
    try {
      await deleteStudent(studentId);
      setStudents((cur) => cur.filter((s) => s.id !== studentId));
    } catch (e) {
      console.error("Delete failed", e);
    }
  };

  const handlePredictStudent = (student) => {
    navigate("/prediction", { state: { student } });
  };

  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-4 rounded-3xl bg-white/85 p-6 shadow-xl shadow-slate-200/60 backdrop-blur lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
            Student records
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Students
          </h1>
          <p className="mt-2 text-slate-500">
            Manage student information, edit records, and predict by student.
          </p>
        </div>
        <Button text="+ Add Student" onClick={openAddModal} />
      </div>

      <Card className="p-0">
        <div className="border-b border-slate-100 px-6 py-5">
          <h2 className="text-xl font-bold text-slate-900">Student table</h2>
          <p className="mt-1 text-sm text-slate-500">
            Use Predict to open the prediction page for a specific student.
          </p>
        </div>

        <div className="overflow-x-auto px-6 py-5">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 text-slate-500">
                <th className="py-3">Name</th>
                <th>Attendance</th>
                <th>Study Hours</th>
                <th>Previous Grade</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-b border-slate-100">
                  <td className="py-4 font-medium text-slate-900">{student.name}</td>
                  <td>{student.attendance}%</td>
                  <td>{student.studyHours} hrs</td>
                  <td className="whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full text-base">
                        {Number(student.grade) >= 80 ? (
                          <span className="bg-emerald-50 text-emerald-700">✅</span>
                        ) : Number(student.grade) >= 65 ? (
                          <span className="bg-yellow-50 text-yellow-700">🟡</span>
                        ) : (
                          <span className="bg-rose-50 text-rose-700">❌</span>
                        )}
                      </span>
                      <span>{student.grade}%</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        text="Predict"
                        onClick={() => handlePredictStudent(student)}
                        variant="secondary"
                        className="px-4 py-2"
                      />
                      <Button
                        text="Edit"
                        onClick={() => openEditModal(student)}
                        variant="secondary"
                        className="px-4 py-2"
                      />
                      <Button
                        text="Delete"
                        onClick={() => handleDeleteStudent(student.id)}
                        variant="danger"
                        className="px-4 py-2"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {isModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 py-6 backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-3xl bg-white p-6 shadow-2xl shadow-slate-950/30">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
                  {editingStudent ? "Edit student" : "Add student"}
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  {editingStudent ? "Update student details" : "Create a new student record"}
                </h2>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-full bg-slate-100 px-3 py-2 text-slate-600 transition hover:bg-slate-200"
              >
                Close
              </button>
            </div>

            <form className="grid gap-4" onSubmit={(event) => handleSaveStudent(event, "save")}>
              <div className="grid gap-4 sm:grid-cols-2">

                <div className="grid gap-4">
                  <div>
                    <p className="mb-1 text-sm font-medium text-slate-600">Student name</p>
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-medium text-slate-600">Attendance</p>
                    <p className="text-xs text-slate-500">( % )</p>
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-medium text-slate-600">Study hours</p>
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-medium text-slate-600">Assignment score</p>
                    <p className="text-xs text-slate-500">( % )</p>
                  </div>
                </div>

                <div className="grid gap-4">
                  <input
                    type="text"
                    placeholder="Student name"
                    value={formData.name}
                    onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                  />

                  <input
                    type="number"
                    placeholder="Attendance - 96"
                    value={formData.attendance}
                    onChange={(event) => setFormData({ ...formData, attendance: event.target.value })}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                  />

                  <input
                    type="number"
                    placeholder="Study hour - 6"
                    value={formData.studyHours}
                    onChange={(event) => setFormData({ ...formData, studyHours: event.target.value })}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                  />

                  <input
                    type="number"
                    placeholder="Assignment score - 92"
                    value={formData.grade}
                    onChange={(event) => setFormData({ ...formData, grade: event.target.value })}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <input
                  type="number"
                  placeholder="Attendance %"
                  value={formData.attendance}
                  onChange={(event) => setFormData({ ...formData, attendance: event.target.value })}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                />
                <input
                  type="number"
                  placeholder="Study hours"
                  value={formData.studyHours}
                  onChange={(event) => setFormData({ ...formData, studyHours: event.target.value })}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                />
                <input
                  type="number"
                  placeholder="Grade %"
                  value={formData.grade}
                  onChange={(event) => setFormData({ ...formData, grade: event.target.value })}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                />
              </div>

              <div className="flex flex-wrap justify-end gap-3 pt-2">
                <Button text="Cancel" onClick={closeModal} variant="secondary" />
                <Button
                  text={editingStudent ? "Save & Predict" : "Add & Predict"}
                  onClick={(event) => handleSaveStudent(event, "predict")}
                  variant="secondary"
                />
                <Button text={editingStudent ? "Save Changes" : "Add Student"} type="submit" />
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Students;
