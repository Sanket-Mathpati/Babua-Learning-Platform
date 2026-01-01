import AppLayout from "../components/AppLayout";

const patterns = [
  {
    name: "Sliding Window",
    link: "https://www.youtube.com/playlist?list=SLIDING_WINDOW",
  },
  {
    name: "Two Pointers",
    link: "https://www.youtube.com/playlist?list=TWO_POINTERS",
  },
  {
    name: "Binary Search",
    link: "https://www.youtube.com/playlist?list=BINARY_SEARCH",
  },
  {
    name: "Monotonic Stack",
    link: "https://www.youtube.com/playlist?list=STACK",
  },
];

export default function Patterns() {
  return (
    <AppLayout>
      <h2 className="text-2xl font-bold mb-6">DSA Patterns</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {patterns.map((p) => (
          <div
            key={p.name}
            className="bg-[var(--surface)] border border-[var(--border)] p-6 rounded-lg"
          >
            <h3 className="font-semibold mb-2">{p.name}</h3>

            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 underline text-sm"
            >
              Watch Playlist
            </a>
          </div>
        ))}
      </div>
    </AppLayout>
  );
}
