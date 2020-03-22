import Head from '../head';
import '../../public/tailwind.css';
import { useAuth } from 'use-auth0-hooks';
import { useState } from 'react';


function Layout(props) {
    const { isAuthenticated, login, logout } = useAuth();
    const [showMenu, setShowMenu] = useState(true);

    return (<div>
        <Head title={props.title} />
        <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">admin panel.</span>
            </div>
            <div className="block lg:hidden">
                <button 
                    onClick={() => setShowMenu(!showMenu)}
                    className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white"
                >
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className={"w-full block flex-grow lg:flex lg:items-center lg:w-auto" + (showMenu ? ' sm:hidden' : '')}>
                <div className="text-sm lg:flex-grow">
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-blue-100 hover:text-white mr-4">
                        Update Profile
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-blue-100 hover:text-white mr-4">
                        Manage Podcast
                    </a>
                </div>
                <div onClick={isAuthenticated ? ()=>logout() : ()=>login()}>
                    {isAuthenticated ? (
                        <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0">Logout</a>
                    ) : (
                        <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0">Login</a>
                    )}
                </div>
            </div>
        </nav>
        {props.children}
    </div>);
}

export default Layout;