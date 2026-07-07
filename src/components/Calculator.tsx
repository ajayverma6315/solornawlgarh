import { useState } from 'react';

export default function Calculator() {
  const [bill, setBill] = useState(3000);
  const [type, setType] = useState<'residential' | 'commercial'>('residential');

  // Realistic estimation logic
  const unitRate = type === 'residential' ? 8 : 10;
  const unitsConsumed = bill / unitRate;
  const systemSizeKw = Math.max(1, (unitsConsumed / 120)).toFixed(1); // Rough estimate: 1kW generates 120 units/month
  const annualSavings = (bill * 12).toLocaleString('en-IN');
  const paybackPeriod = type === 'residential' ? '3-4 Years' : '2-3 Years';
  
  // PM Surya Ghar Subsidy (up to 3kW) for residential
  let subsidy = 0;
  if (type === 'residential') {
    const size = parseFloat(systemSizeKw);
    if (size <= 2) subsidy = size * 30000;
    else if (size <= 3) subsidy = 60000 + ((size - 2) * 18000);
    else subsidy = 78000;
  }

  return (
    <section id="calculator" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-700 tracking-widest uppercase mb-3">ROI Calculator</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Calculate Your Solar Savings</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">See how much you can save and how quickly your investment pays for itself.</p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
          <div className="grid md:grid-cols-5 h-full">
            
            {/* Input Section */}
            <div className="md:col-span-2 bg-slate-50 p-8 md:p-12 border-r border-slate-100">
              <h4 className="text-xl font-bold text-slate-900 mb-8">Enter Your Details</h4>
              
              <div className="mb-8">
                <label className="block font-semibold text-slate-700 mb-4">Property Type</label>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setType('residential')}
                    className={`flex-1 py-3 rounded-xl font-medium transition-colors border ${type === 'residential' ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-300'}`}
                  >
                    Residential
                  </button>
                  <button 
                    onClick={() => setType('commercial')}
                    className={`flex-1 py-3 rounded-xl font-medium transition-colors border ${type === 'commercial' ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-300'}`}
                  >
                    Commercial
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between mb-4">
                  <label className="font-semibold text-slate-700">Monthly Electricity Bill</label>
                  <span className="font-bold text-emerald-700 text-xl bg-emerald-100 px-3 py-1 rounded-lg">₹{bill.toLocaleString('en-IN')}</span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="50000" 
                  step="500"
                  value={bill}
                  onChange={(e) => setBill(Number(e.target.value))}
                  className="w-full h-3 bg-emerald-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between mt-3 text-sm font-medium text-slate-400">
                  <span>₹1,000</span>
                  <span>₹50,000+</span>
                </div>
              </div>
            </div>

            {/* Output Section */}
            <div className="md:col-span-3 p-8 md:p-12">
              <h4 className="text-xl font-bold text-slate-900 mb-8">Your Solar Potential</h4>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="text-sm font-semibold text-slate-500 mb-1">Recommended System</div>
                  <div className="text-3xl font-extrabold text-slate-900">{systemSizeKw} <span className="text-xl text-slate-500">kW</span></div>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="text-sm font-semibold text-slate-500 mb-1">Payback Period</div>
                  <div className="text-3xl font-extrabold text-slate-900">{paybackPeriod}</div>
                </div>

                <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                  <div className="text-sm font-semibold text-emerald-700 mb-1">Estimated Subsidy</div>
                  <div className="text-3xl font-extrabold text-emerald-800">
                    {subsidy > 0 ? `₹${subsidy.toLocaleString('en-IN')}` : 'Not Applicable'}
                  </div>
                </div>

                <div className="bg-emerald-600 p-6 rounded-2xl border border-emerald-700 shadow-lg text-white">
                  <div className="text-sm font-semibold text-emerald-100 mb-1">Annual Savings</div>
                  <div className="text-3xl font-extrabold text-white">₹{annualSavings}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <p className="text-xs text-slate-400 text-center sm:text-left max-w-sm">
                  *This is an estimate based on average solar generation in Rajasthan. Actual values may vary based on site conditions.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
