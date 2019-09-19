import axios from "axios";

export const getStudent = async blocks => {
  const { data } = await axios.get(
    "https://nc-student-tracker.herokuapp.com/api/students",
    { params: { blocks } }
  );
  return data.students;
};

export const getBlocks = async () => {
  const { data } = await axios.get(
    "https://nc-student-tracker.herokuapp.com/api/blocks"
  );
  return data;
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
export const addStudent = async (name, startingCohort) => {
  const { data } = await axios.post(
    "https://nc-student-tracker.herokuapp.com/api/students",
    {
      name: name,
      startingCohort: startingCohort
    }
  );
  return data.students;
};
export const updateStudentProgress = async id => {
  const { data } = await axios.patch(
    `https://nc-student-tracker.herokuapp.com/api/students/${id}?progress=true`
  );
  return data.student;
};
