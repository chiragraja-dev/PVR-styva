export interface DashboardLayoutProps {
  children: (props: { setIsSidebarOpen: () => void }) => React.ReactNode;
}

export interface PageProps {
  setIsSidebarOpen: () => void;
}
