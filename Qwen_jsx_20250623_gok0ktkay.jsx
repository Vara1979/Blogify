import { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const stats = {
    views: 12450,
    earnings: "$892.50",
    likes: 3478,
    subscribers: 1234,
    followersGrowth: "+15% this week",
  };

  const blogPosts = [
    {
      id: 1,
      title: "How to Start Your First Blog",
      views: 2345,
      likes: 678,
      published: "2025-04-01",
    },
    {
      id: 2,
      title: "Top 10 SEO Tips for New Bloggers",
      views: 1987,
      likes: 562,
      published: "2025-04-05",
    },
    {
      id: 3,
      title: "Monetizing Your Blog – The Ultimate Guide",
      views: 1567,
      likes: 489,
      published: "2025-04-10",
    },
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold">Blogify</h1>
        <p className="italic">Start blogging. Earn instantly. Grow globally.</p>
      </header>

      {/* Navigation Tabs */}
      <nav className="flex justify-around bg-white shadow-md sticky top-0 z-10">
        {["dashboard", "editor", "chatbot"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-6 capitalize font-semibold transition-all duration-300 ${
              activeTab === tab
                ? "border-b-4 border-purple-600 text-purple-700"
                : "hover:text-indigo-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main className="container mx-auto p-6 space-y-10">
        {activeTab === "dashboard" && (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {/* Stats Cards */}
            {Object.entries(stats).map(([key, value]) => (
              <div
                key={key}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-lg font-medium text-gray-600 capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                <p className="text-3xl font-bold text-indigo-700">{value}</p>
              </div>
            ))}

            {/* Recent Posts */}
            <div className="lg:col-span-3 bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2 text-left">Title</th>
                      <th className="px-4 py-2 text-center">Views</th>
                      <th className="px-4 py-2 text-center">Likes</th>
                      <th className="px-4 py-2 text-center">Published</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogPosts.map((post) => (
                      <tr key={post.id} className="border-t hover:bg-gray-50">
                        <td className="px-4 py-2">{post.title}</td>
                        <td className="px-4 py-2 text-center">{post.views}</td>
                        <td className="px-4 py-2 text-center">{post.likes}</td>
                        <td className="px-4 py-2 text-center">{post.published}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {activeTab === "editor" && (
          <section className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Write a New Post</h2>
            <input
              type="text"
              placeholder="Your blog title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <textarea
              placeholder="Start writing your blog content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={10}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Upload Image or Video</label>
              <input
                type="file"
                accept="image/*,video/*"
                onChange={handleImageUpload}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
              />
            </div>
            {image && (
              <div className="mt-4">
                <img src={image} alt="Preview" className="max-h-64 mx-auto rounded" />
              </div>
            )}
            <button className="mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-6 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300">
              Publish Post
            </button>
          </section>
        )}

        {activeTab === "chatbot" && (
          <section className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
              Botty - Your AI Assistant 🤖
            </h2>
            <div className="bg-gray-100 rounded-lg p-4 h-64 overflow-y-auto mb-4 text-sm">
              <div className="mb-2">
                <span className="font-semibold text-indigo-600">Botty:</span> Hi there! I'm Botty, your friendly AI assistant. How can I help you today?
              </div>
              <div>
                <span className="font-semibold text-indigo-600">You:</span> Can you suggest a better headline for my post?
              </div>
              <div className="mt-2">
                <span className="font-semibold text-indigo-600">Botty:</span> Sure! What's the main topic of your blog? 😊
              </div>
            </div>
            <textarea
              placeholder="Ask Botty anything about your blog, SEO, grammar, or strategy..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              rows={3}
            ></textarea>
            <button className="mt-2 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-300">
              Send
            </button>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-12">
        <p>&copy; 2025 Blogify. All rights reserved.</p>
        <p className="text-sm mt-2">Empower every voice with a platform that makes blogging easy, engaging, and profitable.</p>
      </footer>
    </div>
  );
}