export default function FaucetPage() {
  return (
    <div className="min-h-screen" style={{ background: '#FFFFFF' }}>
      {/* Top Navigation Bar */}
      <div className="px-4 py-3 border-b border-gray-300" style={{ background: '#FAFAFA' }}>
        <div className="flex justify-between items-center flex-wrap gap-2">
          <h1 className="font-bold" style={{ fontSize: 'clamp(20px, 4vw, 28px)', fontWeight: 700, margin: 0, fontFamily: 'Times New Roman, Times, serif' }}>
            <a href="/" className="no-underline text-black hover:underline">Sadcoin.org</a>
          </h1>
          <div className="flex gap-3 flex-wrap">
            <a href="/" className="hover:underline" style={{ fontSize: '13px' }}>Home</a>
            <a href="/exchange" className="hover:underline" style={{ fontSize: '13px' }}>Exchange Rate</a>
            <a href="/whitepaper" className="hover:underline" style={{ fontSize: '13px' }}>Whitepaper</a>
            <a href="https://x.com/sadcoinsol" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ fontSize: '13px' }}>𝕏</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Left Sidebar */}
        <div className="md:w-48 p-4 md:p-6" style={{ background: '#F5F5F5' }}>
          {/* Faucet Image */}
          <div className="mb-6">
            <img 
              src="/faucet.png" 
              alt="Sadcoin Faucet" 
              className="w-full max-w-[150px] md:max-w-none"
              style={{ height: 'auto' }}
            />
          </div>
          
          {/* Available Amount */}
          <p className="mb-6" style={{ 
            fontFamily: 'Arial, sans-serif',
            fontSize: '13px',
            color: '#333'
          }}>
            750 SDC available
          </p>

          {/* Navigation Links */}
          <div className="mb-4">
            <p className="mb-2" style={{ fontSize: '13px', color: '#666' }}>Other Sites:</p>
            <p className="mb-1">
              <a href="/" className="text-blue-600 hover:underline" style={{ fontSize: '13px' }}>Sadcoin.org</a>
            </p>
            <p className="mb-1">
              <a href="/exchange" className="text-blue-600 hover:underline" style={{ fontSize: '13px' }}>Sadcoin Market</a>
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 md:p-8">
          {/* Header */}
          <h1 className="mb-8" style={{ 
            fontSize: '48px', 
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold',
            color: '#CCCCCC'
          }}>
            Free Sadcoins
          </h1>

          {/* Get Coins Section */}
          <div className="mb-8">
            <h2 className="font-bold mb-4" style={{ 
              fontSize: '18px',
              fontFamily: 'Arial, sans-serif',
              color: '#333'
            }}>
              Get Sadcoins from the Sadcoin Faucet
            </h2>
            
            <p className="mb-6" style={{ fontSize: '13px', lineHeight: '1.6', fontFamily: 'Arial, sans-serif' }}>
              I'm giving away 5 sadcoins per visitor; just solve the "captcha" then enter your Sadcoin Receiving address and press Get Some:
            </p>

            {/* Captcha */}
            <div className="mb-4">
              <div className="inline-block border-4 border-red-700 bg-white" style={{ 
                borderRadius: '8px',
                overflow: 'hidden',
                width: '300px'
              }}>
                {/* Top text area */}
                <div className="px-4 pt-3 pb-2 bg-white">
                  <div style={{ 
                    fontFamily: '"Comic Sans MS", "Brush Script MT", cursive', 
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: '#000',
                    textAlign: 'left',
                    lineHeight: '1.2'
                  }}>
                    <span style={{ fontStyle: 'normal' }}>enter</span>{' '}
                    <span style={{ fontStyle: 'italic', fontFamily: 'Georgia, serif' }}>the</span>
                  </div>
                </div>
                
                {/* Yellow instruction box */}
                <div className="px-3 py-1.5" style={{ 
                  background: 'linear-gradient(to bottom, #FFE57F, #FFD740)',
                  borderTop: '1px solid #D4A017',
                  borderBottom: '1px solid #D4A017'
                }}>
                  <div className="flex items-center gap-2">
                    <span style={{ 
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '11px',
                      color: '#333',
                      fontWeight: 'normal'
                    }}>
                      Type the two words:
                    </span>
                  </div>
                </div>

                {/* Input area */}
                <div className="px-3 py-2 bg-white">
                  <input 
                    type="text"
                    className="w-full border border-gray-400 px-2 py-1"
                    style={{
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '13px'
                    }}
                  />
                </div>

                {/* Bottom reCAPTCHA branding */}
                <div className="flex items-center justify-between px-3 py-2 bg-white border-t border-gray-300">
                  <div className="flex items-center gap-2">
                    <button className="text-red-600 hover:text-red-700" style={{ fontSize: '16px' }}>🔊</button>
                    <button className="text-blue-600 hover:text-blue-700" style={{ fontSize: '16px' }}>↻</button>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <div className="w-5 h-5 bg-red-600 rounded-sm flex items-center justify-center">
                        <span className="text-white text-xs font-bold">re</span>
                      </div>
                      <div style={{ fontSize: '10px', fontFamily: 'Arial, sans-serif', lineHeight: '1.1' }}>
                        <div className="font-bold">reCAPTCHA</div>
                        <div className="text-gray-500 text-[8px]">stop spam. read books.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Form */}
            <div className="flex gap-2 items-center mb-6 flex-wrap">
              <label style={{ fontSize: '13px', fontFamily: 'Arial, sans-serif' }}>
                Your Sadcoin Address:
              </label>
              <input 
                type="text" 
                className="flex-1 min-w-[250px] px-2 py-1 border border-gray-400" 
                style={{ 
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '13px'
                }}
              />
              <button 
                className="px-4 py-1 font-bold"
                style={{ 
                  background: 'linear-gradient(to bottom, #E8E8E8, #C8C8C8)',
                  border: '1px solid #999',
                  borderRadius: '3px',
                  fontSize: '13px',
                  fontFamily: 'Arial, sans-serif',
                  cursor: 'pointer'
                }}
              >
                Get Some!
              </button>
            </div>
          </div>

          <hr className="border-t border-gray-300 my-6" />

          {/* What are Sadcoins Section */}
          <div className="mb-6">
            <h2 className="font-bold mb-3" style={{ 
              fontSize: '16px',
              fontFamily: 'Arial, sans-serif',
              color: '#333'
            }}>
              What are Sadcoins?
            </h2>
            
            <p className="mb-4" style={{ fontSize: '13px', lineHeight: '1.6', fontFamily: 'Arial, sans-serif' }}>
              Sadcoins are a new kind of money. They aren't created or controlled by a government (like dollars or euros), they're created and controlled by anybody who wants to be part of the Sadcoin payment network. Visit the <a href="/" className="text-blue-600 hover:underline">Sadcoin.fun</a> website for all the geeky details.
            </p>
          </div>

          {/* How to get address Section */}
          <div className="mb-6">
            <h2 className="font-bold mb-3" style={{ 
              fontSize: '16px',
              fontFamily: 'Arial, sans-serif',
              color: '#333'
            }}>
              How do I get a Sadcoin Receiving Address?
            </h2>
            
            <p className="mb-4" style={{ fontSize: '13px', lineHeight: '1.6', fontFamily: 'Arial, sans-serif' }}>
              Download and install the Sadcoin program from <a href="/" className="text-blue-600 hover:underline">www.sadcoin.fun</a>. At the top of its main window it will show you Your Sadcoin Address.
            </p>
          </div>

          {/* How to help Section */}
          <div className="mb-6">
            <h2 className="font-bold mb-3" style={{ 
              fontSize: '16px',
              fontFamily: 'Arial, sans-serif',
              color: '#333'
            }}>
              I've got Sadcoins; how can I help?
            </h2>
            
            <p className="mb-4" style={{ fontSize: '13px', lineHeight: '1.6', fontFamily: 'Arial, sans-serif' }}>
              Send them to the Sadcoin Faucet at address <strong style={{ fontFamily: 'Courier New, monospace', fontSize: '12px' }}>4wqMuY5Gtg8kTr7xzYUBCNVZnrByWFa5oRkMbGRLgszb</strong> and they'll be given away. It may take up to 30 minutes for your donation to be added to the amount available.
            </p>
          </div>

          {/* What's the catch Section */}
          <div className="mb-8">
            <h2 className="font-bold mb-3" style={{ 
              fontSize: '16px',
              fontFamily: 'Arial, sans-serif',
              color: '#333'
            }}>
              What's the catch?
            </h2>
            
            <p className="mb-4" style={{ fontSize: '13px', lineHeight: '1.6', fontFamily: 'Arial, sans-serif' }}>
              No catch-- I want Sadcoin to be successful, so I created this little service to give you a few coins to start with.
            </p>
            <p style={{ fontSize: '13px', fontFamily: 'Arial, sans-serif' }}>
              -- <a href="https://x.com/sadcoinsol" className="text-blue-600 hover:underline" style={{ textDecoration: 'none' }}>sadtoshi</a>
            </p>
          </div>

          <hr className="border-t border-gray-300 my-8" />

          {/* Footer */}
          <div className="text-sm text-gray-600" style={{ fontSize: '11px', fontFamily: 'Arial, sans-serif' }}>
            <p className="mb-2">
              Created by Sadtoshi Nakamoto | Design: www.yomena.de | Photo: mira66 | CC:Attribution
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

