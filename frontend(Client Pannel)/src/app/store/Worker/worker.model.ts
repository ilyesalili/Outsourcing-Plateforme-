import { Role } from '../Login/login.model';

export interface Worker {
  firstName: string;
  lastName: string;
  pictureUrl: string;
  address: Address;
  phoneNumber: string;
  cardIdUrl: string;
  title: string;
  skills: Skill[];
  category: string;
  publicPrice: number;
  workExperiences: WorkExperience[];
  educationDetails: EducationDetail[];
  portfolioProjects: PortfolioProject[];
  certifications: Certification[];
  cvUrl: string;
}
export interface WorkerStep1 {
  // user_Id:string ;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: Address;
  photo: string;
}
export interface WorkerStep2 {
  carteIdentity: string;
}
export interface WorkerStep3 {
  title: string;
  skills: Skill[];
  category: string;
  publicPrice: number;
  workExperiences: WorkExperience[];
  educationDetails: EducationDetail[];
  portfolioProjects: PortfolioProject[];
  certifications: Certification[];
}
export interface WorkerStep4 {
  cv: string;
}
export interface Address {
  wilaya: string;
  commune: string;
  code_postal: string;
  addressDomissile: string;
  numRue: string;
}

export interface WorkExperience {
  title: string;
  startDate: Date;
  endDate: Date;
  companyName: string;
  description: string;
  location: string;
  type: string;
  // skills:Skill[];
}

export interface EducationDetail {
  description: string;
  startDate: Date;
  endDate: Date;
  school: string;
  location: string;
  field: string;
}

export interface PortfolioProject {
  title: string;
  role: string;
  imageUrl: string;
  projectGoal: string;
  projectSolution: string;
  skills: Skill[];
}

export interface Certification {
  title: string;
  url: string;
  issuedAt: Date;
  companyName: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  category: string;
}

export interface WorkerProjectHier {
  firstName: string;
  category: string;
  lastName: string;
  publicPrice: number;
  skills: Skill[];
  userId: string;
}

export interface PaginatedWorkerResponse {
  workers: WorkerProjectHier[];
}
export interface User {
  email: string;
  password: string;
  role: Role;
}

export interface WorkerHier {
  workerId: string;
  firstName: string;
  lastName: string;
  publicPrice: number;
  category: string;
  nbHours: number;
  skills: Skill[];
}
export interface WorkerJobRequest{
  workerId:string;
  nbHours: number;
}
