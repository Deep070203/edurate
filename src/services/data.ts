export interface Course {
    id: number;
    name: string;
    major: "Computer Science" | "Mathematics" | "Psychology";
    rating: number;
}

export const data: Course[] = [];

const courseTitles = [
    "Intro to Programming", "Advanced Mathematics", "Psychology 101",
    "Data Structures", "Calculus II", "Behavioral Psychology",
    "Machine Learning", "Linear Algebra", "Cognitive Science",
    "Operating Systems", "Statistics", "Experimental Psychology"
];

// Generate sample courses
for (let i = 0; i < courseTitles.length; i++) {
    const major = i % 3 === 0 ? "Computer Science" :
        i % 3 === 1 ? "Mathematics" :
            "Psychology";

    const course: Course = {
        id: i + 1,
        name: `${courseTitles[i]}`,
        major: major,
        rating: Math.floor(Math.random() * 5) + 1  // Rating from 1 to 5
    };

    data.push(course);
}
