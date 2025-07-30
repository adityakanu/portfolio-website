'use client'

import { useEffect, useState } from 'react';

export default function SpotifyPlaylist() {
  const playlistId = '1zoic3P0ugpdz4eNGNPXA4';
  const [isAnimating, setIsAnimating] = useState(false);

  // Simulate music playing detection (since we can't actually detect from iframe)
  // In a real app, you might use Spotify Web API for this
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(Math.random() > 0.3); // 70% chance of being "playing"
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="p-4 flex flex-col mt-16 mb-8 relative">
      <div className="max-w-2xl mx-auto w-full relative">
        {/* Animated background blobs positioned around the card */}
        <div className="absolute inset-0 overflow-visible pointer-events-none">
          {/* Left blob - peeks out from left side */}
          <div 
            className={`absolute -left-10 top-12 w-80 h-80 rounded-full transition-all duration-[3000ms] ease-in-out grainy-blob ${
              isAnimating ? 'animate-blob-1' : ''
            }`}
            style={{
              background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1)',
              filter: 'blur(60px)',
            }}
          />
          
          {/* Right blob - peeks out from right side - hidden on mobile */}
          <div 
            className={`absolute -right-96 -top-32 w-72 h-72 rounded-full transition-all duration-[4000ms] ease-in-out grainy-blob hidden md:block ${
              isAnimating ? 'animate-blob-2' : ''
            }`}
            style={{
              background: 'linear-gradient(225deg, #96ceb4, #feca57, #ff9a9e)',
              filter: 'blur(50px)',
            }}
          />
          
          {/* Center blob - mostly behind card */}
            {/* <div 
              className={`absolute -top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full transition-all duration-[5000ms] ease-in-out grainy-blob ${
                isAnimating ? 'animate-blob-3' : ''
              }`}
              style={{
                background: 'linear-gradient(45deg, #a8edea, #fed6e3, #d299c2)',
                filter: 'blur(70px)',
              }}
            /> */}
          
          {/* Bottom blob - behind card */}
          {/* <div 
            className={`absolute top-16 left-1/4 w-64 h-64 rounded-full transition-all duration-[6000ms] ease-in-out grainy-blob ${
              isAnimating ? 'animate-blob-4' : ''
            }`}
            style={{
              background: 'linear-gradient(315deg, #667eea, #764ba2, #f093fb)',
              filter: 'blur(45px)',
            }}
          /> */}
        </div>

        <div className="glass-card rounded-xl p-6 relative z-10 overflow-hidden">
          <h3 className="font-syne font-semibold text-xl mb-4 text-center relative z-10">
            My Music Recommendations
          </h3>
          
          <div className="rounded-lg overflow-hidden relative z-10 glass-iframe-container">
            <iframe
              title="Spotify Embed: Recommendation Playlist"
              src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-lg"
            />
          </div>
          
          {/* Music visualization indicator */}
          {isAnimating && (
            <div className="absolute top-4 right-4 flex space-x-1 z-20">
              <div className="w-1 bg-green-400 rounded-full animate-pulse-wave-1" style={{ height: '12px' }}></div>
              <div className="w-1 bg-green-400 rounded-full animate-pulse-wave-2" style={{ height: '16px' }}></div>
              <div className="w-1 bg-green-400 rounded-full animate-pulse-wave-3" style={{ height: '10px' }}></div>
              <div className="w-1 bg-green-400 rounded-full animate-pulse-wave-4" style={{ height: '14px' }}></div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .glass-iframe-container {
          background: rgba(0, 0, 0, 0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .grainy-blob {
          position: relative;
        }

        .grainy-blob::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          mix-blend-mode: multiply;
          opacity: 0.7;
          filter: inherit;
        }

        @keyframes blob-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(15px, -20px) rotate(45deg) scale(1.05); }
          50% { transform: translate(-10px, 15px) rotate(90deg) scale(0.95); }
          75% { transform: translate(20px, 5px) rotate(135deg) scale(1.02); }
        }

        @keyframes blob-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          33% { transform: translate(-20px, -15px) rotate(60deg) scale(1.08); }
          66% { transform: translate(18px, -18px) rotate(120deg) scale(0.92); }
        }

        @keyframes blob-3 {
          0%, 100% { transform: translate(-50%, 0) rotate(0deg) scale(1); }
          20% { transform: translate(-45%, 10px) rotate(30deg) scale(1.03); }
          40% { transform: translate(-55%, 8px) rotate(60deg) scale(0.97); }
          60% { transform: translate(-48%, -12px) rotate(90deg) scale(1.06); }
          80% { transform: translate(-52%, -8px) rotate(120deg) scale(0.94); }
        }

        @keyframes blob-4 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(12px, 18px) rotate(90deg) scale(1.04); }
          50% { transform: translate(-15px, 10px) rotate(180deg) scale(0.96); }
          75% { transform: translate(8px, -16px) rotate(270deg) scale(1.01); }
        }

        @keyframes pulse-wave-1 {
          0%, 100% { height: 12px; }
          50% { height: 20px; }
        }

        @keyframes pulse-wave-2 {
          0%, 100% { height: 16px; }
          50% { height: 24px; }
        }

        @keyframes pulse-wave-3 {
          0%, 100% { height: 10px; }
          50% { height: 18px; }
        }

        @keyframes pulse-wave-4 {
          0%, 100% { height: 14px; }
          50% { height: 22px; }
        }

        .animate-blob-1 {
          animation: blob-1 8s ease-in-out infinite;
        }

        .animate-blob-2 {
          animation: blob-2 10s ease-in-out infinite;
        }

        .animate-blob-3 {
          animation: blob-3 12s ease-in-out infinite;
        }

        .animate-blob-4 {
          animation: blob-4 9s ease-in-out infinite;
        }

        .animate-pulse-wave-1 {
          animation: pulse-wave-1 0.6s ease-in-out infinite;
        }

        .animate-pulse-wave-2 {
          animation: pulse-wave-2 0.8s ease-in-out infinite;
        }

        .animate-pulse-wave-3 {
          animation: pulse-wave-3 0.7s ease-in-out infinite;
        }

        .animate-pulse-wave-4 {
          animation: pulse-wave-4 0.9s ease-in-out infinite;
        }

        :global(.dark) .glass-card {
          background: rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        :global(.dark) .glass-iframe-container {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.04);
        }
      `}</style>
    </main>
  );
} 
