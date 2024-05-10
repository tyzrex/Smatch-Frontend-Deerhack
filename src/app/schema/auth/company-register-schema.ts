import {z} from 'zod'

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const basicInfoSchema = z.object({
    email: z.string(
        {required_error: "Email is required"}
    ).email(),
    password: z.string(
        {required_error: "Password is required"}
    ).min(6).max(255),
    name: z.string(
        {required_error: "Name is required"}
    ).min(3).max(255),
})

export const companyInfoSchema = z.object({
    industry: z.string(
        {required_error: "Industry is required"}
    ).min(3).max(255),
    founded: z.coerce.number(
        {required_error: "Founded year is required"}
    ).min(1900).max(2030),
    address: z.string(
        {required_error: "Address is required"}
    ).min(3).max(255),
    phone: z.coerce.number(
        {required_error: "Phone number is required"}
    ).refine((phone) => phone.toString().length === 10, "Phone number must be 10 digits").refine((phone) => phone > 0, "Phone number must be a positive number"),
})

export const companyLogoSchema = z.object({
    logo: z.instanceof(File).refine(
        (files) => ACCEPTED_IMAGE_TYPES.includes(files?.type),
        "Only .jpg, .jpeg, .png and .webp formats are supported."
        )
        .refine((files) => files?.size < MAX_FILE_SIZE, `Max image size is 5MB.`)
})


export const additionalInfoSchema = z.object({
    employeeNumber: z.coerce.number(
        {required_error: "Employee number is required"}
    ).min(1).max(1000000),
    description: z.string(
        {required_error: "Description is required"}
    ).min(10).max(255),
    website: z.string(
        {required_error: "Website is required"}
    ).url(),

})

export const hrInfoSchema = z.object({
    hrName: z.string(
        {required_error: "HR name is required"}
    ).min(3).max(255),
    hrEmail: z.string(
        {required_error: "HR email is required"}
    ).email(),
})

export const companyRegisterSchema = z.object({
    basicInfo: basicInfoSchema,
    companyInfo: companyInfoSchema,
    companyLogo: companyLogoSchema,
    additionalInfo: additionalInfoSchema,
    hrInfo: hrInfoSchema
})