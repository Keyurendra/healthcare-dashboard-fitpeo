import {
  LayoutDashboard,
  SortDesc,
  Calendar,
  PlusSquare,
  LineChart,
  MessageCircle,
  Phone,
  Settings
} from 'lucide-react';

export const generalNavItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: SortDesc, label: 'History' },
  { icon: Calendar, label: 'Calendar' },
  { icon: PlusSquare, label: 'Appointments' },
  { icon: LineChart, label: 'Statistics' }
];

export const toolsNavItems = [
  { icon: MessageCircle, label: 'Chat' },
  { icon: Phone, label: 'Support' }
];

export const settingsNavItems = [
  { icon: Settings, label: 'Setting' }
];
