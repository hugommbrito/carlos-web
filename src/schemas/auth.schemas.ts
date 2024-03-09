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

export const RegisterSchema = z.object({
    name: z.string().min(3, {message: 'O nome deve ter pelo menos 3 caracteres!'}),
    surname: z.string().min(3, {message: 'O sobrenome deve ter pelo menos 3 caracteres!'}),
    email: z.string().email({message: 'E-mail inválido!'}),
    birthdate: z.string(),
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
    ),
    confirmPassword: z.string().regex(
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
    ),
    role: z.enum(['user', 'admin']).default('user'),
}).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "As senhas não são iguais!"
      });
    }
  });

export const emailRecoverySchema = z.object({
    email: z.string().email({message: 'E-mail inválido!'})
})

export const passwordMatchsSchema = z.object({
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
    ),
    confirmPassword: z.string().regex(
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
    ),
}).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "As senhas não são iguais!"
      });
    }
  });