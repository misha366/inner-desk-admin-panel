import Tabs from "@/components/Tabs";

export default function Home() {
  const tabs = [
    {
      id: "dashboard",
      label: "Dashboard",
      content: <DashboardContent />,
    },
    {
      id: "users",
      label: "Users",
      content: <UsersContent />,
    },
    {
      id: "settings",
      label: "Settings",
      content: <SettingsContent />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-slate-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-xl font-semibold text-white">Admin Panel</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Tabs tabs={tabs} defaultTabId="dashboard" />
      </main>
    </div>
  );
}

function DashboardContent() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Dashboard</h2>
      <p className="text-gray-600">Welcome to the admin panel.</p>
    </div>
  );
}

function UsersContent() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Users</h2>
      <p className="text-gray-600">User management section.</p>
    </div>
  );
}

function SettingsContent() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Settings</h2>
      <p className="text-gray-600">Application settings.</p>
    </div>
  );
}
