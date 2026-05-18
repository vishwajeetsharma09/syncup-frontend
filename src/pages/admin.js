import { useState } from "react";
import api from "../services/api";
import ThemeToggle from "../components/ThemeToggle";

export default function AdminPage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    try {
      setLoading(true);

      await api.post("/feed", {
        message,
      });

      setMessage("");
    } catch (error) {
      console.log(error);
      alert("Failed to create feed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="
        min-h-screen
        flex
        items-center
        justify-center

        bg-gradient-to-br
        from-neutral-100
        via-white
        to-neutral-200

        dark:from-black
        dark:via-neutral-950
        dark:to-neutral-900

        transition-colors
        duration-300

        px-6
      "
    >
      <div
        className="
          w-full
          max-w-2xl

          rounded-3xl
          border

          border-neutral-200
          dark:border-neutral-800

          bg-white/80
          dark:bg-neutral-900/80

          backdrop-blur-xl

          p-8

          shadow-2xl
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">

          <div>
            <h1
              className="
                text-3xl
                font-bold

                text-black
                dark:text-white
              "
            >
              Admin Panel
            </h1>

            <p
              className="
                mt-2
                text-neutral-600
                dark:text-neutral-400
              "
            >
              Publish realtime coaching updates
            </p>
          </div>

          <ThemeToggle />
        </div>

        {/* Form */}
        <form
          onSubmit={submitHandler}
          className="space-y-5"
        >
          <textarea
            rows="6"
            placeholder="Write your feed update..."
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            className="
              w-full
              rounded-2xl
              border

              border-neutral-300
              dark:border-neutral-700

              bg-white
              dark:bg-neutral-950

              text-black
              dark:text-white

              placeholder:text-neutral-500
              dark:placeholder:text-neutral-400

              p-5

              outline-none
              resize-none

              transition

              focus:ring-2
              focus:ring-blue-500
              focus:border-transparent
            "
          />

          <button
            type="submit"
            disabled={loading}
            className="
              w-full

              rounded-2xl

              bg-black
              dark:bg-white

              text-white
              dark:text-black

              py-4

              font-semibold

              transition-all
              duration-300

              hover:scale-[1.02]

              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {loading
              ? "Publishing..."
              : "Publish Feed"}
          </button>
        </form>
      </div>
    </main>
  );
}