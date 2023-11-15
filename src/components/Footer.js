const Footer = () => {
  return (
    <div className="flex justify-between items-center py-2 px-20 bg-yellow-500 text-white w-full md:fixed bottom-0 left-0">
      <p className="flex gap-2 items-center justify-center text-xl">
        FitGIFs <i className="fab fa-typo3" />
      </p>
      <small className="text-base">Gym © {new Date().getFullYear()}</small>
    </div>
  );
};

export default Footer;
