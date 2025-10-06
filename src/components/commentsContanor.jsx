import React from "react";

// Sample data
const commentData = [
  {
    name: "Himanshu",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Atharva",
    text: "Vivamus lacinia odio vitae vestibulum vestibulum.",
  },
  {
    name: "Sanjana",
    text: "Cras placerat ultricies lorem, at tincidunt arcu.",
  },
  {
    name: "Adi",
    text: "Pellentesque habitant morbi tristique senectus et netus.",
  },
];

// Comment Component
const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex gap-3 mb-4">
      <img
        className="h-10 w-10 rounded-full"
        src="profile-user.png"
        alt="user"
      />
      <div>
        <p className="font-semibold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

// Comment List Component
const CommentList = ({ comments }) => {
  return (
    <>
      {comments.map((comment, index) => (
        <Comment key={index} data={comment} />
      ))}
    </>
  );
};

// Main Container Component
const CommentsContainer = () => {
  return (
    <div className="m-5 p-4 bg-gray-50 rounded shadow-sm">
      <h1 className="text-2xl font-bold mb-4">Comments</h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
