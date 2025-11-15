export function SendCoinsDialog() {
  return (
    <div className="shadow-lg" style={{ 
      border: '3px solid',
      borderColor: '#E3E3E3 #8E8E8E #8E8E8E #E3E3E3',
      borderRadius: '8px 8px 0 0',
      overflow: 'hidden',
      width: '620px',
      maxWidth: '100%'
    }}>
      {/* Title Bar */}
      <div className="flex items-center justify-between px-3 py-1.5" style={{ 
        background: 'linear-gradient(to bottom, #F0F0F0 0%, #E3E3E3 50%, #C9C9C9 100%)',
        borderBottom: '1px solid #8E8E8E',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.7)'
      }}>
        <div className="flex items-center gap-2">
          <span className="text-base">🟢</span>
          <span className="font-bold text-xs" style={{ 
            fontFamily: 'Tahoma, Arial, sans-serif',
            color: '#000000'
          }}>Send Coins</span>
        </div>
        <button 
          className="w-6 h-5 flex items-center justify-center text-xs rounded"
          style={{ 
            background: 'linear-gradient(to bottom, #F5D0D0, #E89090)',
            border: '1px solid #C66666',
            boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
            fontFamily: 'Tahoma, Arial, sans-serif',
            fontWeight: 'bold',
            color: '#8B0000'
          }}
        >
          ✕
        </button>
      </div>

      {/* Content */}
      <div className="space-y-3 p-4" style={{ background: '#D8D0E8' }}>
        {/* Instructions */}
        <p className="text-xs leading-relaxed mb-3" style={{ 
          fontFamily: 'Tahoma, Arial, sans-serif',
          fontSize: '11px'
        }}>
          Enter the recipient's IP address (e.g. 123.45.6.7) for online transfer with comments and confirmation,<br/>
          or Sadcoin address (e.g. 1NS17iag9jJgTHD1VxjLCEn2uQ3rJEDPL) if recipient is not online.
        </p>

        {/* Pay To */}
        <div className="mb-3">
          <label className="text-xs font-bold block mb-1" style={{ 
            fontFamily: 'Tahoma, Arial, sans-serif',
            fontSize: '11px'
          }}>Pay To:</label>
          <div className="flex gap-2">
            <input 
              type="text" 
              value="192.168.0.12"
              readOnly
              className="flex-1 px-2 py-1 bg-white text-xs" 
              style={{ 
                border: '1px solid #7F9DB9',
                fontFamily: 'Tahoma, Arial, sans-serif',
                fontSize: '11px'
              }}
            />
            <button 
              className="px-3 py-1 text-xs font-bold rounded"
              style={{ 
                background: 'linear-gradient(to bottom, #F0F0F0, #C9C9C9)',
                border: '1px solid #8E8E8E',
                boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
                fontFamily: 'Tahoma, Arial, sans-serif',
                fontSize: '11px'
              }}
            >
              Paste
            </button>
            <button 
              className="px-3 py-1 text-xs font-bold rounded whitespace-nowrap"
              style={{ 
                background: 'linear-gradient(to bottom, #F0F0F0, #C9C9C9)',
                border: '1px solid #8E8E8E',
                boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
                fontFamily: 'Tahoma, Arial, sans-serif',
                fontSize: '11px'
              }}
            >
              Address Book...
            </button>
          </div>
        </div>

        {/* Amount */}
        <div className="mb-3">
          <label className="text-xs font-bold block mb-1" style={{ 
            fontFamily: 'Tahoma, Arial, sans-serif',
            fontSize: '11px'
          }}>Amount:</label>
          <input 
            type="text" 
            value="9.95"
            readOnly
            className="w-40 px-2 py-1 bg-white text-xs" 
            style={{ 
              border: '1px solid #7F9DB9',
              fontFamily: 'Tahoma, Arial, sans-serif',
              fontSize: '11px'
            }}
          />
        </div>

        {/* From */}
        <div className="mb-3">
          <label className="text-xs font-bold block mb-1" style={{ 
            fontFamily: 'Tahoma, Arial, sans-serif',
            fontSize: '11px'
          }}>From:</label>
          <input 
            type="text" 
            value="Bob"
            readOnly
            className="w-full px-2 py-1 bg-white text-xs" 
            style={{ 
              border: '1px solid #7F9DB9',
              fontFamily: 'Tahoma, Arial, sans-serif',
              fontSize: '11px'
            }}
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="text-xs font-bold block mb-1" style={{ 
            fontFamily: 'Tahoma, Arial, sans-serif',
            fontSize: '11px'
          }}>Message:</label>
          <textarea 
            value="Order #12345"
            readOnly
            className="w-full px-2 py-1 bg-white text-xs resize-none" 
            rows={3}
            style={{ 
              border: '1px solid #7F9DB9',
              fontFamily: 'Tahoma, Arial, sans-serif',
              fontSize: '11px'
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-2 justify-end pt-2">
          <button 
            className="px-10 py-1.5 text-xs font-bold rounded"
            style={{ 
              background: 'linear-gradient(to bottom, #F0F0F0, #C9C9C9)',
              border: '1px solid #8E8E8E',
              boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
              fontFamily: 'Tahoma, Arial, sans-serif',
              fontSize: '11px'
            }}
          >
            Send
          </button>
          <button 
            className="px-8 py-1.5 text-xs font-bold rounded"
            style={{ 
              background: 'linear-gradient(to bottom, #F0F0F0, #C9C9C9)',
              border: '1px solid #8E8E8E',
              boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
              fontFamily: 'Tahoma, Arial, sans-serif',
              fontSize: '11px'
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
