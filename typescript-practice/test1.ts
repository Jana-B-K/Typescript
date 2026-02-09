// // Types

// type User = {
//   id: number;
//   name: string;
//   isActive: boolean;
// };

// const user1: User = {
//   id: 1,
//   name: "Jana",
//   isActive: true,
// };

// //union types

// type Status = "loading" | "success" | "error";

// let status1: Status = "loading";

// function setStatus(s: Status) {
//   status1 = s;
// }


// //Intersection types

// type User = {
//   id: number;
//   name: string;
// };

// type Admin = {
//   role: "admin";
// };

// type AdminUser = User & Admin;

// const admin: AdminUser = {
//   id: 1,
//   name: "Root",
//   role: "admin",
// };



// //Enums

// enum Role {
//   User,
//   Admin,
//   Manager,
// }

// function checkAccess(role: Role) {
//   if (role === Role.Admin) {
//     console.log("Full access");
//   }
// }

// checkAccess(Role.Admin);

// //Generic

// function identity<T>(value: T): T {
//   return value;
// }

// identity<number>(10);
// identity("hello");