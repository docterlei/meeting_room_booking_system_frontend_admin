import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, Link, Outlet } from 'react-router-dom';
import { Index } from './pages/index';
import { ErrorPage } from './pages/errorPage';
import { UserManage } from './pages/userManage';
import { Login } from './pages/login';
import { Menu } from './pages/menu';
import { ModifyMenu } from './pages/modifyMenu';
import { InfoModify } from './pages/infoModify';
import { PasswordModify } from './pages/passwordModify';
import { MeetingRoomManage } from './pages/meetingRoomManage';
import { BookingManage } from './pages/bookingManage';
import { Statistics } from './pages/statistics';

const routes = [
  {
    path: "/",
    element: <Index></Index>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Menu></Menu>,
        children: [
          {
            path: '/',
            element: <MeetingRoomManage/>
          },
          {
            path: 'user_manage',
            element: <UserManage/>
          },
          {
            path: 'meeting_room_manage',
            element: <MeetingRoomManage/>
          },
          {
            path: 'booking_manage',
            element: <BookingManage />
          },
          {
            path: 'statistics',
            element: <Statistics/>
          },
        ]
      },
      {
        path: "/user",
        element: <ModifyMenu></ModifyMenu>,
        children: [
          {
            path: 'info_modify',
            element: <InfoModify/>
          },
          {
            path: 'password_modify',
            element: <PasswordModify/>
          },
        ]
    },
    
    ]
  },
  {
    path: "login",
    element: <Login />,
  }
];

export const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<RouterProvider router={router}/>);
