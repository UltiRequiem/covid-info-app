import { useEffect, useState } from "react";

const useCovidData = () => {
  const [totalCases, setTotalCases] = useState(0);
  const [casesPerDay, setCasesPerDay] = useState(0);

  const [totalDeaths, setTotalDeaths] = useState(0);
  const [deathsPerDay, setDeathsPerDay] = useState(0);

  const [totalRecoveries, setTotalRecoveries] = useState(0);
  const [recoveriesPerDay, setRecoveriesPerDay] = useState(0);

  const setupData = async () => {
    const historicalDataResponse = await fetch(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );

    const historicalData = await historicalDataResponse.json();

    const cases: number[] = Object.values(historicalData.cases);
    const deaths: number[] = Object.values(historicalData.deaths);
    const recoveries: number[] = Object.values(historicalData.recovered);

    const calculatedTotalCases = cases.reduce((acc, curr) => acc + curr);

    setTotalCases(calculatedTotalCases);
    setCasesPerDay(~~(calculatedTotalCases / cases.length));

    const calculatedTotalDeaths = deaths.reduce((acc, curr) => acc + curr);

    setTotalDeaths(calculatedTotalDeaths);
    setDeathsPerDay(~~(calculatedTotalDeaths / deaths.length));

    const calculatedTotalRecoveries = recoveries.reduce(
      (acc, curr) => acc + curr
    );

    setTotalRecoveries(calculatedTotalRecoveries);
    setRecoveriesPerDay(~~(calculatedTotalRecoveries / recoveries.length));
  };

  useEffect(() => {
    setupData();
  }, []);

  return {
    "Total Cases": totalCases,
    "Cases per Day (Promedy)": casesPerDay,
    "Total Deaths": totalDeaths,
    "Deaths per Day (Promedy)": deathsPerDay,
    "Total Recoveries": totalRecoveries,
    "Recoveries per day (Promedy)": recoveriesPerDay,
  };
};

export default function App() {
  const data = useCovidData();

  return (
    <div className="h-screen flex flex-col text-center">
      <header className="bg-yellow-500 p-4 text-3xl font-bold">Covid 19</header>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        {data ? (
          Object.keys(data).map((key) => (
            <Box title={key} quantity={data[key] as number} />
          ))
        ) : (
          <p className="text-2xl m-3">Loading...</p>
        )}
      </div>

      <footer className="bg-green-500 p-2 text-xl">Eliaz Bobadilla</footer>
    </div>
  );
}

const Box = (props: { title: string; quantity: number }) => {
  return (
    <section className="bg-blue-600 m-5 p-5 rounded-lg">
      <p>{props.title}</p>
      <div className="bg-blue-500 m-2 p-3">
        <p className="p-3">{props.quantity.toLocaleString()}</p>
      </div>
    </section>
  );
};
