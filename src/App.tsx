import { ThemeContext } from "./context"
import { darkTheme } from "./themes"
import { Main as MainPage } from "./pages"
import { Table } from "./components/table"
import { useData } from "./hooks"


function App() {
  const data = useData();
  return (
    <div className="App">
      <ThemeContext.Provider value={darkTheme}>
        <MainPage>
          <Table event={data}/>
        </MainPage>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
