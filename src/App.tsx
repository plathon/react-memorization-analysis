import { useId } from "react"
import { ThemeContext } from "./context"
import { darkTheme } from "./themes"
import { Main as MainPage } from "./pages"
import { Table, Info } from "./components/table"


function App() {
  
  const data: Info[] = [
    {id: useId(), price: "001123.50", side: "LONG"},
    {id: useId(), price: "001124.50", side: "SHORT"},
    {id: useId(), price: "001121.00", side: "LONG"}
  ]

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
