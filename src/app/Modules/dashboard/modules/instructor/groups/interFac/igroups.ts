
export interface Igroups {
    _id:string;
    name:string;
    status:string;
    instructor:string;
    students:string[];
    max_students:number;
}
export interface Istudents {
    _id:        string;
    first_name: string;
    last_name:  string;
    email:      string;
    status:     string;
    role:       string;
}