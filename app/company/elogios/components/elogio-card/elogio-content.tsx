import Image from "next/image";

export function ElogioContent() {
    return (
        <div> {/** Conteudo */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <br />
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <br />

            <Image
                src={'/person-01.jpg'}
                alt=""
                width={600}
                height={400}
            />
            <br />

            <p>#CEMPORCENTOFOCO</p>
        </div>
    );
}