export default function FeedCard({ feed }) {
    return (
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-2xl
          border
          border-neutral-200
          dark:border-neutral-800
  
          bg-white
          dark:bg-neutral-900
  
          p-5
          shadow-sm
          hover:shadow-xl
          transition-all
          duration-300
        "
      >
        {/* Hover Gradient */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-300
  
            bg-gradient-to-r
            from-blue-500/5
            to-purple-500/5
          "
        />
  
        {/* Feed Message */}
        <p
          className="
            relative
            z-10
            text-lg
            font-medium
  
            text-black
            dark:text-white
          "
        >
          {feed.message}
        </p>
  
        {/* Footer */}
        <div
          className="
            mt-4
            flex
            items-center
            justify-between
            relative
            z-10
          "
        >
          <span
            className="
              text-xs
              text-neutral-500
              dark:text-neutral-400
            "
          >
            {new Date(feed.createdAt).toLocaleString()}
          </span>
  
          <span
            className="
              text-xs
              px-3
              py-1
              rounded-full
  
              bg-green-500/10
              text-green-600
              dark:text-green-400
  
              border
              border-green-500/20
            "
          >
            LIVE
          </span>
        </div>
      </div>
    );
  }