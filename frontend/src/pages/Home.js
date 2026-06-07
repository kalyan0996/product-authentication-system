import React from 'react';

const Home = () => {
  return (
    <section className="space-y-8">
      {/* Hero Section */}
      <div className="overflow-hidden rounded-[32px] border border-slate-800 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
          {/* Left Content */}
          <div className="rounded-[28px] border border-slate-800 bg-slate-950/70 p-8">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-cyan-400">
              Product Authentication Platform
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
              Identify genuine products with secure QR verification.
            </h1>

            <p className="mt-5 max-w-2xl text-slate-400">
              Scan QR codes, verify product IDs, and manage product
              authenticity through a secure and modern platform designed to
              prevent counterfeit products.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
                Instant Product Verification
              </span>

              <span className="rounded-full border border-slate-700 bg-slate-800 px-5 py-2 text-sm text-slate-300">
                Secure Authentication
              </span>

              <span className="rounded-full border border-slate-700 bg-slate-800 px-5 py-2 text-sm text-slate-300">
                Responsive Design
              </span>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="space-y-5">
            <div className="rounded-[24px] border border-slate-800 bg-slate-950/80 p-6 transition hover:border-cyan-500/40">
              <h3 className="text-lg font-semibold text-white">
                QR Product Verification
              </h3>

              <p className="mt-3 text-sm text-slate-400">
                Scan or enter a product ID to instantly verify product
                authenticity.
              </p>
            </div>

            <div className="rounded-[24px] border border-slate-800 bg-slate-950/80 p-6 transition hover:border-cyan-500/40">
              <h3 className="text-lg font-semibold text-white">
                Manufacturer Dashboard
              </h3>

              <p className="mt-3 text-sm text-slate-400">
                Register products and manage authentication records through a
                secure dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-[24px] border border-slate-800 bg-slate-900/90 p-6 transition hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-white">
            Manufacturers
          </h3>

          <p className="mt-3 text-slate-400">
            Register products, generate QR codes, and manage authentication
            records efficiently.
          </p>
        </div>

        <div className="rounded-[24px] border border-slate-800 bg-slate-900/90 p-6 transition hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-white">
            Consumers
          </h3>

          <p className="mt-3 text-slate-400">
            Verify product authenticity instantly by scanning a QR code or
            entering a product identifier.
          </p>
        </div>

        <div className="rounded-[24px] border border-slate-800 bg-slate-900/90 p-6 transition hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-white">
            Authentication
          </h3>

          <p className="mt-3 text-slate-400">
            Reliable verification records help identify genuine products and
            reduce counterfeit distribution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
