



export const data = [
  {
    id: "1",
    Task: "mailer",
    Due_Date: "25-May-2020"
  },
  {
    id: "2",
    Task: "button set ",
    Due_Date: "26-May-2020"
  },
  {
    id: "3",
    Task: "backend flow ",
    Due_Date: "27-May-2020"
  },
  {
    id: "4",
    Task: "frontend issues",
    Due_Date: "23-Aug-2020"
  },
  {
    id: "5",
    Task: "Api resolve",
    Due_Date: "05-Jan-2021"
  }
];

export const columnsFromBackend = {
  ["To-do"]: {
    title: "To-do",
    items: data
  },
  ["In progress"]: {
    title: "In Progress",
    items: []
  },
  ["Done"]: {
    title: "Done",
    items: []
  }
};
