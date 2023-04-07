import React from 'react';
import Login from './login/login';
import Navigation from './navigation/navigation';
import {
    BrowserRouter,
    Route,
    Routes,
    createRoutesFromElements,
} from 'react-router-dom';
import TemplateSongs from './templateSongs/templateSongs';
import TemplatePlaylist from './templatePlaylist/templatePlaylist';
import TemplateFavorites from './templateFavorites/templateFavorites';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />}></Route>
                <Route path="firstPage" element={<Navigation />}>
                    <Route path="songs" element={<TemplateSongs />} />
                    <Route path="playlist" element={<TemplatePlaylist />} />
                    <Route path="favorites" element={<TemplateFavorites />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
