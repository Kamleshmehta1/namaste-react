//Write a function called sumHoursByRole that takes the projects array as an argument and returns an object. The object should contain roles as keys and the sum of hoursAllocated for each role across all projects as values.

// Input:
const projects = [
  {
    projectName: 'Alpha',
    projectID: 'A01',
    team: [
      { name: 'Alice', role: 'Developer', hoursAllocated: 35 },
      { name: 'Bob', role: 'Designer', hoursAllocated: 20 },
    ],
  },
  {
    projectName: 'Beta',
    projectID: 'B01',
    team: [
      { name: 'Charlie', role: 'Developer', hoursAllocated: 40 },
      { name: 'David', role: 'Designer', hoursAllocated: 15 },
      { name: 'Eve', role: 'QA', hoursAllocated: 25 },
    ],
  },
];

const output = projects.reduce((main, ele) => {
  return ele?.team?.reduce((acc, item) => {
    const newObj = { ...main, ...acc };
    if (newObj[item?.role]) {
      newObj[item?.role] = newObj[item?.role] + item?.hoursAllocated;
    } else {
      newObj[item?.role] = item?.hoursAllocated;
    }
    return newObj;
  }, {});
}, {});

console.log(output);

// Output:

// {
//     Developer: 75,  // Total hours from Alice and Charlie
//     Designer: 35,   // Total hours from Bob and David
//     QA: 25          // Total hours from Eve
// }

function compareDates(d1, d2) {
  const date1 = new Date(d1);
  const date2 = new Date(d2);

  if (date1 > date2) {
    console.log('date1 bigger');
  } else {
    console.log('date2 bigger');
  }
}

compareDates('06/21/2022', '07/28/2021');
