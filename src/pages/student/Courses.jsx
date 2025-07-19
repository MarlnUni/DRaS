import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { BookOpen, Clock, Users, Calendar, ChevronRight, Search, FileText, Video, ShieldCheck, CalendarDays } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: 'AI401 - Artificial Intelligence for Defence Applications',
    instructor: 'Instructor Alex Chen',
    schedule: 'Mon, Wed 9:00 AM - 11:30 AM',
    progress: 75,
    nextClass: '2024-03-20T09:00:00',
    enrolledStudents: 42,
    room: 'Defence Lab 1',
    description: 'Comprehensive training in AI applications for defence systems, including threat detection, cybersecurity, and autonomous warfare platforms.',
  },
  {
    id: 2,
    title: 'AP402 - Autonomous Platforms in Defence Applications',
    instructor: 'Instructor Maria Rodriguez',
    schedule: 'Tue, Thu 1:00 PM - 3:30 PM',
    progress: 68,
    nextClass: '2024-03-21T13:00:00',
    enrolledStudents: 35,
    room: 'Simulation Center',
    description: 'Advanced training in autonomous platforms including UAVs, UUVs, USVs, and ground vehicles for defence applications.',
  },
];

const courseContents = {
  'AI401 - Artificial Intelligence for Defence Applications': {
    syllabus: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-syllabus.pdf',
    weeks: [
      {
        week: 1,
        title: 'AI Introduction & Market for Defence Applications',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk1-ai-intro.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk1-video.mp4',
      },
      {
        week: 2,
        title: 'AI Applications for Cybersecurity',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk2-cybersecurity.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk2-video.mp4',
      },
      {
        week: 3,
        title: 'AI Logistics and Smart SCM',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk3-logistics.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk3-video.mp4',
      },
      {
        week: 4,
        title: 'AI in Transportation',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk4-transportation.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk4-video.mp4',
      },
      {
        week: 5,
        title: 'Target Recognition and Monitoring using AI tools',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk5-target-recognition.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk5-video.mp4',
      },
      {
        week: 6,
        title: 'Threat Assessment',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk6-threat-assessment.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk6-video.mp4',
      },
      {
        week: 7,
        title: 'AI for Situational Awareness',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk7-situational-awareness.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk7-video.mp4',
      },
      {
        week: 8,
        title: 'AI aided Battlefield Healthcare',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk8-battlefield-healthcare.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk8-video.mp4',
      },
      {
        week: 9,
        title: 'Planning artillery barrages for attack',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk9-artillery-planning.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk9-video.mp4',
      },
      {
        week: 10,
        title: 'Fusion of data and sensor feeds',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk10-data-fusion.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk10-video.mp4',
      },
      {
        week: 11,
        title: 'Intelligent support to command decision-making',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk11-command-support.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk11-video.mp4',
      },
      {
        week: 12,
        title: 'AI assisted war gaming simulation and training',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk12-wargaming.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk12-video.mp4',
      },
      {
        week: 13,
        title: 'Autonomous Air defence and missile shields',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk13-air-defence.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk13-video.mp4',
      },
      {
        week: 14,
        title: 'Autonomous Mobile Warfare Platforms',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk14-mobile-warfare.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk14-video.mp4',
      },
      {
        week: 15,
        title: 'Autonomous Warfare Systems',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk15-autonomous-warfare.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk15-video.mp4',
      },
      {
        week: 16,
        title: 'AI in Military satellites',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk16-military-satellites.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk16-video.mp4',
      },
      {
        week: 17,
        title: 'Generative AI for Military Systems',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk17-generative-ai.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk17-video.mp4',
      },
      {
        week: 18,
        title: 'AI deployment and implementation',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk18-deployment.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ai401/ai401-wk18-video.mp4',
      },
    ],
  },
  'AP402 - Autonomous Platforms in Defence Applications': {
    syllabus: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-syllabus.pdf',
    weeks: [
      {
        week: 1,
        title: 'Unmanned Underwater Vessels (UUVs)',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk1-uuvs.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk1-video.mp4',
      },
      {
        week: 2,
        title: 'Unmanned Surface Vessels (USVs)',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk2-usvs.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk2-video.mp4',
      },
      {
        week: 3,
        title: 'UUV and USV Applications',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk3-uuv-usv-applications.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk3-video.mp4',
      },
      {
        week: 4,
        title: 'Autonomous Under Water Weapons Systems',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk4-underwater-weapons.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk4-video.mp4',
      },
      {
        week: 5,
        title: 'Unmanned Ground Vehicles (UGVs)',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk5-ugvs.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk5-video.mp4',
      },
      {
        week: 6,
        title: 'UGV Applications',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk6-ugv-applications.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk6-video.mp4',
      },
      {
        week: 7,
        title: 'Aerial Drone/UAV Classifications',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk7-uav-classifications.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk7-video.mp4',
      },
      {
        week: 8,
        title: 'Civil Vs Military Drones',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk8-civil-military-drones.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk8-video.mp4',
      },
      {
        week: 9,
        title: 'Military Applications of Aerial Drones',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk9-military-drone-applications.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk9-video.mp4',
      },
      {
        week: 10,
        title: 'Types of Military Drones',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk10-military-drone-types.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk10-video.mp4',
      },
      {
        week: 11,
        title: 'Layout of military drones /subsystems/drone components',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk11-drone-components.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk11-video.mp4',
      },
      {
        week: 12,
        title: 'UAV Military Applications',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk12-uav-military-applications.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk12-video.mp4',
      },
      {
        week: 13,
        title: 'Advanced Features of Drones/Unmanned Combat Aerial Vehicles (UCAV)',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk13-advanced-drone-features.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk13-video.mp4',
      },
      {
        week: 14,
        title: 'Anti Drone Systems',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk14-anti-drone-systems.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk14-video.mp4',
      },
      {
        week: 15,
        title: 'Swarm technologies for UAV/USV/UUVs',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk15-swarm-technologies.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk15-video.mp4',
      },
      {
        week: 16,
        title: 'Stealth UAV/UUVs/USVs',
        pdf: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk16-stealth-platforms.pdf',
        video: 'https://lms-frontend-resources.s3.ap-south-1.amazonaws.com/CourseDetails/ap402/ap402-wk16-video.mp4',
      },
    ],
  },
};

