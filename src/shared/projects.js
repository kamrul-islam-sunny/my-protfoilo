import winterAid from "../../public/asset/winter.png";
import lostAndFound from "../../public/asset/lostAndFound.png";
import nikahLink from "../../public/asset/nikah.png";

const projects = [
  {
    project_name: "NikahLink - Modern Matrimony Platform",
    projectBanner: nikahLink,
    slug: "nikahlink",
    project_image:
      "https://raw.githubusercontent.com/kamrul-islam-sunny/NikahLink-cilent/main/image.png",
    main_technology_stack: [
      "React",
      "Firebase Auth",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Axios",
      "Stripe",
      "Node.js",
      "JWT",
    ],
    brief_description:
      "Welcome to NikahLink, a modern and user-friendly matrimony platform designed to connect individuals seeking life partners. Our platform ensures security, privacy, and convenience with features tailored for an efficient matchmaking experience.",
    live_project_link: "https://matrimony-site-8d674.web.app/",
    github_repository_link:
      "https://github.com/kamrul-islam-sunny/NikahLink-cilent?tab=readme-ov-file",
    challenges_faced:
      "Implementing a secure authentication system, ensuring data privacy, and creating a responsive design that works seamlessly across devices.",
    potential_improvements_future_plans: [
      "1. Push notifications for new matches or biodata requests.",
      "2. Integrate a location-based search filter, allowing users to find matches in their preferred geographical area.",
      "3. Advanced verification system ."
    ],
    admin_credentials: {
      email: "admin@gmail.com",
      password: "123asd",
    },
    features: [
      "User Registration: Register using Email/Password or Google sign-in.",
      "User Dashboard: Manage biodata, contact requests, and favorites.",
      "Premium Membership: Unlock exclusive features by upgrading.",
      "Profile Management: Create, edit, and update biodata easily.",
      "Contact Requests: Pay a fee to access user contact details.",
      "Advanced Filters: Search biodata by gender, age, location, etc.",
      "Biodata Details: Private biodata pages for registered users.",
      "Success Stories: Inspiring stories of successful matches.",
      "Admin Dashboard: Manage users, approve premium requests.",
      "Privacy & Security: Hide contact details for non-premium users.",
      "Responsive Design: Optimized for mobile and desktop users.",
      "Stripe Integration: Secure payment processing for memberships.",
    ],
  },
  {
    project_name: "WhereIsIt",
    projectBanner: lostAndFound,
    slug: "whereisit",
    project_image:
      "https://raw.githubusercontent.com/kamrul-islam-sunny/whereIsit-cilent/main/image.png",
    main_technology_stack: [
      "React js",
      "Firebase Auth",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Framer Motion",
      "lottie",
      "Axios",
      "Swiper",
      "Datepicker",
      "mongodb",
      "Node.js",
      "JWT",
    ],
    brief_description:
      "WhereIsIt is a Lost and Found platform designed to connect people who have lost or found personal belongings. Users can report lost items, browse found items, and recover their belongings with ease. Experience a seamless solution for reconnecting lost possessions with their rightful owners.",
    live_project_link: "https://lost-and-found-df2f9.web.app/",
    github_repository_link:
      "https://github.com/kamrul-islam-sunny/whereIsit-cilent?tab=readme-ov-file",
    challenges_faced:
      "Implementing secure user authentication, ensuring accurate item matching between users, and designing a user-friendly interface that works well on mobile and desktop were key challenges. Managing database queries efficiently for searching and filtering items was also a significant hurdle.",
    potential_improvements_future_plans: [
      "1. Add a real-time chat feature between finder and owner for faster communication.",
      "2. Implement a QR code system to tag and track lost items physically.",
      "3. Add notification alerts for matched items and updates.",
      "4. Include multi-language support to make the platform accessible to more users.",
      "5. Enhance security with two-factor authentication (2FA).",
    ],
    features: [
      "🔐 SignIn, SignUp, and Logout functionality.",
      "🔐 Google SignIn integration for easy access.",
      "📦 Add new lost or found items.",
      "📦 View all items posted by users.",
      "📦 Users can see their own added items on a separate page.",
      "📦 Update or delete items posted by the user.",
      "🔍 If an item is found, users can return it by filling out a specific form.",
      "📱 Fully responsive design for seamless use on all devices.",
      "🎨 Users can view items in either a table or card layout based on their preference.",
    ],
  },
  {
    project_name: "WinterAid",
    projectBanner: winterAid,
    slug: "winteraid",
    project_image: "https://example.com/portfolio-image.png",
    main_technology_stack: [
      "React js",
      "Firebase Auth",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Axios",
      "Swiper",
      "mongodb",
      "Node.js",
      "JWT",
    ],
    brief_description:
      "The purpose of WinterAid web application is to facilitate the donation of winter clothing to those in need across Bangladesh. It connects generous donors with volunteers who can distribute the clothing to vulnerable individuals, especially in rural and low-income areas. The platform makes it easy for users to contribute by browsing campaigns and submitting their donations through a simple form.",
    features: [
      "SignIn and SignUp: Secure authentication for users.",
      "Google SignIn: Sign in easily with Google.",
      "User Profile: Update and manage your profile details.",
      "Forgot Password: Option for users to reset their password.",
      "Donation Campaigns: Browse and view all available donation campaigns.",
      "Donate: Contribute to any campaign directly through the platform.",
      "Smooth Animations: Seamless animations and simple design for a user-friendly experience.",
      "Responsive Design: Fully responsive layout optimized for both desktop and mobile devices.",
    ],
    live_project_link: "https://tangerine-kleicha-177215.netlify.app/",
    github_repository_link: "https://github.com/codelifo/portfolio-client",
    challenges_faced:
      "Managing secure authentication, handling user data safely, and creating a seamless user experience with proper error handling were some of the main challenges. Ensuring smooth deployment with backend and frontend integration also required significant effort.",
    potential_improvements_future_plans: [
      "1. Add an admin dashboard for better campaign management and user monitoring.",
      "2. Introduce real-time notifications for donors and volunteers.",
      "3. Implement a progress tracking feature for each campaign.",
      "4. Improve security with advanced authentication methods like OTP verification.",
      "5. Develop a mobile app version to reach a wider audience.",
      "6. Add a blog/news section to raise awareness about winter aid activities.",
      "7. Include multi-language support (English and Bengali) for better accessibility.",
      "8. Integrate a payment gateway for financial donations.",
    ],
  },
];

export default projects;
