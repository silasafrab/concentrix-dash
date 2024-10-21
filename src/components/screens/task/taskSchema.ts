import { z } from "zod";

export const taskSchema = z.object({
  name: z
    .string()
    .min(3, "O nome deve ter pelo menos 3 caracteres.")
    .nonempty("O nome é obrigatório."),
  description: z
    .string()
    .min(20, "A descrição deve conter pelo menos 20 caracteres.")
    .nonempty("A descrição é obrigatória."),
  priority: z.enum(["low", "middle", "high"], {
    required_error: "Selecione um nível de prioridade.",
  }),
});