function Courses() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar role="student" />
      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">My Courses</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{course.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <Users className="h-4 w-4 mr-2" />
                      <span>Instructor: {course.instructor}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{course.schedule}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Next Class: {new Date(course.nextClass).toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Progress</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    View Details
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Details Modal */}
        {selectedCourse && (
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center p-2 z-50">
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg max-w-2xl w-full p-0 overflow-y-auto max-h-[90vh] border border-blue-50 dark:border-blue-900">
              {/* Accent Bar & Floating Close Button */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 rounded-t-2xl" />
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-3 right-3 bg-white dark:bg-gray-800 shadow border border-gray-100 dark:border-gray-700 text-gray-400 hover:text-red-400 p-1.5 rounded-full z-20 transition"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="p-5 pt-4 pb-2">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="text-blue-500 w-5 h-5" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">{selectedCourse.title}</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-base mb-4">{selectedCourse.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                  <div>
                    <h3 className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold text-base mb-1"><BookOpen className="w-4 h-4" /> Course Details</h3>
                    <ul className="mt-1 space-y-1">
                      <li className="flex items-center text-sm text-gray-700 dark:text-gray-200"><Users className="h-4 w-4 mr-1 text-blue-300" />Instructor: <span className="ml-1 font-medium">{selectedCourse.instructor}</span></li>
                      <li className="flex items-center text-sm text-gray-700 dark:text-gray-200"><Clock className="h-4 w-4 mr-1 text-purple-300" />Schedule: <span className="ml-1 font-medium">{selectedCourse.schedule}</span></li>
                      <li className="flex items-center text-sm text-gray-700 dark:text-gray-200"><BookOpen className="h-4 w-4 mr-1 text-pink-300" />Room: <span className="ml-1 font-medium">{selectedCourse.room}</span></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="flex items-center gap-1 text-blue-600 font-semibold text-base mb-1"><CalendarDays className="w-4 h-4" /> Class Info</h3>
                    <ul className="mt-1 space-y-1">
                      <li className="text-sm text-gray-700">Enrolled: <span className="font-medium">{selectedCourse.enrolledStudents}</span></li>
                      <li className="text-sm text-gray-700">Next: <span className="font-medium">{new Date(selectedCourse.nextClass).toLocaleString()}</span></li>
                      <li className="text-sm text-gray-700">Progress: <span className="font-medium">{selectedCourse.progress}%</span></li>
                    </ul>
                  </div>
                </div>
                {/* In-depth content for courses */}
                {(selectedCourse.title === 'AI401 - Artificial Intelligence for Defence Applications' || selectedCourse.title === 'AP402 - Autonomous Platforms in Defence Applications') && courseContents[selectedCourse.title] && (
                  <div className="mt-1">
                    <h3 className="flex items-center gap-1 text-base font-bold text-purple-600 mb-2">
                      <FileText className="w-5 h-5" /> Course Syllabus
                    </h3>
                    <button
                      onClick={() => navigate(`/student/courses/${selectedCourse.id}/pdf/syllabus`, {
                        state: {
                          pdfUrl: courseContents[selectedCourse.title].syllabus + '?v=' + Date.now(),
                          title: `${selectedCourse.title} Syllabus`
                        }
                      })}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-sm hover:from-blue-600 hover:to-purple-600 font-medium text-sm mb-4 transition"
                    >
                      <FileText className="mr-2 w-4 h-4" /> View Syllabus (PDF)
                    </button>
                    
                    <h3 className="flex items-center gap-1 text-base font-bold text-pink-600 mb-2">
                      <Video className="w-5 h-5" /> Weekly Content
                    </h3>
                    <div className="space-y-4">
                      {courseContents[selectedCourse.title].weeks.map((week) => (
                        <div key={week.week} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">Week {week.week}</h4>
                          <div className="flex flex-wrap gap-2">
                            <button
                              onClick={() => navigate(`/student/courses/${selectedCourse.id}/pdf/${week.week}`, {
                                state: {
                                  pdfUrl: week.pdf + '?v=' + Date.now(),
                                  title: `${selectedCourse.title} - Week ${week.week} Materials`
                                }
                              })}
                              className="inline-flex items-center px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                              <FileText className="mr-1.5 w-4 h-4 text-blue-500" />
                              View PDF
                            </button>
                            <button
                              onClick={() => navigate(`/student/courses/${selectedCourse.id}/video/${week.week}`, {
                                state: {
                                  videoUrl: week.video + '?v=' + Date.now(),
                                  title: `${selectedCourse.title} - Week ${week.week} Lecture`
                                }
                              })}
                              className="inline-flex items-center px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                              <Video className="mr-1.5 w-4 h-4 text-pink-500" />
                              Watch Video
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Courses; 