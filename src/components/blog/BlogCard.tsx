// replace with the actual path to your image


import PostButton from "../custom/buttons/PostButton";

type BlogCardProps = {
  id: string;
  title: string;
  caption: string;
  author?: string;
  createdAt?: string;
  image?: string;
};

const BlogCard = ({
  id,
  title,
  caption,
  author,
  createdAt,
  image,
}: BlogCardProps) => {
  return (
    <div className="w-full bg-white cursor-pointer  overflow-hidden group ">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          width={400}
          height={400}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-125"
        />
      </div>
      <div className="w-full pl-4 flex flex-col items-start space-y-4 bg-secondary-900 text-white">
        <div className="p-4">
          <p className=" mb-4 text-primary-500">
            {author} | {createdAt}{" "}
          </p>
          <h3 className="text-balance text-base font-bold mb-2 text-primary">
            {title} | {caption}
          </h3>
          {/* <Link className="text-primary-500 group-hover:underline">
            View Post
          </Link> */}
          <PostButton to={`/blogs/${id}`}>View Post</PostButton>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
