// Data Structure
// {
//   title: 'title',
//   description: 'description',
//   link: 'link',
//   image: 'image', 
//   categories: ['category 1', 'category 2'],
//   levels: ['level 1', 'level 2'],
//   recommended: true,
//   pinOrder: orderNo,
//   series: { name: 'series name', part: 1 },
//   relatedCourses: ['related course link 1', 'related course link 2'],
// }

export const coursesData = [
  {
    title: 'Prompting 101: The Playbook for Everyone',
    description: 'A jargon-free guide to mastering Generative AI, designed for beginners and non-technical users to boost real-world productivity and creativity.',
    link: '/courses/prompting-101',
    image: '/courses/prompting-101.png', 
    categories: ['Generative AI', 'Productivity', 'Professional Development'],
    recommended: true,
    levels: ['Beginner'],
  },
  {
    title: 'The Art of the Ask: A Comprehensive Guide to Effective User Interviews',
    description: 'A comprehensive guide to mastering user interviews, focusing on a deep \'why\' behind user behavior to build truly valuable and intuitive products.',
    link: '/courses/the-art-of-the-ask',
    image: '/courses/the-art-of-the-ask.png',
    categories: ['User Research', 'Product Management', 'UX/UI Design'],
    levels: ['Intermediate'],
  },
  {
    title: 'Metrics Mastery for Product Managers',
    description: 'Transform your product practice from intuition-led to data-informed. This course forges you into a strategic leader who wields data to understand user behavior, measure what matters, and drive sustainable product growth.',
    link: '/courses/metrics-mastery-for-product-managers',
    image: '/courses/metrics-mastery-for-product-managers.png',
    categories: ['Product Management', 'Data & Analytics', 'Strategy'],
    levels: ['Intermediate'],
    series: { name: 'Data-Driven Product Management', part: 1 },
    relatedCourses: ['/courses/ab-testing-from-hypothesis-to-high-impact'],
  },
  {
    title: 'A/B Testing: From Hypothesis to High-Impact',
    description: 'The definitive guide for product managers, marketers, and designers who want to stop guessing and start knowing. Learn to formulate powerful hypotheses, design valid experiments, and interpret results with confidence to drive meaningful growth.',
    link: '/courses/ab-testing-from-hypothesis-to-high-impact',
    image: '/courses/ab-testing-from-hypothesis-to-high-impact.png',
    categories: ['A/B Testing', 'Product Management', 'Data & Analytics', 'Marketing'],
    levels: ['Advanced'],
    series: { name: 'Data-Driven Product Management', part: 2 },
    relatedCourses: ['/courses/metrics-mastery-for-product-managers'],
  },
];