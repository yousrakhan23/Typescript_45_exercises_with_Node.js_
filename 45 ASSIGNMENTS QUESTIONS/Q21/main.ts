
// Q21: They think of something you could store in a TypeScript Object. Write 
//a program that creates Objects containing these items.

interface itCourse {
    courseName: string;
    location: string;
    onSiteStudents: number;
}

let itCourse = {
    courseName: "Typescript and Javascrit",
    location: "Governor House Sindh",
    onSiteStudents: 50000
};
console.log(itCourse);
