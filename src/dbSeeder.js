// dbSeeder.js
const fs = require('fs');
const { University, Course } = require('./models');

async function seedDatabase() {
  const jsonData = fs.readFileSync('/Users/vraj/projects/edurate/src/pages/webScrap/university_courses.json', 'utf8');

  const universitiesData = JSON.parse(jsonData);

  for (const [universityName, courses] of Object.entries(universitiesData)) {
    try {
      const university = new University({
        university_name: universityName,
      });

      courses.forEach(courseName => {
        const [courseNumber, courseNameText] = courseName.split(': ');

        const course = new Course({
          course_number: courseNumber,
          course_name: courseNameText,
          reviews: []
        });

        university.courses.push(course);
      });

      await university.save();
      console.log(`University ${university.university_name} saved to database.`);
    } catch (error) {
      console.error('Error saving university to database:', error);
    }
  }
}

module.exports = seedDatabase;
