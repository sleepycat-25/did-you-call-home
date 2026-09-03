type MemberCardProps = {
    name: string;
    calls: number;
    streak: number;
    minutes: number;
};

function MemberCard({ name, calls, streak, minutes }: MemberCardProps) {
    return (
        <div>
            <h3> {name}</h3>
            <p> {calls} / 2 calls</p>
            <p> {streak} week streak</p>
            <p> {minutes} minutes total</p>
        </div>
    );
}

export default function Home() {
    return (
        <main>
            <h1> Did You Call Home?</h1>
            <p> A little competition to keep us calling home.</p>

            <section>
                <h2>This Week</h2>

                <MemberCard
                    name="Kakak"
                    calls={2}
                    streak={4}
                    minutes={120}
                />

                <MemberCard
                    name="Adek"
                    calls={1}
                    streak={2}
                    minutes={20}
                />
            </section>

            <button>I called! </button>

        </main>
    )
}