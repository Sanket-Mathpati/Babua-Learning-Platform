import AppLayout from "../components/AppLayout";
import { useParams } from "react-router-dom";

const playlists = {
  arrays: "https://www.youtube.com/playlist?list=ARRAYS_PLAYLIST",
  strings: "https://www.youtube.com/playlist?list=STRINGS_PLAYLIST",
  stack: "https://www.youtube.com/playlist?list=STACK_PLAYLIST",
};

export default function TopicDetail() {
  const { topic } = useParams();

  return (
    <AppLayout>
      <h2 className="text-2xl font-bold mb-4">
        {topic.toUpperCase()}
      </h2>

      <div className="bg-[var(--surface)] border border-[var(--border)] p-6 rounded-lg">
        <p className="text-[var(--muted)] mb-4">
          Complete YouTube playlist for {topic}
        </p>

        <a
          href={playlists[topic]}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline"
        >
          Watch Playlist
        </a>
      </div>
    </AppLayout>
  );
}
