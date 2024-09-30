import React from "react";
import Image from "next/image";
import { FaThumbsUp, FaThumbsDown, FaCommentAlt } from "react-icons/fa";

// Define the prop types

const Post = () => {
  // Static Data
  const postData = {
    title: "Top 10 Tips for Growing Tomatoes",
    content: "Tomatoes are one of the most popular vegetables in home gardens. They are relatively easy to grow and provide a bountiful harvest.",
    category: "Vegetable Gardening",
    isPremium: true,
    upvotes: 120,
    downvotes: 10,
    author: {
      _id: "64c8e9f23c1f8a123abc4567",
      name: "Emily Gardner",
      profileImage: "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Local or external image URL
      followers: 3400,
    },
    comments: [
      { _id: "64c8f0e8d5f4c31234abc890", content: "Thanks for the tips!" },
      { _id: "64c8f1e7a1b2c789ab123456", content: "What fertilizer do you recommend?" },
    ],
    createdAt: "2024-09-19T09:30:00.000Z",
    imageUrl: "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Local or external image URL
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6 max-w-4xl mx-auto">
      {/* Post Image */}
      <div className="overflow-hidden rounded-lg">
        <Image src={postData.imageUrl} alt={postData.title} width={800} height={400} layout="responsive" objectFit="cover" className="rounded-lg" />
      </div>

      {/* Category and Premium Badge */}
      <div className="flex items-center justify-between mt-4">
        <span
          className={`text-sm font-medium px-3 py-1 rounded-full ${
            postData.isPremium ? "bg-yellow-300 text-yellow-900" : "bg-gray-200 text-gray-800"
          }`}
        >
          {postData.category}
        </span>
        {postData.isPremium && <span className="text-yellow-500 text-xs uppercase font-bold">Premium</span>}
      </div>

      {/* Title */}
      <h2 className="mt-3 text-2xl font-semibold text-gray-900">{postData.title}</h2>

      {/* Author Information */}
      <div className="mt-2 flex items-center text-sm text-gray-500">
        {/* Profile Image */}
        <div>
          <div className="relative mr-3 w-10 h-10 rounded-full object-cover">
            <Image
              fill
              src={postData.author.profileImage}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt={postData.author.name}
              className="rounded-full object-cover"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center">
            <span>by {postData.author.name}</span>
            <span className="mx-2">•</span>
            <span>{new Date(postData.createdAt).toLocaleDateString()}</span>
          </div>
          {/* Followers */}
          <div className="text-xs text-gray-400">{postData.author.followers} Followers</div>
        </div>
      </div>

      {/* Content Preview */}
      <p className="mt-4 text-gray-700 text-sm line-clamp-3">{postData.content}</p>

      {/* Actions */}
      <div className="mt-6 flex items-center justify-between">
        {/* Upvote/Downvote */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1 text-green-500">
            <FaThumbsUp />
            <span>{postData.upvotes}</span>
          </button>
          <button className="flex items-center space-x-1 text-red-500">
            <FaThumbsDown />
            <span>{postData.downvotes}</span>
          </button>
        </div>

        {/* Comments */}
        <div className="flex items-center space-x-2">
          <FaCommentAlt className="text-gray-400" />
          <span className="text-gray-500">{postData.comments.length} Comments</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
