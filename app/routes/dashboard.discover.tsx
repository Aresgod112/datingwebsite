import { useState } from "react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Discover - Heartlink" },
    { name: "description", content: "Discover new matches on Heartlink" },
  ];
};

// Mock data for profiles
const MOCK_PROFILES = [
  {
    id: 1,
    name: "Alex Johnson",
    age: 28,
    location: "New York, NY",
    bio: "Adventure seeker and coffee enthusiast. Love hiking and exploring new places.",
    compatibility: 92,
    interests: ["Hiking", "Photography", "Travel", "Coffee"],
    hasPremiumContent: true,
    images: [
      { id: 1, isPremium: false },
      { id: 2, isPremium: true },
      { id: 3, isPremium: true },
    ]
  },
  {
    id: 2,
    name: "Jamie Smith",
    age: 26,
    location: "Los Angeles, CA",
    bio: "Film director and dog lover. Looking for someone to share movie nights with.",
    compatibility: 85,
    interests: ["Movies", "Dogs", "Art", "Music"],
    hasPremiumContent: true,
    images: [
      { id: 1, isPremium: false },
      { id: 2, isPremium: false },
      { id: 3, isPremium: true },
    ]
  },
  {
    id: 3,
    name: "Taylor Wilson",
    age: 30,
    location: "Chicago, IL",
    bio: "Foodie and fitness enthusiast. Love trying new restaurants and staying active.",
    compatibility: 78,
    interests: ["Cooking", "Fitness", "Reading", "Yoga"],
    hasPremiumContent: false,
    images: [
      { id: 1, isPremium: false },
      { id: 2, isPremium: false },
    ]
  },
];

export default function Discover() {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  
  const currentProfile = MOCK_PROFILES[currentProfileIndex];
  
  const handleLike = () => {
    // In a real app, you would send a like request to the server
    goToNextProfile();
  };
  
  const handleDislike = () => {
    // In a real app, you would send a dislike request to the server
    goToNextProfile();
  };
  
  const goToNextProfile = () => {
    setShowDetails(false);
    if (currentProfileIndex < MOCK_PROFILES.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1);
    } else {
      // Reset to the first profile when we reach the end
      setCurrentProfileIndex(0);
    }
  };
  
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="relative">
          {/* Main profile image */}
          <div className="aspect-[3/4] bg-gray-200 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
            
            {/* Compatibility badge */}
            <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {currentProfile.compatibility}% Match
            </div>
            
            {/* Profile info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h2 className="text-2xl font-bold">{currentProfile.name}, {currentProfile.age}</h2>
              <p className="text-white/80">{currentProfile.location}</p>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
            <button 
              onClick={handleDislike}
              className="h-14 w-14 rounded-full bg-white shadow-lg flex items-center justify-center text-red-500 hover:bg-red-50 transition"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <button 
              onClick={toggleDetails}
              className="h-14 w-14 rounded-full bg-white shadow-lg flex items-center justify-center text-blue-500 hover:bg-blue-50 transition"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            
            <button 
              onClick={handleLike}
              className="h-14 w-14 rounded-full bg-white shadow-lg flex items-center justify-center text-green-500 hover:bg-green-50 transition"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Profile details */}
        {showDetails && (
          <div className="p-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">About</h3>
              <p className="text-gray-600 mt-1">{currentProfile.bio}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Interests</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {currentProfile.interests.map((interest, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Photo gallery */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Photos</h3>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {currentProfile.images.map((image) => (
                  <div 
                    key={image.id} 
                    className="aspect-square bg-gray-200 rounded-lg relative overflow-hidden"
                  >
                    {image.isPremium && (
                      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span className="text-xs mt-1">Premium</span>
                        <button className="mt-2 px-3 py-1 bg-purple-600 text-white text-xs rounded-full hover:bg-purple-700 transition">
                          Unlock
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-6 text-center text-gray-500 text-sm">
        {currentProfileIndex + 1} of {MOCK_PROFILES.length} profiles
      </div>
    </div>
  );
}
