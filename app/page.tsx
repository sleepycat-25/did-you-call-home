type MemberCardProps = {
    name: string;
    calls: number;
    goal: number;
    streak: number;
    minutes: number;
};

function MemberCard({ name, calls, goal, streak, minutes }: MemberCardProps) {
    const progress = Math.min((calls / goal) * 100, 100);

    return (
        <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between"> 
                <h3 className="text-lg font-semibold">
                    {name}
                </h3>

                <span className="text-sm font-medium text-stone-500">
                    {calls} / {goal} calls
                </span>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-stone-100">
                <div
                className="h-full rounded-full bg-stone-900"
                style={{ width: `${progress}%` }}
                />
            </div>

            <p className="mt-4 text-sm">
                🔥 {streak} week streak
            </p>

            <p className="mt-1 text-sm text-stone-500">
                {minutes} minutes total
            </p>
        </div>
    );
}

export default function Home() {
    return (
        <main className="min-h-screen bg-stone-50 px-6 py-10 text-stone-900">
            <div className="mx-auto max-w-md">

                <header className="mb-10">
                    <p className="mb-2 text-sm font-medium uppercase tracking-widest text-stone-500">
                        RingHome
                    </p>

                    <h1 className="text-4xl font-bold tracking-tight">
                        Did you call home?
                    </h1>

                    <p className="mt-3 text-stone-600">
                        Staying in touch is easier when it&apos;s a competition.
                    </p>
                </header>

                <section className="space-y-4">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-stone-500">
                        This Week
                    </h2>

                    <MemberCard
                        name="Kakak"
                        calls={2}
                        goal={2}
                        streak={4}
                        minutes={120}
                    />

                    <MemberCard
                        name="Adek"
                        calls={1}
                        goal={2}
                        streak={2}
                        minutes={20}
                    />
                </section>

                <button>I called! </button>

            </div>
        </main>
    );
}