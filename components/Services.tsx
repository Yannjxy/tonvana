export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Our Services
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-xl border p-6">
            <h3 className="text-xl font-semibold">Piano Tuning</h3>
            <p className="mt-4 text-gray-600">
              Accurate tuning for upright and grand pianos.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="text-xl font-semibold">Regulation</h3>
            <p className="mt-4 text-gray-600">
              Improve keyboard touch and action response.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="text-xl font-semibold">Repair</h3>
            <p className="mt-4 text-gray-600">
              Professional diagnosis and repair for musical instruments.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="text-xl font-semibold">Maintenance</h3>
            <p className="mt-4 text-gray-600">
              Regular care to keep your instrument in excellent condition.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}