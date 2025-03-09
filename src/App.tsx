import "./App.css";
import { Button } from "./components/ui/button";
import { Decreament, increament } from "./redux/feature/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/feature/hook";

function App(){
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  const handleIncreament = (amount: number) => {
    dispatch(increament({ amount: amount }));
  };
  // console.log(count)

  return (
    <div>
      <Button onClick={() => handleIncreament(5)} className="ml-20 mt-10 mr-10">Increase by </Button>
      <Button onClick={() => handleIncreament(1)} className="ml-20 mt-10 mr-10">Increase</Button>
      <p>{count}</p>
      <Button onClick={() => dispatch(Decreament())} className="ml-20 mt-10 mr-10">Deacrease</Button>
      <div className="flex flex-col items-center justify-center min-h-svh">
      <Button>Click me</Button>
    </div>
    </div>
  );
}

export default App;


