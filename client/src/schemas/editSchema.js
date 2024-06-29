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
    avatar: z.string().url({message: "URL inválida"})
})