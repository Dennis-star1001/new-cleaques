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
import UserManagement from '@/pages/donations/UserManagement';
import VendorManagement from '@/pages/vendor/VendorManagement';
import VendorManagementDonation from '@/pages/vendor/Donation';
import ViewVendorDonation from '@/pages/vendor/ViewVendorDonation';
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
    path: path.USER_MANAGEMENT,
    element: <UserManagement />,
  },
  {
    path: path.VENDOR_MANAGEMENT,
    element: <VendorManagement />,
   
  },
  {
    path: path.VENDOR_MANAGEMENT_DONATIONS,
    element: <VendorManagementDonation />,
   
  },
  {
    path: path.VIEW_VENDOR_MANAGEMENT_DONATIONS,
    element: <ViewVendorDonation />,
   
  }
]);
