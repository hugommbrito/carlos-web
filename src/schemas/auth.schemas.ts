import { z } from 'zod';

export const LoginSchema = z.object({
	email: z.string().email({ message: 'E-mail inválido!' }),
	password: z.string(),
	// .regex(
	//     /^(?=.*?[A-Z])/,
	//     { message:'Deve conter pelo menos uma letra maiúscula.' }
	// ).regex(
	//     /^(?=.*?[a-z])/,
	//     { message:'Deve conter pelo menos uma letra minúscula.' }
	// ).regex(
	//     /^(?=.*?[0-9])/,
	//     { message:'Deve conter pelo menos um número.' }
	// ).regex(
	//     /^(?=.*?[#?!@$%^&*-])/,
	//     { message:'Deve conter pelo menos um caractere especial.' }
	// ).regex(
	//     /^.{6,}$/,
	//     { message:'Deve ter pelo menos 6 caracteres.' }
	// )
});

export const RegisterSchema = z
	.object({
		name: z
			.string()
			.min(3, { message: 'O nome deve ter pelo menos 3 caracteres!' }),
		surname: z
			.string()
			.min(3, { message: 'O sobrenome deve ter pelo menos 3 caracteres!' }),
		email: z.string().email({ message: 'E-mail inválido!' }),
		birthdate: z.string(),
		password: z
			.string()
			.regex(/^(?=.*?[A-Z])/, {
				message: 'Deve conter pelo menos uma letra maiúscula.',
			})
			.regex(/^(?=.*?[a-z])/, {
				message: 'Deve conter pelo menos uma letra minúscula.',
			})
			.regex(/^(?=.*?[0-9])/, { message: 'Deve conter pelo menos um número.' })
			.regex(/^(?=.*?[#?!@$%^&*-])/, {
				message: 'Deve conter pelo menos um caractere especial.',
			})
			.regex(/^.{6,}$/, { message: 'Deve ter pelo menos 6 caracteres.' }),
		confirmPassword: z
			.string().optional(),
		role: z.enum(['user', 'admin', 'staff']).default('user').optional(),
		adminPassword: z.string().optional(),
	})
	.superRefine(({ confirmPassword, password }, ctx) => {
		if (confirmPassword !== password) {
			ctx.addIssue({
				code: 'custom',
				message: 'As senhas não são iguais!',
				path: ['confirmPassword'],
			});
		}
	})
	.transform((data) => {
		delete data.confirmPassword;
		return data;
	});

export const emailRecoverySchema = z.object({
	email: z.string().email({ message: 'E-mail inválido!' }),
});

export const passwordMatchsSchema = z
	.object({
		password: z
			.string()
			.regex(/^(?=.*?[A-Z])/, {
				message: 'Deve conter pelo menos uma letra maiúscula.',
			})
			.regex(/^(?=.*?[a-z])/, {
				message: 'Deve conter pelo menos uma letra minúscula.',
			})
			.regex(/^(?=.*?[0-9])/, { message: 'Deve conter pelo menos um número.' })
			.regex(/^(?=.*?[#?!@$%^&*-])/, {
				message: 'Deve conter pelo menos um caractere especial.',
			})
			.regex(/^.{6,}$/, { message: 'Deve ter pelo menos 6 caracteres.' }),
		confirmPassword: z.string(),
	})
	.superRefine(({ confirmPassword, password }, ctx) => {
		if (confirmPassword !== password) {
			ctx.addIssue({
				code: 'custom',
				message: 'As senhas não são iguais!',
			});
		}
	});
