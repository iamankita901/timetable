// src/data/mockData.js

export const universities = [
  { id: 1, name: "ABC University", programs: 5, streams: 12, sections: 20, students: 1200 },
  { id: 2, name: "XYZ University", programs: 3, streams: 8, sections: 15, students: 900 },
];

export const programs = [
  { id: 1, name: "B.Tech", years: 4, universityId: 1 },
  { id: 2, name: "MBA", years: 2, universityId: 1 },
  { id: 3, name: "BCA", years: 3, universityId: 2 },
];

export const streams = [
  { id: 1, name: "Computer Science", programId: 1 },
  { id: 2, name: "Mechanical", programId: 1 },
  { id: 3, name: "Finance", programId: 2 },
];

export const sections = [
  { id: 1, name: "CS-A", streamId: 1, students: 60 },
  { id: 2, name: "CS-B", streamId: 1, students: 55 },
  { id: 3, name: "ME-A", streamId: 2, students: 50 },
];

export const subjects = [
  { id: 1, name: "Data Structures", type: "Theory", sectionId: 1, hours: 4 },
  { id: 2, name: "DBMS Lab", type: "Lab", sectionId: 1, hours: 3 },
  { id: 3, name: "Thermodynamics", type: "Theory", sectionId: 3, hours: 5 },
];

export const professors = [
  { id: 1, name: "Dr. Smith", subjects: ["Data Structures"], universityId: 1 },
  { id: 2, name: "Dr. Lee", subjects: ["DBMS Lab"], universityId: 1 },
];
export const classes = [
  { id: 1, subjectId: 1, sectionId: 1, type: "Theory", hours: 4 },
  { id: 2, subjectId: 2, sectionId: 1, type: "Lab", hours: 3 },
  { id: 3, subjectId: 3, sectionId: 3, type: "Theory", hours: 5 },
];

export const labs = [
  { id: 1, name: "DBMS Lab", sectionId: 1, capacity: 30, hours: 3 },
  { id: 2, name: "Physics Lab", sectionId: 2, capacity: 25, hours: 3 },
];
