const courseList = [
    {
      code: "ACIT 1420",
      name: "Introduction to Systems Administration"
    },
    {
        code: "ACIT 1620",
        name: "Fundamental Web Technologies"
    },
    {
        code: "ACIT 1630",
        name: "Database System"
    }
  ];

let user = prompt("Please enter the 4-digit number of course code: ");
while (isNaN(user) || user.length !== 4 ) {
    user = prompt("Invalid input, Please enter the 4-digit number of course code: ");
}

let courseFound = false;

for(let course of courseList){
    if(course["code"].includes(user)){
        console.log(`Yes I am taking the course: ${course["code"]} - ${course["name"]}`)
        courseFound = true;
        break;
    } 
}

if (!courseFound) {
  const newCourse = {code: user, name: null };
  courseList.push(newCourse);
  console.log("Updated course list:");
  console.log(courseList);
}