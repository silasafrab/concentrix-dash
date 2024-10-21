"use client";
import { Typography } from "@/components/primitives/typography/typography";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useApp } from "@/contexts/AppContext";
import { toast } from "@/hooks/use-toast";
import { useParams, useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";

import { taskSchema } from "./taskSchema";
import { useEffect } from "react";
import { ClipboardPlus, Pen } from "lucide-react";
import MotionContainer from "@/components/primitives/MotionContainer/MotionContainer";
import { Label } from "@/components/ui/label";

type FormData = {
  id?: string;
  name: string;
  description: string;
  priority: "low" | "middle" | "high";
};

const date = new Date();
const hours = date.getHours().toString().padStart(2, "0");
const minutes = date.getMinutes().toString().padStart(2, "0");
const day = date.getDate();
const month = date.toLocaleString("pt-BR", { month: "long" });
const year = date.getFullYear();

export const Task = () => {
  const params = useParams();
  const { push } = useRouter();
  const { id } = params;

  const TaskCtx = useApp();

  const priorities = [
    { value: "low", title: "Baixa" },
    { value: "middle", title: "Média" },
    { value: "high", title: "Alta" },
  ];

  const isEditMode = !!id;
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      name: "",
      description: "",
      priority: "low",
    },
  });

  useEffect(() => {
    if (isEditMode) {
      const taskToEdit = TaskCtx?.task.find((task) => task.id === id);
      if (taskToEdit) {
        reset(taskToEdit);
      }
    }
  }, [isEditMode, id, TaskCtx?.task, reset]);

  const onSubmit = (data: FormData) => {
    const taskId = Array.isArray(id) ? id[0] : id;
    if (isEditMode) {
      TaskCtx?.dispatch({
        type: "edit",
        payload: { ...data, id: taskId },
      });
      toast({
        title: "Tarefa Editada com Sucesso!",
        description: `Tarefa editada em ${day} de ${month} de ${year} às ${hours}:${minutes}`,
      });
    } else {
      TaskCtx?.dispatch({
        type: "add",
        payload: data,
      });
      toast({
        title: "Tarefa Criada com Sucesso!",
        description: `Tarefa criada em ${day} de ${month} de ${year} às ${hours}:${minutes}`,
      });
    }
    push("/dashboard");
  };

  return (
    <div className="container h-screen py-20">
      <MotionContainer>
        <Card>
          <CardHeader className="flex-row justify-between">
            <Typography as="h2" type="subtitle-m">
              {isEditMode ? "Editar Tarefa" : "Criar Nova Tarefa"}
            </Typography>
            <div className="flex flex-col">
              {isEditMode && (
                <>
                  <Typography type="label-xs" className="opacity-60">
                    id: {id}
                  </Typography>
                </>
              )}
            </div>
          </CardHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent className="flex flex-col gap-4">
              <div className="flex gap-4 flex-col md:flex-row">
                <div className="w-full">
                  <Label htmlFor="picture" className="mb-4">
                    Nome da tarefa
                  </Label>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="Digite o Título da Tarefa"
                      />
                    )}
                  />
                  {errors.name && (
                    <Typography type="label-xs" className="text-red-500">
                      {errors.name.message}
                    </Typography>
                  )}
                </div>

                <div className="w-full">
                  <Label htmlFor="picture" className="mb-4">
                    Prioridade
                  </Label>
                  <Controller
                    name="priority"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o nível da prioridade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Qual a prioridade?</SelectLabel>
                            {priorities.map((item) => (
                              <SelectItem value={item.value} key={item.value}>
                                {item.title}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.priority && (
                    <Typography type="label-xs" className="text-red-500">
                      {errors.priority.message}
                    </Typography>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="picture" className="mb-4">
                  Descrição da tarefa
                </Label>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <Textarea
                      {...field}
                      placeholder="Descreva brevemente a sua tarefa"
                      className="h-64"
                    />
                  )}
                />
                {errors.description && (
                  <Typography type="label-xs" className="text-red-500">
                    {errors.description.message}
                  </Typography>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex gap-4 justify-end">
              <MotionContainer
                from={{ scale: 0.8 }}
                to={{ scale: 1 }}
                delay={0}
              >
                <Button variant={"outline"} onClick={() => push("/dashboard")}>
                  Cancelar
                </Button>
              </MotionContainer>
              <MotionContainer
                from={{ scale: 0.8 }}
                to={{ scale: 1 }}
                delay={0}
              >
                <Button variant={"default"} type="submit">
                  {isEditMode ? <Pen /> : <ClipboardPlus />}

                  {isEditMode ? "Salvar Tarefa" : "Adicionar Tarefa"}
                </Button>
              </MotionContainer>
            </CardFooter>
          </form>
        </Card>
      </MotionContainer>
    </div>
  );
};
