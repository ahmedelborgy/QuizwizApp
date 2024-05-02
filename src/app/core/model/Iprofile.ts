export interface IProfile {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  group: string;
  status: 'active' | 'inactive';
  role: 'Instructor' | 'Student' | 'Admin';
}
