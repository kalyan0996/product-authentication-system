import React from 'react';

const Home = () => {
return ( <section className="space-y-10"> <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/85 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl"> <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"> <div className="space-y-6"> <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
Product Authentication Platform </p>

```
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">
          Verify genuine products with secure QR-based authentication.
        </h1>

        <p className="max-w-2xl text-slate-300 sm:text-lg">
          Scan QR codes, verify product information, and manage product
          authenticity through a secure and modern platform designed to
          prevent counterfeit products.
        </p>

        <div className="flex flex-wrap gap-3">
          <span className="rounded-full bg-cyan-500/15 px-4 py-2 text-sm font-medium text-cyan-200 ring-1 ring-cyan-500/20">
            Instant Product Verification
          </span>

          <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300 ring-1 ring-slate-700">
            Secure Authentication
          </span>

          <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300 ring-1 ring-slate-700">
            Responsive Design
          </span>
        </div>
      </div>

      <div className="rounded-[1.75rem] bg-slate-950/90 p-6 shadow-xl shadow-slate-950/30 ring-1 ring-slate-800">
        <div className="grid gap-5">
          {[
            {
              title: 'Product Records',
              description:
                'Securely maintain and manage registered product information.',
            },
            {
              title: 'QR Product Verification',
              description:
                'Scan or enter a product ID to instantly verify authenticity.',
            },
            {
              title: 'Manufacturer Dashboard',
              description:
                'Register products and manage authentication records through a secure dashboard.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 transition hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-slate-900"
            >
              <h2 className="text-lg font-semibold text-slate-100">
                {item.title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  <div className="grid gap-5 md:grid-cols-3">
    <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900/85 p-6 shadow-lg shadow-slate-950/20 transition hover:-translate-y-1">
      <h3 className="text-xl font-semibold text-slate-100">
        Manufacturers
      </h3>

      <p className="mt-3 text-slate-400">
        Register products, generate QR codes, and manage authentication
        records efficiently.
      </p>
    </div>

    <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900/85 p-6 shadow-lg shadow-slate-950/20 transition hover:-translate-y-1">
      <h3 className="text-xl font-semibold text-slate-100">
        Consumers
      </h3>

      <p className="mt-3 text-slate-400">
        Verify product authenticity instantly by scanning a QR code or
        entering a product identifier.
      </p>
    </div>

    <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900/85 p-6 shadow-lg shadow-slate-950/20 transition hover:-translate-y-1">
      <h3 className="text-xl font-semibold text-slate-100">
        Authentication
      </h3>

      <p className="mt-3 text-slate-400">
        Reliable verification records help identify genuine products and
        reduce counterfeit distribution.
      </p>
    </div>
  </div>
</section>
```

);
};

export default Home;
