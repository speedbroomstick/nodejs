const http = require('http');
const PORT = 3000;

const posts = [
  {
    id: 1,
    category: 'Startup',
    header: 'Design tips for designers that cover everything you need',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    image: 'firstBlog',
    icon: 'avatar2',
    categoryImage: 'Startup',
    date: '27th January 2022',
    author: 'Andrew Jonson',
    tags: ['Experience', 'Life', 'Screen'],
    content: [
      {
        title: 'Introduction',
        text: 'Designing is an essential skill that requires a deep understanding of aesthetics, functionality, and user experience. In this article, we will cover some fundamental design tips that every designer should know. Good design is more than just making things look nice. It’s about solving problems and ensuring that the user can achieve their goals in the most efficient way possible.',
      },
      {
        title: 'Understanding Color Theory',
        text: 'Color theory is the study of how colors interact with each other and how they can be used to create visually appealing designs. Understanding color theory is crucial for any designer. For example, warm colors can evoke feelings of warmth and comfort, while cool colors can create a sense of calm and professionalism. Complementary colors can be used to make elements stand out, while analogous colors can create harmony.',
      },
      {
        title: 'Typography Basics',
        text: 'Typography is another key aspect of design. The right typography can make your design more readable and visually appealing. It’s important to choose fonts that are appropriate for the context and that work well together. Hierarchy and spacing are also critical factors to consider when working with text. Proper use of headings, subheadings, and body text can help guide the reader through your content.',
      },
      {
        title: 'User Experience (UX) Design',
        text: 'User Experience (UX) design is about making sure that the user has a positive experience when interacting with your design. This involves everything from the layout and navigation to the content and functionality. Conducting user research and usability testing can provide valuable insights into how users interact with your design and help identify areas for improvement.',
      },
      {
        title: 'Conclusion',
        text: 'In conclusion, good design is a combination of aesthetics, functionality, and user experience. By understanding color theory, typography, and UX design principles, you can create designs that are not only visually appealing but also effective in achieving their purpose.',
      },
    ],
  },
  {
    id: 2,
    category: 'Business',
    header: 'How to Scale Your Business Quickly and Efficiently',
    image: 'secondBlog',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: 'avatar2',
    categoryImage: 'Business',
    date: '28th January 2022',
    tags: ['Business', 'Life'],
    author: 'Sarah Lee',
    content: [
      {
        title: 'Introduction',
        text: 'Designing is an essential skill that requires a deep understanding of aesthetics, functionality, and user experience. In this article, we will cover some fundamental design tips that every designer should know. Good design is more than just making things look nice. It’s about solving problems and ensuring that the user can achieve their goals in the most efficient way possible.',
      },
      {
        title: 'Understanding Color Theory',
        text: 'Color theory is the study of how colors interact with each other and how they can be used to create visually appealing designs. Understanding color theory is crucial for any designer. For example, warm colors can evoke feelings of warmth and comfort, while cool colors can create a sense of calm and professionalism. Complementary colors can be used to make elements stand out, while analogous colors can create harmony.',
      },
      {
        title: 'Typography Basics',
        text: 'Typography is another key aspect of design. The right typography can make your design more readable and visually appealing. It’s important to choose fonts that are appropriate for the context and that work well together. Hierarchy and spacing are also critical factors to consider when working with text. Proper use of headings, subheadings, and body text can help guide the reader through your content.',
      },
      {
        title: 'User Experience (UX) Design',
        text: 'User Experience (UX) design is about making sure that the user has a positive experience when interacting with your design. This involves everything from the layout and navigation to the content and functionality. Conducting user research and usability testing can provide valuable insights into how users interact with your design and help identify areas for improvement.',
      },
      {
        title: 'Conclusion',
        text: 'In conclusion, good design is a combination of aesthetics, functionality, and user experience. By understanding color theory, typography, and UX design principles, you can create designs that are not only visually appealing but also effective in achieving their purpose.',
      },
    ],
  },
];

const server = http.createServer((req, res) => {
  if (req.url === '/posts' && req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(posts));
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});