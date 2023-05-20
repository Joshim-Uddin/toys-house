import React from "react";
import useTitle from "../Hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  const blogs = [
    {
      id: "1a",
      question:
        "What is an access token and refresh token? How do they work and where should we store them on the client-side?",
      answer:
        "Access token and refresh token are terms of JSON web token. JWT is used to authenticate the user with the given token. Access token is used to access the data on the server. It is generally short lifetime. When the access token is expired then refresh token will be used to get access token again. Refresh token is comparatively long lifetime. If refresh token is expired then the user will be logged out and user must be logged in again. </br> Browser internal storage and HTTP only cookies is used to save the access token and refresh token. Comparatively HTTP only cookies is more secure to save the token. Usually developers use local storage to save the token in client-side. But we should store in HTTP only cookies to be more secure.",
    },
    {
      id: "2b",
      question: "Compare SQL and NoSQL databases?",
      answer:
        "Database is used to store data for web applications. There are two types of databases. They SQL and NoSQL databases. SQL stands for Structured Query Language and NoSQL stands for No Structured Query Language. SQL databases have row columns field to store data. They are well organized. But difficult to modify the database. SQL database has relational performance. It is comparatively complicated. NoSQL database is designed as object. NoSQL database is easy to modify and perform queries efficiently. It does not follow any predefined structure where SQL databse follows. Oracle, MySQL are SQL database. MongoDB is NoSQL database.",
    },
    {
      id: "3c",
      question: "What is express js? What is Nest js?",
      answer:
        "Express js is a Node.js framework that is used in backend development. It is flexible and easy to use. Express js has a larger developer community. It follows the traditional HTTP request and response model. </br> Nest js is also a node.js framework that is used in backend development. It follows modular architecture. It is newer than Express js and popular as well. It uses Model View Control (MVC) design pattern.",
    },
    {
      id: "4d",
      question: "What is MongoDB aggregate and how does it work?",
      answer:
        "Aggregate means to sum or make group. MongoDB aggregate means to make sum or group from a collection of mongoDB database. It can be used to operate sum, average, max and min to collection of mongoDB database. First collection.aggregate creates a data group by filtering with matching. For example, a data collections of students subject numbers of whole year have a students name 'Mr. Javed'. Using aggregate we can make group by matching 'Mr. Javed' and marks of physics. Then we can get summation of physics marks of 'Mr. Javed'.  This way operations can be performed on the data group. Then result is returned.",
    },
  ];
  return (
    <div>
      <h3 className="text-4xl my-8 text-center font-semibold">
        Welcome to Our Blogs
      </h3>
      <div>
        {blogs.map((blog) => (
          <div key={blog.id} className="my-5 ">
            <h4 className="mb-4 bg-[#59656F] text-white p-2 lg:text-xl">
              <span className="font-bold underline italic">Question:</span>{" "}
              {blog.question}
            </h4>
            <p className="p-2 lg:text-lg text-justify">
              <span className="font-bold underline italic">Answer:</span>{" "}
              {blog.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
