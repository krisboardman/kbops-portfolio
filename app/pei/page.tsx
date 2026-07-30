import Image from 'next/image';

export default function PEI() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Hero / Slide 1 */}
      <section className="relative bg-green-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/pei/slide01_img01.jpg"
            alt="Cyclists riding past a lighthouse on PEI"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-20 text-center">
          <p className="text-green-300 uppercase tracking-widest text-sm mb-2">Prince Edward Island</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Tip-to-Tip<br />Bike Adventure</h1>
          <p className="text-2xl text-green-200 mb-8">August 21–31, 2026</p>
          <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">
            A concise group briefing for the five of us: route, logistics, food, and optional stops.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold">277 km</p>
              <p className="text-green-300 text-sm">172 mi total</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">8</p>
              <p className="text-green-300 text-sm">riding days</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">✓</p>
              <p className="text-green-300 text-sm">luggage transfers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 2 — The Route */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">02</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">The Route: Tip to Tip</h2>
          <p className="text-gray-600 mb-6">Charlottetown start · shuttle west to Tignish · ride east to Elmira · shuttle back</p>
          <div className="rounded-xl overflow-hidden mb-8 border border-gray-200">
            <Image
              src="/pei/slide02_img15.png"
              alt="Full route map from Tignish to East Point with all overnight stops"
              width={1500}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">The Rhythm</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Friday night arrival</li>
                <li>• Saturday free day + bike pickup</li>
                <li>• Sunday shuttle to Tignish</li>
                <li>• Ride west-to-east across the island</li>
                <li>• Sunday 3:00 pm shuttle from Elmira</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Trip Vibe</h3>
              <p className="text-gray-700 italic">
                Ride enough to earn the lobster, but leave room for beaches, breweries, and wandering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 3 — Big Logistics */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">03</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Big Logistics</h2>
          <p className="text-gray-600 mb-6">The key details everyone needs before we start riding</p>
          <div className="rounded-xl overflow-hidden mb-8">
            <Image
              src="/pei/slide03_img06.jpg"
              alt="Cyclists walking bikes along a boardwalk toward a PEI lighthouse"
              width={960}
              height={640}
              className="w-full h-auto rounded-xl"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <p className="text-xs font-bold uppercase text-green-700 mb-1">Friday 8/21</p>
                <p className="font-semibold text-gray-900">Everyone arrives Friday evening</p>
                <p className="text-gray-600 text-sm">Stay: The Arts Hotel, Charlottetown</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <p className="text-xs font-bold uppercase text-green-700 mb-1">Saturday 8/22</p>
                <p className="font-semibold text-gray-900">Free day in/around Charlottetown</p>
                <ul className="text-gray-600 text-sm mt-1 space-y-1">
                  <li>4:15 pm bike pickup at MacQueen's — bring back to hotel</li>
                  <li>Test ride before dinner</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <p className="text-xs font-bold uppercase text-green-700 mb-1">Sunday 8/23</p>
                <p className="font-semibold text-gray-900">Shuttle day</p>
                <ul className="text-gray-600 text-sm mt-1 space-y-1">
                  <li>Be ready by 8:45 am</li>
                  <li>9:00 am shuttle to Tignish</li>
                  <li>Bikes + luggage go with us</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <p className="text-xs font-bold uppercase text-green-700 mb-1">On the Road</p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>Daily luggage transfers</li>
                  <li>Most days start around 9:00 am</li>
                  <li>Breakfast included in some accommodations</li>
                  <li>Backup plans matter for seasonal food</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
                <p className="text-xs font-bold uppercase text-amber-700 mb-2">Reminder</p>
                <p className="text-gray-700 text-sm italic">
                  Eat before you're hungry. Drink before you're thirsty. Charge phones and bikes every night.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 4 — Trip Flow */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">04</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Trip Flow</h2>
          <p className="text-gray-600 mb-8">A simple day-by-day view</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              { date: 'Fri 8/21', label: 'Arrive\nCharlottetown', stay: 'The Arts Hotel' },
              { date: 'Sat 8/22', label: 'Free day\nBike pickup 4:15', stay: 'The Arts Hotel' },
              { date: 'Sun 8/23', label: 'Shuttle\nTignish', stay: 'Tignish Heritage Inn' },
              { date: 'Mon 8/24', label: 'Ride to\nMill River', stay: 'Mill River Resort' },
              { date: 'Tue 8/25', label: 'Ride to\nMiscouche', stay: 'Prince County Guest House' },
              { date: 'Wed 8/26', label: 'Ride to\nNew Glasgow', stay: 'New Glasgow Inn' },
              { date: 'Thu 8/27', label: 'Loop\nCavendish', stay: 'New Glasgow Inn' },
              { date: 'Fri 8/28', label: 'Ride to\nDalvay', stay: 'Dalvay by the Sea' },
              { date: 'Sat 8/29', label: 'Ride to\nSt. Peters', stay: 'Points East Coast Inn' },
              { date: 'Sun 8/30', label: 'Ride to\nElmira + shuttle', stay: 'The Arts Hotel' },
              { date: 'Mon 8/31', label: 'Fly home', stay: 'Departure' },
            ].map((day) => (
              <div key={day.date} className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                <p className="text-xs font-bold text-green-700 mb-1">{day.date}</p>
                <p className="text-sm font-semibold text-gray-900 whitespace-pre-line leading-snug mb-2">{day.label}</p>
                <p className="text-xs text-gray-500">{day.stay}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4 italic">
            Food &amp; activity notes are woven into each ride day rather than buried in a separate list. The detailed MacQueen's PDF remains the travel binder; this is the group-friendly version.
          </p>
        </div>
      </section>

      {/* Day Sections */}
      <DaySection
        slideNum="05"
        title="Day 0–1: Charlottetown"
        subtitle="Friday arrival + Saturday free day before bike pickup"
        image="/pei/slide05_img06.jpg"
        imageAlt="Victoria Row outdoor patio dining in Charlottetown"
        ride={['Free day Saturday', 'Optional test ride after pickup', 'Southern coastal drive option']}
        eat={['Sea Rocket Oyster House', 'Water Prince Corner Shop', 'Claddagh Oyster House', 'Point Prim Chowder House if driving', 'Sims Corner Steakhouse & Oyster Bar']}
        see={["Victoria Row / Reddin's Speakeasy — password", 'Point Prim Lighthouse', 'Wood Islands / Cape Bear / Panmure', 'Top Notch Lobster Excursion']}
        logistics={['Fri: arrive evening', 'Stay: The Arts Hotel', "Sat 4:15 pm: MacQueen's bike pickup", 'Pick up luggage tags', 'Breakfast not included']}
        bg="bg-gray-50"
      />

      <DaySection
        slideNum="06"
        title="Day 2: Shuttle to Tignish + North Cape"
        subtitle="Sunday 8/23 — get west, then optional warm-up ride"
        image="/pei/slide06_img06.jpg"
        imageAlt="Cyclists riding along a coastal road past a lighthouse"
        ride={['Optional North Cape loop', '~17 mi / 27.8 km', 'Mostly roads, relatively flat']}
        eat={["M.J.'s Bakery / Caboose Café", 'Local dinner in Tignish', 'Snack backup recommended']}
        see={['North Cape Wind Energy Centre', 'Tignish Cultural Centre', 'St. Simon & St. Jude Church']}
        logistics={['8:45 am: be ready', '9:00 am shuttle pickup', 'Stay: Tignish Heritage Inn', 'Breakfast not included']}
        bg="bg-white"
      />

      <DaySection
        slideNum="07"
        title="Day 3: Tignish → Mill River"
        subtitle="Monday 8/24 — first point-to-point ride"
        image="/pei/slide07_img06.jpg"
        imageAlt="Cyclists walking bikes on a boardwalk toward a PEI lighthouse"
        ride={['~29 mi / 47.1 km', 'Moderate hills', 'Mostly off-road / trail']}
        eat={['Valley Pearl Oysters if timing works', 'Mill River on-site options', 'Carry lunch/snacks']}
        see={['Alberton harbor', 'North Cape Coastal scenery', 'Quiet trail towns']}
        logistics={['Bags picked up ~9:00', 'Stay: Mill River Resort', 'Breakfast not included', 'Indoor pool / resort amenities']}
        bg="bg-gray-50"
      />

      <DaySection
        slideNum="08"
        title="Day 4: Mill River → Miscouche"
        subtitle="Tuesday 8/25 — the longer western ride"
        image="/pei/slide08_img06.jpg"
        imageAlt="Fresh PEI lobster and mussels on a table with ocean views"
        ride={['~40 mi / 64.3 km', 'Relatively flat', 'Mostly off-road / trail']}
        eat={['Moth Lane Brewing', 'Prince County Guest House pub', 'Summerside taxi option if needed']}
        see={['Portage wetlands', 'Bideford / Acadian heritage', 'Richmond Dairy Bar idea', 'Bannock in the sand']}
        logistics={['Bags picked up ~9:00', 'Stay: Prince County Guest House', '$30 room pub voucher noted', 'Breakfast nearby / not included']}
        bg="bg-white"
      />

      <DaySection
        slideNum="09"
        title="Day 5: Miscouche → New Glasgow"
        subtitle="Wednesday 8/26 — central PEI and lobster country"
        image="/pei/slide09_img06.jpg"
        imageAlt="PEI lobster supper served on a plate at a restaurant"
        ride={['~38 mi / 61.3 km', 'Moderate hills', 'Trail + rolling finish']}
        eat={['New Glasgow Lobster Suppers', 'The Table — WAITLIST', 'Blue Mussel Cafe', 'Evermoore Brewing (Summerside)', 'Moth Lane Brewing (Summerside)']}
        see={['Summerside area', 'Kensington Railway Station', 'Hunter River / rolling farmland']}
        logistics={['Bags picked up ~9:00', 'Stay: New Glasgow Inn', '2 nights here', 'Breakfast included']}
        bg="bg-gray-50"
      />

      <DaySection
        slideNum="10"
        title="Day 6: New Glasgow + Cavendish Loop"
        subtitle="Thursday 8/27 — lighter ride, big food/see day"
        image="/pei/slide10_img06.jpg"
        imageAlt="Fresh oysters on the half shell on ice"
        ride={['~22 mi / 34.7 km loop', 'Moderate hills', 'Mostly roads']}
        eat={['Blue Mussel Café — join waitlist en route', 'Lone Oak Beer Garden', 'New Glasgow Lobster Suppers backup']}
        see={['Green Gables Heritage Place', 'PEI National Park shoreline', 'Cavendish / North Rustico']}
        logistics={['Stay: New Glasgow Inn', 'Second night', 'Breakfast included', 'Good day for flexible plans']}
        bg="bg-white"
      />

      <DaySection
        slideNum="11"
        title="Day 7: New Glasgow → Dalvay"
        subtitle="Friday 8/28 — choose the scenic route"
        image="/pei/slide11_img06.jpg"
        imageAlt="Cyclists walking bikes along a boardwalk near a lighthouse"
        ride={['Options: ~19–36 mi', 'Moderate hills', 'Trail / roads / parkway choices']}
        eat={['Dalvay dining on-site', "Richard's Seafood nearby", 'Reserve dinner if eating at Dalvay']}
        see={['PEI National Park', 'Gulf Shore Parkway', 'Beaches + dunes']}
        logistics={['Bags ready by 8:30', 'Stay: Dalvay by the Sea', 'Breakfast not included', 'Dinner reservation recommended']}
        bg="bg-gray-50"
      />

      <DaySection
        slideNum="12"
        title="Day 8: Dalvay → St. Peters"
        subtitle="Saturday 8/29 — dunes, mussels, and bay views"
        image="/pei/slide12_img06.jpg"
        imageAlt="PEI lobster and mussels on a wooden table with ocean in the background"
        ride={['~25 mi / 40.3–50.5 km depending route', 'Relatively flat', 'Trail + quiet connectors']}
        eat={['21 Breakwater', 'Points East inn dinner available', 'Dairy bar / local cafés']}
        see={['Morell River', 'Greenwich dunes lookout', 'Artisans by the Bay / St. Peters']}
        logistics={['Bags ready by 8:30', 'Stay: Points East Coastal Inn', 'Breakfast included', 'Packed lunches available']}
        bg="bg-white"
      />

      <DaySection
        slideNum="13"
        title="Day 9: St. Peters → Elmira + Shuttle"
        subtitle="Sunday 8/30 — finish the tip-to-tip route"
        image="/pei/slide13_img06.jpg"
        imageAlt="Cyclists riding along a coastal road past a lighthouse on the final day"
        ride={['Option 1: ~27 mi / 43.5 km', 'Option 2: East Point extension ~40 mi', 'Moderately hilly']}
        eat={['Lunch/snacks before shuttle', 'Charlottetown dinner after return', 'Cows ice cream — Best ice cream in Canada']}
        see={['Elmira Railway Museum', 'East Point Lighthouse option', 'Basin Head / Singing Sands if extending']}
        logistics={['3:00 pm shuttle from Elmira', 'Return via St. Peters luggage pickup', 'Drop-off ~4:15 Charlottetown', 'Stay: The Arts Hotel']}
        bg="bg-gray-50"
      />

      {/* Slide 14 — Food & Drink */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">14</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Food & Drink: Priority Stops</h2>
          <p className="text-gray-600 mb-6">Integrated by day, but here is the quick hit list</p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/pei/slide14_img06.jpg"
                alt="Fresh PEI lobster and mussels with ocean views"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/pei/slide14_img07.jpg"
                alt="Charlottetown Victoria Row outdoor patio dining scene"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-3">Charlottetown</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Sea Rocket Oyster House</li>
                <li>• Water Prince Corner Shop</li>
                <li>• Claddagh Oyster House</li>
                <li>• Sims Corner</li>
                <li>• Hopyard / Cows</li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-3">Central / North Shore</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• New Glasgow Lobster Suppers</li>
                <li>• Blue Mussel Café</li>
                <li>• The Table — WAITLIST</li>
                <li>• Lone Oak Beer Garden</li>
                <li>• Jane & Sue Chocolate</li>
              </ul>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-3">On Route / East</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Moth Lane Brewing</li>
                <li>• Valley Pearl Oysters</li>
                <li>• Dalvay dining</li>
                <li>• Richard's Seafood</li>
                <li>• 21 Breakwater</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-6 italic bg-gray-50 border border-gray-200 rounded p-4">
            Rule of thumb: if a spot is seasonal, popular, or outside Charlottetown, check hours before we ride there.
          </p>
        </div>
      </section>

      {/* Slide 15 — Optional Experiences */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">15</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Optional Experiences & Open Decisions</h2>
          <p className="text-gray-600 mb-6">A few things to decide together</p>
          <div className="rounded-xl overflow-hidden mb-8">
            <Image
              src="/pei/slide15_img06.jpg"
              alt="Cyclists with bikes on a boardwalk at a PEI lighthouse"
              width={960}
              height={640}
              className="w-full h-auto rounded-xl"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-green-800 mb-3">Likely / Easy</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Southern Coastal Drive</li>
                <li>• Victoria Row + Reddins</li>
                <li>• Green Gables + PEI National Park</li>
                <li>• Cows ice cream</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-bold text-amber-800 mb-3">Needs Timing / Booking</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Bannock & Clams in the Sand</li>
                <li>• Lobster excursion</li>
                <li>• The Table — waitlist only</li>
                <li>• Dalvay by the Sea dinner reservation (for hotel)</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-6 italic">
            Decision goal: keep the trip flexible, but lock in anything that needs a reservation.
          </p>
        </div>
      </section>

      {/* Slide 16 — Packing */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">16</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Packing: Keep It Practical</h2>
          <p className="text-gray-600 mb-6">Bike comfort, rain readiness, phone battery, and evening shoes</p>
          <div className="rounded-xl overflow-hidden mb-8">
            <Image
              src="/pei/slide16_img06.jpg"
              alt="Two cyclists riding along a road with a lighthouse and dunes"
              width={960}
              height={500}
              className="w-full h-auto rounded-xl"
            />
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-blue-900 mb-3">Bike Comfort</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>Padded shorts / liners</li>
                <li>Chamois Butt'r</li>
                <li>Gloves + eyewear</li>
                <li>Cycling socks</li>
              </ul>
            </div>
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-3">Weather / Road</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>Rain jacket</li>
                <li>Reflective layer</li>
                <li>Water bottle</li>
                <li>Energy snacks</li>
              </ul>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-bold text-purple-900 mb-3">Phone / Gear</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>2 portable chargers</li>
                <li>Phone mount</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-900 mb-3">Off-Bike</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>Chaco/walking shoes</li>
                <li>Earplugs for Arts Hotel</li>
                <li>Light layers</li>
                <li>Laundry plan</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-6 italic bg-gray-50 border border-gray-200 rounded p-4">
            Reminder from MacQueen's: bike includes helmet, water bottle cage, rear carrier, locks, bags, and one group repair kit.
          </p>
        </div>
      </section>

      {/* Slide 17 — Trip Cheat Sheet */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">17</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Trip Cheat Sheet</h2>
          <p className="text-gray-600 mb-8">One-glance reference for the group</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-800 text-white">
                  <th className="p-3 text-left">Day</th>
                  <th className="p-3 text-left">Overnight</th>
                  <th className="p-3 text-left">Ride</th>
                  <th className="p-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { day: 'Fri', overnight: 'Charlottetown', ride: '—', notes: '' },
                  { day: 'Sat', overnight: 'Charlottetown', ride: 'test ride', notes: 'Bike pickup 4:15', dot: '🟢' },
                  { day: 'Sun', overnight: 'Tignish', ride: '17 mi opt.', notes: 'Shuttle 9:00', dot: '🟢' },
                  { day: 'Mon', overnight: 'Mill River', ride: '29 mi', notes: '', dot: '🟡' },
                  { day: 'Tue', overnight: 'Miscouche', ride: '40 mi', notes: '', dot: '🟡' },
                  { day: 'Wed', overnight: 'New Glasgow', ride: '38 mi', notes: 'breakfast incl.', dot: '🟡' },
                  { day: 'Thu', overnight: 'New Glasgow', ride: '22 mi loop', notes: 'breakfast incl.', dot: '🟠' },
                  { day: 'Fri', overnight: 'Dalvay', ride: '19–36 mi', notes: 'reserve dinner', dot: '🟠' },
                  { day: 'Sat', overnight: 'St. Peters', ride: '25–31 mi', notes: 'breakfast incl.', dot: '🟠' },
                  { day: 'Sun', overnight: 'Charlottetown', ride: '27–40 mi', notes: 'shuttle 3:00', dot: '' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 font-semibold text-gray-900">{row.day}</td>
                    <td className="p-3 text-gray-700">{row.overnight}</td>
                    <td className="p-3 text-gray-700">{row.ride}</td>
                    <td className="p-3 text-gray-500">{row.notes} {row.dot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/pei/slide17_img93.png"
              alt="Cycling route map showing 277km from Tignish to East Point"
              width={1200}
              height={600}
              className="w-full h-auto rounded-xl border border-gray-200"
            />
          </div>
          <p className="text-xs text-gray-500 mt-4 italic">
            Use this for the meeting; the MacQueen's PDF is still the official confirmation packet.
          </p>
        </div>
      </section>

      {/* Slide 18 — Useful Links */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">18</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Useful Links & Source Notes</h2>
          <p className="text-gray-600 mb-6">For quick reference while planning</p>
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="space-y-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Deck Sources</h3>
                <p className="text-gray-600 text-sm">
                  MacQueen's itinerary PDF, Kristen's planning notes, uploaded route map, and public travel imagery from Tourism PEI / Destination Canada.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Blue Mussel Café</h3>
                <p className="text-gray-600 text-sm">Join the waitlist when you're on your way.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Reddin's Speakeasy</h3>
                <p className="text-gray-600 text-sm">
                  Look for the doorbell and "secret symbol" for entry at 132 Victoria Row. Kindly wait at the doorbell for a response after ringing the buzzer.
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Lobster Boat — Top Notch</h3>
                <p className="text-gray-600 text-sm">
                  Smell the salt air, feel the gentle breeze against your face, enjoy the thrill of taking a lobster right out of a trap, and savour the experience of a traditional Prince Edward Island lobster supper while aboard the 45-foot fishing boat Top Notch.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden self-start">
              <Image
                src="/pei/slide18_img10.jpg"
                alt="Fresh PEI lobster and mussels with ocean views"
                width={600}
                height={800}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Slide 19 — Bannock Excursion */}
      <section className="py-12 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-amber-600 mb-1">19 — DETOUR</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Bannock & Clams in the Sand</h2>
          <p className="text-gray-600 mb-6">On the way from Mill River to Prince County Guest House — sessions at 10am or 2pm</p>
          <div className="rounded-xl overflow-hidden mb-6">
            <Image
              src="/pei/slide19_img10.png"
              alt="Map showing route from Mill River Resort to Prince County Guest House via Lennox Island"
              width={1100}
              height={900}
              className="w-full h-auto rounded-xl border border-amber-200"
            />
          </div>
          <div className="bg-white border border-amber-200 rounded-lg p-6">
            <p className="text-gray-700 leading-relaxed">
              With the guidance of traditional teachers and storytellers, you will get to experience preparing Bannock (traditionally made bread) that is cooked in the sand. While everything is cooking, you will be treated to stories of traditional life on Lennox Island and maybe learn a little Mi'kmaq while you are there.
            </p>
            <p className="mt-4 text-sm text-amber-700 font-medium">
              experiencelennoxisland.com/bannock-and-clams-in-the-sand/
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8 px-4 text-center">
        <p className="text-green-200 text-sm">PEI Tip-to-Tip · August 21–31, 2026</p>
        <p className="text-green-400 text-xs mt-1">kbops.dev/pei</p>
      </footer>
    </div>
  );
}

function DaySection({
  slideNum,
  title,
  subtitle,
  image,
  imageAlt,
  ride,
  eat,
  see,
  logistics,
  bg,
}: {
  slideNum: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  ride: string[];
  eat: string[];
  see: string[];
  logistics: string[];
  bg: string;
}) {
  return (
    <section className={`py-12 px-4 ${bg}`}>
      <div className="max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">{slideNum}</p>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">{title}</h2>
        <p className="text-gray-500 mb-4 text-sm">{subtitle}</p>
        <div className="rounded-xl overflow-hidden mb-6">
          <Image
            src={image}
            alt={imageAlt}
            width={960}
            height={480}
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-xs font-bold uppercase text-green-700 mb-2">Ride</p>
            <ul className="text-gray-700 text-sm space-y-1">
              {ride.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-xs font-bold uppercase text-red-700 mb-2">Eat / Drink</p>
            <ul className="text-gray-700 text-sm space-y-1">
              {eat.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-xs font-bold uppercase text-blue-700 mb-2">See / Do</p>
            <ul className="text-gray-700 text-sm space-y-1">
              {see.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-xs font-bold uppercase text-gray-700 mb-2">Logistics</p>
            <ul className="text-gray-700 text-sm space-y-1">
              {logistics.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
