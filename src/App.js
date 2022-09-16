import TheLayout from "./TheLayout";
import { BrowserRouter } from "react-router-dom";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <TheLayout></TheLayout>
            </BrowserRouter>
        </div>
    );
}

export default App;
