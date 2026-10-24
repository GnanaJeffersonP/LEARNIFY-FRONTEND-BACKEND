
function Dashboard({ onLogout }) {
  const courses = [
    {
      title: 'React Development',
      description: 'Learn React components, hooks, and build modern web applications.',
      progress: 70,
      lessons: 12,
      icon: '⚛️',
      color: 'bg-sky-100',
    },
    {
      title: 'UI/UX Design',
      description: 'Explore design principles, wireframes, and beautiful interfaces.',
      progress: 45,
      lessons: 8,
      icon: '🎨',
      color: 'bg-pink-100',
    },
    {
      title: 'JavaScript Basics',
      description: 'Practice JavaScript fundamentals and interactive coding.',
      progress: 30,
      lessons: 10,
      icon: '💻',
      color: 'bg-amber-100',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f5ff] text-slate-800">

      <div className="flex min-h-screen">

        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 border-r border-purple-100 bg-white p-6 md:flex md:flex-col">

          <h1 className="mb-12 text-3xl font-extrabold text-purple-700">
            ✦ Learnify
          </h1>

          <nav className="space-y-3">
            <a
              href="#dashboard"
              className="block rounded-xl bg-purple-100 px-5 py-4 font-semibold text-purple-700"
            >
              🏠 Dashboard
            </a>

            <a
              href="#courses"
              className="block rounded-xl px-5 py-4 font-medium hover:bg-purple-50"
            >
              📚 My Courses
            </a>

            <a
              href="#progress"
              className="block rounded-xl px-5 py-4 font-medium hover:bg-purple-50"
            >
              📊 My Progress
            </a>

            <a
              href="#achievements"
              className="block rounded-xl px-5 py-4 font-medium hover:bg-purple-50"
            >
              🏆 Achievements
            </a>
          </nav>

          <div className="mt-auto rounded-2xl bg-purple-50 p-5">
            <p className="text-lg font-bold text-purple-700">
              Keep growing! 🌱
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Every lesson takes you one step closer to your goals.
            </p>
          </div>
        </aside>

        {/* Main content */}
        <main id="dashboard" className="min-w-0 flex-1 p-5 sm:p-8 lg:p-10">

          {/* Header */}
          <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-purple-600">
                YOUR LEARNING SPACE
              </p>
              <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
                Dashboard
              </h2>
            </div>

            <button
              onClick={onLogout}
              className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-purple-700"
            >
              Logout ↗
            </button>
          </header>

          {/* Welcome banner */}
          <section className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-violet-800 via-purple-700 to-indigo-500 p-7 text-white shadow-lg sm:p-10 lg:p-12">
            <div className="relative z-10 max-w-xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-200">
                Welcome to Learnify
              </p>

              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Learn something new every day! ✨
              </h2>

              <p className="mt-4 text-base leading-7 text-purple-100 sm:text-lg">
                Build your skills, explore new ideas, and make progress
                towards your future.
              </p>

              <a
                href="#courses"
                className="mt-7 inline-block rounded-xl bg-white px-6 py-3 font-bold text-purple-700 transition hover:bg-purple-50"
              >
                Explore Courses →
              </a>
            </div>

            <div className="pointer-events-none absolute -right-10 -top-16 h-64 w-64 rounded-full bg-white/10" />
            <div className="pointer-events-none absolute bottom-[-90px] right-32 h-56 w-56 rounded-full bg-fuchsia-300/20" />

            <div className="pointer-events-none absolute bottom-5 right-8 hidden text-8xl opacity-90 lg:block">
              🎓
            </div>
          </section>

          {/* Statistics */}
          <section
            id="progress"
            className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
          >
            <div className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Enrolled Courses
                  </p>
                  <h3 className="mt-3 text-4xl font-extrabold text-purple-700">
                    03
                  </h3>
                </div>
                <div className="rounded-2xl bg-purple-100 p-4 text-3xl">
                  📚
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-500">
                Courses available to explore
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Average Progress
                  </p>
                  <h3 className="mt-3 text-4xl font-extrabold text-sky-600">
                    48%
                  </h3>
                </div>
                <div className="rounded-2xl bg-sky-100 p-4 text-3xl">
                  📈
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-500">
                Across your sample courses
              </p>
            </div>

            <div
              id="achievements"
              className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Learning Goals
                  </p>
                  <h3 className="mt-3 text-4xl font-extrabold text-amber-500">
                    03
                  </h3>
                </div>
                <div className="rounded-2xl bg-amber-100 p-4 text-3xl">
                  🏆
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-500">
                Your next steps towards success
              </p>
            </div>
          </section>

          {/* Courses */}
          <section id="courses">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="text-2xl font-extrabold sm:text-3xl">
                  Continue Learning
                </h2>
                <p className="mt-2 text-slate-500">
                  Pick a course and continue building your skills.
                </p>
              </div>

              <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
                3 Courses
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 2xl:grid-cols-3">
              {courses.map((course) => (
                <article
                  key={course.title}
                  className="overflow-hidden rounded-2xl border border-purple-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className={`flex h-36 items-center justify-center rounded-xl ${course.color}`}
                  >
                    <span className="text-7xl">{course.icon}</span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {course.title}
                  </h3>

                  <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">
                    {course.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between text-sm">
                    <span className="text-slate-500">Course progress</span>
                    <span className="font-bold text-purple-700">
                      {course.progress}%
                    </span>
                  </div>

                  <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-purple-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-purple-600 to-violet-400"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                    <span className="text-sm text-slate-500">
                      {course.lessons} lessons
                    </span>

                    <button
                      type="button"
                      className="rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-700"
                    >
                      Continue →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <footer className="mt-12 border-t border-purple-100 py-6 text-center text-sm text-slate-500">
            Keep learning, keep growing. 💜 © Learnify
          </footer>

        </main>
      </div>
    </div>
  );
}

export default Dashboard;
