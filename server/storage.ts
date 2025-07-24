import { 
  personalInfo, experiences, projects, skills, education,
  type PersonalInfo, type InsertPersonalInfo,
  type Experience, type InsertExperience,
  type Project, type InsertProject,
  type Skill, type InsertSkill,
  type Education, type InsertEducation
} from "@shared/schema";

export interface IStorage {
  // Personal Info
  getPersonalInfo(): Promise<PersonalInfo | undefined>;
  updatePersonalInfo(info: InsertPersonalInfo): Promise<PersonalInfo>;

  // Experiences
  getExperiences(): Promise<Experience[]>;
  createExperience(experience: InsertExperience): Promise<Experience>;

  // Projects
  getProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;

  // Skills
  getSkills(): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;

  // Education
  getEducation(): Promise<Education[]>;
  createEducation(education: InsertEducation): Promise<Education>;
}

export class MemStorage implements IStorage {
  private personalInfo: PersonalInfo | undefined;
  private experiences: Map<number, Experience>;
  private projects: Map<number, Project>;
  private skills: Map<number, Skill>;
  private education: Map<number, Education>;
  private currentExperienceId: number;
  private currentProjectId: number;
  private currentSkillId: number;
  private currentEducationId: number;

  constructor() {
    this.experiences = new Map();
    this.projects = new Map();
    this.skills = new Map();
    this.education = new Map();
    this.currentExperienceId = 1;
    this.currentProjectId = 1;
    this.currentSkillId = 1;
    this.currentEducationId = 1;

    // Initialize with Muhammad Sohaib's data
    this.initializePortfolioData();
  }

  private initializePortfolioData() {
    // Personal Information
    this.personalInfo = {
      id: 1,
      name: "Muhammad Sohaib Jameel",
      title: "Senior Mobile Application Developer",
      phone: "+92 3115244602",
      email: "sohaibjameel3@gmail.com",
      linkedin: "https://linkedin.com/in/sohaibjameel",
      github: "https://github.com/sohaibjameelkhan",
      location: "Islamabad, Punjab, Pakistan",
      summary: "Accomplished Senior Mobile Application Developer with over 4 years of experience designing, developing, and deploying high-performance apps for iOS and Android using Flutter, Dart, Kotlin, and Swift/SwiftUI. Adept in API integration, advanced state management, and implementing clean architecture for scalable solutions. Demonstrated success in launching 20+ live applications across Pakistan and the UAE, integrating native SDKs, and collaborating within cross-functional, onsite, and remote teams to deliver innovative mobile solutions."
    };

    // Work Experience
    const experiencesData = [
      {
        startDate: "01/2023",
        endDate: "Present",
        location: "Islamabad, Pakistan",
        position: "Senior Mobile Application Developer (Flutter)",
        company: "SoftLinks FZCO",
        description: "A software development company focusing on mobile applications",
        achievements: [
          "Led the development of 6+ Flutter apps from scratch, resulting in a 30% reduction in project delivery time",
          "Optimized app performance by 40% by optimizing code and implementing efficient state management",
          "Collaborated with backend and design teams to deploy features used by over 50,000+ active users",
          "Ensured 100% on-time deployment to Play Store and App Store with zero rollback incidents"
        ]
      },
      {
        startDate: "08/2022",
        endDate: "12/2022",
        location: "Islamabad, Pakistan", 
        position: "Flutter Developer",
        company: "Techozon Software House",
        description: "A software house specializing in Flutter application development",
        achievements: [
          "Conducted weekly code reviews and reduced bugs by 40%",
          "Developed 4+ Flutter applications with responsive UIs in coordination with UI/UX teams, enhancing user retention by 25%",
          "Implemented RESTful API integration that decreased app load time by 1.5 seconds"
        ]
      },
      {
        startDate: "01/2022",
        endDate: "07/2022",
        location: "Islamabad, Pakistan",
        position: "Flutter Developer",
        company: "Infusible Coders",
        description: "A software house known for developing innovative mobile solutions",
        achievements: [
          "Maintained and optimized 3+ legacy apps, increasing performance efficiency by 35%",
          "Refactored modular architecture for improved scalability and developer onboarding",
          "Managed version control and deployment cycles with 98% build success rate"
        ]
      },
      {
        startDate: "02/2020",
        endDate: "12/2023",
        location: "Remote",
        position: "Flutter Developer",
        company: "Fiverr (Freelance)",
        description: "A freelancing platform connecting buyers and sellers of services",
        achievements: [
          "Delivered 20+ custom mobile solutions for international clients, achieving a 5-star rating on 90%+ orders",
          "Integrated third-party APIs including payment gateways and Firebase services",
          "Enhanced client delivery timelines by 20% through reusable code components"
        ]
      }
    ];

    experiencesData.forEach(exp => this.createExperienceSync(exp));

    // Projects
    const projectsData = [
      {
        name: "Racing Eye",
        year: "2023",
        country: "UAE",
        description: "Horse racing app with live tracking",
        achievements: [
          "Successfully onboarded 2,000+ users within the first 3 months",
          "Enhanced user engagement by 35%"
        ],
        technologies: ["Flutter", "Dart", "Firebase", "REST APIs", "Live Tracking"]
      },
      {
        name: "ICD Happiness Club",
        year: "2024",
        country: "UAE",
        description: "E-commerce & social app",
        achievements: [
          "Increased monthly transactions by 50%",
          "Boosted user retention through real-time chat and offers",
          "Surpassed 10,000 active users in the first year post-launch"
        ],
        technologies: ["Flutter", "Dart", "Payment Gateways", "Real-time Chat", "E-commerce"]
      },
      {
        name: "Clinic On App",
        year: "2023",
        country: "Pakistan",
        description: "Patient booking and healthcare app",
        achievements: [
          "Streamlined doctor-patient appointment flow, reducing booking time by 40%",
          "Increased app downloads by 5,000+"
        ],
        technologies: ["Flutter", "Dart", "Healthcare APIs", "Appointment Booking", "SQLite"]
      }
    ];

    projectsData.forEach(project => this.createProjectSync(project));

    // Skills
    const skillsData = [
      {
        category: "Mobile Development",
        items: ["Flutter", "Dart", "Kotlin", "Swift", "SwiftUI", "Android Studio", "Xcode", "Android App Development", "iOS App Development"]
      },
      {
        category: "Development Tools",
        items: ["GitHub", "Visual Studio Code", "Git", "Postman", "Figma"]
      },
      {
        category: "Backend & APIs",
        items: ["REST APIs", "Google Firebase", "AWS", "Azure", "JSON", "SQLite", "Provider"]
      },
      {
        category: "Integration & Services",
        items: ["Google API", "Payment Gateways", "Stripe", "Deep Linking", "Multi-language Support", "App Deployment", "Jetpack", "Retrofit", "WEBRTC"]
      }
    ];

    skillsData.forEach(skill => this.createSkillSync(skill));

    // Education
    const educationData = [
      {
        startDate: "12/2018",
        endDate: "07/2022",
        location: "Islamabad, Pakistan",
        degree: "BS Computer Science",
        institution: "Kust University"
      },
      {
        startDate: "01/2016",
        endDate: "12/2018",
        location: "Islamabad, Pakistan",
        degree: "ICS",
        institution: "Punjab Group Of Colleges"
      },
      {
        startDate: "01/2014",
        endDate: "12/2016",
        location: "Islamabad, Pakistan",
        degree: "Matric",
        institution: "Beacon Light Public School"
      }
    ];

    educationData.forEach(edu => this.createEducationSync(edu));
  }

