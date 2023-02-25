type AdventuresPost = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const adventuresArray: AdventuresPost[] = [
  {
    id: 1,
    title: "Donec tempor pur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquum.",
    image: "/images/blogger-blog-adventure2.jpg",
  },
  {
    id: 2,
    title: "Fusce nec orcio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, nisi. Id ipsa, nesciunt, nobis deserunt quis quisquam optio eum saepe.",
    image: "/images/blogger-blog-adventure1.jpg",
  },
];

export default adventuresArray;
