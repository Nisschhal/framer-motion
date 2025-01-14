import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import DrawerApp from "./DrawerApp"
// import ResponsiveApp from "./Responsive.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DrawerApp />
    {/* <ResponsiveApp /> */}
  </StrictMode>
)
