import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { BookOpen, Users2, Edit, Trash2, Plus, FileText, Video, Upload, X } from 'lucide-react';

const dummyCourses = [
  {
    id: 1,
    code: 'AI401',
    name: 'Artificial Intelligence for Defence Applications',
    semester: 'Fall 2024',
    students: 42,
    weeks: [
      {
        title: 'Week 1: AI Introduction & Market for Defence Applications',
        content: [
          { type: 'pdf', name: 'AI_Introduction_Defence.pdf', url: '#', id: 1 },
          { type: 'video', name: 'AI_Market_Defence_Overview.mp4', url: '#', id: 2 },
        ],
      },
      {
        title: 'Week 2: AI Applications for Cybersecurity',
        content: [
          { type: 'pdf', name: 'AI_Cybersecurity_Defence.pdf', url: '#', id: 3 },
          { type: 'video', name: 'Cyber_Threat_Detection_Demo.mp4', url: '#', id: 4 },
        ],
      },
      {
        title: 'Week 3: AI Logistics and Smart SCM',
        content: [
          { type: 'pdf', name: 'AI_Logistics_Smart_SCM.pdf', url: '#', id: 5 },
        ],
      },
      {
        title: 'Week 4: AI in Transportation',
        content: [
          { type: 'pdf', name: 'AI_Transportation_Defence.pdf', url: '#', id: 6 },
          { type: 'video', name: 'AI_Transport_Systems.mp4', url: '#', id: 7 },
        ],
      },
      {
        title: 'Week 5: Target Recognition and Monitoring using AI tools',
        content: [
          { type: 'pdf', name: 'Target_Recognition_AI.pdf', url: '#', id: 8 },
        ],
      },
      {
        title: 'Week 6: Threat Assessment',
        content: [
          { type: 'pdf', name: 'AI_Threat_Assessment.pdf', url: '#', id: 9 },
          { type: 'video', name: 'Threat_Assessment_Simulation.mp4', url: '#', id: 10 },
        ],
      },
      {
        title: 'Week 7: AI for Situational Awareness',
        content: [
          { type: 'pdf', name: 'AI_Situational_Awareness.pdf', url: '#', id: 11 },
        ],
      },
      {
        title: 'Week 8: AI aided Battlefield Healthcare',
        content: [
          { type: 'pdf', name: 'AI_Battlefield_Healthcare.pdf', url: '#', id: 12 },
          { type: 'video', name: 'Battlefield_Healthcare_AI.mp4', url: '#', id: 13 },
        ],
      },
      {
        title: 'Week 9: Planning artillery barrages for attack',
        content: [
          { type: 'pdf', name: 'AI_Artillery_Planning.pdf', url: '#', id: 14 },
        ],
      },
      {
        title: 'Week 10: Fusion of data and sensor feeds',
        content: [
          { type: 'pdf', name: 'Data_Fusion_Sensor_Feeds.pdf', url: '#', id: 15 },
          { type: 'video', name: 'Sensor_Data_Fusion_Demo.mp4', url: '#', id: 16 },
        ],
      },
      {
        title: 'Week 11: Intelligent support to command decision-making',
        content: [
          { type: 'pdf', name: 'AI_Command_Decision_Support.pdf', url: '#', id: 17 },
        ],
      },
      {
        title: 'Week 12: AI assisted war gaming simulation and training',
        content: [
          { type: 'pdf', name: 'AI_Wargaming_Simulation.pdf', url: '#', id: 18 },
          { type: 'video', name: 'Wargaming_Simulation_Training.mp4', url: '#', id: 19 },
        ],
      },
      {
        title: 'Week 13: Autonomous Air defence and missile shields',
        content: [
          { type: 'pdf', name: 'Autonomous_Air_Defence.pdf', url: '#', id: 20 },
        ],
      },
      {
        title: 'Week 14: Autonomous Mobile Warfare Platforms',
        content: [
          { type: 'pdf', name: 'Autonomous_Mobile_Warfare.pdf', url: '#', id: 21 },
          { type: 'video', name: 'Mobile_Warfare_Platforms.mp4', url: '#', id: 22 },
        ],
      },
      {
        title: 'Week 15: Autonomous Warfare Systems',
        content: [
          { type: 'pdf', name: 'Autonomous_Warfare_Systems.pdf', url: '#', id: 23 },
        ],
      },
      {
        title: 'Week 16: AI in Military satellites',
        content: [
          { type: 'pdf', name: 'AI_Military_Satellites.pdf', url: '#', id: 24 },
          { type: 'video', name: 'Military_Satellite_AI.mp4', url: '#', id: 25 },
        ],
      },
      {
        title: 'Week 17: Generative AI for Military Systems',
        content: [
          { type: 'pdf', name: 'Generative_AI_Military.pdf', url: '#', id: 26 },
        ],
      },
      {
        title: 'Week 18: AI deployment and implementation',
        content: [
          { type: 'pdf', name: 'AI_Deployment_Implementation.pdf', url: '#', id: 27 },
          { type: 'video', name: 'AI_Deployment_Guide.mp4', url: '#', id: 28 },
        ],
      },
    ],
    cover: '',
    lastUpdated: '2024-06-10',
  },
  {
    id: 2,
    code: 'AP402',
    name: 'Autonomous Platforms in Defence Applications',
    semester: 'Spring 2025',
    students: 35,
    weeks: [
      {
        title: 'Week 1: Unmanned Underwater Vessels (UUVs)',
        content: [
          { type: 'pdf', name: 'UUV_Introduction.pdf', url: '#', id: 29 },
          { type: 'video', name: 'UUV_Technology_Overview.mp4', url: '#', id: 30 },
        ],
      },
      {
        title: 'Week 2: Unmanned Surface Vessels (USVs)',
        content: [
          { type: 'pdf', name: 'USV_Technology.pdf', url: '#', id: 31 },
        ],
      },
      {
        title: 'Week 3: UUV and USV Applications',
        content: [
          { type: 'pdf', name: 'UUV_USV_Applications.pdf', url: '#', id: 32 },
          { type: 'video', name: 'UUV_USV_Applications_Demo.mp4', url: '#', id: 33 },
        ],
      },
      {
        title: 'Week 4: Autonomous Under Water Weapons Systems',
        content: [
          { type: 'pdf', name: 'Autonomous_Underwater_Weapons.pdf', url: '#', id: 34 },
        ],
      },
      {
        title: 'Week 5: Unmanned Ground Vehicles (UGVs)',
        content: [
          { type: 'pdf', name: 'UGV_Technology.pdf', url: '#', id: 35 },
          { type: 'video', name: 'UGV_Systems_Overview.mp4', url: '#', id: 36 },
        ],
      },
      {
        title: 'Week 6: UGV Applications',
        content: [
          { type: 'pdf', name: 'UGV_Applications.pdf', url: '#', id: 37 },
        ],
      },
      {
        title: 'Week 7: Aerial Drone/UAV Classifications',
        content: [
          { type: 'pdf', name: 'UAV_Classifications.pdf', url: '#', id: 38 },
        ],
      },
      {
        title: 'Week 8: Civil Vs Military Drones',
        content: [
          { type: 'pdf', name: 'Civil_vs_Military_Drones.pdf', url: '#', id: 39 },
          { type: 'video', name: 'Drone_Comparison_Analysis.mp4', url: '#', id: 40 },
        ],
      },
      {
        title: 'Week 9: Military Applications of Aerial Drones',
        content: [
          { type: 'pdf', name: 'Military_Drone_Applications.pdf', url: '#', id: 41 },
        ],
      },
      {
        title: 'Week 10: Types of Military Drones',
        content: [
          { type: 'pdf', name: 'Military_Drone_Types.pdf', url: '#', id: 42 },
          { type: 'video', name: 'Military_Drone_Types_Demo.mp4', url: '#', id: 43 },
        ],
      },
      {
        title: 'Week 11: Layout of military drones /subsystems/drone components',
        content: [
          { type: 'pdf', name: 'Military_Drone_Components.pdf', url: '#', id: 44 },
        ],
      },
      {
        title: 'Week 12: UAV Military Applications',
        content: [
          { type: 'pdf', name: 'UAV_Military_Applications.pdf', url: '#', id: 45 },
          { type: 'video', name: 'UAV_Military_Applications.mp4', url: '#', id: 46 },
        ],
      },
      {
        title: 'Week 13: Advanced Features of Drones/Unmanned Combat Aerial Vehicles (UCAV)',
        content: [
          { type: 'pdf', name: 'Advanced_Drone_Features.pdf', url: '#', id: 47 },
        ],
      },
      {
        title: 'Week 14: Anti Drone Systems',
        content: [
          { type: 'pdf', name: 'Anti_Drone_Systems.pdf', url: '#', id: 48 },
          { type: 'video', name: 'Anti_Drone_Technology.mp4', url: '#', id: 49 },
        ],
      },
      {
        title: 'Week 15: Swarm technologies for UAV/USV/UUVs',
        content: [
          { type: 'pdf', name: 'Swarm_Technologies.pdf', url: '#', id: 50 },
        ],
      },
      {
        title: 'Week 16: Stealth UAV/UUVs/USVs',
        content: [
          { type: 'pdf', name: 'Stealth_Autonomous_Platforms.pdf', url: '#', id: 51 },
          { type: 'video', name: 'Stealth_Technology_Overview.mp4', url: '#', id: 52 },
        ],
      },
    ],
    cover: '',
    lastUpdated: '2024-06-08',
  },
];

