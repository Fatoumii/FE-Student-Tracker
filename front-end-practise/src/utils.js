import axios from "axios";

export const getStudent = async block => {
  const student = await axios.get(
    "https://nc-student-tracker.herokuapp.com/api/students",
    { params: block }
  );
  return student.data.students;
};

export const getBlocks = async () => {
  const blocks = await axios.get(
    "https://nc-student-tracker.herokuapp.com/api/blocks"
  );
  return blocks.data.blocks.map(block => block.name);
};
