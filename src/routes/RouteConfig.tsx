import { lazy, Suspense } from "react";
import WebsiteLayout from "@/layouts/WebsiteLayout";
import { useRoutes } from "react-router-dom";
import LoadingSpinner from "@/containers/LoadingSpinner";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/Services"));
const Team = lazy(() => import("@/pages/Team"));
const Contact = lazy(() => import("@/pages/Contact"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("@/pages/TermsOfUse"));

const combinedRoutes = [
  {
    path: "/",
    element: <WebsiteLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "team", element: <Team /> },
      { path: "contact", element: <Contact /> },
      { path: "faq", element: <FAQ /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "terms-of-use", element: <TermsOfUse /> },
    ].map((route) => ({
      ...route,
      element: (
        <Suspense fallback={<LoadingSpinner />}>{route.element}</Suspense>
      ),
    })),
  },
];

const RoutesConfig: React.FC = () => {
  const element = useRoutes(combinedRoutes);
  return element;
};

export default RoutesConfig;
