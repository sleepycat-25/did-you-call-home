"use client"; // tells Next.js this component needs to run in the browser

import { useState } from "react"; // a react hook that lets a component remember changing information

type MemberCardProps = {
    name: string;
    calls: number;
    goal: number;
    streak: number;
    minutes: number;
};

type CallLog = {
    id: number;
    duration: number;
    calledAt: Date;
}

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

    const [callLogs, setCallLogs] = useState<CallLog[]>([]); // tells react to create some state whose value is an array of CallLog objects.
    const [duration, setDuration] = useState("");
    const [message, setMessage] = useState("");

    const calls = callLogs.length;

    const minutes = callLogs.reduce(
        (total, call) => total + call.duration,
        0
    );

    function handleLogCall() {
        const callDuration = Number(duration);

        if (callDuration < 1) {
            setMessage("Calls must be at least 1 minute to count.");
            return;
        }

        const newCall: CallLog = {
            id: Date.now(),
            duration: callDuration,
            calledAt: new Date(),
        }

        setCallLogs([...callLogs, newCall]);
        setMessage("Call logged! 📞");
        setDuration("");
    }

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
                        calls={calls}
                        goal={2}
                        streak={4}
                        minutes={minutes}
                    />

                    <MemberCard
                        name="Adek"
                        calls={1}
                        goal={2}
                        streak={2}
                        minutes={20}
                    />
                </section>

                <div className="mt-8">
                    <label
                        htmlFor="duration"
                        className="mb-2 block text-sm font-medium"
                    >
                        Call duration (minutes)
                    </label>

                    <input
                        id="duration"
                        type="number"
                        min="0"
                        value={duration}
                        onChange={(event) => setDuration(event.target.value)}
                        placeholder="e.g. 20"
                        className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 outline-none"
                    />

                    <button
                        onClick={handleLogCall} // handleLogCall NOT handleLogCall() because we don't want to call the function immediately while rendering
                        className="mt-3 w-full rounded-xl bg-stone-900 px-4 py-3 font-medium text-white"
                    >
                        Log call
                    </button>

                    {message && (
                        <p className="mt-3 text-sm text-stone-600">
                            {message}
                        </p>
                    )}

                </div>

            </div>
        </main>
    );
}