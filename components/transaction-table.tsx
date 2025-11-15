export function TransactionTable() {
  const transactions = [
    {
      status: '0/unconfirmed',
      date: '11/15/2025 23:45',
      description: 'To: Alice 192.168.0.12 - Buy SDC mfer and dont jeet.',
      debit: '-9.95',
      credit: ''
    },
    {
      status: '7 blocks',
      date: '11/15/2025 22:18',
      description: 'From: Alice - HODL! Fuck my chungus life',
      debit: '',
      credit: '+25.00'
    }
  ]

  return (
    <div className="overflow-x-auto">
      <div style={{ 
        border: '2px solid',
        borderColor: '#808080 #DFDFDF #DFDFDF #808080',
        background: '#ffffff',
        minWidth: '500px'
      }}>
        <table className="w-full text-xs" style={{ 
          fontFamily: 'MS Sans Serif, Arial, sans-serif',
          fontSize: '11px'
        }}>
          <thead>
            <tr style={{ 
              background: '#C0C0C0',
              borderBottom: '1px solid #808080'
            }}>
              <th className="px-2 py-1.5 text-left font-bold border-r" style={{ borderColor: '#808080' }}>Status</th>
              <th className="px-2 py-1.5 text-left font-bold border-r" style={{ borderColor: '#808080' }}>Date</th>
              <th className="px-2 py-1.5 text-left font-bold border-r" style={{ borderColor: '#808080' }}>Description</th>
              <th className="px-2 py-1.5 text-right font-bold border-r" style={{ borderColor: '#808080' }}>Debit</th>
              <th className="px-2 py-1.5 text-right font-bold">Credit</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, idx) => (
              <tr key={idx} className="hover:bg-blue-50" style={{ borderBottom: idx < transactions.length - 1 ? '1px solid #E0E0E0' : 'none' }}>
                <td className="px-2 py-1.5">{tx.status}</td>
                <td className="px-2 py-1.5">{tx.date}</td>
                <td className="px-2 py-1.5">{tx.description}</td>
                <td className="px-2 py-1.5 text-right font-bold" style={{ color: '#CC0000' }}>{tx.debit}</td>
                <td className="px-2 py-1.5 text-right font-bold" style={{ color: '#008000' }}>{tx.credit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
