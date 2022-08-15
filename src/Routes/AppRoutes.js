import { Routes, Route, Navigate } from 'react-router-dom'
// import Post from '../components/Post/Post'
import Posts from '../components/Posts/Posts'
import Sidebar from '../components/Sidebar/Sidebar'
import HomePage from '../pages/HomePage/HomePage'
// import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import SettingsPage from '../pages/SettingsPage/SettingsPage'
import SinglePage from '../pages/SinglePage/SinglePage.js'
import WritePage from '../pages/WritePage/WritePage.js'
import LoginPage from './../pages/LoginPage/LoginPage.js'
import SinglePost from '../components/SinglePost/SinglePost'


const AppRoutes = () => {
    const user = true
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/inicio-sesion' element={user ? <HomePage /> : <LoginPage />} />
                <Route path='*' element={<Navigate to="/" />} />
                <Route path='/registro' element={user ? <HomePage /> : <RegisterPage />} />
                <Route path='/ajustes' element={user ? <SettingsPage /> : <HomePage />} />
                <Route path='/write' element={user ? <WritePage /> : <RegisterPage />} />
                <Route path='/about' element={<Sidebar />} />
                <Route path='/post/:PostId' element={<SinglePost />} />
            </Routes>
        </>
    )
}

export default AppRoutes