import { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import { UserCircle, Camera, Mail, Phone, Briefcase, Building2, Calendar, Globe, MapPin, Key, Linkedin, Github, Activity, CheckCircle, BarChart2 } from 'lucide-react';

const mockProfile = {
  name: 'John Smith',
  email: 'john.smith@example.com',
  phone: '+1 234-567-8901',
  role: 'Student',
  program: 'Computer Science',
  year: '2023',
  dob: '2000-05-15',
  gender: 'Male',
  address: '123 University Ave, City, Country',
  nationality: 'USA',
  linkedin: 'https://linkedin.com/in/johnsmith',
  github: 'https://github.com/johnsmith',
  lastLogin: '2024-06-10 14:23',
  profilePic: '',
  stats: {
    courses: 5,
    assignments: 3,
    activity: 87,
    completion: 80
  }
};

export default function StudentProfile() {
  const [profile, setProfile] = useState(mockProfile);
  const [pic, setPic] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accessBarEnabled, setAccessBarEnabled] = useState(() => {
    const stored = localStorage.getItem('access-bar-enabled');
    return stored === null ? true : stored === 'true';
  });

  useEffect(() => {
    localStorage.setItem('access-bar-enabled', accessBarEnabled);
    window.dispatchEvent(new Event('access-bar-toggle'));
  }, [accessBarEnabled]);

  const handlePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setPic(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (password && password === confirmPassword) {
      alert('Password updated!');
      setPassword('');
      setConfirmPassword('');
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar role="student" />
      <div className="flex-1 overflow-auto p-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="col-span-1 bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center">
            <div className="relative mb-4">
              {pic || profile.profilePic ? (
                <img src={pic || profile.profilePic} alt="Profile" className="w-28 h-28 rounded-full object-cover border-4 border-blue-600" />
              ) : (
                <div className="w-28 h-28 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold border-4 border-blue-600">
                  {profile.name.split(' ').map(word => word[0]).join('')}
                </div>
              )}
              <label className="absolute bottom-2 right-2 bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-700">
                <Camera size={18} className="text-white" />
                <input type="file" accept="image/*" className="hidden" onChange={handlePicChange} />
              </label>
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">{profile.name}</h2>
            <p className="text-blue-700 dark:text-blue-400 font-medium mb-2">{profile.role}</p>
            <div className="flex flex-col items-center text-gray-500 dark:text-gray-300 text-sm mb-4">
              <span className="flex items-center gap-1"><Mail size={16} /> {profile.email}</span>
              <span className="flex items-center gap-1"><Phone size={16} /> {profile.phone}</span>
              <span className="flex items-center gap-1"><Building2 size={16} /> {profile.program}</span>
            </div>
            <div className="w-full mt-4">
              <div className="mb-2 text-xs text-gray-400 dark:text-gray-500">Profile Completion</div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full" style={{ width: `${profile.stats.completion}%` }}></div>
              </div>
              <div className="text-right text-xs text-gray-500 dark:text-gray-300 mt-1">{profile.stats.completion}%</div>
            </div>
            <div className="w-full mt-6 flex flex-col gap-2">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-700 dark:text-blue-400 hover:underline"><Linkedin size={18}/> LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-800 dark:text-gray-100 hover:underline"><Github size={18}/> GitHub</a>
            </div>
            {/* Accessibility Bar Toggle */}
            <div className="w-full mt-6 flex items-center gap-2">
              <input
                id="access-bar-toggle"
                type="checkbox"
                checked={accessBarEnabled}
                onChange={e => setAccessBarEnabled(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="access-bar-toggle" className="text-sm text-gray-700 dark:text-gray-300">
                Show Accessibility Bar
              </label>
            </div>
          </div>

          {/* Edit Form & Widgets */}
          <div className="col-span-2 flex flex-col gap-8">
            {/* Edit Form */}
            <form className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                <input type="text" name="name" value={profile.name} onChange={handleChange} className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 dark:bg-gray-900 dark:text-gray-100" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input type="email" name="email" value={profile.email} onChange={handleChange} className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 dark:bg-gray-900 dark:text-gray-100" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone</label>
                <input type="tel" name="phone" value={profile.phone} onChange={handleChange} className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 dark:bg-gray-900 dark:text-gray-100" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Program</label>
                <input type="text" name="program" value={profile.program} onChange={handleChange} className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 dark:bg-gray-900 dark:text-gray-100" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Year</label>
                <input type="text" name="year" value={profile.year} onChange={handleChange} className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 dark:bg-gray-900 dark:text-gray-100" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Date of Birth</label>
                <input type="date" name="dob" value={profile.dob} onChange={handleChange} className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 dark:bg-gray-900 dark:text-gray-100" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Gender</label>
                <select name="gender" value={profile.gender} onChange={handleChange} className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 dark:bg-gray-900 dark:text-gray-100">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Address</label>
                <input type="text" name="address" value={profile.address} onChange={handleChange} className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 dark:bg-gray-900 dark:text-gray-100" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nationality</label>
                <input type="text" name="nationality" value={profile.nationality} onChange={handleChange} className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 dark:bg-gray-900 dark:text-gray-100" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Role</label>
                <input type="text" name="role" value={profile.role} onChange={handleChange} className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 dark:bg-gray-900 dark:text-gray-100" disabled />
              </div>
              <div className="md:col-span-2 flex gap-4 mt-2">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">Save Changes</button>
              </div>
            </form>

            {/* Quick Stats & Activity */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-semibold mb-2"><Activity size={18}/> Account Activity</div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300"><CheckCircle size={16}/> Last Login: <span className="font-medium text-gray-700 dark:text-gray-100">{profile.lastLogin}</span></div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300"><BarChart2 size={16}/> Courses Enrolled: <span className="font-medium text-blue-700 dark:text-blue-400">{profile.stats.courses}</span></div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300"><BarChart2 size={16}/> Pending Assignments: <span className="font-medium text-yellow-700 dark:text-yellow-400">{profile.stats.assignments}</span></div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300"><BarChart2 size={16}/> Activity Score: <span className="font-medium text-green-700 dark:text-green-400">{profile.stats.activity}%</span></div>
              <div className="w-full mt-2">
                <div className="mb-1 text-xs text-gray-400 dark:text-gray-500">Activity (Monthly)</div>
                <div className="flex items-end gap-1 h-16">
                  {[60, 80, 70, 90, 87, 75, 95].map((val, i) => (
                    <div key={i} className="flex-1 bg-blue-200 rounded-t dark:bg-blue-700" style={{ height: `${val}%` }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 