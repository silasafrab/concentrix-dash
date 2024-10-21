import MotionContainer from "@/components/primitives/MotionContainer/MotionContainer";
import { Typography } from "@/components/primitives/typography/typography";
import NoEmptyIllustration from "@/components/svg/NoEmptyIllustration";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ClipboardPlus } from "lucide-react";
import { useRouter } from "next/navigation";

export const NoEmpty = () => {
  const { push } = useRouter();
  return (
    <MotionContainer>
      <Card className="flex flex-col gap-10">
        <CardHeader>
          <MotionContainer delay={0.3} className="text-center">
            <Typography as="h2" type="subtitle-m" className="text-center mb-4">
              Parece que você não Cadastrou uma tarefa!
            </Typography>
          </MotionContainer>
          <MotionContainer delay={0.6} className="text-center">
            <Typography as="p" type="body-l" className="text-center">
              Cadastre sua primeira tarefa e comece o seu gerenciamento.
            </Typography>
          </MotionContainer>
        </CardHeader>
        <CardContent className="flex justify-center">
          <NoEmptyIllustration />
        </CardContent>
        <CardFooter className="justify-center">
          <MotionContainer from={{ scale: 0.8 }} to={{ scale: 1 }} delay={0}>
            <Button onClick={() => push("/dashboard/add")}>
              <ClipboardPlus />
              Adicionar Tarefa
            </Button>
          </MotionContainer>
        </CardFooter>
      </Card>
    </MotionContainer>
  );
};
