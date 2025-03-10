import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";

export default function RouterProvider() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    )
}