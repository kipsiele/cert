import { useState } from "react";

interface Props {
  onGenerate: (data: {
    studentName: string;
    courseTitle: string;
  }) => void;
}

export default function AdminForm({ onGenerate }: Props) {
  const [studentName, setStudentName] = useState("");
  const [courseTitle, setCourseTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate({ studentName, courseTitle });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white shadow-md rounded-xl w-full max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold text-center mb-2">Create Certificate</h2>

      <input
        type="text"
        placeholder="Student Name"
        className="w-full border p-3 rounded-lg"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Course Title"
        className="w-full border p-3 rounded-lg"
        value={courseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
      >
        Generate Certificate
      </button>
    </form>
  );
}
