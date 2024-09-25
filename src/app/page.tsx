import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col justify-between overflow-auto pb-4 px-8 md:px-16 lg:px-32">
      <MainDisplay />
      <MainButtons />
    </main>
  );
}

const MainDisplay = () => (
  <div className="flex flex-1 flex-col justify-center gap-8 md:gap-12 items-center">
    <h1 className="text-custom_mint font-gloria font-bold text-5xl md:text-6xl tracking-wide">
      lapagan
    </h1>
    <h2 className="lg:w-[60%] break-words text-custom_mint/80 font-comfortaa text-justify md:text-center lg:text-justify text-xl">
      Express your ideas, share them quick. Appreciate every thoughts that make
      us all unique.
    </h2>
  </div>
);

const MainButtons = () => (
  <div className="grid lg:grid-cols-3 gap-4">
    <button className="lg:col-span-2 rounded-3xl bg-custom_air flex flex-col items-center justify-center gap-6 p-6 transition-all ease-out hover:scale-[1.02] duration-300">
      <Link href="/public-feed/create-anonymous-note">
        <h3 className="font-comfortaa text-custom_raisin text-2xl font-bold">
          Post Anonymously
        </h3>
        <h4 className="font-comfortaa text-custom_raisin/80 text-lg break-words text-center">
          Create an anonymous post.
        </h4>
      </Link>
    </button>
    <button
      disabled
      className="cursor-not-allowed bg-custom_payne rounded-3xl flex flex-col items-center justify-center gap-6 p-6 transition-all ease-out duration-300"
    >
      <h3 className="font-comfortaa text-custom_mint/80 text-2xl font-bold">
        Accounts
      </h3>
      <h4 className="max-md:hidden font-comfortaa text-custom_mint/80 text-lg break-words text-center">
        Login to an existing account or create a new one.
      </h4>
    </button>
    <button className="lg:col-span-3 rounded-3xl flex flex-col items-center justify-center bg-custom_columbia/80 p-6 transition-all hover:scale-[1.02] ease-out duration-300">
      <h3 className="font-comfortaa text-custom_raisin text-2xl font-bold break-words">
        Check out what others have shared!
      </h3>
    </button>
    <button
      disabled
      className="cursor-not-allowed lg:col-span-3 rounded-3xl flex flex-col items-center justify-center bg-custom_raisin p-6 transition-all ease-out duration-300"
    >
      <h3 className="font-comfortaa text-custom_mint/80 text-2xl font-bold">
        What is lapagan?
      </h3>
    </button>
  </div>
);
