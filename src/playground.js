const numbers = [1, 2, 2, 3, 4, 2, 5];

console.log(numbers.filter((value) => value > 2));

const jobs = [
  { title: "Angular Developer", organization: "Microsoft" },
  { title: "Programmer", organization: "Google" },
  { title: "Developer", organization: "Microsoft" },
];

console.log(jobs.filter((job) => job.organization === "Microsoft"));
