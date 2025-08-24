import React from "react";



 function Chapter10() {
  // 📝 Custom hook-оо ашиглаж өгөгдөл татна
  const { data, loading, error } = useDataFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>⏳ Татаж байна...</p>;
  if (error) return <p>❌ Алдаа: {error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">📚 Posts List (Custom Hook Demo)</h1>
      <ul className="list-disc ml-6">
        {data.slice(0, 5).map((post) => (
          <li key={post.id} className="mb-1">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Chapter10
