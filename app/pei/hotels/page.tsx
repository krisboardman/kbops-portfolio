export default function HotelInfo() {
  const hotels = [
    {
      name: 'Charlottetown Arts Hotel',
      dates: 'Aug 21–22',
      nights: 2,
      checkIn: '4:00 pm',
      food: ['$'],
      amenities: null,
      note: 'On 3rd/4th floor — music not an issue',
      rooms: [
        { room: 'Room 1', perNight: 199, total: 398 },
        { room: 'Room 2', perNight: 199, total: 398 },
        { room: 'Room 3', perNight: 195, total: 390 },
      ],
    },
    {
      name: 'Tignish Heritage Inn',
      dates: 'Aug 23',
      nights: 1,
      checkIn: '3:00–8:00 pm',
      food: ['$'],
      amenities: 'Firepit — can be booked',
      note: null,
      rooms: [
        { room: 'Room 1', perNight: 190, total: 190 },
        { room: 'Room 2', perNight: 190, total: 190 },
        { room: 'Room 3', perNight: 175, total: 175 },
      ],
    },
    {
      name: 'Mill River Resort',
      dates: 'Aug 24',
      nights: 1,
      checkIn: 'TBD',
      food: ['$'],
      amenities: 'Spa / Pool',
      note: null,
      rooms: [
        { room: 'Room 1', perNight: 289, total: 289 },
        { room: 'Room 2', perNight: 289, total: 289 },
        { room: 'Room 3', perNight: 289, total: 289 },
      ],
    },
    {
      name: 'Prince County Guest House',
      location: 'Miscouche',
      dates: 'Aug 25',
      nights: 1,
      checkIn: '3:00–9:00 pm',
      food: ['*', '$', 'D'],
      amenities: null,
      note: '*Includes $30/room on-site pub voucher. Taxi to Summerside for dinner.',
      rooms: [
        { room: 'Room 1', perNight: 339, total: 339 },
        { room: 'Room 2', perNight: 339, total: 339 },
        { room: 'Room 3', perNight: 299, total: 299 },
      ],
    },
    {
      name: 'New Glasgow Inn',
      dates: 'Aug 26–27',
      nights: 2,
      checkIn: '3:00–6:00 pm',
      food: ['CP'],
      amenities: null,
      note: 'Confirm if rates are in $USD',
      highlight: true,
      rooms: [
        { room: 'Room 1', perNight: 378, total: 756 },
        { room: 'Room 2', perNight: 378, total: 756 },
        { room: 'Room 3', perNight: 378, total: 756 },
      ],
    },
    {
      name: 'Dalvay by the Sea',
      dates: 'Aug 28',
      nights: 1,
      checkIn: '4:00 pm',
      food: ['$', 'D', 'L'],
      amenities: null,
      note: null,
      rooms: [
        { room: 'Room 1', perNight: 419, total: 419 },
        { room: 'Room 2', perNight: 419, total: 419 },
        { room: 'Room 3', perNight: 379, total: 379 },
      ],
    },
    {
      name: 'Points East Coastal Inn',
      location: 'St. Peters',
      dates: 'Aug 29',
      nights: 1,
      checkIn: null,
      food: ['CP', 'D', 'L^'],
      amenities: null,
      note: null,
      rooms: [
        { room: 'Room 1', perNight: 219, total: 219 },
        { room: 'Room 2', perNight: 259, total: 259 },
        { room: 'Room 3', perNight: 189, total: 189 },
      ],
    },
    {
      name: 'Charlottetown Arts Hotel',
      dates: 'Aug 30',
      nights: 1,
      checkIn: '4:00 pm',
      food: ['$'],
      amenities: null,
      note: null,
      rooms: [
        { room: 'Room 1', perNight: 199, total: 199 },
        { room: 'Room 2', perNight: 199, total: 199 },
        { room: 'Room 3', perNight: 195, total: 195 },
      ],
    },
  ];

  const foodLabel: Record<string, string> = {
    'CP': 'Continental included',
    '$': 'Buy breakfast',
    'D': 'Dinner available',
    'L': 'Takeaway lunch',
    'L^': 'Lunch with notice',
    '*': 'Pub voucher ($30/room)',
  };

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Header */}
      <section className="bg-green-800 text-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <a href="/pei" className="text-green-300 text-sm hover:text-white mb-4 inline-block">← Back to Trip Guide</a>
          <h1 className="text-4xl font-bold mb-2">Hotel Information</h1>
          <p className="text-green-200">PEI Tip-to-Tip · August 21–31, 2026 · 3 rooms throughout</p>
        </div>
      </section>

      {/* Summary Table */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Overview</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-green-800 text-white text-left">
                  <th className="px-4 py-3">Hotel</th>
                  <th className="px-4 py-3">Dates</th>
                  <th className="px-4 py-3 text-center">Nights</th>
                  <th className="px-4 py-3">Check-in</th>
                  <th className="px-4 py-3">Food</th>
                  <th className="px-4 py-3 text-right">Per night (3 rooms)</th>
                  <th className="px-4 py-3 text-right">Stay total</th>
                </tr>
              </thead>
              <tbody>
                {hotels.map((h, i) => {
                  const perNightTotal = h.rooms.reduce((sum, r) => sum + r.perNight, 0);
                  const stayTotal = h.rooms.reduce((sum, r) => sum + r.total, 0);
                  return (
                    <tr key={i} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} ${h.highlight ? 'bg-yellow-50' : ''}`}>
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {h.name}
                        {'location' in h && h.location && (
                          <span className="block text-xs text-gray-500 font-normal">{h.location}</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-gray-700">{h.dates}</td>
                      <td className="px-4 py-3 text-center text-gray-700">{h.nights}</td>
                      <td className="px-4 py-3 text-gray-700">{h.checkIn ?? '—'}</td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-1">
                          {h.food.map((f) => (
                            <span key={f} className="px-1.5 py-0.5 bg-green-100 text-green-800 rounded text-xs font-medium">{f}</span>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right text-gray-700">${perNightTotal.toLocaleString()}</td>
                      <td className="px-4 py-3 text-right font-semibold text-gray-900">${stayTotal.toLocaleString()}</td>
                    </tr>
                  );
                })}
                {/* Grand total */}
                <tr className="border-t-2 border-green-800 bg-green-50">
                  <td colSpan={6} className="px-4 py-3 font-bold text-gray-900">Total trip accommodation</td>
                  <td className="px-4 py-3 text-right font-bold text-green-900 text-base">
                    ${hotels.reduce((sum, h) => sum + h.rooms.reduce((s, r) => s + r.total, 0), 0).toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Per-Hotel Detail Cards */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Room Breakdown</h2>
          <div className="space-y-6">
            {hotels.map((h, i) => {
              const perNightTotal = h.rooms.reduce((sum, r) => sum + r.perNight, 0);
              const stayTotal = h.rooms.reduce((sum, r) => sum + r.total, 0);
              return (
                <div key={i} className={`rounded-xl border overflow-hidden ${h.highlight ? 'border-yellow-300' : 'border-gray-200'}`}>
                  {/* Card header */}
                  <div className={`px-5 py-4 flex flex-wrap gap-x-6 gap-y-2 items-center justify-between ${h.highlight ? 'bg-yellow-50' : 'bg-gray-50'}`}>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base">
                        {h.name}
                        {'location' in h && h.location && (
                          <span className="text-gray-500 font-normal"> — {h.location}</span>
                        )}
                      </h3>
                      <p className="text-sm text-gray-500">{h.dates} · {h.nights} {h.nights === 1 ? 'night' : 'nights'}</p>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm">
                      {h.checkIn && (
                        <span className="text-gray-700"><span className="font-medium">Check-in:</span> {h.checkIn}</span>
                      )}
                      {h.amenities && (
                        <span className="text-gray-700"><span className="font-medium">Amenities:</span> {h.amenities}</span>
                      )}
                    </div>
                  </div>

                  {/* Room table */}
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-t border-gray-200 bg-white text-gray-500 text-xs uppercase tracking-wide">
                        <th className="px-5 py-2 text-left font-medium">Room</th>
                        <th className="px-5 py-2 text-right font-medium">Per night</th>
                        <th className="px-5 py-2 text-right font-medium">
                          {h.nights > 1 ? `Total (${h.nights} nights)` : 'Total'}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {h.rooms.map((r, j) => (
                        <tr key={j} className="border-t border-gray-100">
                          <td className="px-5 py-2.5 text-gray-700">{r.room}</td>
                          <td className="px-5 py-2.5 text-right text-gray-700">${r.perNight}</td>
                          <td className="px-5 py-2.5 text-right text-gray-900">${r.total}</td>
                        </tr>
                      ))}
                      <tr className="border-t border-gray-200 bg-gray-50 font-semibold">
                        <td className="px-5 py-2.5 text-gray-700">All rooms</td>
                        <td className="px-5 py-2.5 text-right text-gray-700">${perNightTotal}/night</td>
                        <td className="px-5 py-2.5 text-right text-green-800">${stayTotal}</td>
                      </tr>
                    </tbody>
                  </table>

                  {/* Food + notes */}
                  {(h.food.length > 0 || h.note) && (
                    <div className="border-t border-gray-100 px-5 py-3 bg-white flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
                      {h.food.length > 0 && (
                        <div>
                          <span className="font-medium text-gray-700">Food: </span>
                          {h.food.map((f) => foodLabel[f] ?? f).join(' · ')}
                        </div>
                      )}
                      {h.note && (
                        <div className="text-amber-700 italic">{h.note}</div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="py-8 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-wide text-gray-500 mb-3">Food Legend</h2>
          <div className="flex flex-wrap gap-3">
            {Object.entries(foodLabel).map(([code, desc]) => (
              <div key={code} className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded text-xs font-bold">{code}</span>
                <span className="text-sm text-gray-600">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-6 px-4 text-center">
        <p className="text-green-200 text-sm">PEI Tip-to-Tip · August 21–31, 2026</p>
        <p className="text-green-400 text-xs mt-1">kbops.dev/pei/hotels</p>
      </footer>
    </div>
  );
}
