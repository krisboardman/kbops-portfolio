import Image from 'next/image';

export default function AnneOfGreenGables() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Header */}
      <section className="bg-green-800 text-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <a href="/pei" className="text-green-300 text-sm hover:text-white mb-4 inline-block">← Back to Trip Guide</a>
          <p className="text-green-300 uppercase tracking-widest text-xs mb-2">Thursday, August 27 · Cavendish Loop Day</p>
          <h1 className="text-4xl font-bold mb-2">Green Gables Heritage Place</h1>
          <p className="text-green-200">Prince Edward Island · ~10–15 min from New Glasgow Inn</p>
        </div>
      </section>

      {/* Photo */}
      <div className="w-full">
        <Image
          src="/pei/green-gables.jpg"
          alt="Green Gables Heritage Place farmhouse, Cavendish PEI"
          width={1200}
          height={600}
          className="w-full h-auto"
        />
      </div>

      {/* Best fit callout */}
      <section className="py-10 px-4 bg-amber-50 border-b border-amber-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-bold text-amber-900 mb-2">Best fit in our itinerary</h2>
          <p className="text-gray-700">
            We're staying at the New Glasgow Inn, only about 10–15 minutes from Green Gables Heritage Place.
            The best plan is to visit in the morning before crowds, spend 2–3 hours exploring, have lunch nearby,
            and then continue with the rest of the day's activities.
          </p>
        </div>
      </section>

      {/* Suggested Schedule */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Suggested Schedule</h2>
          <div className="space-y-3">
            {[
              { time: '9:00 AM', detail: 'Arrive at Green Gables Heritage Place' },
              { time: '9:00–11:30 AM', detail: 'Explore the site' },
              { time: 'Midday', detail: 'Lunch in Cavendish or North Rustico' },
              { time: 'Afternoon', detail: 'Continue exploring Cavendish, PEI National Park, or relax' },
            ].map((item) => (
              <div key={item.time} className="flex gap-4 items-start">
                <span className="text-sm font-semibold text-green-700 w-36 shrink-0 pt-0.5">{item.time}</span>
                <span className="text-gray-700">{item.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll See */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll See</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: 'Green Gables House', desc: 'Self-guided walk through the famous farmhouse that inspired Lucy Maud Montgomery.' },
              { name: 'Visitor Centre', desc: 'Exhibits about Lucy Maud Montgomery, Anne of Green Gables, and PEI history.' },
              { name: 'Haunted Wood Trail', desc: 'A scenic 20–30 minute woodland walk from the novels.' },
              { name: "Lover's Lane", desc: 'Another iconic walking trail from the books.' },
              { name: 'Gardens & Farmyard', desc: 'Historic farm buildings and gardens.' },
              { name: 'Gift Shop & Café', desc: 'Books, ornaments, tea, jams, local crafts, clothing, and souvenirs. Small café available.' },
            ].map((item) => (
              <div key={item.name} className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-1">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Time breakdown + Reservations */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Much Time?</h2>
            <p className="text-gray-600 text-sm mb-4">Plan on approximately 2–3 hours total:</p>
            <div className="space-y-2">
              {[
                { activity: 'Visitor Centre', time: '20–30 min' },
                { activity: 'House', time: '30 min' },
                { activity: 'Trails', time: '45–60 min' },
                { activity: 'Gift Shop / Café', time: '20 min' },
              ].map((item) => (
                <div key={item.activity} className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-gray-700">{item.activity}</span>
                  <span className="text-sm font-medium text-green-700">{item.time}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-1 font-semibold">
                <span className="text-gray-900">Total</span>
                <span className="text-green-800">~2–3 hours</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Reservations</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <p className="text-gray-700 text-sm leading-relaxed">
                No reservations are normally required. Arriving in the morning is recommended during August
                because it is one of the busiest times of year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Order */}
      <section className="py-10 px-4 bg-green-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Recommended Order for Our Visit</h2>
          <p className="text-gray-600 text-sm mb-6">Classic Anne of Green Gables experience without taking up the entire day.</p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            {[
              'Visitor Centre',
              'Green Gables House',
              'Haunted Wood Trail',
              "Lover's Lane",
              'Gift Shop',
              'Lunch in North Rustico or Cavendish',
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-3 bg-white border border-green-200 rounded-lg px-4 py-3">
                <span className="w-6 h-6 rounded-full bg-green-800 text-white text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                <span className="text-gray-800 text-sm">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Nearby */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Optional Nearby Stops</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span> L.M. Montgomery's Cavendish Home Site</li>
            <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span> Cavendish Cemetery (Lucy Maud Montgomery's gravesite)</li>
            <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span> Cavendish Post Office</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-6 px-4 text-center">
        <p className="text-green-200 text-sm">PEI Tip-to-Tip · August 21–31, 2026</p>
        <p className="text-green-400 text-xs mt-1">kbops.dev/pei/anne</p>
      </footer>
    </div>
  );
}
