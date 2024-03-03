import { Route, Routes } from "react-router-dom";
import { LoginPages } from "../auth/pages";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<LoginPages />} />
                <Route path='/*' element={<HeroesRoutes/>}/>
            </Routes>
        </>
    );
};