  // Synchronous helpers for initialization
  private createExperienceSync(insertExperience: InsertExperience): Experience {
    const id = this.currentExperienceId++;
    const experience: Experience = { 
      ...insertExperience, 
      id
    };
    this.experiences.set(id, experience);
    return experience;
  }

  private createProjectSync(insertProject: InsertProject): Project {
    const id = this.currentProjectId++;
    const project: Project = { 
      ...insertProject, 
      id
    };
    this.projects.set(id, project);
    return project;
  }

  private createSkillSync(insertSkill: InsertSkill): Skill {
    const id = this.currentSkillId++;
    const skill: Skill = { 
      ...insertSkill, 
      id
    };
    this.skills.set(id, skill);
    return skill;
  }

  private createEducationSync(insertEducation: InsertEducation): Education {
    const id = this.currentEducationId++;
    const education: Education = { 
      ...insertEducation, 
      id
    };
    this.education.set(id, education);
    return education;
  }

  // Async interface implementations
  async getPersonalInfo(): Promise<PersonalInfo | undefined> {
    return this.personalInfo;
  }

  async updatePersonalInfo(info: InsertPersonalInfo): Promise<PersonalInfo> {
    this.personalInfo = { ...info, id: 1 };
    return this.personalInfo;
  }

  async getExperiences(): Promise<Experience[]> {
    return Array.from(this.experiences.values()).sort((a, b) => {
      // Sort by start date, most recent first
      if (a.endDate === "Present") return -1;
      if (b.endDate === "Present") return 1;
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });
  }

  async createExperience(experience: InsertExperience): Promise<Experience> {
    return this.createExperienceSync(experience);
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).sort((a, b) => {
      return parseInt(b.year) - parseInt(a.year);
    });
  }

  async createProject(project: InsertProject): Promise<Project> {
    return this.createProjectSync(project);
  }

  async getSkills(): Promise<Skill[]> {
    return Array.from(this.skills.values());
  }

  async createSkill(skill: InsertSkill): Promise<Skill> {
    return this.createSkillSync(skill);
  }

  async getEducation(): Promise<Education[]> {
    return Array.from(this.education.values()).sort((a, b) => {
      return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
    });
  }

  async createEducation(education: InsertEducation): Promise<Education> {
    return this.createEducationSync(education);
  }
}

export const storage = new MemStorage();
