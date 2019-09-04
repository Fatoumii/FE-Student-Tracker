import axios from "axios";

export const getStudent = async () => {
  const student = await axios.get(
    "https://nc-student-tracker.herokuapp.com/api/students"
  );
  return student.data.students;
};
