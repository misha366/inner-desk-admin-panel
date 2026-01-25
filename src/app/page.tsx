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
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Total Users" value="1,234" change="+12%" />
        <StatCard title="Revenue" value="$45,678" change="+8%" />
        <StatCard title="Active Sessions" value="342" change="-3%" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartPlaceholder title="User Growth" />
        <ChartPlaceholder title="Revenue Overview" />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <ChartPlaceholder title="Monthly Statistics" height="h-64" />
      </div>
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: string;
  change: string;
}

function StatCard({ title, value, change }: StatCardProps) {
  const isPositive = change.startsWith("+");

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-semibold text-gray-900 mt-1">{value}</p>
      <p className={`text-sm mt-2 ${isPositive ? "text-green-600" : "text-red-600"}`}>
        {change} from last month
      </p>
    </div>
  );
}

interface ChartPlaceholderProps {
  title: string;
  height?: string;
}

function ChartPlaceholder({ title, height = "h-48" }: ChartPlaceholderProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-sm font-medium text-gray-900 mb-4">{title}</h3>
      <div className={`${height} bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center`}>
        <span className="text-gray-400">Chart placeholder</span>
      </div>
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
