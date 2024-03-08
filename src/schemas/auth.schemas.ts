import { z } from "zod";


export const LoginSchema = z.object({
    email: z.string().email({message: 'E-mail inválido!'}),
    password: z.string().regex(
        /^(?=.*?[A-Z])/,
        { message:'Deve conter pelo menos uma letra maiúscula.' }
    ).regex(
        /^(?=.*?[a-z])/,
        { message:'Deve conter pelo menos uma letra minúscula.' }
    ).regex(
        /^(?=.*?[0-9])/,
        { message:'Deve conter pelo menos um número.' }
    ).regex(
        /^(?=.*?[#?!@$%^&*-])/,
        { message:'Deve conter pelo menos um caractere especial.' }
    ).regex(
        /^.{8,}$/,
        { message:'Deve ter pelo menos 8 caracteres.' }
    )
})