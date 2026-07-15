import {
  BarChart2,
  Cpu,
  LineChart,
  Zap,
  UserPlus,
  Search,
  CheckCircle,
  ShieldAlert,
  Lightbulb,
  Layers,
  Smile,
} from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#EEF6FF] font-sans text-[#1E293B] antialiased">
      <nav className="sticky top-0 z-50 border-b border-[#C7DAF7] bg-[#F8FBFF]/95 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4F46E5] text-white shadow-md shadow-[#4F46E5]/20">
                <Smile className="h-6 w-6 transform rotate-12" />
              </div>
              <span className="text-xl font-black tracking-tight text-[#1E293B]">
                Learn<span className="text-[#4F46E5]">Lens</span>
              </span>
            </div>

            <div className="flex items-center gap-8">
              <a href="#features" className="hidden text-sm font-bold text-[#6366F1] transition-colors hover:text-[#4F46E5] md:block">Home</a>
              <a href="/login" className="text-sm font-bold text-[#1E293B] transition-colors hover:text-[#4F46E5]">Login</a>
              <button className="rounded-full bg-[#4F46E5] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#4F46E5]/20 transition-all hover:scale-105 hover:bg-[#6366F1] active:scale-95">
                Get Started
              </button>
            </div>
          </div>
        </nav>

        <header className="relative mx-auto max-w-7xl px-6 py-10 md:py-16">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#10B981]/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#10B981]">
                ✨ Level Up Your Learning
              </div>
              <h1 className="text-4xl font-black tracking-tight text-[#1E293B] sm:text-5xl md:text-6xl lg:leading-tight">
                AI-Powered Student <br />
                <span className="bg-gradient-to-r from-[#4F46E5] to-[#6366F1] bg-clip-text text-transparent">
                  Performance Prediction
                </span>
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-[#6366F1]/90 sm:text-lg">
                Unlock your academic superpowers! Our friendly AI analyzes learning patterns to help students and educators predict outcomes and smash study goals before deadlines sneak up.
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                <button className="rounded-full bg-[#4F46E5] px-8 py-3.5 text-base font-bold text-white shadow-xl shadow-[#4F46E5]/20 transition-all hover:scale-105 hover:bg-[#6366F1] active:scale-95">
                  Get Started
                </button>
                <button className="rounded-full border-2 border-[#C7DAF7] bg-[#F8FBFF] px-8 py-3.5 text-base font-bold text-[#1E293B] shadow-sm transition-all hover:border-[#4F46E5]/30 hover:bg-[#EDF4FF]">
                  Learn More
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative flex h-80 w-80 items-center justify-center rounded-full bg-gradient-to-tr from-[#4F46E5]/10 to-[#6366F1]/20 p-8 sm:h-96 sm:w-96">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-full border-4 border-dashed border-[#8CB7F5]/40 bg-[#F7FAFF] p-6 text-center shadow-2xl">
                  <div className="animate-bounce rounded-2xl bg-[#10B981] p-4 text-white shadow-lg">
                    <Cpu className="h-12 w-12" />
                  </div>
                  <div className="mt-4 rounded-full bg-[#E8F1FF] px-4 py-1 text-xs font-bold text-[#3B5BDB]">
                    AI Study Buddy active 🤖
                  </div>
                  <p className="mt-2 text-xs font-semibold text-gray-400">Analyzing study trends...</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section id="features" className="border-y border-[#C7DAF7] bg-[#F4F9FF] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 space-y-3 text-center">
              <h2 className="text-3xl font-black text-[#1E293B]">Cool Platform Features</h2>
              <p className="font-medium text-[#6366F1]">Everything you need to step up your academic game plan.</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: 'Student Analytics', desc: 'Track stats, logs, and progress bars like your favorite RPG dashboard.', icon: <BarChart2 className="h-6 w-6" />, badge: 'Level up', iconBg: 'bg-amber-100', iconColor: 'text-amber-500' },
                { title: 'AI Prediction', desc: 'Our smart algorithms accurately forecast grades and future roadblocks.', icon: <Cpu className="h-6 w-6" />, badge: 'Smart AI', iconBg: 'bg-cyan-100', iconColor: 'text-cyan-600' },
                { title: 'Performance Dashboard', desc: 'Clean visual heatmaps and charts built for effortless tracking.', icon: <LineChart className="h-6 w-6" />, badge: 'Quest Log', iconBg: 'bg-violet-100', iconColor: 'text-violet-600' },
                { title: 'Fast & Accurate Results', desc: 'Instant analytics calculated in real-time right when you need them.', icon: <Zap className="h-6 w-6" />, badge: 'Max Speed', iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600' },
              ].map((feat, idx) => (
                <div key={idx} className="group relative rounded-2xl border-2 border-[#C7DAF7] bg-[#EDF4FF] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#4F46E5] hover:bg-[#F8FBFF] hover:shadow-xl">
                  <span className="absolute -top-3 right-4 rounded-full bg-[#10B981] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-white">
                    {feat.badge}
                  </span>
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors group-hover:bg-[#4F46E5] group-hover:text-white ${feat.iconBg} ${feat.iconColor}`}>
                    {feat.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-[#1E293B]">{feat.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#EEF6FF] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 space-y-3 text-center">
              <h2 className="text-3xl font-black text-[#1E293B]">How It Works</h2>
              <p className="font-medium text-[#6366F1]">Three easy steps to unlock predictive recommendations.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                { step: '01', title: 'Add Student Data', desc: 'Securely input assignments, test scores, or study habits.', icon: <UserPlus className="h-7 w-7" />, iconBg: 'bg-sky-100', iconColor: 'text-sky-600' },
                { step: '02', title: 'AI Model Analyzes', desc: 'Our machine learning systems process stats to find patterns.', icon: <Search className="h-7 w-7" />, iconBg: 'bg-fuchsia-100', iconColor: 'text-fuchsia-600' },
                { step: '03', title: 'View Predictions', desc: 'Get highly accurate score outputs and custom-tailored feedback.', icon: <CheckCircle className="h-7 w-7" />, iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600' },
              ].map((item, idx) => (
                <div key={idx} className="relative flex flex-col items-center rounded-2xl border border-[#C7DAF7] bg-[#F8FBFF] p-6 text-center shadow-sm transition-shadow hover:shadow-md">
                  <span className="absolute left-4 top-4 text-3xl font-black text-[#6366F1]/20">{item.step}</span>
                  <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${item.iconBg} ${item.iconColor}`}>
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[#1E293B]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#C7DAF7] bg-[#F4F9FF] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 space-y-3 text-center">
              <h2 className="text-3xl font-black text-[#1E293B]">Why Use Learn Lens?</h2>
              <p className="font-medium text-[#6366F1]">Achieve more with smarter, more proactive insights built into your workflow.</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: 'Early Identification of At-Risk Students', color: 'border-l-[#EF4444]', icon: <ShieldAlert className="text-[#EF4444]" /> },
                { title: 'Improved Academic Decision-Making', color: 'border-l-[#4F46E5]', icon: <Lightbulb className="text-[#4F46E5]" /> },
                { title: 'Data-Driven Insights & Metrics', color: 'border-l-[#10B981]', icon: <BarChart2 className="text-[#10B981]" /> },
                { title: 'Easy-to-use Web Interface', color: 'border-l-[#F59E0B]', icon: <Layers className="text-[#F59E0B]" /> },
              ].map((benefit, idx) => (
                <div key={idx} className={`flex items-center gap-4 rounded-xl border border-[#C7DAF7] border-l-4 ${benefit.color} bg-[#EDF4FF] p-5 shadow-sm transition-shadow hover:shadow-md`}>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F8FBFF] shadow-sm">
                    {benefit.icon}
                  </div>
                  <h4 className="text-sm font-bold leading-snug text-[#1E293B]">{benefit.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="mt-12 border-t border-[#C7DAF7] bg-[#F8FBFF] py-12 text-sm text-gray-500">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4F46E5] text-white">
                  <Smile className="h-5 w-5 transform rotate-12" />
                </div>
                <span className="text-base font-bold text-[#1E293B]">LearnLens</span>
              </div>
              <p className="text-xs font-medium text-gray-400">Making data analytics fun, interactive, and completely clear for student development.</p>
            </div>
            <div>
              <h5 className="mb-3 font-bold text-[#1E293B]">Quick Links</h5>
              <ul className="space-y-2 text-xs font-semibold">
                <li><a href="#" className="hover:text-[#4F46E5]">Home</a></li>
                <li><a href="#" className="hover:text-[#4F46E5]">Features</a></li>
                <li><a href="#" className="hover:text-[#4F46E5]">Predictions</a></li>
              </ul>
            </div>
            <div>
              <h5 className="mb-3 font-bold text-[#1E293B]">Contact Us</h5>
              <ul className="space-y-2 text-xs font-semibold">
                <li>support@learnlens.io</li>
                <li>+1 (555) 019-2834</li>
              </ul>
            </div>
            <div>
              <h5 className="mb-3 font-bold text-[#1E293B]">Copyright</h5>
              <p className="text-xs font-semibold">&copy; {new Date().getFullYear()} Learn Lens Inc. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    );
  };

  export default Home;