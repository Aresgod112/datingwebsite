import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Dashboard - Heartlink" },
    { name: "description", content: "Your Heartlink dashboard" },
  ];
};

export default function DashboardIndex() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Welcome to Heartlink</h2>
        <p className="text-gray-600">
          Your journey to meaningful connections starts here. Explore matches, discover new people, and engage in conversations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-purple-600 font-semibold mb-2">Match Percentage</div>
            <div className="text-3xl font-bold text-gray-800">78%</div>
            <p className="text-sm text-gray-600 mt-1">Average with your matches</p>
          </div>
          
          <div className="bg-pink-50 p-4 rounded-lg">
            <div className="text-pink-600 font-semibold mb-2">New Messages</div>
            <div className="text-3xl font-bold text-gray-800">5</div>
            <p className="text-sm text-gray-600 mt-1">Unread conversations</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-blue-600 font-semibold mb-2">Profile Views</div>
            <div className="text-3xl font-bold text-gray-800">24</div>
            <p className="text-sm text-gray-600 mt-1">In the last 7 days</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Matches</h3>
          
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"></div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800">Match #{i}</h4>
                  <p className="text-sm text-gray-500">92% compatibility</p>
                </div>
                <div className="text-purple-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          
          <button className="mt-4 text-purple-600 font-medium text-sm hover:text-purple-800 transition">
            View all matches →
          </button>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Premium Content</h3>
          
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition">
                <div className="h-12 w-12 rounded-lg bg-gray-200 flex items-center justify-center">
                  <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800">Locked Content #{i}</h4>
                  <p className="text-sm text-gray-500">Unlock to view premium photos</p>
                </div>
                <button className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full hover:bg-purple-700 transition">
                  Unlock
                </button>
              </div>
            ))}
          </div>
          
          <button className="mt-4 text-purple-600 font-medium text-sm hover:text-purple-800 transition">
            View all premium content →
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Complete Your Profile</h3>
        
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
        </div>
        
        <p className="text-sm text-gray-600 mt-2">Your profile is 65% complete</p>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-600">Basic information</span>
          </div>
          
          <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
            <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <span className="text-gray-600">Upload more photos</span>
          </div>
          
          <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-600">Interests and hobbies</span>
          </div>
          
          <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
            <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <span className="text-gray-600">Relationship preferences</span>
          </div>
        </div>
        
        <button className="mt-6 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
          Complete Your Profile
        </button>
      </div>
    </div>
  );
}
