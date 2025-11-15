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
    <div className="shadow-lg" style={{ 
      border: '3px solid',
      borderColor: '#E3E3E3 #8E8E8E #8E8E8E #E3E3E3',
      borderRadius: '8px 8px 0 0',
      overflow: 'hidden',
      width: '640px',
      maxWidth: '100%'
    }}>
      {/* Title Bar */}
      <div className="flex items-center justify-between px-3 py-1.5" style={{ 
        background: 'linear-gradient(to bottom, #F0F0F0 0%, #E3E3E3 50%, #C9C9C9 100%)',
        borderBottom: '1px solid #8E8E8E',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.7)'
      }}>
        <div className="flex items-center gap-2">
          <span className="text-base">{icon || '💰'}</span>
          <span className="font-bold text-xs" style={{ 
            fontFamily: 'Tahoma, Arial, sans-serif',
            color: '#000000'
          }}>{title}</span>
        </div>
        <div className="flex gap-0.5">
          <button 
            className="w-6 h-5 flex items-center justify-center text-xs rounded"
            style={{ 
              background: 'linear-gradient(to bottom, #F0F0F0, #C9C9C9)',
              border: '1px solid #8E8E8E',
              boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
              fontFamily: 'Tahoma, Arial, sans-serif',
              fontWeight: 'bold',
              color: '#000000'
            }}
          >
            <span style={{ marginBottom: '6px' }}>_</span>
          </button>
          <button 
            className="w-6 h-5 flex items-center justify-center text-xs rounded"
            style={{ 
              background: 'linear-gradient(to bottom, #F0F0F0, #C9C9C9)',
              border: '1px solid #8E8E8E',
              boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
              fontFamily: 'Tahoma, Arial, sans-serif',
              fontWeight: 'bold',
              fontSize: '10px',
              color: '#000000'
            }}
          >
            ◻
          </button>
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
      </div>

      {/* Content */}
      <div style={{ background: '#D8D0E8' }}>
        {children}
      </div>
    </div>
  )
}
