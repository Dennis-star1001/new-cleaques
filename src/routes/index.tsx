// TODO: lazy load pages components
import {
  Event_details,
  ProductPage,
  ServiceDetailPage,
  ServicePage,
  SocialDetailPage,
  SocialPage
} from '@/pages';
import { path } from './path';
import { createBrowserRouter } from 'react-router-dom';
import EventPage from '@/pages/event/Event';
import { DashboardLayout } from '@/components';
import { GossipPage } from '@/pages/gossip';
import Donations from '@/pages/donations/Donations';
import DonationDetails from '@/pages/donations/DonationDetails';
import UserManagement from '@/pages/donations/UserManagement/Donation';
import DonationUserManagement from '@/pages/donations/UserManagement/Donation';
import BookingUserManagement from '@/pages/donations/UserManagement/Booking';

import TicketUserManagement from '@/pages/donations/UserManagement/Ticket';
import RewardUserManagement from '@/pages/donations/UserManagement/Reward/Reward';
import PointUserManagement from '@/pages/donations/UserManagement/Point';
import NigerianDomiciallyAccount from '@/pages/donations/UserManagement/Reward/DepositeToBank/NigerianDomiciallyAccount';
import NigeriaLocalGov from '@/pages/donations/UserManagement/Reward/DepositeToBank/NigeriaLocalGov';
import USAccount from '@/pages/donations/UserManagement/Reward/DepositeToBank/USAccount';
import SharePoints from '@/pages/donations/UserManagement/Reward/SharePoint/SharePoint';
import BuyMorePoints from '@/pages/donations/UserManagement/Reward/BuyMorePoint/BuyMorePoints';

export const router = createBrowserRouter([
  {
    path: path.HOME,
    element: <div>Home page goes here</div>
  },
  {
    path: path.CHAT,
    element: <div>Chat page goes here</div>
  },
  {
    path: path.DONATIONS,
    element: <Donations />
  },
  {
    path: path.DONATION_DETAILS,
    element: <DonationDetails />
  },
  {
    path: path.SHOP,
    element: <div>Shop page goes here</div>
  },
  {
    path: path.PRODUCT,
    element: <ProductPage />
  },
  {
    path: path.SERVICES,
    element: <ServicePage />
  },
  {
    path: path.SERVICES_DETAIL,
    element: <ServiceDetailPage />
  },
  {
    path: path.EVENTS,
    element: <EventPage />
  },
  {
    path: path.EVENTS_DETAILS,
    element: <Event_details />
  },
  {
    path: path.SOCIAL,
    element: <DashboardLayout />,
    children: [
      {
        path: path.SOCIAL,
        element: <SocialPage />
      },
      {
        path: path.SOCIAL_DETAIL,
        element: <SocialDetailPage />
      }
    ]
  },
  {
    path: path.GOSSIP,
    element: <DashboardLayout />,
    children: [
      {
        path: path.GOSSIP,
        element: <GossipPage />
      }
    ]
  }
  ,
  {
    path: path.DONATION_USER_MANAGEMENT,
    element: <DonationUserManagement />,
  },
  {
    path: path.POINT_USER_MANAGEMENT,
    element: <PointUserManagement />,
  },
 {
  path:path.BOOKINGS_USER_MANAGEMENT,
  element:<BookingUserManagement/>
 },
 {
  path:path.REWARD_USER_MANAGEMENT,
  element:<RewardUserManagement/>
 },
 {
  path:path.TICKET_USER_MANAGEMENT,
  element:<TicketUserManagement/>
 },
 {
  path:path.NIGERIA_DOMICIALLY_ACCOUNT,
  element:<NigerianDomiciallyAccount/>
 },
 {
  path:path.NIGERIA_LOCAL_GOVERNMENT,
  element:<NigeriaLocalGov/>
 },
 {
  path:path.US_ACCOUNT,
  element:<USAccount/>
 },
 {
  path:path.SHARE_POINTS,
  element:<SharePoints/>
 },
 {
  path:path.BUY_MORE_POINTS,
  element:<BuyMorePoints/>
 }
]);
