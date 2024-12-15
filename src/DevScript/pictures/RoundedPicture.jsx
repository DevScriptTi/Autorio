export const RoundedPicture = ({
  picture = "/public/vendor1.jpg",
  size = "size-12",
}) => {
  return (
    <span className={`${size} rounded-full overflow-hidden object-cover`}>
      <img className="w-full" src={picture} alt="Profile picture" />
    </span>
  );
};
