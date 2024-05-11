import { z } from "zod";

export enum jobType {
  FullTime = "Full Time",
  PartTime = "Part Time",
  Contract = "Contract",
  Internship = "Internship",
  Temporary = "Temporary",
}

export enum Industry {
  IT = "IT",
  Education = "Education",
  Finance = "Finance",
  Health = "Health",
  Marketing = "Marketing",
  Retail = "Retail",
  Manufacturing = "Manufacturing",
  Hospitality = "Hospitality",
  Construction = "Construction",
  Consulting = "Consulting",
  Telecommunications = "Telecommunications",
  MediaAndEntertainment = "Media and Entertainment",
  TransportationAndLogistics = "Transportation and Logistics",
  Nonprofit = "Nonprofit",
  Government = "Government",
  LegalServices = "Legal Services",
}

export const addJobSchema = z.object({
  title: z.string({ required_error: "Title is required" }),
  jobDescription: z
    .string({ required_error: "Job Description is required" })
    .min(50, { message: "Job Description must be at least 50 characters" }),
  jobType: z.enum([
    jobType.FullTime,
    jobType.PartTime,
    jobType.Contract,
    jobType.Internship,
    jobType.Temporary,
  ]),
  jobLocation: z.string({ required_error: "Job Location is required" }),
  jobCategory: z.enum([
    Industry.IT,
    Industry.Education,
    Industry.Finance,
    Industry.Health,
    Industry.Marketing,
    Industry.Retail,
    Industry.Manufacturing,
    Industry.Hospitality,
    Industry.Construction,
    Industry.Consulting,
    Industry.Telecommunications,
    Industry.MediaAndEntertainment,
    Industry.TransportationAndLogistics,
    Industry.Nonprofit,
    Industry.Government,
    Industry.LegalServices,
  ]),
  jobQualification: z.string({
    required_error: "Job Qualification is required",
  }),
  jobExperience: z.string({ required_error: "Job Experience is required" }),
  jobSalary: z.string({ required_error: "Job Salary is required" }),
  requirements: z.array(
    z
      .object({
        requirement: z.string(),
      })
      .optional()
  ),
  benefits: z.array(
    z
      .object({
        benefit: z.string(),
      })
      .optional()
  ),
});

export type AddJobSchemaType = z.infer<typeof addJobSchema>;
