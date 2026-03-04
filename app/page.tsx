import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="flex flex-col gap-4 items-center">

                <h1 className="font-semibold text-4xl">Qulture Clone</h1>

                <p>Esse é um projeto de estudo inspirado no layout do <a href="https://app.qulture.rocks/users/sign_in" className="font-bold">Qulture.Rocks</a></p>

                <Button className="cursor-pointer">
                    <a href="/login">Ir para o login</a>
                </Button>

            </div>
        </div>
    );
}
