import {z} from 'zod'

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
const ACCEPT_CV_TYPES = ["application/pdf"];

export const basicPersonalInfoSchema = z.object({
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


export const additionalPersonalInfoSchema = z.object({
    address: z.string(
        {required_error: "Address is required"}
    ).min(3).max(255),
    phone: z.coerce.number(
        {required_error: "Phone number is required"}
    ).refine((phone) => phone.toString().length === 10, "Phone number must be 10 digits").refine((phone) => phone > 0, "Phone number must be a positive number"),
    bio: z.string(
        {required_error: "Bio is required"}
    ).min(10).max(255),
})


export const personalFileSchema = z.object({
    profilePic: z.instanceof(File).refine(
        (files) => ACCEPTED_IMAGE_TYPES.includes(files?.type),
        "Only .jpg, .jpeg, .png and .webp formats are supported."
        )
        .refine((files) => files?.size < MAX_FILE_SIZE, `Max image size is 5MB.`),
    cv: z.instanceof(File).refine(
        (files) => ACCEPT_CV_TYPES.includes(files?.type),
        "Only .pdf format is supported."
        )
        .refine((files) => files?.size < MAX_FILE_SIZE, `Max cv size is 5MB.`)
})
    
export const userRegisterSchema = basicPersonalInfoSchema.merge(additionalPersonalInfoSchema).merge(personalFileSchema)
