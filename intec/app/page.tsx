

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full h-screen flex-col items-center justify-center">
        {/* <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white sm:items-start"></main> */}
        
        <div className="flex flex-col gap-4 items-center text-base font-medium sm:flex-row">
          <h1>Hola <b>Mundo...</b></h1>
        </div>
      </main>
    </div>
  );
};