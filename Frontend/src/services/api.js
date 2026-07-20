import axios from "axios";

const api = axios.create({
	baseURL: "/api",
});

export const fetchStudents = () => api.get("/students");

export const createStudent = (payload) => api.post("/students", payload);

export const updateStudent = (studentId, payload) =>
	api.put(`/students/${studentId}`, payload);

export const deleteStudent = (studentId) => api.delete(`/students/${studentId}`);

export const predictStudent = (payload) => api.post("/predict", payload);
export const batchPredictAll = () => api.post("/predict/batch");

export default api;
