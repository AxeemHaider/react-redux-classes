import { useAppSelector } from "./Store/store";

const App = () => {
  const isOpen = useAppSelector((state) => state.wa.isOpen);
  return <div>working...</div>;
};
export default App;
