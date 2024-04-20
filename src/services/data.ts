export interface Course {
  id: number;
  name: string;
  major: "Computer Science" | "Mathematics" | "Psychology";
  rating: number;
}


export const data: Course[] = [];

// generate random names

const RandomNames = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Henry",
  "Ivy",
  "Jack",
  "Kate",
  "Liam",
  "Mia",
  "Noah",
  "Olivia",
  "Peter",
  "Quinn",
  "Rose",
  "Sam",
  "Tina",
  "Uma",
  "Victor",
  "Wendy",
  "Xander",
  "Yara",
  "Zane",
  "Abigail",
  "Benjamin",
  "Chloe",
  "Daniel",
  "Emily",
  "Fiona",
  "George",
  "Hannah",
  "Isaac",
  "Julia",
  "Kevin",
  "Lily",
  "Mason",
  "Nora",
  "Oscar",
  "Penelope",
  "Quentin",
  "Rachel",
  "Simon",
  "Tiffany",
  "Ulysses",
  "Violet",
  "William",
  "Xavier",
  "Yasmine",
  "Zoey",
  "Stephen",
  "Gerrard",
  "Adewale",
];

// Generate 50 sample profiles
for (let i = 1; i <= RandomNames.length; i++) {
  if (RandomNames[i]) {
    const course: Course = {
        id: i,
      name: RandomNames[i],
      major:
        i % 3 === 0
          ? "Computer Science"
          : i % 2 === 0
          ? "Mathematics"
          : "Psychology",
      rating: (i % 3) + 1 
    };
    data.push(course);
  } else {
    console.error("Please wait...");
  }
}