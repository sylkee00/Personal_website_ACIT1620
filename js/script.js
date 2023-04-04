// const courseList = [
//     {
//       code: "ACIT 1420",
//       name: "Introduction to Systems Administration"
//     },
//     {
//         code: "ACIT 1620",
//         name: "Fundamental Web Technologies"
//     },
//     {
//         code: "ACIT 1630",
//         name: "Database System"
//     }
//   ];

// let user = prompt("Please enter the 4-digit number of course code: ");
// while (isNaN(user) || user.length !== 4 ) {
//     user = prompt("Invalid input, Please enter the 4-digit number of course code: ");
// }

// let courseFound = false;

// for(let course of courseList){
//     if(course["code"].includes(user)){
//         console.log(`Yes I am taking the course: ${course["code"]} - ${course["name"]}`)
//         courseFound = true;
//         break;
//     } 
// }

// if (!courseFound) {
//   const newCourse = {code: user, name: null };
//   courseList.push(newCourse);
//   console.log("Updated course list:");
//   console.log(courseList);
// }


function createCourseArray() {
  let courseArray = [];
  let courseListItems = document.querySelectorAll('.courseList li');
  
  for (let listItem of courseListItems) {
      let courseName = listItem.querySelector('a').textContent;
      let courseDate = listItem.querySelector('.semester').textContent;
      let courseCode;
      if (courseName.match(/([A-Z]{4} \d{4})/)) {
        courseCode = courseName.match(/([A-Z]{4} \d{4})/)[1];
      } else {
        courseCode = courseName;
      }
      let courseObj;
      if(courseName.length == 4) {
          courseObj = { code: courseCode, date: courseDate };
        }else{
        courseObj= { code: courseCode + ' - ' + courseName, date: courseDate };
        }
        
      courseArray.push(courseObj);
  }
  return courseArray;
}

function userInput() {
  let user = prompt("Please enter the 4-digit number of course code: ");
  while (isNaN(user) || user.length !== 4 ) {
      user = prompt("Invalid input, Please enter the 4-digit number of course code: ");
  }
  return user;
}

function findCourse(courseList) {
  let user = userInput();

  let courseFound = false;


  for(let i = 0; i < courseList.length; i++) {
      let courseListItem = document.querySelectorAll('.courseList li')[i];
      let courseCode = courseList[i].code.split(' ');
      if(courseCode.length == 1) {
          courseCode = courseCode[0];
      } else {
          courseCode = courseCode[1];
      }
      console.log(courseCode)
      if(courseCode.includes(user)) {
          courseListItem.style.backgroundColor = 'green';
          courseFound = true;
      }
  }

  if(!courseFound) {
      let newCourseListItem = document.createElement('li');
      newCourseListItem.classList.add('grid1');
      let newCourseName = `${user}`;
      let newCourseDate = 'Fall 2020';
      newCourseListItem.innerHTML = `<a href="#">${newCourseName}</a>
                                      <p class="semester">${newCourseDate}</p>
                                      <p class="course-description">N/A</p>`;
      let courseList = document.querySelector('.courseList');
      courseList.appendChild(newCourseListItem);
  }
}

const button = document.querySelector('#btn');

button.addEventListener('click', function() {
  //if the button is clicked, ask the user for a course code
  let courselist = createCourseArray();
  findCourse(courselist);
});
