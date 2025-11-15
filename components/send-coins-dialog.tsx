import { WindowDialog } from './window-dialog'

export function SendCoinsDialog() {
  return (
    <WindowDialog title="Send Coins" icon="►">
      <div className="space-y-3 p-4" style={{ background: '#C0C0C0' }}>
        {/* Instructions */}
        <p className="text-xs leading-relaxed mb-3" style={{ 
          fontFamily: 'MS Sans Serif, Arial, sans-serif',
          fontSize: '11px'
        }}>
          Enter the recipient's IP address (e.g. 123.45.6.7) for online transfer with comments and confirmation,<br/>
          or Sadcoin address (e.g. 1NS17iag9jJgTHD1VxjLCEn2uQ3rJEDPL) if recipient is not online.
        </p>

        {/* Pay To */}
        <div className="mb-3">
          <label className="text-xs font-bold block mb-1" style={{ 
            fontFamily: 'MS Sans Serif, Arial, sans-serif',
            fontSize: '11px'
          }}>Pay To:</label>
          <div className="flex gap-2">
            <input 
              type="text" 
              value="192.168.0.12"
              readOnly
              className="flex-1 px-2 py-1 bg-white text-xs" 
              style={{ 
                border: '2px solid',
                borderColor: '#808080 #DFDFDF #DFDFDF #808080',
                fontFamily: 'MS Sans Serif, Arial, sans-serif',
                fontSize: '11px'
              }}
            />
            <button 
              className="px-3 py-1 text-xs font-bold"
              style={{ 
                background: '#C0C0C0',
                border: '2px solid',
                borderColor: '#DFDFDF #808080 #808080 #DFDFDF',
                fontFamily: 'MS Sans Serif, Arial, sans-serif',
                fontSize: '11px'
              }}
            >
              Paste
            </button>
            <button 
              className="px-3 py-1 text-xs font-bold whitespace-nowrap"
              style={{ 
                background: '#C0C0C0',
                border: '2px solid',
                borderColor: '#DFDFDF #808080 #808080 #DFDFDF',
                fontFamily: 'MS Sans Serif, Arial, sans-serif',
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
            fontFamily: 'MS Sans Serif, Arial, sans-serif',
            fontSize: '11px'
          }}>Amount:</label>
          <input 
            type="text" 
            value="9.95"
            readOnly
            className="w-40 px-2 py-1 bg-white text-xs" 
            style={{ 
              border: '2px solid',
              borderColor: '#808080 #DFDFDF #DFDFDF #808080',
              fontFamily: 'MS Sans Serif, Arial, sans-serif',
              fontSize: '11px'
            }}
          />
        </div>

        {/* From */}
        <div className="mb-3">
          <label className="text-xs font-bold block mb-1" style={{ 
            fontFamily: 'MS Sans Serif, Arial, sans-serif',
            fontSize: '11px'
          }}>From:</label>
          <input 
            type="text" 
            value="Bob"
            readOnly
            className="w-full px-2 py-1 bg-white text-xs" 
            style={{ 
              border: '2px solid',
              borderColor: '#808080 #DFDFDF #DFDFDF #808080',
              fontFamily: 'MS Sans Serif, Arial, sans-serif',
              fontSize: '11px'
            }}
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="text-xs font-bold block mb-1" style={{ 
            fontFamily: 'MS Sans Serif, Arial, sans-serif',
            fontSize: '11px'
          }}>Message:</label>
          <textarea 
            value="Order #12345"
            readOnly
            className="w-full px-2 py-1 bg-white text-xs resize-none" 
            rows={3}
            style={{ 
              border: '2px solid',
              borderColor: '#808080 #DFDFDF #DFDFDF #808080',
              fontFamily: 'MS Sans Serif, Arial, sans-serif',
              fontSize: '11px'
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-2 justify-end pt-2">
          <button 
            className="px-10 py-1.5 text-xs font-bold"
            style={{ 
              background: '#C0C0C0',
              border: '2px solid',
              borderColor: '#DFDFDF #808080 #808080 #DFDFDF',
              fontFamily: 'MS Sans Serif, Arial, sans-serif',
              fontSize: '11px'
            }}
          >
            Send
          </button>
          <button 
            className="px-8 py-1.5 text-xs font-bold"
            style={{ 
              background: '#C0C0C0',
              border: '2px solid',
              borderColor: '#DFDFDF #808080 #808080 #DFDFDF',
              fontFamily: 'MS Sans Serif, Arial, sans-serif',
              fontSize: '11px'
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </WindowDialog>
  )
}
