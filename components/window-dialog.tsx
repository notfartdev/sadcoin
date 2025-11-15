export function WindowDialog({ 
  title, 
  icon, 
  children 
}: { 
  title: string
  icon?: string
  children: React.ReactNode 
}) {
  return (
    <div style={{ 
      border: '2px solid',
      borderColor: '#DFDFDF #808080 #808080 #DFDFDF',
      boxShadow: '2px 2px 0px rgba(0,0,0,0.2)',
      width: '640px',
      maxWidth: '100%',
      background: '#C0C0C0'
    }}>
      {/* Title Bar - Classic Windows 95 Blue */}
      <div className="flex items-center justify-between px-1.5 py-0.5" style={{ 
        background: 'linear-gradient(to right, #000080, #1084D0)',
        borderBottom: '1px solid #000000'
      }}>
        <div className="flex items-center gap-1.5">
          {/* Classic Windows 95 icon */}
          <div style={{
            width: '16px',
            height: '16px',
            background: '#C0C0C0',
            border: '1px outset #DFDFDF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '11px'
          }}>
            {icon || '💰'}
          </div>
          <span className="font-bold" style={{ 
            fontFamily: 'Microsoft Sans Serif, Arial, sans-serif',
            fontSize: '11px',
            color: '#FFFFFF',
            fontWeight: 'bold'
          }}>{title}</span>
        </div>
        
        {/* Windows 95 style buttons */}
        <div className="flex gap-0.5">
          <button 
            className="flex items-center justify-center"
            style={{ 
              width: '16px',
              height: '14px',
              background: '#C0C0C0',
              border: '1px solid',
              borderColor: '#FFFFFF #000000 #000000 #FFFFFF',
              fontSize: '8px',
              fontWeight: 'bold',
              color: '#000000',
              padding: '0'
            }}
          >
            _
          </button>
          <button 
            className="flex items-center justify-center"
            style={{ 
              width: '16px',
              height: '14px',
              background: '#C0C0C0',
              border: '1px solid',
              borderColor: '#FFFFFF #000000 #000000 #FFFFFF',
              fontSize: '9px',
              fontWeight: 'bold',
              color: '#000000',
              padding: '0'
            }}
          >
            □
          </button>
          <button 
            className="flex items-center justify-center"
            style={{ 
              width: '16px',
              height: '14px',
              background: '#C0C0C0',
              border: '1px solid',
              borderColor: '#FFFFFF #000000 #000000 #FFFFFF',
              fontSize: '11px',
              fontWeight: 'bold',
              color: '#000000',
              padding: '0'
            }}
          >
            ×
          </button>
        </div>
      </div>

      {/* Content with classic gray background */}
      <div style={{ 
        background: '#C0C0C0',
        border: '2px solid',
        borderColor: '#808080 #DFDFDF #DFDFDF #808080',
        margin: '2px'
      }}>
        {children}
      </div>
    </div>
  )
}
