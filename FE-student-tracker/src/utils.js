import axios from "axios";

export const getStudent = async blocks => {
  const student = await axios.get(
    "https://nc-student-tracker.herokuapp.com/api/students",
    { params: { blocks } }
  );
  return student.data.students;
};

export const getBlocks = async () => {
  const blocks = await axios.get(
    "https://nc-student-tracker.herokuapp.com/api/blocks"
  );
  return blocks.data;
};

export const getStudentById = async id => {
  const { data } = await axios.get(
    `https://nc-student-tracker.herokuapp.com/api/students/${id}`
  );
  return data.student;
};

export const deleteStudent = async id => {
  const { data } = await axios.delete(
    `https://nc-student-tracker.herokuapp.com/api/students/${id}`
  );
  return data.student;
};
