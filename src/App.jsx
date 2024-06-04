import "./App.css";
import AppRouter from "./Components/AppRouter.jsx";
import { ConfigProvider } from "./Context/ConfigProvider.jsx";

function App() {
  return (
    <ConfigProvider>
      <AppRouter />
    </ConfigProvider>
  );
}

export default App;
