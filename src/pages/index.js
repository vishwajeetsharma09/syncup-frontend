import { useEffect, useState } from "react";
import api from "../services/api";
import socket from "../socket/socket";
import FeedCard from "../components/FeedCard";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [connected, setConnected] = useState(false);

  const fetchFeeds = async () => {
    try {
      const { data } = await api.get("/feed");

      setFeeds(data);
    } catch (err) {
      setError("Failed to load feeds");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeeds();
  
    // Check initial state
    setConnected(socket.connected);
  
    const handleConnect = () => {
      setConnected(true);
    };
  
    const handleDisconnect = () => {
      setConnected(false);
    };
  
    const handleNewFeed = (newFeed) => {
      setFeeds((prev) => [newFeed, ...prev]);
    };
  
    socket.on("connect", handleConnect);
  
    socket.on("disconnect", handleDisconnect);
  
    socket.on("newFeed", handleNewFeed);
  
    return () => {
      socket.off("connect", handleConnect);
  
      socket.off("disconnect", handleDisconnect);
  
      socket.off("newFeed", handleNewFeed);
    };
  }, []);

  if (loading) {
    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-white
          dark:bg-black
        "
      >
        <h1
          className="
            text-2xl
            font-semibold
            animate-pulse
            text-black
            dark:text-white
          "
        >
          Loading feeds...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-white
          dark:bg-black
        "
      >
        <h1 className="text-red-500 text-xl">
          {error}
        </h1>
      </div>
    );
  }

  return (
    <main
      className="
        min-h-screen

        bg-gradient-to-br
        from-neutral-100
        via-white
        to-neutral-200

        dark:from-black
        dark:via-neutral-950
        dark:to-neutral-900

        transition-colors
        duration-300
      "
    >
      <div className="max-w-3xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">

          <div>
            <h1
              className="
                text-4xl
                font-bold
                tracking-tight

                text-black
                dark:text-white
              "
            >
              SyncUp Feed
            </h1>

            <p
              className="
                mt-2
                text-neutral-600
                dark:text-neutral-400
              "
            >
              Realtime coaching updates
            </p>
          </div>

          <ThemeToggle />
        </div>

        {/* Connection Status */}
        <div
          className="
            mb-6
            inline-flex
            items-center
            gap-2

            px-4
            py-2

            rounded-full
            border

            border-neutral-200
            dark:border-neutral-800

            bg-white/80
            dark:bg-neutral-900/80

            backdrop-blur
          "
        >
          <div
            className={`
              h-2 w-2 rounded-full
              ${connected ? "bg-green-500" : "bg-red-500"}
            `}
          />

          <span
            className="
              text-sm
              text-black
              dark:text-white
            "
          >
            {connected
              ? "Realtime Connected"
              : "Disconnected"}
          </span>
        </div>

        {/* Feed List */}
        <div className="space-y-5">
          {feeds.length === 0 ? (
            <div
              className="
                rounded-2xl
                border
                border-dashed

                border-neutral-300
                dark:border-neutral-700

                bg-white/60
                dark:bg-neutral-900/60

                p-10
                text-center

                text-neutral-600
                dark:text-neutral-400
              "
            >
              No feeds available
            </div>
          ) : (
            feeds.map((feed) => (
              <FeedCard
                key={feed._id}
                feed={feed}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
}