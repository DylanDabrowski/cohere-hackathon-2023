import React from "react";

interface Props {
  topics: string[];
  startVerse: any;
}

export default function TopicPrompts({ topics, startVerse }: Props) {
  return (
    <div>
      <h3 className="text-white flex flex-col text-center">
        What do you wanna diss them about?
      </h3>
      <div className="flex">
        {topics.map((topic) => {
          return (
            <button
              className="text-gray-700 text-xs p-3 m-2 bg-yellow-100 rounded-2xl"
              onClick={() => startVerse(topic)}
              key={topic}
            >
              {topic}
            </button>
          );
        })}
      </div>
    </div>
  );
}
