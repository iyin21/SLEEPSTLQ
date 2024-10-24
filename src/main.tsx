import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
//import "./index.css"
import "@mantine/core/styles.css"
import { MantineProvider, createTheme } from "@mantine/core"
import "./styles/global.scss"
import { BrowserRouter } from "react-router-dom"

const theme = createTheme({
    /** Put your mantine theme override here */
})
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <MantineProvider theme={theme}>
                <App />
            </MantineProvider>
        </BrowserRouter>
    </StrictMode>
)
