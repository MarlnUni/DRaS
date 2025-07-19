import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { Users2, UserCircle, BookOpen, Award, BarChart2, DollarSign, MessageCircle, Calendar, Bell, TrendingUp, PieChart, CheckCircle, Clock, FileText, ArrowUpRight, Shield, Target, Zap } from 'lucide-react';

const stats = [
  { label: 'Trainees', value: '77', icon: Users2, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Instructors', value: '4', icon: UserCircle, color: 'text-green-600', bg: 'bg-green-50' },
  { label: 'Defence Programs', value: '2', icon: BookOpen, color: 'text-purple-600', bg: 'bg-purple-50' },
  { label: 'Training Revenue', value: '$124,500', icon: DollarSign, color: 'text-yellow-600', bg: 'bg-yellow-50' },
];

const messages = [
  { name: 'Training Director', time: '2:00 PM', msg: 'Defence industry certification exam dates finalized.', avatar: '', color: 'bg-blue-200' },
  { name: 'Instructor Chen', time: '12:45 PM', msg: 'AI Defence Lab equipment maintenance scheduled.', avatar: '', color: 'bg-green-200' },
  { name: 'Program Manager', time: '10:30 AM', msg: 'Industry expert guest lecture confirmed for next week.', avatar: '', color: 'bg-yellow-200' },
  { name: 'Defence Coordinator', time: '7:45 AM', msg: 'UAV simulation center upgrades completed.', avatar: '', color: 'bg-purple-200' },
];

const activities = [
  { icon: CheckCircle, desc: 'Trainee Alex registered for AI401 Defence Applications.', time: '2 min ago', color: 'text-blue-600' },
  { icon: Award, desc: 'Instructor Rodriguez submitted assessment grades for AP402.', time: '10 min ago', color: 'text-green-600' },
  { icon: Bell, desc: 'Trainee Maria created a support ticket for lab access.', time: '30 min ago', color: 'text-yellow-600' },
  { icon: FileText, desc: 'IT administrator updated defence training protocols.', time: '1 hr ago', color: 'text-purple-600' },
  { icon: Users2, desc: 'Trainee James downloaded UAV system design guidelines.', time: '2 hr ago', color: 'text-blue-600' },
];

const noticeBoard = [
  { title: 'Defence Industry Certification', desc: 'Final certification exams scheduled for next month. All trainees must register.', date: 'Oct 10, 2024', by: 'Training Director', views: 45 },
  { title: 'Practical Assessment Week', desc: 'Hands-on assessments for both defence courses this week.', date: 'Oct 8, 2024', by: 'Training Coordinator', views: 38 },
  { title: 'Industry Expert Guest Lecture', desc: 'Retired military officer to speak on real-world defence applications.', date: 'Oct 5, 2024', by: 'Program Manager', views: 42 },
  { title: 'Defence Technology Showcase', desc: 'Annual showcase of autonomous platforms and AI defence systems.', date: 'Oct 3, 2024', by: 'Defence Coordinator', views: 35 },
];

const traineeDistribution = [
  { year: 2022, value: 45, color: 'fill-blue-500' },
  { year: 2023, value: 52, color: 'fill-green-500' },
  { year: 2024, value: 77, color: 'fill-yellow-500' },
  { year: 2025, value: 89, color: 'fill-purple-500' },
];

const traineeActivity = [
  { label: 'AI Defence Systems Competition', desc: '1st Place Winner', days: '2 days ago', icon: Award },
  { label: 'Autonomous Platform Design', desc: 'Best Innovation Award', days: '5 days ago', icon: TrendingUp },
  { label: 'Defence Technology Workshop', desc: 'Lead Organizer', days: '9 days ago', icon: Users2 },
  { label: 'UAV Flight Simulation', desc: 'Perfect Score', days: '12 days ago', icon: CheckCircle },
];

const calendarEvents = [
  { time: '9:00 AM', title: 'AI Defence Lab Session', desc: 'Practical AI threat detection training', audience: 'AI401 Trainees' },
  { time: '1:00 PM', title: 'UAV Flight Simulation', desc: 'Autonomous platform control training', audience: 'AP402 Trainees' },
  { time: '7:00 PM', title: 'Defence Industry Networking', desc: 'Hosted by Defence Technology Club', audience: 'All Trainees' },
];

export default function AdminDashboard() {
  const [selectedMonth] = useState('June');
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar role="admin" />
      <div className="flex-1 overflow-auto p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className={`rounded-xl shadow p-6 flex items-center gap-4 ${stat.bg} dark:bg-gray-800`}>
                  <stat.icon size={36} className={stat.color} />
                  <div>
                    <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">{stat.value}</div>
                    <div className="text-gray-500 dark:text-gray-300 text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Training Performance (Line Chart) */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-semibold text-gray-700 dark:text-gray-100">Training Performance</div>
                  <select className="border rounded px-2 py-1 text-sm dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700">
                    <option>Last 4 Years</option>
                    <option>Last 2 Years</option>
                  </select>
                </div>
                {/* Mock Line Chart */}
                <svg viewBox="0 0 320 100" className="w-full h-28">
                  <polyline
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="3"
                    points="0,80 40,70 80,60 120,50 160,40 200,45 240,55 280,60 320,50"
                  />
                  <circle cx="160" cy="40" r="6" fill="#2563eb" />
                  <text x="170" y="38" fontSize="12" fill="#2563eb">87%</text>
                </svg>
              </div>
              {/* Training Revenue (Bar Chart) */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-semibold text-gray-700 dark:text-gray-100">Training Revenue</div>
                  <select className="border rounded px-2 py-1 text-sm dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700">
                    <option>Last Quarter</option>
                    <option>This Year</option>
                  </select>
                </div>
                {/* Mock Bar Chart */}
                <svg viewBox="0 0 320 100" className="w-full h-28">
                  <rect x="20" y="60" width="20" height="40" fill="#2563eb" />
                  <rect x="60" y="50" width="20" height="50" fill="#22c55e" />
                  <rect x="100" y="40" width="20" height="60" fill="#2563eb" />
                  <rect x="140" y="30" width="20" height="70" fill="#22c55e" />
                  <rect x="180" y="50" width="20" height="50" fill="#2563eb" />
                  <rect x="220" y="60" width="20" height="40" fill="#22c55e" />
                  <rect x="260" y="45" width="20" height="55" fill="#2563eb" />
                </svg>
              </div>
            </div>

            {/* Middle Widgets */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Messages */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col">
                <div className="font-semibold text-gray-700 dark:text-gray-100 mb-2 flex items-center gap-2"><MessageCircle size={18}/> Messages</div>
                <div className="flex-1 flex flex-col gap-3">
                  {messages.map((msg, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${msg.color}`}>
                        <UserCircle size={28} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800 text-sm">{msg.name}</div>
                        <div className="text-xs text-gray-500">{msg.msg}</div>
                      </div>
                      <div className="text-xs text-gray-400 whitespace-nowrap">{msg.time}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Student Distribution (Pie/Donut) */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center justify-center">
                <div className="font-semibold text-gray-700 dark:text-gray-100 mb-2 flex items-center gap-2"><PieChart size={18}/> Trainees</div>
                {/* Mock Donut Chart */}
                <svg viewBox="0 0 120 120" width="100" height="100">
                  <circle r="50" cx="60" cy="60" fill="#e5e7eb" />
                  <path d="M60 60 L60 10 A50 50 0 0 1 108.78 85.45 Z" className="fill-blue-500" />
                  <path d="M60 60 L108.78 85.45 A50 50 0 0 1 25.24 97.55 Z" className="fill-green-500" />
                  <path d="M60 60 L25.24 97.55 A50 50 0 0 1 11.22 34.55 Z" className="fill-yellow-500" />
                  <path d="M60 60 L11.22 34.55 A50 50 0 0 1 60 10 Z" className="fill-purple-500" />
                </svg>
                <div className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-2">77</div>
                <div className="text-xs text-gray-500 dark:text-gray-300">Total Trainees</div>
                <div className="flex flex-col gap-1 mt-2 w-full">
                  {traineeDistribution.map((s) => (
                    <div key={s.year} className="flex items-center gap-2 text-xs">
                      <span className={`inline-block w-3 h-3 rounded-full ${s.color}`}></span>
                      <span className="font-semibold">{s.year}</span>
                      <span className="ml-auto">{s.value} trainees</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Trainee Activity */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col">
                <div className="font-semibold text-gray-700 dark:text-gray-100 mb-2 flex items-center gap-2"><BarChart2 size={18}/> Trainee Activity</div>
                <div className="flex flex-col gap-3">
                  {traineeActivity.map((a, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <a.icon size={22} className="text-blue-600" />
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800 text-sm">{a.label}</div>
                        <div className="text-xs text-gray-500">{a.desc}</div>
                      </div>
                      <div className="text-xs text-gray-400 whitespace-nowrap">{a.days}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Notice Board */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
              <div className="font-semibold text-gray-700 dark:text-gray-100 mb-2 flex items-center gap-2"><Bell size={18}/> Notice Board</div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="text-gray-500 dark:text-gray-300">
                      <th className="py-2 px-2 text-left">Title</th>
                      <th className="py-2 px-2 text-left">By</th>
                      <th className="py-2 px-2 text-left">Date</th>
                      <th className="py-2 px-2 text-right">Views</th>
                    </tr>
                  </thead>
                  <tbody>
                    {noticeBoard.map((n, i) => (
                      <tr key={i} className="border-t dark:border-gray-700">
                        <td className="py-2 px-2 font-semibold text-blue-700 dark:text-blue-400">{n.title}</td>
                        <td className="py-2 px-2">{n.by}</td>
                        <td className="py-2 px-2">{n.date}</td>
                        <td className="py-2 px-2 text-right">{n.views}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Sidebar Widgets */}
          <div className="w-full lg:w-80 flex flex-col gap-6">
            {/* Calendar */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
              <div className="font-semibold text-gray-700 dark:text-gray-100 mb-2 flex items-center gap-2"><Calendar size={18}/> October 2027</div>
              {/* Simple Calendar Mock */}
              <div className="grid grid-cols-7 gap-1 text-xs text-center mb-2">
                {[...'SMTWTFS'].map((d, i) => <div key={i} className="font-bold text-gray-400 dark:text-gray-500">{d}</div>)}
                {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                  <div key={d} className={`py-1 rounded-full ${d === 15 ? 'bg-blue-600 text-white font-bold' : 'text-gray-700 dark:text-gray-200'}`}>{d}</div>
                ))}
              </div>
            </div>
            {/* Schedule */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
              <div className="font-semibold text-gray-700 dark:text-gray-100 mb-2 flex items-center gap-2"><Clock size={18}/> Schedule</div>
              <div className="flex flex-col gap-3">
                {calendarEvents.map((e, i) => (
                  <div key={i} className="flex flex-col border-l-4 pl-3" style={{ borderColor: '#2563eb' }}>
                    <div className="text-xs text-gray-400 dark:text-gray-300">{e.time}</div>
                    <div className="font-semibold text-gray-800 dark:text-gray-100">{e.title}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-300">{e.desc}</div>
                    <div className="text-xs text-blue-600 dark:text-blue-400">{e.audience}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Recent Activities */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
              <div className="font-semibold text-gray-700 dark:text-gray-100 mb-2 flex items-center gap-2"><TrendingUp size={18}/> Recent Activities</div>
              <div className="flex flex-col gap-3">
                {activities.map((a, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <a.icon size={18} className={a.color} />
                    <div className="flex-1 text-xs">
                      <span className="font-medium text-gray-700 dark:text-gray-100">{a.desc}</span>
                      <div className="text-gray-400 dark:text-gray-300">{a.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Upgrade Widget */}
            <div className="bg-blue-50 dark:bg-blue-900 rounded-xl shadow p-6 flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-blue-700 font-bold"><ArrowUpRight size={20}/> Go Pro with MarLn</div>
              <div className="text-xs text-gray-500 text-center">Upgrade to MarLn Pro for advanced features and support</div>
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">Upgrade Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
