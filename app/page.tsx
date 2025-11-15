'use client'

import { WindowDialog } from '@/components/window-dialog'
import { SendCoinsDialog } from '@/components/send-coins-dialog'
import { TransactionTable } from '@/components/transaction-table'

export default function Page() {
  return (
    <div className="min-h-screen bg-white p-0">
      {/* Main Content Container */}
      <div className="px-4 py-3" style={{ maxWidth: 'none' }}>
        {/* Header */}
        <div className="mb-3">
          <div className="flex justify-between items-center mb-1 flex-wrap gap-2">
            <h1 className="font-bold" style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 700, margin: 0, fontFamily: 'Times New Roman, Times, serif' }}>Sadcoin.org</h1>
            <div className="flex gap-3 flex-wrap">
              <a href="/exchange" className="hover:underline" style={{ fontSize: '13px' }}>Exchange Rate</a>
              <a href="/whitepaper" className="hover:underline" style={{ fontSize: '13px' }}>Whitepaper</a>
              <a href="/faucet" className="hover:underline" style={{ fontSize: '13px' }}>Faucet</a>
            </div>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid black', margin: '8px 0' }} />
        </div>

        {/* Intro Section */}
        <div className="mb-4">
          <p className="mb-3">
            Sadcoin is a free open source peer-to-peer electronic cash system that is completely decentralized, without the need for a central server or trusted parties. Users hold the crypto keys to their own money and transact directly with each other, with the help of the P2P network to check for double-spending.
          </p>
        </div>

        {/* Sadcoin Client Window Dialog */}
        <div className="mb-6">
          <WindowDialog title="Sadcoin" icon="$">
            <div className="space-y-0 p-0">
              {/* Menu Bar */}
              <div className="flex gap-0 text-xs" style={{ 
                background: '#C0C0C0',
                fontFamily: 'MS Sans Serif, Arial, sans-serif',
                fontSize: '11px',
                borderBottom: '1px solid #808080'
              }}>
                <div className="px-3 py-1 hover:bg-blue-600 hover:text-white cursor-pointer">File</div>
                <div className="px-3 py-1 hover:bg-blue-600 hover:text-white cursor-pointer">Options</div>
                <div className="px-3 py-1 hover:bg-blue-600 hover:text-white cursor-pointer">Help</div>
              </div>

              {/* Tabs */}
              <div className="flex gap-0 text-xs" style={{ background: '#C0C0C0' }}>
                <div className="flex items-center gap-1.5 px-3 py-1.5 font-bold" style={{ 
                  background: '#C0C0C0',
                  border: '2px solid',
                  borderColor: '#DFDFDF #808080 #808080 #DFDFDF',
                  fontFamily: 'MS Sans Serif, Arial, sans-serif',
                  fontSize: '11px',
                  marginTop: '2px'
                }}>
                  <span className="text-green-600">▶</span>
                  <span>Send Coins</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5" style={{ 
                  background: '#C0C0C0',
                  border: '1px solid #808080',
                  fontFamily: 'MS Sans Serif, Arial, sans-serif',
                  fontSize: '11px',
                  marginTop: '2px',
                  marginLeft: '-2px'
                }}>
                  <span>📖</span>
                  <span>Address Book</span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-3" style={{ background: '#C0C0C0', fontFamily: 'MS Sans Serif, Arial, sans-serif' }}>
                {/* Address Section */}
                <div className="mb-3">
                  <div className="text-xs font-bold mb-1" style={{ fontSize: '11px' }}>Sadcoin Contract Address:</div>
                  <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                    <input 
                      id="contract-address"
                      type="text" 
                      defaultValue=""
                      className="flex-1 px-2 py-1 bg-white text-xs min-w-0" 
                      style={{ 
                        border: '2px solid',
                        borderColor: '#808080 #DFDFDF #DFDFDF #808080',
                        fontFamily: 'MS Sans Serif, Arial, sans-serif',
                        fontSize: '11px'
                      }}
                    />
                    <button 
                      className="px-3 py-1 text-xs font-bold whitespace-nowrap"
                      onClick={() => {
                        const input = document.getElementById('contract-address') as HTMLInputElement;
                        if (input && input.value) {
                          navigator.clipboard.writeText(input.value).then(() => {
                            alert('Copied to clipboard!');
                          }).catch(() => {
                            input.select();
                            document.execCommand('copy');
                            alert('Copied to clipboard!');
                          });
                        }
                      }}
                      style={{ 
                        background: '#C0C0C0',
                        border: '2px solid',
                        borderColor: '#DFDFDF #808080 #808080 #DFDFDF',
                        fontFamily: 'MS Sans Serif, Arial, sans-serif',
                        fontSize: '11px',
                        cursor: 'pointer'
                      }}
                    >
                      Copy to Clipboard
                    </button>
                  </div>
                </div>

                {/* Balance */}
                <div className="mb-3">
                  <div className="text-xs font-bold" style={{ fontSize: '11px' }}>Balance:</div>
                  <div className="text-sm font-bold mt-0.5">6.9</div>
                </div>

                {/* Transactions */}
                <div className="mb-2">
                  <button 
                    className="px-3 py-1 text-xs font-bold mb-2"
                    style={{ 
                      background: '#C0C0C0',
                      border: '2px solid',
                      borderColor: '#DFDFDF #808080 #808080 #DFDFDF',
                      fontFamily: 'MS Sans Serif, Arial, sans-serif',
                      fontSize: '11px'
                    }}
                  >
                    All Transactions
                  </button>
                  <TransactionTable />
                </div>

                {/* Status Bar */}
                <div className="px-2 py-1 text-xs flex justify-between mt-2 gap-1 flex-wrap" style={{ 
                  background: '#C0C0C0',
                  border: '2px solid',
                  borderColor: '#808080 #DFDFDF #DFDFDF #808080',
                  fontFamily: 'MS Sans Serif, Arial, sans-serif',
                  fontSize: '11px'
                }}>
                  <span style={{ 
                    border: '1px solid',
                    borderColor: '#808080 #DFDFDF #DFDFDF #808080',
                    padding: '1px 4px',
                    whiteSpace: 'nowrap'
                  }}>3 connections</span>
                  <span style={{ 
                    border: '1px solid',
                    borderColor: '#808080 #DFDFDF #DFDFDF #808080',
                    padding: '1px 4px',
                    whiteSpace: 'nowrap'
                  }}>213 blocks</span>
                  <span style={{ 
                    border: '1px solid',
                    borderColor: '#808080 #DFDFDF #DFDFDF #808080',
                    padding: '1px 4px',
                    whiteSpace: 'nowrap'
                  }}>2 transactions</span>
                </div>
              </div>
            </div>
          </WindowDialog>
        </div>

        {/* Send Coins Dialog */}
        <div className="mb-6">
          <SendCoinsDialog />
        </div>

        {/* Download Section */}
        <div className="mb-4">
          <p className="mb-2">
            Windows NT/2000/XP/Vista. Open source C++ code is included.
          </p>
          
          <p className="mb-2">
            Download link: <a href="https://sourceforge.net/projects/bitcoin/files/">sadcoin-0.1.5.rar</a>
          </p>

          <p className="mb-0.5">- Unpack the files into a directory</p>
          <p className="mb-0.5">- Run SADCOIN.EXE</p>
          <p className="mb-2">- It automatically connects to other nodes</p>

          <p className="mb-3">
            If you can keep a node running that accepts incoming connections, you'll really be helping the network a lot. Port 8333 on your firewall needs to be open to receive incoming connections.
          </p>
        </div>

        {/* Content Sections */}
        <div className="mb-4">
          <p className="mb-3">
            The software is still alpha and experimental. There's no guarantee the system's state won't have to be restarted at some point if it becomes necessary, although I've done everything I can to build in extensibility and versioning.
          </p>

          <p className="mb-3">
            You can get coins by getting someone to send you some, or turn on Options-&gt;Generate Coins to run a node and generate blocks. I made the proof-of-work difficulty ridiculously easy to start with, so for a little while in the beginning a typical PC will be able to generate coins in just a few hours. It'll get a lot harder when competition makes the automatic adjustment drive up the difficulty. Generated coins must wait 120 blocks to mature before they can be spent.
          </p>

          <p className="mb-3">
            There are two ways to send money. If the recipient is online, you can enter their IP address and it will connect, get a new public key and send the transaction with comments. If the recipient is not online, it is possible to send to their Sadcoin address, which is a hash of their public key that they give you. They'll receive the transaction the next time they connect and get the block it's in. This method has the disadvantage that no comment information is sent, and a bit of privacy may be lost if the address is used multiple times, but it is a useful alternative if both users can't be online at the same time or the recipient can't receive incoming connections.
          </p>

          <p className="mb-3">
            Total circulation will be 21,000,000 coins. It'll be distributed to network nodes when they make blocks, with the amount cut in half every 4 years.
          </p>

          <p className="mb-3">
            first 4 years: 10,500,000 coins<br/>
            next 4 years: 5,250,000 coins<br/>
            next 4 years: 2,625,000 coins<br/>
            next 4 years: 1,312,500 coins<br/>
            etc...
          </p>

          <p className="mb-3">
            When that runs out, the system can support transaction fees if needed. It's based on open market competition, and there will probably always be nodes willing to process transactions for free.
          </p>
        </div>

        {/* Horizontal Rule */}
        <hr className="border-t border-black my-6" />

        {/* Date Section */}
        <div className="mb-3">
          <p className="italic">15 Nov 2025</p>
        </div>

        {/* Sadcoin Description Section */}
        <div className="mb-4">
          <p className="mb-3">
            Sadcoin is a new design for a fully peer-to-peer electronic cash system. A C++ implementation is under development for release as an open source project.
          </p>

          <p className="font-bold mb-1">Main properties:</p>
          <p className="ml-4 mb-0.5">- Double-spending is prevented with a peer-to-peer network.</p>
          <p className="ml-4 mb-0.5">- No mint or other trusted parties.</p>
          <p className="ml-4 mb-3">- Participants can be anonymous.</p>

          <p className="mb-3">
            The network works in parallel to generate a chain of <a href="http://www.hashcash.org/">Hashcash</a> style proof-of-work. The proof-of-work chain is the key to <a href="https://web.archive.org/web/20090309175840/http://www.bitcoin.org/byzantine.html">solving the Byzantine Generals' Problem</a> of synchronising the global view and generating computational proof of the majority consensus without having to trust anyone.
          </p>

          <p className="mb-3">
            <span className="font-bold">Paper:</span> <a href="/whitepaper" className="font-bold">Sadcoin: A Peer-to-Peer Electronic Cash System</a>
          </p>

          <div className="mt-3">
            <p className="font-bold mb-1">Abstract.</p>
            <p className="mb-3">
              A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution. Digital signatures provide part of the solution, but the main benefits are lost if a trusted third party is still required to prevent double-spending. We propose a solution to the double-spending problem using a peer-to-peer network. The network timestamps transactions by hashing them into an ongoing chain of hash-based proof-of-work, forming a record that cannot be changed without redoing the proof-of-work. The longest chain not only serves as proof of the sequence of events witnessed, but proof that it came from the largest pool of CPU power. As long as a majority of CPU power is controlled by nodes that are not cooperating to attack the network, they'll generate the longest chain and outpace attackers. The network itself requires minimal structure. Messages are broadcast on a best effort basis, and nodes can leave and rejoin the network at will, accepting the longest proof-of-work chain as proof of what happened while they were gone.
            </p>
          </div>
        </div>

        {/* Horizontal Rule */}
        <hr className="border-t border-black my-6" />

        {/* Related Links */}
        <div className="mb-3">
          <p className="font-bold mb-1">Related Links</p>
          <p><a href="http://www.weidai.com/bmoney.txt">Wei Dai's b-money</a></p>
          <p><a href="http://unenumerated.blogspot.com/2005/12/bit-gold.html">Nick Szabo's bit gold</a></p>
          <p><a href="https://web.archive.org/web/20090426214618/http://testgrid.allmydata.org:3567/uri/URI:DIR2-RO:j74uhg25nwdpjpacl6rkat2yhm:kav7ijeft5h7r7rxdp5bgtlt3viv32yabqajkrdykozia5544jqa/wiki.html#%5B%5BDecentralized%20Money%5D%5D">Zooko's blog</a></p>
        </div>

        {/* Horizontal Rule */}
        <hr className="border-t border-black my-4" />

        {/* Mailing List */}
        <div className="mb-3">
          <p className="mb-1">I'll announce new version updates on the mailing list:</p>
          <p className="mb-0.5">sadcoin-list@lists.sourceforge.net</p>
          <p><a href="#">Subscribe/Unsubscribe</a></p>
          <p><a href="#">Archives</a></p>
        </div>

        {/* Horizontal Rule */}
        <hr className="border-t border-black my-4" />

        {/* Contact Section */}
        <div className="mb-4">
          <p className="mb-1">Sadtoshi Nakamoto</p>
          <p><a href="https://x.com/sadcoinsol">PGP key</a></p>
        </div>
      </div>
    </div>
  )
}
