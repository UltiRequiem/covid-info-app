export default function App() {
  const data = [
    { title: "lol", quantity: 33 },
    { title: "lol", quantity: 33 },
    { title: "lol", quantity: 33 },
    { title: "lol", quantity: 33 },
    { title: "lol", quantity: 33 },
    { title: "lol", quantity: 33 },
    { title: "lol", quantity: 33 },
    { title: "lol", quantity: 33 },
    { title: "lol", quantity: 33 },
    { title: "lol", quantity: 33 },
    { title: "lol", quantity: 33 },
    { title: "lol", quantity: 33 },
    { title: "lol", quantity: 33 },
  ];
  return (
    <div className="h-screen flex flex-col text-center">
      <header className="bg-yellow-500 p-4 text-3xl font-bold">Covid 19</header>

      <div className="flex-1 grid grid-cols-2 gap-4">
        {data.map((item) => (
          <Box {...item} />
        ))}
      </div>

      <footer className="bg-green-500 p-2 text-xl">Eliaz Bobadilla</footer>
    </div>
  );
}

const Box = (props: { title: string; quantity: number }) => {
  return (
    <section className="bg-blue-600 m-5 p-3 flex align-items content-center flex-col rounded-lg">
      <p>{props.title}</p>
      <p>{props.quantity}</p>
    </section>
  );
};
