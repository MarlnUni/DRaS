import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { BookOpen, Users2, ClipboardList, Calendar, BarChart2, MessageCircle, FileText, CheckCircle, TrendingUp, Bell, ArrowUpRight, Shield, Target, Award, Clock, GraduationCap, Briefcase, Zap } from 'lucide-react';

const stats = [
  { label: 'Active Courses', value: '2', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Total Trainees', value: '77', icon: Users2, color: 'text-green-600', bg: 'bg-green-50' },
  { label: 'Pending Assessments', value: '8', icon: ClipboardList, color: 'text-purple-600', bg: 'bg-purple-50' },
  { label: 'Training Hours', value: '1,240', icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-50' },
];

const messages = [
  { name: 'Alex Chen', time: '10:15 AM', msg: 'Need clarification on AI threat detection module', avatar: '', color: 'bg-blue-200' },
  { name: 'Maria Rodriguez', time: 'Yesterday', msg: 'Completed UAV simulation exercise', avatar: '', color: 'bg-green-200' },
  { name: 'James Wilson', time: '2 days ago', msg: 'Request for additional practical sessions', avatar: '', color: 'bg-yellow-200' },
];

const activities = [
  { icon: CheckCircle, desc: 'Graded AI Defence Systems project submissions.', time: '5 min ago', color: 'text-blue-600' },
  { icon: FileText, desc: 'Updated UAV system design guidelines.', time: '30 min ago', color: 'text-green-600' },
  { icon: BarChart2, desc: 'Conducted practical assessment for autonomous navigation.', time: '1 hr ago', color: 'text-yellow-600' },
  { icon: Users2, desc: 'Led hands-on training session for computer vision applications.', time: '3 hr ago', color: 'text-purple-600' },
];

const noticeBoard = [
  { title: 'Defence Industry Certification', desc: 'Final certification exams scheduled for next month.', date: 'Oct 10, 2024', by: 'Training Director', views: 45 },
  { title: 'Practical Assessment Week', desc: 'Hands-on assessments for both courses this week.', date: 'Oct 8, 2024', by: 'Training Coordinator', views: 38 },
  { title: 'Industry Expert Guest Lecture', desc: 'Retired military officer to speak on real-world applications.', date: 'Oct 5, 2024', by: 'Program Manager', views: 42 },
];

const courseProgress = [75, 82, 68, 90, 85, 78, 88];
const skillDevelopment = [80, 85, 70, 92, 88, 82, 90];

const quickAccess = [
  { label: 'Skill Assessment', icon: Target, color: 'bg-blue-100', href: '#' },
  { label: 'Practical Modules', icon: Briefcase, color: 'bg-green-100', href: '#' },
  { label: 'Industry Standards', icon: Shield, color: 'bg-yellow-100', href: '#' },
];

const events = [
  { time: '9:00 AM', title: 'AI Defence Lab Session', desc: 'Practical AI threat detection training' },
  { time: '11:00 AM', title: 'UAV Flight Simulation', desc: 'Autonomous platform control training' },
  { time: '2:00 PM', title: 'Industry Standards Review', desc: 'Defence certification preparation' },
];

const vocationalMetrics = [
  { label: 'Practical Skills Mastery', value: '87%', progress: 87, color: 'bg-green-500' },
  { label: 'Industry Standards Compliance', value: '92%', progress: 92, color: 'bg-blue-500' },
  { label: 'Hands-on Training Completion', value: '78%', progress: 78, color: 'bg-yellow-500' },
  { label: 'Defence Certification Readiness', value: '85%', progress: 85, color: 'bg-purple-500' },
];

const courseOverview = [
  {
    name: 'AI401 - Artificial Intelligence for Defence Applications',
    trainees: 42,
    progress: 75,
    nextAssessment: 'AI Threat Detection Practical',
    status: 'active'
  },
  {
    name: 'AP402 - Autonomous Platforms in Defence Applications',
    trainees: 35,
    progress: 68,
    nextAssessment: 'UAV System Design Project',
    status: 'active'
  }
];

export default function InstructorDashboard() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar role="instructor" />
      <div className="flex-1 overflow-auto p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <Shield size={32} />
                <h1 className="text-2xl font-bold">Defence Training Dashboard</h1>
              </div>
              <p className="text-blue-100">Vocational Training Program - 1 Year Duration</p>
            </div>

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

            {/* Course Overview */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
              <div className="font-semibold text-gray-700 dark:text-gray-100 mb-4 flex items-center gap-2">
                <BookOpen size={20} />
                Course Overview
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courseOverview.map((course, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-sm">{course.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        course.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-300' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                      }`}>
                        {course.status}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-300">Trainees:</span>
                        <span className="font-medium text-gray-800 dark:text-gray-100">{course.trainees}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-300">Progress:</span>
                        <span className="font-medium text-gray-800 dark:text-gray-100">{course.progress}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-300">Next Assessment:</span>
                        <span className="font-medium text-gray-800 dark:text-gray-100 text-xs">{course.nextAssessment}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vocational Metrics */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
              <div className="font-semibold text-gray-700 dark:text-gray-100 mb-4 flex items-center gap-2">
                <Award size={20} />
                Vocational Training Metrics
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {vocationalMetrics.map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-100">{metric.label}</span>
                      <span className="text-sm font-bold text-gray-800 dark:text-gray-100">{metric.value}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${metric.color}`}
                        style={{ width: `${metric.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Course Progress (Line Chart) */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-semibold text-gray-700 dark:text-gray-100">Training Progress</div>
                  <select className="border rounded px-2 py-1 text-sm dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700">
                    <option>Last 7 Sessions</option>
                    <option>This Month</option>
                  </select>
                </div>
                {/* Mock Line Chart */}
                <svg viewBox="0 0 320 100" className="w-full h-28">
                  <polyline
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="3"
                    points="0,90 50,80 100,70 150,60 200,50 250,40 300,30"
                  />
                  <circle cx="300" cy="30" r="6" fill="#2563eb" />
                  <text x="310" y="28" fontSize="12" fill="#2563eb">88%</text>
                </svg>
              </div>
              {/* Skill Development (Bar Chart) */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-semibold text-gray-700 dark:text-gray-100">Skill Development</div>
                  <select className="border rounded px-2 py-1 text-sm dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700">
                    <option>Last 7 Sessions</option>
                    <option>This Month</option>
                  </select>
                </div>
                {/* Mock Bar Chart */}
                <svg viewBox="0 0 320 100" className="w-full h-28">
                  {skillDevelopment.map((val, i) => (
                    <rect key={i} x={20 + i * 40} y={100 - val} width="24" height={val} fill="#22c55e" />
                  ))}
                </svg>
              </div>
            </div>

            {/* Middle Widgets */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Messages */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col">
                <div className="font-semibold text-gray-700 dark:text-gray-100 mb-2 flex items-center gap-2"><MessageCircle size={18}/> Trainee Messages</div>
                <div className="flex-1 flex flex-col gap-3">
                  {messages.map((msg, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${msg.color}`}>
                        <Users2 size={28} className="text-white" />
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
              {/* Quick Access */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col gap-4 items-center justify-center">
                <div className="font-semibold text-gray-700 dark:text-gray-100 mb-2 flex items-center gap-2"><ArrowUpRight size={18}/> Quick Access</div>
                <div className="flex gap-4">
                  {quickAccess.map((q, i) => (
                    <a key={i} href={q.href} className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-sm ${q.color} hover:bg-opacity-80 transition`}>
                      <q.icon size={28} className="mb-1 text-blue-700" />
                      <span className="font-semibold text-gray-700 text-sm">{q.label}</span>
                    </a>
                  ))}
                </div>
              </div>
              {/* Upcoming Events */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col">
                <div className="font-semibold text-gray-700 dark:text-gray-100 mb-2 flex items-center gap-2"><Calendar size={18}/> Training Schedule</div>
                <div className="flex flex-col gap-3">
                  {events.map((e, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Zap size={22} className="text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800 text-sm">{e.title}</div>
                        <div className="text-xs text-gray-500">{e.desc}</div>
                      </div>
                      <div className="text-xs text-gray-400 whitespace-nowrap">{e.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Notice Board */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
              <div className="font-semibold text-gray-700 dark:text-gray-100 mb-2 flex items-center gap-2"><Bell size={18}/> Training Notices</div>
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

            {/* Recent Activity */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
              <div className="font-semibold text-gray-700 dark:text-gray-100 mb-2 flex items-center gap-2"><TrendingUp size={18}/> Training Activities</div>
              <div className="flex flex-col gap-3">
                {activities.map((a, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <a.icon size={22} className={a.color} />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800 dark:text-gray-100 text-sm">{a.desc}</div>
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-300 whitespace-nowrap">{a.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}