const fileIcons = {
  pdf: FileText,
  video: Video,
};

export default function MyCourses() {
  const [courses, setCourses] = useState(dummyCourses);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [expandedWeek, setExpandedWeek] = useState(null);
  const [uploadingWeek, setUploadingWeek] = useState(null);
  const [newFile, setNewFile] = useState(null);
  const [newFileType, setNewFileType] = useState('pdf');
  const [editTitle, setEditTitle] = useState('');
  const [editWeekIdx, setEditWeekIdx] = useState(null);
  const [showAddWeek, setShowAddWeek] = useState(false);
  const [newWeekTitle, setNewWeekTitle] = useState("");

  // Open modal for course
  const openCourse = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
    setExpandedWeek(null);
    setEditWeekIdx(null);
    setEditTitle('');
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
    setExpandedWeek(null);
    setEditWeekIdx(null);
    setEditTitle('');
  };

  // Expand/collapse week
  const toggleWeek = (idx) => {
    setExpandedWeek(expandedWeek === idx ? null : idx);
    setEditWeekIdx(null);
    setEditTitle('');
  };

  // Start editing week title
  const startEditWeek = (idx, title) => {
    setEditWeekIdx(idx);
    setEditTitle(title);
  };

  // Save edited week title
  const saveEditWeek = (idx) => {
    const updated = { ...selectedCourse };
    updated.weeks[idx].title = editTitle;
    updateCourse(updated);
    setEditWeekIdx(null);
    setEditTitle('');
  };

  // Delete content
  const deleteContent = (weekIdx, contentIdx) => {
    const updated = { ...selectedCourse };
    updated.weeks[weekIdx].content.splice(contentIdx, 1);
    updateCourse(updated);
  };

  // Handle file upload (mock)
  const handleFileUpload = (weekIdx) => {
    if (!newFile) return;
    const updated = { ...selectedCourse };
    updated.weeks[weekIdx].content.push({
      type: newFileType,
      name: newFile.name,
      url: '#',
      id: Date.now(),
    });
    updateCourse(updated);
    setNewFile(null);
    setUploadingWeek(null);
  };

  // Update course in courses array
  const updateCourse = (updatedCourse) => {
    setCourses((prev) => prev.map((c) => (c.id === updatedCourse.id ? updatedCourse : c)));
    setSelectedCourse(updatedCourse);
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar role="instructor" />
      <div className="flex-1 overflow-auto p-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">My Courses</h1>
        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col gap-4 hover:shadow-2xl transition cursor-pointer" onClick={() => openCourse(course)}>
              <div className="flex items-center gap-3">
                <BookOpen size={36} className="text-blue-600 dark:text-blue-400" />
                <div>
                  <div className="font-bold text-lg text-gray-800 dark:text-gray-100">{course.code}: {course.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-300">{course.semester}</div>
                </div>
              </div>
              <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-300 mt-2">
                <span><Users2 size={16} className="inline mr-1" /> {course.students} students</span>
                <span><FileText size={16} className="inline mr-1" /> {course.weeks.length} weeks</span>
              </div>
              <div className="text-xs text-gray-400 dark:text-gray-500 mt-2">Last updated: {course.lastUpdated}</div>
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition self-start">View / Edit</button>
            </div>
          ))}
        </div>

        {/* Course Modal */}
        {showModal && selectedCourse && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <BookOpen size={24} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{selectedCourse.code}</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{selectedCourse.name}</p>
                  </div>
                </div>
                <button 
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" 
                  onClick={closeModal}
                >
                  <X size={24} className="text-gray-500 dark:text-gray-400" />
                </button>
              </div>

              {/* Modal Content - Scrollable */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-6">
                  {/* Course Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{selectedCourse.weeks.length}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Total Weeks</div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">{selectedCourse.students}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Students</div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{selectedCourse.weeks.reduce((acc, week) => acc + week.content.length, 0)}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Total Files</div>
                    </div>
                  </div>

                  {/* Weeks List */}
                  <div className="space-y-4">
                    {selectedCourse.weeks.map((week, idx) => (
                      <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow">
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            {editWeekIdx === idx ? (
                              <div className="flex gap-2 items-center w-full">
                                <input 
                                  className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 flex-1 dark:bg-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                                  value={editTitle} 
                                  onChange={e => setEditTitle(e.target.value)} 
                                />
                                <button className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors" onClick={() => saveEditWeek(idx)}>Save</button>
                                <button className="px-3 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors" onClick={() => setEditWeekIdx(null)}>Cancel</button>
                              </div>
                            ) : (
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{idx + 1}</span>
                                </div>
                                <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-lg flex-1">{week.title}</h3>
                                <button 
                                  className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors" 
                                  onClick={() => startEditWeek(idx, week.title)}
                                >
                                  <Edit size={16} />
                                </button>
                              </div>
                            )}
                            <button 
                              className="ml-2 px-3 py-2 bg-green-600 text-white rounded-lg flex items-center gap-2 text-sm hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 transition-colors" 
                              onClick={() => setUploadingWeek(idx)}
                            >
                              <Upload size={16}/> Add Content
                            </button>
                          </div>

                          {/* Upload Area */}
                          {uploadingWeek === idx && (
                            <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                              <div className="flex gap-3 items-center">
                                <select 
                                  value={newFileType} 
                                  onChange={e => setNewFileType(e.target.value)} 
                                  className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 dark:bg-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
                                >
                                  <option value="pdf">PDF</option>
                                  <option value="video">Video</option>
                                </select>
                                <input 
                                  type="file" 
                                  accept={newFileType === 'pdf' ? '.pdf' : 'video/*'} 
                                  onChange={e => setNewFile(e.target.files[0])} 
                                  className="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 dark:bg-gray-800 dark:text-gray-100"
                                />
                                <button 
                                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors" 
                                  onClick={() => handleFileUpload(idx)}
                                >
                                  Upload
                                </button>
                                <button 
                                  className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors" 
                                  onClick={() => setUploadingWeek(null)}
                                >
                                  Cancel
                                </button>
                              </div>
                              {newFile && (
                                <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                  Selected: {newFile.name}
                                </div>
                              )}
                            </div>
                          )}

                          {/* Content List */}
                          <div className="space-y-2">
                            {week.content.length === 0 ? (
                              <div className="text-center py-6 text-gray-400 dark:text-gray-500">
                                <FileText size={32} className="mx-auto mb-2 opacity-50" />
                                <p className="text-sm">No content uploaded yet.</p>
                              </div>
                            ) : (
                              week.content.map((item, cidx) => {
                                const Icon = fileIcons[item.type];
                                return (
                                  <div key={item.id} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                      item.type === 'pdf' ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-green-100 dark:bg-green-900/30'
                                    }`}>
                                      <Icon size={20} className={item.type === 'pdf' ? 'text-blue-600 dark:text-blue-400' : 'text-green-600 dark:text-green-400'} />
                                    </div>
                                    <span className="flex-1 text-gray-800 dark:text-gray-100 text-sm font-medium">{item.name}</span>
                                    <button 
                                      className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors" 
                                      onClick={() => deleteContent(idx, cidx)}
                                    >
                                      <Trash2 size={16} />
                                    </button>
                                  </div>
                                );
                              })
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Add Week Section */}
                  <div className="mt-8">
                    {showAddWeek ? (
                      <div className="flex gap-3 items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                        <input
                          className="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 dark:bg-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Week title (e.g. Week 19: Advanced AI Applications)"
                          value={newWeekTitle}
                          onChange={e => setNewWeekTitle(e.target.value)}
                          autoFocus
                        />
                        <button
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
                          onClick={() => {
                            if (!newWeekTitle.trim()) return;
                            const updated = { ...selectedCourse };
                            updated.weeks.push({ title: newWeekTitle.trim(), content: [] });
                            updateCourse(updated);
                            setShowAddWeek(false);
                            setNewWeekTitle("");
                          }}
                        >
                          Add Week
                        </button>
                        <button
                          className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors"
                          onClick={() => { setShowAddWeek(false); setNewWeekTitle(""); }}
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        className="w-full p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl text-gray-600 dark:text-gray-400 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center justify-center gap-2"
                        onClick={() => setShowAddWeek(true)}
                      >
                        <Plus size={20} />
                        <span className="font-semibold">Add New Week</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 