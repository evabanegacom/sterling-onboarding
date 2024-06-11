import React from "react";

const Dashboard = React.lazy(() => import('./dashboard/dashboard.jsx'));
const Login = React.lazy(() => import('./auth/login.jsx'));
const AdminOverview = React.lazy(() => import('./dashboard/admin-overview.jsx'));
const ProfileNewHires = React.lazy(() => import('./dashboard/profile-new-hires/profile-new-hires.jsx'));
const OnboardingBatch = React.lazy(() => import('./dashboard/onboarding-batches/onboarding-batch.jsx'));
const JobRoleUpload = React.lazy(() => import('./dashboard/job-role-upload/job-role-upload.jsx'));
const routes = [
    { path: '/login', component: <Login />},
    {
        path: '/admin',
        element: <Dashboard />,
        children: [
          { path: 'overview', element: <AdminOverview /> },
          { path: 'profile-new-hires', element: <ProfileNewHires /> },
          { path: 'onboarding-batch', element: <OnboardingBatch /> },
          {path: 'job-role-upload', element: <JobRoleUpload />},
          { path: '*', element: <h1>404</h1>}
        ],
      },
    ];

export default routes;