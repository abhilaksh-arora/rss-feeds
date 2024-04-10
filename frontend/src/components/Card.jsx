import React from "react";

const Card = ({ article }) => {
  return (
    <div className="w-[350px] bg-[#2C2C2C] text-white rounded-lg overflow-hidden">
      <a href={article.link} target="_blank">

        <div className="p-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {/* {article.categories.map((badge, index) => (
              <div key={index}>
                <Badge variant="secondary">{badge}</Badge>
              </div>
            ))} */}
          </div>
          <h2 className="text-xl font-bold mb-2">{article.title}</h2>
          <p className="text-sm mb-4">
            {article.content}
          </p>
          <div className="flex items-center text-sm">
            <PersonStandingIcon className="text-gray-400" />
            <span className="mx-2">NDTV</span>
            <CalendarIcon className="text-gray-400" />
            <span className="ml-2">{article.pubDate}</span>
          </div>
        </div>
      </a>
    </div>
  );
};
function Badge({ children, variant }) {
  return (
    <span
      className={`px-2 py-1 rounded bg-${variant}-500 text-white text-xs font-medium`}
    >
      {children}
    </span>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function PersonStandingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="5" r="1" />
      <path d="m9 20 3-6 3 6" />
      <path d="m6 8 6 2 6-2" />
      <path d="M12 10v4" />
    </svg>
  );
}
export default Card;
