const students = [
    {
      id: 1,
      name: "layan",
      age: 20,
      grade: 90,
    },
    {
      id: 2,
      name: "raghad",
      age: 21,
      grade: 80,
    },
    {
      id: 3,
      name: "saja",
      age: 23,
      grade: 85,
    },
    {
      id: 4,
      name: "dana",
      age: 20,
      grade: 95,
    }
  ];

  const tableBody = document.querySelector(" tbody");


students.forEach(students => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${student.name}</td>
    <td>${student.age}</td>
    <td>${student.grade}</td>
  `;

  tableBody.appendChild(row);});