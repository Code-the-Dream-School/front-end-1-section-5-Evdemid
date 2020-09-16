// "use strict";
let studentsUrl =
  "https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Students.json";
let coursesUrl =
  "https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Courses.json";
const urls = [studentsUrl, coursesUrl];
let students = []
let courses = []

const studentsEl = document.getElementById("students");
const coursesEl = document.getElementById("courses");
const enrollmentEl = document.getElementById("new_student");

studentsEl.addEventListener("click", (evt) => {
  async function getData() {
    try {
      const data = await Promise.all(
        urls.map(
          (urls) => fetch(urls).then((response) => response.json())
          // .then((data) => renderStudents(data))
        )
      );
      let students = data[0];
      let courses = data[1];
      console.log("students", students);
      console.log("courses", courses);
    } catch {
      console.log("oops!");
    }
  }
  // getData()
  /////////////////////////////Students' cards/////////////////////////////////

  async function renderStudents() {
    let data = await getData();
    console.log(data);
    let html = "";
    // data.map(student => {

    let htmlSegment = `<div class="card text-dark bg-light border-dark mb-5" style="max-width: 18rem;">
      <div class="card-body">
        <div class="d-flex card-header">
          <h3 class="card-title col-9">${students.name} ${students.last_name}</h3>
          <img src="images/green-circle-icon.png" alt="The sign of active student" class="card-img col-2">
        </div>

          <p class="card-text mb-2"></p>
          <p class="card-text mb-2"></p>
          <div class = 'card-footer d-flex w-100 justify-content-around'>
            <button class="submit col-5 btn btn-sm btn-outline-info" type="button">Add Course</button>
            <button class="submit col-5 btn btn-sm btn-outline-info" type="button">Edit Info</button>
          </div>
      </div>
    </div>`;

    html += htmlSegment;
    // });

    let cardsContainer = document.querySelector(".cards-container");
    cardsContainer.innerHTML = html;
  }

  renderStudents();
});
// coursesEl.addEventListener("click", (evt) => {});
// enrollmentEl.addEventListener("click", (evt) => {});

class Student {
  constructor(firstName, lastName, active, studentId, enrCours) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.active = active;
    this.studentId = studentId;
    this.enrCours = enrCours;
  }
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

/*
"use strict";
let studentsUrl =
  "https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Students.json";
let coursesUrl =
  "https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Courses.json";
const urls = [studentsUrl, coursesUrl];

const studentsEl = document.getElementById("students");
const coursesEl = document.getElementById("courses");
const enrollmentEl = document.getElementById("new_student");

studentsEl.addEventListener("click", (evt) => {
  async function getData() {
    
    try {
      let res = await Promise.all([fetch(studentsUrl)], [fetch(coursesUrl)]);
      let data = await res.json();
      console.log(data)
      return data;
    
    } catch (error) {
      console.log(error);
    }
  }

  async function renderStudents() {
    let data = await getData();
    console.log(data);
    let html = "";
    data.map((students) => {
      let htmlSegment = `<div class="student">
                            
                            <h2>${students.name} ${students.last_name}</h2>
                            
                        </div>`;

      html += htmlSegment;
    });

    let container = document.querySelector(".cards-container");
    container.innerHTML = html;
  }

  renderStudents();
});
*/
