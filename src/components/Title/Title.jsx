const Title = ({ children }) => {
  return (
    <div className="w-full flex justify-center">
      <h1 className="dark:text-white text-3xl lg:text-5xl text-center my-4 py-4 border-b-4 border-t-4 border-black dark:border-white max-w-max ">
        {children}
        <br />
      </h1>
    </div>
  );
};
export default Title;
