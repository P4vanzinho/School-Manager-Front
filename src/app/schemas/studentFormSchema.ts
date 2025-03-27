import { z } from "zod";

export const studentFormSchema = z.object({
    username: z
        .string()
        .min(3, { message: "O nome de usuário deve ter pelo menos 3 caracteres!" })
        .max(20, {
            message: "O nome de usuário deve ter no máximo 20 caracteres!",
        }),
    email: z.string().email({ message: "Endereço de e-mail inválido!" }),
    password: z.string().min(8, {
        message: "A senha deve ter pelo menos 8 caractere!",
    }),
    firstName: z.string().min(1, { message: "O primeiro nome é obrigatório!" }),
    lastName: z.string().min(1, { message: "O sobrenome é obrigatório!" }),
    phone: z.string().min(1, { message: "O telefone é necessário!" }),
    address: z.string().min(1, { message: "O endereço é obrigatório!" }),
    bloodType: z.string().min(1, { message: "O tipo sanguíneo é necessário!" }),
    birthday: z.date({ message: "Birthday is required!" }),
    sex: z.enum(["male", "female"], { message: "Sexo é necessário!" }),
    img: z.instanceof(File, { message: "A imagem é obrigatória" }),
});