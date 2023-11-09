export interface Worker {
    user: User;
    firstName: string;
    lastName: string;
    category: string;
    phoneNumber: string;
    publicPrice: number;
    address: Address;
    workExperiences: WorkExperience[];
    educationDetails: EducationDetail[];
    portfolioProjects: PortfolioProject[];
    certifications: Certification[];
    skills: Skill[];
  }
  export interface User {
    email: string;
    password: string;
    role: string;
  }
  export interface Address {
    wilaya: string;
    commune: string;
    code_postal: string;
    addressDomissile: string;
    numRue: string;
  }
  
  export interface WorkExperience {
  }
  
  export interface EducationDetail {

  }
  
  export interface PortfolioProject {
  }
  
  export interface Certification {
  }
  
  export interface Skill {
    name: string;
    category: string;
  }
  