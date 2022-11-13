import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../../features/page/home/home.page"));
const Mate = lazy(() => import("../../features/mates/page/mate.page"));
const Dessert = lazy(() => import("../../features/dessert/page/dessert.page"));
const Sale = lazy(() => import("../../features/page/sales/sales"));

export function AppRoutes() {
    return (
        <Suspense>
            <Routes>
                <Route path="home" element={<Home />}></Route>
                <Route path="mate" element={<Mate />}></Route>
                <Route path="dessert" element={<Dessert />}></Route>
                <Route path="sale" element={<Sale />}></Route>
                <Route path="" element={<Home />}></Route>
                <Route path="*" element={<Navigate replace to="" />}></Route>
                {/* <Route
                    path="*"
                    element={<h1>No se encontró la ruta</h1>}
                ></Route>{" "} */}
            </Routes>
        </Suspense>
    );
}
