const BookPage: React.FC = () => {
  return (
    <div className="book-page">
      <h1>Book Page</h1>
      <div className="pt-10 flex flex-col items-center">
        {/* <p>
          This is the book page where you can find information about various
          books.
        </p>
        <p>Explore our collection and discover your next read!</p> */}
        <div className="book-cover">
          <img
            src="https://via.placeholder.com/150"
            alt="Book Cover"
            className="w-40 h-60 object-cover"
          />
        </div>
        <div className="book-details text-center mt-4"></div>
        <h2 className="text-2xl font-bold">Book Title</h2>
        <p>description</p>
        <p>authers</p>
        <p>published date</p>
      </div>
      <div className="mt-10"></div>
      <h3 className="text-xl font-semibold">Reviews</h3>
    </div>
  );
};

export default BookPage;
