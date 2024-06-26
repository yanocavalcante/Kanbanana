import { z } from 'zod'

export const editSchema = z.object({
    name: z.string().min(3, {message: "Nome deve ter no mínimo 3 caracteres"})
    .transform( (name) => 
        name
            .trim()
            .split(' ')
            .map((nome) => nome[0].toUpperCase() + nome.slice(1))
            .join(' ')),
    username: z.string().min(3, {message: "Usuário deve ter no mínimo 3 caracteres"}),
    email: z.string().email({message: "E-mail inválido"}).toLowerCase(),
    password: z.string().min(6, {message: "Senha deve ter no mínimo 6 caracteres"}),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas devem ser iguais",
    path: ['confirmPassword'],
})