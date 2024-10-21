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
    <Card className="flex flex-col gap-10">
      <CardHeader>
        <Typography as="h2" type="subtitle-m" className="text-center mb-4">
          Parece que você não Cadastrou uma tarefa!
        </Typography>
        <Typography as="p" type="body-l" className="text-center">
          Cadastre sua primeira tarefa e comece o seu gerenciamento.
        </Typography>
      </CardHeader>
      <CardContent className="flex justify-center">
        <NoEmptyIllustration />
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={() => push("/dashboard/add")}>
          <ClipboardPlus />
          Adicionar Tarefa
        </Button>
      </CardFooter>
    </Card>
  );
};
