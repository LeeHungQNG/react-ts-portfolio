let name1: string | number = 'leehung'; // Tự động gán type
// Union Type:  biến name vừa là string, vừa là number
name1 = 10;

// Sử dụng Type: => có dấu "="
// type TEmployee = {
//   firstName: string;
//   lastName: string;
//   age: number;
//   jobTitle: string;
// };
// let employee: TEmployee = {
//   firstName: 'Eric',
//   lastName: 'Pham',
//   age: 25,
//   jobTitle: 'Web Developer',
// };

// Sử dụng interface: => không có dấu '='
interface IEmployee {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
}
let employee: IEmployee = {
  firstName: 'Eric',
  lastName: 'Pham',
  age: 25,
  jobTitle: 'Web Developer',
};
