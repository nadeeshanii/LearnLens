import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Button from "../components/Button";
import FooterBar from "../components/FooterBar";

const Home = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.14),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.12),_transparent_25%),linear-gradient(180deg,_#f8fbff_0%,_#eef4ff_42%,_#f8fafc_100%)]">
      <Navbar />

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-12">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur">
            AI powered student performance prediction platform
          </div>

          <h1 className="max-w-xl text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            AI Powered Student
            <span className="block bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Performance Prediction
            </span>
          </h1>

          <p className="max-w-xl text-lg leading-8 text-slate-600">
            Learn Lens helps teachers analyze student performance using machine learning and identify students who need support.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button text="Open Dashboard" to="/dashboard" />
            <Button text="Sign In" to="/login" variant="secondary" />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Card className="p-4">
              <p className="text-2xl font-bold text-indigo-600">120+</p>
              <p className="mt-1 text-sm text-slate-600">Students tracked</p>
            </Card>
            <Card className="p-4">
              <p className="text-2xl font-bold text-cyan-600">94%</p>
              <p className="mt-1 text-sm text-slate-600">Prediction confidence</p>
            </Card>
            <Card className="p-4">
              <p className="text-2xl font-bold text-emerald-600">12</p>
              <p className="mt-1 text-sm text-slate-600">At-risk students</p>
            </Card>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 blur-3xl" />
          <Card className="overflow-hidden p-0">
            <div className="grid gap-6 bg-slate-950 p-8 text-white sm:p-10">
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>Live class analytics</span>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-emerald-300">Active</span>
              </div>

              <div className="rounded-3xl bg-white/5 p-6">
                <div className="text-7xl">🤖</div>
                <h2 className="mt-5 text-2xl font-semibold">Smart Learning Analytics</h2>
                <p className="mt-3 max-w-md text-slate-300">
                  Track attendance, grades, study habits, and prediction signals from one clean workspace.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Engagement</p>
                  <p className="mt-2 text-xl font-semibold">High</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Risk score</p>
                  <p className="mt-2 text-xl font-semibold">Low</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Action</p>
                  <p className="mt-2 text-xl font-semibold">Review</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
          Features
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Card>
            <h3 className="text-xl font-bold text-slate-900">📊 Student Analytics</h3>
            <p className="mt-3 text-slate-600">
              Analyze attendance, grades, and study patterns in one place.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-bold text-slate-900">🤖 AI Prediction</h3>
            <p className="mt-3 text-slate-600">
              Predict future student performance using machine learning signals.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-bold text-slate-900">📈 Performance Dashboard</h3>
            <p className="mt-3 text-slate-600">
              See key metrics and highlight students who need support sooner.
            </p>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
          How It Works
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Card>
            <h3 className="font-bold text-slate-900">1. Add Student Data</h3>
            <p className="mt-2 text-slate-600">Capture the metrics that matter.</p>
          </Card>
          <Card>
            <h3 className="font-bold text-slate-900">2. Analyze Data</h3>
            <p className="mt-2 text-slate-600">Review trends and identify patterns.</p>
          </Card>
          <Card>
            <h3 className="font-bold text-slate-900">3. Get Prediction</h3>
            <p className="mt-2 text-slate-600">Turn signals into clear next steps.</p>
          </Card>
        </div>
      </section>

      <FooterBar />
    </div>
  );
};

export default Home;
