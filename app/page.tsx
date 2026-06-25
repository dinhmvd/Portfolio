import { buttonVariants } from '../components/ui/button';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-xl shadow-slate-200/40">
        <h1 className="text-4xl font-semibold text-slate-900">Portfolio</h1>
        <p className="mt-4 text-slate-600">Mẫu dự án với Tailwind CSS và shadcn UI.</p>
        <div className="mt-8">
          <button className={buttonVariants()}>Xem chi tiết</button>
        </div>
      </div>
    </main>
  );
}
