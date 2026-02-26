import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full md:grid md:grid-cols-2 lg:grid-cols-12">

      <div className="md:col-span-1 lg:col-span-5 flex justify-center">
        <ScrollArea className="w-[90%] md:w-[80%] h-screen">

          <div className="w-full h-full py-16 flex flex-col items-center gap-8">

            <div className="w-28 h-20 border-none shadow-none relative">
              <div className="absolute top-0 left-2 h-[6px] w-2/3 bg-foreground" />
              <div className="absolute top-2 left-0 h-2/3 w-[6px] bg-foreground" />

              <div className="text-2xl font-semibold pt-1 pb-2 px-4">
                <p>qulture</p>
                <p>rocks</p>
              </div>

              <div className="absolute bottom-0 right-2 h-[6px] w-2/3 bg-foreground" />
              <div className="absolute bottom-2 right-0 h-2/3 w-[6px] bg-foreground" />
            </div>

            <div className="w-full flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-xl font-bold text-muted-foreground">E-mail</Label>
                <Input id="email" placeholder="Digite seu e-mail"></Input>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="password" className="text-xl font-bold text-muted-foreground">Senha</Label>
                <Input id="password" placeholder="Digite sua senha"></Input>
              </div>

              <div className="w-full flex justify-around text-center">
                <p>Entrar com CPF</p>
                <p>|</p>
                <p>Seu primeiro acesso</p>
                <p>|</p>
                <p>Esqueceu sua senha?</p>
              </div>
            </div>

            <Button className="w-full cursor-pointer">Entrar</Button>

            <div className="w-full flex items-center gap-4">
              <div className="h-[0.4px] w-full bg-muted-foreground" />
              <span className="text-xl font-bold text-muted-foreground mb-2">ou</span>
              <div className="h-[0.4px] w-full bg-muted-foreground" />
            </div>

            <p className="font-bold">Continuar com Single Sign On</p>
            <div className="flex items-center gap-2">
              <Image
                src="/google-logo.svg"
                width={24}
                height={24}
                alt="Picture of the author"
              />
              <p className="font-semibold">Continuar com o Google</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/slack-logo.svg"
                width={24}
                height={24}
                alt="Picture of the author"
              />
              <p className="font-semibold">Continuar com o Slack</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/apple-logo.svg"
                width={24}
                height={24}
                alt="Picture of the author"
              />
              <p className="font-semibold">Continuar com a Apple</p>
            </div>

            <div className="flex justify-around gap-4 text-center">
              <p>Português</p>
              <p>|</p>
              <p>English</p>
              <p>|</p>
              <p>Español</p>
            </div>
          </div>

        </ScrollArea>

      </div>


      <div className="w-full h-full md:col-span-1 lg:col-span-7 bg-foreground flex flex-col justify-center items-center relative">

        <div className="text-background font-semibold md:text-5xl lg:text-6xl">
          <h1>Unlock your</h1>
          <h1>team's potential!</h1>
        </div>
        <div className="h-1 md:w-56 lg:w-80 bg-muted-foreground top-3 left-[15%] relative" />

      </div>
    </div>
  );
}
