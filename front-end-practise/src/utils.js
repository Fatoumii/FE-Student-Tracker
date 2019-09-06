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
  return blocks.data.blocks.map(block => block.name);
};

export const getStudentById = async _id => {
  const { data } = await axios.get(
    `https://nc-student-tracker.herokuapp.com/api/students/${_id}`
  );
  return data.student;
};
