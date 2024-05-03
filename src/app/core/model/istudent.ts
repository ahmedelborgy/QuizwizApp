export interface IStudent {
  avgScore: number;
  email: string;
  first_name: string;
  group: IGroup;
  students: IStudentInfo[];
  updatedAt: string;
  _id: string;
  last_name: string;
  status: string;
  role: string;
}

export interface IGroup {
  name: string;
  status: string;
  createdAt: string;
  instructor: string;
  maxStudents: number;
  __v: number;
  _id: string;
  updatedAt: string;
}

export interface IStudentInfo {
  _id: string;
  firstName: string;
  email: string;
}

// // Define the enum for status
// export enum StudentStatus {
//   ACTIVE = 'active',
//   INACTIVE = 'inactive',
//   PENDING = 'pending',
//   // Add more status values as needed
// }
