import { redirect } from 'next/navigation';

export default function Home() {
  async function search(formData: FormData) {
    'use server';
    const city = formData.get('city')?.toString();
    if (city) redirect(`/${encodeURIComponent(city)}`);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-red-200 to-white py-10">
      <div className="max-w-md mx-auto px-4">
        <div className='text-center mb-12'>
        <h1 className="text-3xl font-bold text-gray-800">Weather App</h1>
        </div>
        
        <div className="bg-white rounded shadow-sm p-5 border border-gray-200">
          <p className='block text-gray-700 font-medium mb-3'>Location</p>
        <form action={search} className="flex flex-col gap-2">
          <input
            type="text"
            name="city"
            placeholder  ="Enter city name"
            className="border border-gray-300 rounded p-2 text-gray-600"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
          >
            Search
          </button>
        </form>
        </div>
        
      </div>
    </main>
  );
}