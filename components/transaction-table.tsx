export function TransactionTable() {
  const transactions = [
    {
      status: '0/unconfirmed',
      date: '03/01/2009 23:45',
      description: 'To: Alice 192.168.0.12 - Order #12345',
      debit: '-9.95',
      credit: ''
    },
    {
      status: '7 blocks',
      date: '03/01/2009 22:18',
      description: 'From: Alice - Thanks for testing all that software',
      debit: '',
      credit: '+25.00'
    }
  ]

  return (
    <div style={{ 
      border: '1px solid #7F9DB9',
      background: '#ffffff'
    }}>
      <table className="w-full text-xs" style={{ 
        fontFamily: 'Tahoma, Arial, sans-serif',
        fontSize: '11px'
      }}>
        <thead>
          <tr style={{ 
            background: 'linear-gradient(to bottom, #F5F5F5, #E3E3E3)',
            borderBottom: '1px solid #C0C0C0'
          }}>
            <th className="px-2 py-1.5 text-left font-bold border-r" style={{ borderColor: '#C0C0C0' }}>Status</th>
            <th className="px-2 py-1.5 text-left font-bold border-r" style={{ borderColor: '#C0C0C0' }}>Date</th>
            <th className="px-2 py-1.5 text-left font-bold border-r" style={{ borderColor: '#C0C0C0' }}>Description</th>
            <th className="px-2 py-1.5 text-right font-bold border-r" style={{ borderColor: '#C0C0C0' }}>Debit</th>
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
  )
}
