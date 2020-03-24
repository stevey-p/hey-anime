import React from 'react';
import AdminLayout from '../../components/layout/admin';
import { useAuth } from 'use-auth0-hooks';
import { useRouter } from 'next/router';

const AdminHome = () => {
  const { isAuthenticated, isLoading, login, logout } = useAuth();
  const { pathname, query } = useRouter();
  const loginOptions = { appState: { returnTo: { pathname, query }}};

  return <AdminLayout title="[Hey, Anime!] - Admin">
    <div className="container mx-auto">
      {isAuthenticated ? (
        <p>You're logged in now. Yay! 🎉</p>
      ) : (
        <Card title="Whoops!" subTitle="Members only" backgroundImage="url('/images/da-mcashe-nezuko.png')">
          <>
            <p className="text-gray-700 text-base">
              It looks like you're not logged in! Ya gotta do that first.
            </p>
            <p className="text-gray-700 text-base" onClick={() => login(loginOptions)}>
              <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-blue border-blue hover:text-blue-500 hover:bg-blue mt-4 lg:mt-0">Login</a>
            </p>
          </>
        </Card>
      )}
    </div>
  </AdminLayout>;
};

const Card = (props) => {
  return <div className="max-w-sm w-full lg:max-w-full lg:flex px-4 py-16 box">
    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{"backgroundImage": props.backgroundImage}} title="Nezuko Character Artwork from https://www.deviantart.com/mcashe/art/Nezuko-Kamado-Artwork-820304047"></div>
    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div className="mb-8">
        <p className="text-sm text-gray-600 flex items-center">
          <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
          </svg>
          {props.subTitle || ''}
        </p>
        <div className="text-gray-900 font-bold text-xl mb-2">{props.title || 'Card Title'}</div>
        {props.children}
      </div>
    </div>
  </div>;
}

export default AdminHome;
