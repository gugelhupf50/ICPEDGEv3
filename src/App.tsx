import React from 'react';
// ... other imports ...

export default function App() {
  const orderLink = "https://kronologic.me/1-click/zWxqVT2ASOytpMCtSReRDWxbBRVHiUbHjzqAm5x3Arg";

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-8 pb-48 relative">
        <div className="absolute top-8 right-8 hidden md:block">
          <Button primary href={orderLink}>Order Your ICP</Button>
        </div>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl">
            <div className="w-48 mb-12">
              <a href="https://icpedge.com">
                <img 
                  src="/icp-edge-logo.png" 
                  alt="ICP EDGE Logo" 
                  className="w-full h-auto"
                />
              </a>
            </div>
            {/* Rest of the component remains the same */}
