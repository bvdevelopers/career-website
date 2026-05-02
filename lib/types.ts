export type Service = {
  id: number;
  name: string;
  description: string;
  icon: string;
  color: string;
  link: string;
};

export type Country = {
  id: number;
  name: string;
  flag: string;
  universities: number;
  programs: string;
  studentsPlaced: number;
  link: string;
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  location: string;
  image: string;
  text: string;
  rating: number;
  service: string;
};

export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: number;
};

export type College = {
  id: number;
  name: string;
  location: string;
  type: string;
  ranking: number;
  placements: number;
  image: string;
  link: string;
};

export type Course = {
  id: number;
  name: string;
  category: string;
  duration: string;
  fees: number;
  description: string;
  careers: string[];
};
