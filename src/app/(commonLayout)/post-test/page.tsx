import Image from "next/image";
import { FaThumbsUp, FaThumbsDown, FaCommentAlt } from "react-icons/fa";

const Post = () => {
  // Static data
  const title = "Top 10 Tips for Growing Tomatoes";
  const content =
    "Tomatoes are one of the most popular vegetables in home gardens. They are relatively easy to grow and provide a bountiful harvest.";
  const category = "Vegetable Gardening";
  const isPremium = false;
  const upvotes = 85;
  const downvotes = 5;
  const author = { _id: "64c8e9f23c1f8a123abc4567", name: "Emily Gardner" };
  const comments = [
    { _id: "64c8f0e8d5f4c31234abc890", content: "Thanks for the tips!" },
    { _id: "64c8f1e7a1b2c789ab123456", content: "What fertilizer do you recommend?" },
  ];
  const createdAt = "2024-09-19T09:30:00.000Z";
  const imageUrl = "https://images.pexels.com/photos/2987081/pexels-photo-2987081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"; // Use a local or external image

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6 max-w-4xl mx-auto">
      {/* Post Image */}
      <div className="overflow-hidden rounded-lg">
        <Image src={imageUrl} alt={title} width={800} height={400} layout="responsive" objectFit="cover" className="rounded-lg" />
      </div>

      {/* Category Tag */}
      <div className="flex items-center justify-between mt-4">
        <span className={`text-sm font-medium px-3 py-1 rounded-full ${isPremium ? "bg-yellow-300 text-yellow-900" : "bg-gray-200 text-gray-800"}`}>
          {category}
        </span>
        {isPremium && <span className="text-yellow-500 text-xs uppercase font-bold">Premium</span>}
      </div>

      {/* Title */}
      <h2 className="mt-3 text-2xl font-semibold text-gray-900">{title}</h2>

      {/* Author & Date */}
      <div className="mt-2 flex items-center text-sm text-gray-500">
        <span>by {author.name}</span>
        <span className="mx-2">•</span>
        <span>{new Date(createdAt).toLocaleDateString()}</span>
      </div>

      {/* Content Preview */}
      <p className="mt-4 text-gray-700 text-sm line-clamp-3">{content}</p>

      {/* Actions */}
      <div className="mt-6 flex items-center justify-between">
        {/* Upvote/Downvote */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1 text-green-500">
            <FaThumbsUp />
            <span>{upvotes}</span>
          </button>
          <button className="flex items-center space-x-1 text-red-500">
            <FaThumbsDown />
            <span>{downvotes}</span>
          </button>
        </div>

        {/* Comments */}
        <div className="flex items-center space-x-2">
          <FaCommentAlt className="text-gray-400" />
          <span className="text-gray-500">{comments.length} Comments</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
