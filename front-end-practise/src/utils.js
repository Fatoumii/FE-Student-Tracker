import axios from "axios";

export const getStudent = async () => {
  const student = await axios.get(
    "https://nc-student-tracker.herokuapp.com/api/students"
  );
  return student.data.students;
};

export const getBlocks = async () => {
  const blocks = await axios.get(
    "https://nc-student-tracker.herokuapp.com/api/blocks"
  );
  return blocks.data.blocks.map(block => block.name);
};
