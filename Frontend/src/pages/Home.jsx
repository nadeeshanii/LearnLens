import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Button from "../components/Button";
import FooterBar from "../components/FooterBar";

const Home = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(34,211,238,0.16),_transparent_24%),linear-gradient(180deg,_#f9fbff_0%,_#eef6ff_45%,_#f8fafc_100%)]">
      <Navbar />

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-14">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-500" />
            Friendly AI for student support and early action
          </div>

          <h1 className="max-w-2xl text-5xl font-black tracking-tight text-slate-900 sm:text-6xl">
            A happier way to
            <span className="block bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
              understand every student
            </span>
          </h1>

          <p className="max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
            Learn Lens helps teachers see who needs help early, predict performance with confidence, and give students support before they fall behind.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button text="Open Dashboard" to="/dashboard" />
            <Button text="Sign In" to="/login" variant="secondary" />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Card className="p-4">
              <p className="text-sm font-medium text-slate-500">Students tracked</p>
              <p className="mt-2 text-2xl font-bold text-indigo-600">120+</p>
            </Card>
            <Card className="p-4">
              <p className="text-sm font-medium text-slate-500">Prediction confidence</p>
              <p className="mt-2 text-2xl font-bold text-sky-600">94%</p>
            </Card>
            <Card className="p-4">
              <p className="text-sm font-medium text-slate-500">Early support alerts</p>
              <p className="mt-2 text-2xl font-bold text-emerald-600">12</p>
            </Card>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-cyan-300/25 blur-2xl" />
          <div className="absolute -bottom-8 right-0 h-36 w-36 rounded-full bg-indigo-400/20 blur-3xl" />

          <Card className="overflow-hidden border border-white/70 bg-white/90 p-0 shadow-2xl shadow-slate-200/70 backdrop-blur">
            <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-6 text-white sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">AI assistant</p>
                  <h2 className="mt-2 text-2xl font-semibold">Student insight board</h2>
                </div>
                <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm font-medium text-emerald-300">
                  Live
                </div>
              </div>

              <div className="mt-6 rounded-[1.75rem] bg-white/6 p-5 ring-1 ring-white/10 sm:p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-3xl">
                    🤖
                  </div>
                  <div>
                    <p className="text-sm text-slate-300">Personalized support</p>
                    <p className="mt-1 text-lg font-semibold">Clear signals, calmer teaching</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                      <span>Attendance</span>
                      <span>90%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                      <span>Study consistency</span>
                      <span>78%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                      <span>Support need</span>
                      <span>Low</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[32%] rounded-full bg-gradient-to-r from-amber-300 to-rose-400" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-white/5 p-3">
                    <p className="text-xs text-slate-400">Focus</p>
                    <p className="mt-1 font-semibold text-white">Early action</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-3">
                    <p className="text-xs text-slate-400">Mood</p>
                    <p className="mt-1 font-semibold text-white">Friendly</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-3">
                    <p className="text-xs text-slate-400">Result</p>
                    <p className="mt-1 font-semibold text-white">Predictable</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="p-5">
            <h3 className="text-lg font-bold text-slate-900">Spot concerns early</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              See at-risk students before grades drop and support them sooner.
            </p>
          </Card>
          <Card className="p-5">
            <h3 className="text-lg font-bold text-slate-900">Make guidance simple</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Clean cards and clear predictions help teachers act with confidence.
            </p>
          </Card>
          <Card className="p-5">
            <h3 className="text-lg font-bold text-slate-900">Keep students supported</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Friendly visuals and short summaries keep the experience light and useful.
            </p>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
        <div className="grid gap-4 rounded-[2rem] bg-white/75 p-6 shadow-xl shadow-slate-200/40 backdrop-blur md:grid-cols-3">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">Simple flow</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">How it works</h2>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm font-medium text-indigo-600">1. Add students</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">Create or edit a student record in seconds.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm font-medium text-indigo-600">2. Predict clearly</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">Open prediction from that student’s profile.</p>
          </div>
        </div>
      </section>

      <FooterBar />
    </div>
  );
};

export default Home;
