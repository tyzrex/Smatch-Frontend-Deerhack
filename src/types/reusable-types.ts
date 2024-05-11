export interface PaginatedResponse<T> {
  status: number;
  message: string;
  meta: Meta;
  data: T[];
}

interface Meta {
  length: number;
  prev: null;
  next: null;
}

export interface JobDetail {
  status: number;
  message: string;
  data: JobData;
}

export interface JobData {
  id: number;
  title: string;
  jobDescription: string;
  jobType: string;
  jobLocation: string;
  jobCategory: string;
  jobQualification: string;
  jobExperience: string;
  jobSalary: string;
  company: Company;
}

interface Company {
  id: number;
  name: string;
  description: string;
  password: string;
  address: string;
  website: string;
  socials: {}
  logo: string;
  founded: string;
  employeeNumber: string;
  phone: string;
  hrName: string;
  hrEmail: string;
  industry: string;
}