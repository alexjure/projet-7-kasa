import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Default from '../layouts/Default'
import Blank from '../layouts/Blank'
import Cart from '../pages/Cart/Cart'
import FicheLogement from '../pages/FicheLogement/FicheLogement'
import Error from '../pages/Error404/Error404'
const Router = () => {

    return (
        <BrowserRouter>
            <Routes>

                <Route element={<Default />}>
                    <Route path="/" element={<Cart />} />
                    <Route path="/logement/:id" element={
                    <>
                        <FicheLogement />
                    </>
                } />
               
                </Route>

                <Route element={<Blank />}>
                    <Route path='*' element={<Error />}></Route>
                </Route>

            </Routes>
        </BrowserRouter>
    )

};

export default Router;