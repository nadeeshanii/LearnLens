import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";

const emptyStudent = {
  name: "",
  attendance: "",
  studyHours: "",
  grade: "",
};

const Students = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Kasun Perera",
      attendance: "90",
      studyHours: "5",
      grade: "85",
    },
    {
      id: 2,
      name: "Nimal Silva",
      attendance: "65",
      studyHours: "2",
      grade: "55",
    },
    {
      id: 3,
      name: "Amali Fernando",
      attendance: "95",
      studyHours: "6",
      grade: "92",
    },
  ]);
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

  const handleSaveStudent = (event, action = "save") => {
    event.preventDefault();

    if (!formData.name.trim()) {
      return;
    }

    const normalizedStudent = {
      name: formData.name.trim(),
      attendance: formData.attendance,
      studyHours: formData.studyHours,
      grade: formData.grade,
    };

    let savedStudent;

    if (editingStudent) {
      savedStudent = {
        ...editingStudent,
        ...normalizedStudent,
      };

      setStudents((currentStudents) =>
        currentStudents.map((student) =>
          student.id === editingStudent.id ? savedStudent : student,
        ),
      );
    } else {
      savedStudent = {
        id: Date.now(),
        ...normalizedStudent,
      };

      setStudents((currentStudents) => [
        ...currentStudents,
        savedStudent,
      ]);
    }

    closeModal();

    if (action === "predict") {
      navigate("/prediction", { state: { student: savedStudent } });
    }
  };

  const handleDeleteStudent = (studentId) => {
    setStudents((currentStudents) =>
      currentStudents.filter((student) => student.id !== studentId),
    );
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
                  <td>{student.grade}%</td>
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
              <input
                type="text"
                placeholder="Student name"
                value={formData.name}
                onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
              />

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
