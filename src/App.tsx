//import './App.css'
import { Route, Routes,  } from "react-router-dom"
import Home from "@pages/Home"
import FAQs from "@pages/FAQs"
import "@mantine/carousel/styles.css"
import Shop from "@pages/Shop"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/shop" element={<Shop/>}/>

        </Routes>
    )
}

export default App
