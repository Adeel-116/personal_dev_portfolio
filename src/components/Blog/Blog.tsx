// import BlogCard from "./BlogCard";
// import TextHeading from "../TextHeading";
// import { TransformProvider } from "../ContextAPI/TransformContext";

// // Example dynamic blogs data
// const blogData = [
//   {
//     id: "card-1",
//     category: "Branding",
//     date: "July 10, 2025",
//     title: "5 Design Trends You Can't Ignore in 2025",
//     link: "/blogs/1",
//   },
//   {
//     id: "card-2",
//     category: "Development",
//     date: "June 28, 2025",
//     title: "React vs Vue: The Ultimate 2025 Comparison",
//     link: "/blogs/2",
//   },
//   {
//     id: "card-3",
//     category: "Tech News",
//     date: "July 3, 2025",
//     title: "The Rise of AI in Frontend Development",
//     link: "/blogs/3",
//   },
//   {
//     id: "card-4",
//     category: "Productivity",
//     date: "May 19, 2025",
//     title: "How to Balance Coding and Life Like a Pro",
//     link: "/blogs/4",
//   },
// ];

// function Blog() {
//   return (
//     <div className="w-full flex flex-col items-center gap-y-2 py-30">
//       <TextHeading heading="Blogs" text="Latest Blog Post" />

//       <TransformProvider>
//         <div className="w-full h-auto flex flex-row gap-7 flex-wrap justify-center items-center py-10">
//           {blogData.map((blog) => (
//             <BlogCard
//               key={blog.id}
//               className="lg:w-[40%] sm:w-[90%] w-[95%]"
//               id={blog.id}
//               category={blog.category}
//               date={blog.date}
//               title={blog.title}
//               link={blog.link}
//             />
//           ))}
//         </div>
//       </TransformProvider>
//     </div>
//   );
// }

// export default Blog;
