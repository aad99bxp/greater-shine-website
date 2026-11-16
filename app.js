const config = window.GREATER_SHINE_CONFIG || {};
const address = 'Office no. 243 1st floor, Amrit Plaza, Jagat Farm, Gamma 1, Greater Noida, Uttar Pradesh 201310';
const hours = 'Monday to Sunday, 10:00 AM – 9:00 PM';

const iconPaths = {
  code: '<path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/>',
  brain: '<path d="M12 18V5M9 8a3 3 0 1 1 3-3M7 13a3 3 0 1 1-1.2-5.7M9 18a3 3 0 1 1-2.5-4.7M15 8a3 3 0 1 0-3-3M17 13a3 3 0 1 0 1.2-5.7M15 18a3 3 0 1 0 2.5-4.7"/>',
  shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
  chart: '<path d="M3 3v18h18M18 17V9M13 17V5M8 17v-3"/>',
  megaphone: '<path d="m3 11 18-5v12L3 13v-2ZM11.6 14.4 14 21l-4 1-2.2-8M3 11v2"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  spark: '<path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3ZM19 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.7L7.5 9.7a16 16 0 0 0 6 6l1.5-1.5a2 2 0 0 1 1.7-.6l2.8.5a2 2 0 0 1 1.5 2.8Z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  x: '<path d="m18 6-12 12M6 6l12 12"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  whatsapp: '<path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.7a8.5 8.5 0 1 1 16.3-3.8Z"/><path d="M8.2 8.3c.2-.5.4-.5.7-.5h.5c.2 0 .3 0 .4.4l.7 1.6c.1.2.1.4 0 .5l-.5.7c-.2.2-.2.3 0 .6.4.7 1.1 1.3 1.8 1.7.3.2.4.2.6-.1l.6-.7c.2-.2.3-.2.5-.1l1.6.8c.3.1.4.2.4.4 0 .3-.2 1-.6 1.3-.4.4-.9.6-1.5.5-.5-.1-1.2-.3-2.1-.7-1.3-.6-2.2-1.5-3-2.5-.8-1-1.1-1.9-1.1-2.5 0-.5.3-1.1.6-1.4Z"/>'
};
const icon = (name, cls = '') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name] || iconPaths.spark}</svg>`;

const categoryList = [
  { name: 'Programming & Software Development', short: 'Programming', icon: 'code', note: 'Build a strong foundation in software and programming.' },
  { name: 'Artificial Intelligence & Data', short: 'AI & Data', icon: 'brain', note: 'Explore intelligent systems, models and useful insights.' },
  { name: 'Cybersecurity', short: 'Cybersecurity', icon: 'shield', note: 'Learn security concepts and responsible practices.' },
  { name: 'Digital Marketing', short: 'Digital Marketing', icon: 'megaphone', note: 'Understand channels, campaigns and online audiences.' },
  { name: 'Web Design & Development', short: 'Web Design', icon: 'globe', note: 'Create clear, engaging websites and web experiences.' }
];

const courses = [
  { slug:'c-programming', title:'C Programming', category:categoryList[0].name, icon:'code', description:'Build a foundation in structured programming and problem solving.', intro:'Learn the building blocks of programming with C. Work through core concepts, write simple programs and strengthen your logical approach to problem solving.', topics:['Program structure','Variables and data types','Operators and expressions','Conditionals and loops','Functions','Arrays and strings','Pointers and structures'], skills:['Writing structured programs','Breaking problems into steps','Working with data and functions'], audience:'Beginners who want to understand programming fundamentals and learners preparing for further software study.', faqs:[['Do I need programming experience?','No. The course introduces core concepts from the beginning.'],['What will I practise?','You will work through guided programming exercises alongside the concepts.']] },
  { slug:'cpp-programming', title:'C++ Programming', category:categoryList[0].name, icon:'code', description:'Explore object-oriented programming and core C++ concepts.', intro:'Develop confidence with C++ syntax and programming concepts. Progress from basic statements to object-oriented design through guided practice.', topics:['C++ program structure','Data types and operators','Control flow','Functions','Classes and objects','Inheritance and polymorphism','Collections and problem solving'], skills:['Creating reusable code','Applying object-oriented concepts','Reasoning through programming challenges'], audience:'Learners beginning software development or building on an understanding of basic programming.', faqs:[['Is C++ suitable for beginners?','Yes. The course covers foundational concepts before moving into object-oriented programming.'],['Are practical exercises included?','The course outline includes practice with programming concepts and problem solving.']] },
  { slug:'python-programming', title:'Python Programming', category:categoryList[0].name, icon:'code', description:'Learn Python fundamentals through practical programming exercises.', intro:'Start coding with a readable, versatile language. Learn to write Python programs, organise logic into functions and work with common data structures.', topics:['Python fundamentals','Variables and data types','Conditional statements and loops','Functions','Lists, tuples and dictionaries','Object-oriented programming','Practical programming exercises'], skills:['Writing clear Python code','Working with collections of data','Structuring small programs'], audience:'Beginners, students and professionals looking to develop a practical programming foundation.', faqs:[['Do I need coding experience?','No prior coding experience is required to begin with the fundamentals.'],['What kind of exercises are covered?','Exercises reinforce language basics, functions, data types and problem solving.']] },
  { slug:'java-programming', title:'Java Programming', category:categoryList[0].name, icon:'code', description:'Understand Java fundamentals, object-oriented code and application structure.', intro:'Explore Java programming from the fundamentals upward. Learn to express program logic, organise code with classes and practise core object-oriented ideas.', topics:['Java syntax and program structure','Variables and data types','Conditionals and loops','Methods','Classes and objects','Inheritance and interfaces','Exception handling'], skills:['Structuring Java applications','Applying object-oriented programming','Reading and writing maintainable code'], audience:'Students and beginners interested in software development and object-oriented programming.', faqs:[['Should I know another programming language first?','No. The course begins with Java fundamentals.'],['Will I practise writing code?','Yes. Programming practice is part of learning the language and its core concepts.']] },
  { slug:'full-stack-development', title:'Full Stack Development', category:categoryList[0].name, icon:'globe', description:'Explore the frontend, backend and data layers of web applications.', intro:'Learn how web applications fit together. Explore user interfaces, server-side logic, databases and APIs as parts of a complete development workflow.', topics:['HTML and CSS foundations','JavaScript fundamentals','Frontend development','Backend programming','Databases','APIs and HTTP','Web application development'], skills:['Building interactive interfaces','Connecting application layers','Understanding how web data flows'], audience:'Learners interested in creating complete web applications, from interface to server and data.', faqs:[['Do I need web development experience?','An interest in learning web technologies is enough to start; foundational concepts are introduced as needed.'],['Does this cover both frontend and backend?','Yes. The course explores both sides of web application development as well as databases and APIs.']] },
  { slug:'data-structures-algorithms', title:'Data Structures & Algorithms', category:categoryList[0].name, icon:'chart', description:'Build logical problem-solving skills with core data structures and algorithms.', intro:'Learn how common ways of organising data and solving problems shape software. Practise core concepts and develop a more deliberate approach to coding challenges.', topics:['Algorithmic thinking','Arrays and linked structures','Stacks and queues','Trees and graphs','Searching and sorting','Recursion','Complexity fundamentals'], skills:['Choosing suitable data structures','Reasoning about solutions','Analysing basic algorithm efficiency'], audience:'Programming learners who want to strengthen problem solving and understand the structures behind common solutions.', faqs:[['Should I already know a programming language?','Basic familiarity with a programming language can make it easier to focus on the concepts.'],['What is the main focus?','The course focuses on foundational structures, algorithms and a thoughtful problem-solving approach.']] },
  { slug:'artificial-intelligence', title:'Artificial Intelligence', category:categoryList[1].name, icon:'brain', description:'Get introduced to AI concepts, intelligent systems and real-world uses.', intro:'Explore what artificial intelligence means and how intelligent systems are applied. Build vocabulary around AI, examine practical examples and understand the role of data and models.', topics:['AI fundamentals','Intelligent systems','Problem representation','Introduction to machine learning','AI applications','Responsible use of AI','Introduction to AI tools and technologies'], skills:['Explaining core AI concepts','Recognising common AI use cases','Evaluating AI applications thoughtfully'], audience:'Students and curious learners who want an accessible introduction to AI and its practical applications.', faqs:[['Is this an advanced technical course?','It introduces AI fundamentals and applications. Further technical study may require additional programming and mathematics.'],['Will we discuss real-world use?','Yes. The course introduces practical AI applications and tools.']] },
  { slug:'machine-learning', title:'Machine Learning', category:categoryList[1].name, icon:'brain', description:'Explore how models learn from data, from preparation to evaluation.', intro:'Build an introduction to machine learning workflows. Understand how data is prepared, how models are trained and how their results can be evaluated.', topics:['Machine learning fundamentals','Supervised learning','Unsupervised learning','Data preparation','Model training','Model evaluation','Practical use cases'], skills:['Understanding common learning approaches','Preparing data for analysis','Interpreting model evaluation concepts'], audience:'Learners interested in data-driven systems. Basic programming or data familiarity is helpful but course suitability can be discussed with the team.', faqs:[['What is machine learning?','It is a way to build systems that learn patterns from data to support predictions or decisions.'],['Will the course cover model evaluation?','Yes. Model training and evaluation are part of the course topics.']] },
  { slug:'data-analytics', title:'Data Analytics', category:categoryList[1].name, icon:'chart', description:'Turn raw data into useful questions, visualisations and insights.', intro:'Learn a structured way to work with data. Explore how information is collected, cleaned, analysed and visualised to help communicate observations clearly.', topics:['Data collection','Data cleaning','Exploratory analysis','Working with tables','Data visualisation','Interpreting insights','Communicating findings'], skills:['Preparing and checking data','Choosing clear visualisations','Explaining what analysis suggests'], audience:'Students and professionals who want to develop an understanding of practical data analysis.', faqs:[['Do I need previous analytics experience?','No. The course introduces a step-by-step approach to working with data.'],['Does the course include visualisation?','Yes. Visualising data and communicating insights are part of the learning outline.']] },
  { slug:'ethical-hacking', title:'Ethical Hacking', category:categoryList[2].name, icon:'shield', description:'Learn cybersecurity fundamentals and responsible security practices.', intro:'Understand the foundations of cybersecurity and the principles behind ethical security testing. Focus on responsible, defensive learning and the concepts that help protect systems.', topics:['Cybersecurity fundamentals','Networking concepts','Common security risks','Security vulnerabilities','Ethical hacking methodologies','Defensive security practices','Responsible disclosure and ethics'], skills:['Recognising foundational security concepts','Understanding common vulnerabilities','Approaching security work responsibly'], audience:'Learners interested in cybersecurity who are ready to study technology and security within a responsible, defensive framework.', faqs:[['Is the course focused on responsible security?','Yes. Ethical boundaries and defensive security practices are central to the course.'],['Do I need networking knowledge?','Networking concepts are introduced as part of the learning outline.']] },
  { slug:'digital-marketing', title:'Digital Marketing', category:categoryList[3].name, icon:'megaphone', description:'Understand online marketing channels, audiences and campaign fundamentals.', intro:'Build an introduction to digital marketing. Learn how channels work together, how content reaches audiences and how marketers use measurement to guide decisions.', topics:['Online marketing fundamentals','Audience and channel basics','Content strategy','Search engine optimisation','Social media marketing','Paid advertising basics','Campaign measurement'], skills:['Planning channel-aware activity','Thinking about audience needs','Interpreting basic campaign measures'], audience:'Learners, small business owners and aspiring marketers curious about online channels and marketing practice.', faqs:[['Is this course suitable for beginners?','Yes. It introduces common channels and the fundamentals of digital marketing.'],['Does it cover SEO and social media?','Yes. Search, social media, content and paid advertising concepts are included.']] },
  { slug:'search-engine-optimization', title:'Search Engine Optimization (SEO)', category:categoryList[3].name, icon:'search', description:'Learn how websites can be made clearer for search engines and visitors.', intro:'Explore the fundamentals of search engine optimisation. Learn how useful content, site structure and technical basics support discoverability and a better visitor experience.', topics:['How search works','Keyword and intent research','On-page SEO','Technical SEO fundamentals','Content planning','Local SEO concepts','Measurement and improvement'], skills:['Assessing basic on-page opportunities','Planning search-focused content','Understanding SEO measurement'], audience:'Beginners, website owners and marketers who want to understand how organic search works.', faqs:[['Does SEO guarantee top rankings?','No. Search visibility depends on many factors and cannot be guaranteed. The course focuses on foundational methods.'],['Is local SEO included?','Local SEO concepts are included in the topics.']] },
  { slug:'google-analytics', title:'Google Analytics', category:categoryList[3].name, icon:'chart', description:'Understand web analytics concepts and how to interpret site activity.', intro:'Learn how web analytics helps describe website activity. Explore measurement concepts, reports and the questions that support useful analysis.', topics:['Analytics fundamentals','Measurement planning','Events and conversions','Reports and dimensions','Audience and acquisition views','Exploring engagement','Interpreting insights'], skills:['Framing measurement questions','Reading analytics reports','Using evidence to guide next steps'], audience:'Marketers, website owners and learners who want to understand digital measurement concepts.', faqs:[['Will I need access to a live analytics account?','The course introduces analytics concepts; account setup and platform availability can be discussed with the institute.'],['Does this guarantee a certification?','No certification is promised. The course is focused on learning analytics concepts and practice.']] },
  { slug:'google-ads', title:'Google Ads', category:categoryList[3].name, icon:'megaphone', description:'Explore paid search and campaign planning fundamentals.', intro:'Get familiar with paid search advertising concepts. Understand how audiences, keywords, ad messaging and measurement connect in a campaign.', topics:['Paid search fundamentals','Campaign structure','Keyword planning','Ad copy principles','Bidding concepts','Landing page relevance','Campaign measurement'], skills:['Planning a basic campaign structure','Connecting search intent and messaging','Understanding campaign performance measures'], audience:'Beginners and marketers who want an introduction to paid search advertising.', faqs:[['Are advertising costs included?','The course outline is for learning. Any advertising spend would be separate and should be confirmed with the institute.'],['Are results guaranteed?','No. Advertising outcomes depend on many factors and are not guaranteed.']] },
  { slug:'social-media-marketing', title:'Social Media Marketing', category:categoryList[3].name, icon:'users', description:'Plan useful social content and understand channel performance.', intro:'Learn how social media supports communication and marketing. Explore content planning, audience engagement and how to reflect on the performance of activity.', topics:['Social channel fundamentals','Audience and platform fit','Content calendars','Creative briefs','Community engagement','Paid social overview','Measurement and reporting'], skills:['Planning consistent social content','Matching messages to audiences','Reviewing engagement measures'], audience:'Learners, creators and small business teams interested in building a practical understanding of social media marketing.', faqs:[['Does this include content planning?','Yes. Content calendars and planning are included in the topic outline.'],['Does the course promise audience growth?','No. It builds understanding of methods and measures without guaranteeing specific results.']] },
  { slug:'website-design', title:'Website Design', category:categoryList[4].name, icon:'globe', description:'Learn the principles behind clear, accessible and engaging websites.', intro:'Explore how visual hierarchy, layout, colour, typography and usability shape a website. Practise thinking from a visitor’s perspective as you plan web experiences.', topics:['Design fundamentals','Layout and visual hierarchy','Colour and typography','Responsive design','Accessibility basics','Wireframing','User-centred thinking'], skills:['Organising information clearly','Making design choices for usability','Planning responsive page layouts'], audience:'Beginners interested in web and interface design, including learners who want to complement development skills.', faqs:[['Do I need to know how to code?','No. The focus is on design foundations and the structure of web experiences.'],['Is mobile design included?','Responsive design and accessibility basics are part of the topic outline.']] },
  { slug:'website-development', title:'Website Development', category:categoryList[4].name, icon:'globe', description:'Learn the core technologies behind functional, responsive websites.', intro:'Understand how websites are built and delivered. Learn foundational web technologies and practise creating pages that respond to different screens.', topics:['HTML structure','CSS styling','JavaScript fundamentals','Responsive layouts','Forms and interaction','Accessibility basics','Publishing concepts'], skills:['Building structured web pages','Styling layouts for different screens','Adding basic interaction'], audience:'Beginners and students curious about creating websites and learning web technologies.', faqs:[['Do I need previous coding experience?','No. Foundational concepts are introduced for learners starting out.'],['Will I learn to make responsive pages?','Yes. Responsive layouts are part of the course topics.']] }
];

const bySlug = new Map(courses.map(course => [course.slug, course]));
const esc = (value) => String(value ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
const link = (href, text, cls = '', attrs = '') => `<a class="${cls}" href="${href}" data-link ${attrs}>${text}</a>`;
const categoryCount = (name) => courses.filter(course => course.category === name).length;

function header(path) {
  const navItems = [
    ['/', 'Home'], ['/about', 'About Us'], ['/courses', 'Courses'], ['/#why-choose-us', 'Why Choose Us'], ['/contact', 'Contact Us']
  ];
  const active = path === '/' ? '/' : path.startsWith('/courses') ? '/courses' : path === '/about' ? '/about' : path === '/contact' ? '/contact' : '';
  return `<header class="site-header"><div class="container nav-wrap">
    <a class="brand" href="/" data-link aria-label="Greater Shine home"><img src="/assets/greater-shine-logo.png" alt="Greater Shine" /></a>
    <nav class="nav-links" id="primary-nav" aria-label="Main navigation">${navItems.map(([href,label]) => `<a href="${href}" data-link class="${href === active ? 'active' : ''}">${label}</a>`).join('')}</nav>
    <div class="nav-actions">${link('/#enquire', 'Enquire Now <span class="arrow">↗</span>', 'button primary small')}<button class="menu-toggle" aria-label="Open navigation menu" aria-expanded="false" aria-controls="primary-nav">${icon('menu')}</button></div>
  </div></header>`;
}

function footer() {
  const phone = config.phone ? `<a href="tel:${esc(config.phone.replace(/[^+\d]/g,''))}">${esc(config.phone)}</a>` : '<span>Phone details to be added</span>';
  const email = config.email ? `<a href="mailto:${esc(config.email)}">${esc(config.email)}</a>` : '<span>Email details to be added</span>';
  return `<footer class="site-footer"><div class="container">
    <div class="footer-grid">
      <div class="footer-brand"><img src="/assets/greater-shine-logo.png" alt="Greater Shine" /><p>Empowering students with practical technology and digital skills for a brighter future.</p></div>
      <div class="footer-col"><h3>Quick Links</h3><ul><li>${link('/', 'Home')}</li><li>${link('/about', 'About Us')}</li><li>${link('/courses', 'Courses')}</li><li>${link('/contact', 'Contact Us')}</li></ul></div>
      <div class="footer-col"><h3>Courses</h3><ul><li>${link('/courses?category=Programming', 'Programming')}</li><li>${link('/courses?category=AI%20%26%20Data', 'AI & Machine Learning')}</li><li>${link('/courses?category=Cybersecurity', 'Cybersecurity')}</li><li>${link('/courses?category=Digital%20Marketing', 'Digital Marketing')}</li><li>${link('/courses?category=Web%20Design', 'Web Development')}</li></ul></div>
      <div class="footer-col"><h3>Contact</h3><div class="footer-contact"><p>${esc(address)}</p><p>${esc(hours)}</p><p>${phone}</p><p>${email}</p></div></div>
    </div>
    <div class="footer-bottom"><span>© <span data-year></span> Greater Shine. All rights reserved.</span><div class="footer-legal">${link('/privacy-policy', 'Privacy Policy')}${link('/terms-and-conditions', 'Terms & Conditions')}</div></div>
  </div></footer>${whatsappButton()}`;
}

function whatsappButton() {
  const number = String(config.whatsapp || '').replace(/\D/g, '');
  if (!number) return '';
  const message = encodeURIComponent('Hello Greater Shine, I would like to know more about your training courses.');
  return `<a class="whatsapp-float" href="https://wa.me/${number}?text=${message}" target="_blank" rel="noopener noreferrer" aria-label="Chat with Greater Shine on WhatsApp">${icon('whatsapp')}</a>`;
}

function courseCard(course, showCategory = true) {
  return `<article class="course-card" data-course-card data-category="${esc(course.category)}" data-search="${esc((course.title+' '+course.category+' '+course.description).toLowerCase())}">
    <div class="course-card-top"><span class="icon-box">${icon(course.icon)}</span>${showCategory ? `<span class="course-tag">${esc(categoryList.find(c=>c.name===course.category)?.short || course.category)}</span>` : ''}</div>
    <h3>${esc(course.title)}</h3><p>${esc(course.description)}</p>
    ${link(`/courses/${course.slug}`, 'Explore course <span class="arrow">→</span>', 'text-link')}
  </article>`;
}

function enquiryForm(courseTitle = '') {
  const options = courses.map(course => `<option value="${esc(course.title)}" ${course.title === courseTitle ? 'selected' : ''}>${esc(course.title)}</option>`).join('');
  return `<form class="enquiry-form" data-enquiry-form data-course="${esc(courseTitle)}" novalidate>
    <div class="form-row"><div class="form-field"><label for="name-${courseTitle ? bySlug.get(courseTitle)?.slug : 'general'}">Full Name *</label><input id="name-${courseTitle ? bySlug.get(courseTitle)?.slug : 'general'}" name="name" autocomplete="name" placeholder="Your full name" required maxlength="100" /></div>
      <div class="form-field"><label for="mobile-${courseTitle ? bySlug.get(courseTitle)?.slug : 'general'}">Mobile Number *</label><input id="mobile-${courseTitle ? bySlug.get(courseTitle)?.slug : 'general'}" name="mobile" type="tel" autocomplete="tel" inputmode="tel" placeholder="Your mobile number" pattern="^[+]?[0-9][0-9 ()-]{6,15}$" required /></div></div>
    <div class="form-row"><div class="form-field"><label for="email-${courseTitle ? bySlug.get(courseTitle)?.slug : 'general'}">Email Address *</label><input id="email-${courseTitle ? bySlug.get(courseTitle)?.slug : 'general'}" name="email" type="email" autocomplete="email" placeholder="you@example.com" required maxlength="160" /></div>
      <div class="form-field"><label for="course-${courseTitle ? bySlug.get(courseTitle)?.slug : 'general'}">Interested Course *</label><select id="course-${courseTitle ? bySlug.get(courseTitle)?.slug : 'general'}" name="course" required><option value="">Choose a course</option>${options}</select></div></div>
    <div class="form-field"><label for="message-${courseTitle ? bySlug.get(courseTitle)?.slug : 'general'}">Message *</label><textarea id="message-${courseTitle ? bySlug.get(courseTitle)?.slug : 'general'}" name="message" placeholder="Tell us what you would like to learn" required maxlength="2000"></textarea></div>
    <div class="trap-field" aria-hidden="true"><label>Leave this field empty<input name="website" tabindex="-1" autocomplete="off" /></label></div>
    <div class="form-note" aria-live="polite" data-form-note></div>
    <button type="submit" class="button primary form-submit">Submit Enquiry <span class="arrow">→</span></button>
  </form>`;
}

function pageHero(title, description, crumb = '') {
  return `<section class="page-hero"><div class="container">${crumb ? `<div class="breadcrumbs">${link('/', 'Home')}<span>›</span>${crumb}</div>` : ''}<p class="eyebrow">Greater Shine · Greater Noida</p><h1>${title}</h1><p>${description}</p></div></section>`;
}

function homePage() {
  const shown = ['python-programming','artificial-intelligence','ethical-hacking','data-analytics','digital-marketing','full-stack-development'].map(s => bySlug.get(s));
  return `<main id="main">
    <section class="hero"><div class="hero-bg" aria-hidden="true"></div><div class="container hero-inner">
      <div class="hero-copy"><p class="eyebrow">Practical technology learning · Greater Noida</p><h1>Turn your passion for technology into <span>real-world skills.</span></h1>
        <p>Learn, build, and grow with industry-relevant training programs in Programming, Artificial Intelligence, Cybersecurity, Data Analytics, and Digital Marketing.</p>
        <div class="hero-actions">${link('/courses', 'Explore Our Courses <span class="arrow">→</span>', 'button primary')}${link('/contact', 'Talk to Our Counsellor', 'button outline')}</div>
        <div class="hero-note">${icon('check')}<span>Build practical knowledge with a learning path shaped around your interests.</span></div>
      </div>
      <aside class="hero-card" aria-label="Greater Shine learning approach"><div class="hero-card-top"><span>THE GREATER SHINE APPROACH</span><span class="live-dot">Learn</span></div><strong>Understand. Practise. Grow.</strong><p>Explore technology with practical, guided learning.</p><div class="line"></div><div class="hero-card-bottom"><span>Skills for a changing digital world</span><div class="avatar-stack" aria-hidden="true"><span>G</span><span>S</span><span>+</span></div></div></aside>
    </div></section>
    <section class="section"><div class="container intro-grid"><div><p class="eyebrow">Learn with purpose</p><h2>Learn skills that move your career forward.</h2></div><div class="intro-copy"><p>At Greater Shine, we believe that learning should go beyond textbooks. Our training programs focus on developing practical knowledge, strengthening technical abilities, and helping students understand how technology is applied in the real world.</p><p>Whether you’re starting your programming journey, exploring Artificial Intelligence, or building expertise in Digital Marketing, Greater Shine offers learning opportunities to help you take the next step.</p>${link('/about', 'More about Greater Shine <span class="arrow">→</span>', 'text-link')}</div></div>
      <div class="container feature-grid"><article class="feature-mini"><span class="icon-box">${icon('target')}</span><h3>Practical Learning</h3><p>Understand concepts through practical exercises and hands-on learning.</p></article><article class="feature-mini"><span class="icon-box">${icon('spark')}</span><h3>Industry-Relevant Skills</h3><p>Explore technologies, tools, and concepts relevant to today’s professional environment.</p></article><article class="feature-mini"><span class="icon-box">${icon('book')}</span><h3>Career-Oriented Training</h3><p>Build technical knowledge and problem-solving abilities for future opportunities.</p></article></div>
    </section>
    <section class="section soft"><div class="container"><div class="section-head center"><p class="eyebrow">Explore our courses</p><h2>Find a learning path that fits your interests.</h2><p>Start with a subject that sparks your curiosity. Explore our technology and digital skills programs.</p></div>
      <div class="category-grid">${categoryList.map(cat=>`<a class="category-card" href="/courses?category=${encodeURIComponent(cat.short)}" data-link><span class="icon-box">${icon(cat.icon)}</span><h3>${esc(cat.short)}</h3><p>${esc(cat.note)}</p><span class="category-count">${categoryCount(cat.name)} COURSES</span><span class="card-arrow">↗</span></a>`).join('')}</div>
      <p class="catalog-label">Popular learning paths</p><div class="course-strip">${shown.map(course=>courseCard(course)).join('')}</div>
      <div class="section-bottom">${link('/courses', 'View all courses <span class="arrow">→</span>', 'button outline')}</div>
      <div class="guide-banner"><div><h3>Not sure which course is right for you?</h3><p>Connect with our team and find a learning path that matches your interests and career goals.</p></div>${link('/#enquire', 'Get Course Guidance <span class="arrow">→</span>', 'button primary')}</div>
    </div></section>
    <section class="section" id="why-choose-us"><div class="container"><div class="section-head"><p class="eyebrow">Why choose Greater Shine?</p><h2>More than just learning. It’s about building skills.</h2><p>Support your next step with a practical, approachable way to learn technology and digital skills.</p></div>
      <div class="why-grid">${[
        ['target','Practical-Oriented Learning','Work through concepts with practice that helps connect ideas to real applications.'],
        ['spark','Technology-Focused Curriculum','Explore relevant topics across programming, AI, data, security and digital work.'],
        ['globe','Multiple Learning Opportunities','Find a starting point across a broad range of technical and creative subjects.'],
        ['chart','Skill Development','Strengthen technical understanding, logical thinking and confidence through learning.'],
        ['users','Beginner-Friendly Training','Build a foundation with learning paths designed to introduce essential concepts.'],
        ['book','Career-Focused Approach','Develop knowledge and problem-solving abilities for future academic and professional opportunities.']
      ].map(([ic,title,desc])=>`<article class="why-card"><span class="icon-box">${icon(ic)}</span><h3>${title}</h3><p>${desc}</p></article>`).join('')}</div>
    </div></section>
    <section class="section soft"><div class="container"><div class="section-head center"><p class="eyebrow">A clear path forward</p><h2>Your learning journey starts here.</h2><p>Take one step at a time, from exploring an interest to building skills for what comes next.</p></div>
      <div class="steps">${[['01','Discover Your Interest','Explore different courses and identify your area of interest.'],['02','Choose Your Course','Get guidance to select a suitable learning path.'],['03','Learn & Practise','Understand concepts and develop practical skills.'],['04','Build Your Future','Use your knowledge to explore academic and professional opportunities.']].map(([num,title,desc])=>`<article class="step"><span class="step-number">${num}</span><h3>${title}</h3><p>${desc}</p></article>`).join('')}</div>
    </div></section>
    <section class="section"><div class="container about-panel"><div class="about-image" role="img" aria-label="Students collaborating in a modern technology learning environment"></div><div class="about-panel-copy"><p class="eyebrow">About Greater Shine</p><h2>Helping you build skills for tomorrow.</h2><p>Greater Shine is committed to helping students develop practical knowledge in technology and digital professions. Through diverse training programs, we aim to encourage curiosity, strengthen technical capabilities, and help learners become confident in their chosen fields.</p>${link('/about', 'Know More About Us <span class="arrow">→</span>', 'button outline')}</div></div></section>
    <section class="section soft" id="enquire"><div class="container contact-grid"><div class="prose"><p class="eyebrow">Start a conversation</p><h2>Not sure where to begin?</h2><p>Tell us what you’re interested in and the Greater Shine team can help you explore a suitable course.</p><div class="contact-cards" style="margin-top:24px"><div class="contact-card"><span class="icon-box">${icon('pin')}</span><div><h3>Visit Greater Shine</h3><p>${esc(address)}</p></div></div></div></div><div class="form-card"><h2>Get course guidance</h2><p>Share your details and the course you’re interested in.</p>${enquiryForm()}</div></div></section>
    <section class="cta-band"><div class="container cta-inner"><div><h2>Ready to take the next step?</h2><p>Start learning the skills that can shape your future. Connect with Greater Shine today and explore our training programs.</p></div><div class="cta-actions">${link('/#enquire', 'Enquire Now <span class="arrow">→</span>', 'button light')}${link('/contact', 'Contact Us', 'button outline')}</div></div></section>
  </main>`;
}

function aboutPage() {
  return `<main id="main">${pageHero('Helping you build skills for tomorrow.', 'Greater Shine supports learners as they explore technology and digital professions through practical, accessible training opportunities.')}
    <section class="section"><div class="container"><div class="intro-grid"><div><p class="eyebrow">About the institute</p><h2>Learning built around curiosity and practice.</h2></div><div class="intro-copy"><p>Greater Shine is a technology and professional skills training institute in Greater Noida. We help students turn their interest in technology into practical knowledge through learning opportunities across programming, artificial intelligence, cybersecurity, data analytics, digital marketing and web development.</p><p>Our focus is to encourage curiosity, strengthen technical abilities and help learners become more confident in the fields they choose to explore.</p></div></div>
      <div class="value-grid"><article class="value-card"><span class="icon-box">${icon('target')}</span><h3>Our Vision</h3><p>To encourage continuous learning and help individuals develop the technical skills needed to participate confidently in an evolving digital world.</p></article><article class="value-card"><span class="icon-box">${icon('spark')}</span><h3>Our Mission</h3><p>To provide accessible, practical, and relevant training opportunities that help students develop their knowledge, strengthen their abilities, and explore new career possibilities.</p></article><article class="value-card"><span class="icon-box">${icon('book')}</span><h3>Our Approach</h3><p>Make space for strong fundamentals, useful practice and thoughtful guidance as learners build their skills step by step.</p></article></div>
    </div></section>
    <section class="section soft"><div class="container"><div class="section-head"><p class="eyebrow">Why practical skills?</p><h2>Connect what you learn with how technology is used.</h2><p>Practical learning helps make ideas more tangible. It gives students opportunities to apply concepts, ask questions and build confidence through doing.</p></div><div class="why-grid"><article class="why-card"><span class="icon-box">${icon('code')}</span><h3>Learn by doing</h3><p>Apply concepts through exercises that encourage active learning and problem solving.</p></article><article class="why-card"><span class="icon-box">${icon('users')}</span><h3>Explore your interests</h3><p>Choose from a range of subjects and find a direction that feels right for you.</p></article><article class="why-card"><span class="icon-box">${icon('chart')}</span><h3>Build confidence</h3><p>Develop knowledge and practical abilities that can support future opportunities.</p></article></div></div></section>
    <section class="section"><div class="container"><div class="section-head center"><p class="eyebrow">Training programs</p><h2>Explore a range of technology and digital skills.</h2><p>From programming foundations to digital marketing, find a course that aligns with your next learning goal.</p></div><div class="category-grid">${categoryList.map(cat=>`<a class="category-card" href="/courses?category=${encodeURIComponent(cat.short)}" data-link><span class="icon-box">${icon(cat.icon)}</span><h3>${esc(cat.short)}</h3><p>${esc(cat.note)}</p><span class="category-count">${categoryCount(cat.name)} COURSES</span><span class="card-arrow">↗</span></a>`).join('')}</div></div></section>
    <section class="cta-band"><div class="container cta-inner"><div><h2>Let’s find your starting point.</h2><p>Tell us what you would like to learn and we’ll help you explore the options.</p></div><div class="cta-actions">${link('/#enquire', 'Get Course Guidance <span class="arrow">→</span>', 'button light')}${link('/contact', 'Contact Us', 'button outline')}</div></div></section></main>`;
}

function coursesPage() {
  return `<main id="main">${pageHero('Explore our courses.', 'Build a foundation, explore a new discipline or grow your technical skills with courses across technology and digital professions.')}
    <section class="section"><div class="container"><div class="catalog-toolbar"><label class="search-box">${icon('search')}<input type="search" id="course-search" placeholder="Search courses" aria-label="Search courses" /></label><div class="filter-row" role="group" aria-label="Filter courses by category"><button class="filter-button active" data-filter="all" aria-pressed="true">All courses</button>${categoryList.map(cat=>`<button class="filter-button" data-filter="${esc(cat.short)}" aria-pressed="false">${esc(cat.short)}</button>`).join('')}</div></div>
      <p class="form-note" id="course-count" aria-live="polite"></p><div class="catalog-grid" id="catalog-grid">${courses.map(course=>courseCard(course)).join('')}</div>
    </div></section>
    <section class="section soft"><div class="container contact-grid"><div><p class="eyebrow">Course guidance</p><h2>Need help choosing?</h2><p style="margin-top:14px;color:var(--muted)">Share your interests with us. We’ll help you explore the courses that fit what you want to learn.</p>${link('/contact', 'Talk to our team <span class="arrow">→</span>', 'button outline', 'style="margin-top:22px"')}</div><div class="form-card"><h2>Get course guidance</h2><p>Leave your details and we’ll follow up through the contact details you provide.</p>${enquiryForm()}</div></div></section></main>`;
}

function coursePage(course) {
  const related = courses.filter(c => c.category === course.category && c.slug !== course.slug).slice(0,3);
  const faq = [...course.faqs, ['How can I learn more about the course?','Use the enquiry form on this page or contact Greater Shine to ask about the course and current arrangements.']];
  return `<main id="main">${pageHero(esc(course.title)+'.', esc(course.description), `${link('/courses','Courses')}<span>›</span>${esc(course.title)}`)}
    <section class="section"><div class="container page-layout"><article class="prose">
      <img src="/assets/learning-lab-hero.png" alt="Learners practising technology skills in a classroom" style="width:100%;max-height:345px;object-fit:cover;border-radius:8px;margin-bottom:35px" />
      <p class="eyebrow">${esc(course.category)}</p><h2>About this course</h2><p>${esc(course.intro)}</p>
      <h2>What you will learn</h2><ul>${course.topics.slice(0,5).map(topic=>`<li>Understand ${esc(topic.toLowerCase())} and where it fits into the subject.</li>`).join('')}<li>Apply concepts through practical learning and guided exercises.</li></ul>
      <h2>Key topics covered</h2><div class="topic-list">${course.topics.map(topic=>`<span class="topic-chip">${esc(topic)}</span>`).join('')}</div>
      <h2>Skills you can develop</h2><ul>${course.skills.map(skill=>`<li>${esc(skill)}</li>`).join('')}</ul>
      <h2>Who should consider this course?</h2><p>${esc(course.audience)}</p>
      <h2>Frequently asked questions</h2><div class="faq-list">${faq.map(([q,a])=>`<details class="faq-item"><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div>
    </article><aside class="side-card" id="course-enquiry"><h3>Interested in ${esc(course.title)}?</h3><p>Share your details to ask our team about this course and your learning options.</p>${link('/#enquire', 'Talk to our team <span class="arrow">→</span>', 'button primary')}<p style="margin-top:17px">Prefer a message? Use the course enquiry form below.</p></aside></div></section>
    <section class="section soft"><div class="container"><div class="contact-grid"><div><p class="eyebrow">Get in touch</p><h2>Ask about ${esc(course.title)}.</h2><p style="margin-top:13px;color:var(--muted)">The course name is included with your enquiry so the team knows what you’re interested in.</p></div><div class="form-card"><h2>Course enquiry</h2><p>Complete the form and Greater Shine can follow up with you.</p>${enquiryForm(course.title)}</div></div></div></section>
    ${related.length ? `<section class="section"><div class="container"><div class="section-head"><p class="eyebrow">Keep exploring</p><h2>Related courses</h2></div><div class="course-strip">${related.map(c=>courseCard(c)).join('')}</div></div></section>` : ''}
  </main>`;
}

function contactPage() {
  const phone = config.phone ? `<a href="tel:${esc(config.phone.replace(/[^+\d]/g,''))}">${esc(config.phone)}</a>` : '<p>Phone number to be added</p>';
  const email = config.email ? `<a href="mailto:${esc(config.email)}">${esc(config.email)}</a>` : '<p>Email address to be added</p>';
  const mapQuery = encodeURIComponent(address);
  return `<main id="main">${pageHero('Let’s start your learning journey.', 'Connect with Greater Shine to ask about courses, explore your interests or plan your next learning step.')}
    <section class="section"><div class="container contact-grid"><div><p class="eyebrow">Visit or reach us</p><h2>We’re here to help.</h2><div class="contact-cards" style="margin-top:24px">
      <article class="contact-card"><span class="icon-box">${icon('pin')}</span><div><h3>GREATER SHINE</h3><p>${esc(address)}</p></div></article>
      <article class="contact-card"><span class="icon-box">${icon('clock')}</span><div><h3>Working hours</h3><p>${esc(hours)}</p></div></article>
      <article class="contact-card"><span class="icon-box">${icon('phone')}</span><div><h3>Phone</h3>${phone}</div></article>
      <article class="contact-card"><span class="icon-box">${icon('mail')}</span><div><h3>Email</h3>${email}</div></article>
    </div><iframe class="map-frame" title="Map showing Greater Shine in Greater Noida" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=${mapQuery}&output=embed"></iframe></div>
    <div class="form-card"><h2>Send an enquiry</h2><p>Tell us a little about what you’re looking for.</p>${enquiryForm()}</div></div></section></main>`;
}

function legalPage(kind) {
  if (kind === 'privacy-policy') return `<main id="main">${pageHero('Privacy Policy', 'How Greater Shine handles information submitted through this website.')}
    <section class="section"><article class="container prose"><p class="eyebrow">Last updated: November 2026</p><h2>Information you provide</h2><p>If you submit an enquiry, the form requests your name, mobile number, email address, interested course and message so Greater Shine can respond to your request. The site does not send the form unless an enquiry endpoint has been configured.</p><h2>How information is used</h2><p>Enquiry details are intended to be used to respond to course questions and provide requested guidance. The configured form service or backend may process the submitted information. Its handling should be described in the institute’s final privacy notice before the form is enabled.</p><h2>Storage and sharing</h2><p>This website does not itself keep a database of enquiry submissions. Once a backend is connected, the institute should confirm its retention and access practices and update this notice to reflect the live setup. Do not include sensitive personal information in an enquiry.</p><h2>Cookies and analytics</h2><p>No analytics or advertising tracking is added by this website. The embedded map is provided by Google and may be subject to Google’s own terms and privacy practices when it loads.</p><h2>Your choices</h2><p>You can choose not to submit the enquiry form. Before launch, add an institute contact channel here for privacy questions or requests concerning submitted information.</p></article></section></main>`;
  return `<main id="main">${pageHero('Terms & Conditions', 'Terms for using the Greater Shine website and its course information.')}
    <section class="section"><article class="container prose"><p class="eyebrow">Last updated: November 2026</p><h2>Website information</h2><p>This website provides general information about Greater Shine and its training programs. Course topics are introductory descriptions to help visitors explore areas of learning. Please contact the institute to confirm current course availability and arrangements.</p><h2>No guaranteed outcomes</h2><p>Course information is educational in nature. The website does not promise employment, placement, certification, a particular result or any other specific outcome.</p><h2>Enquiries and communication</h2><p>Submitting an enquiry is a request for information and does not itself create an enrolment or other agreement. The enquiry form works only when a backend endpoint is configured. Any course terms should be confirmed directly with Greater Shine.</p><h2>Website content</h2><p>Content is provided for general information and may be updated as courses or institute details change. Please contact Greater Shine if you need clarification about information shown on this website.</p><h2>Contact</h2><p>For questions about these terms, use the contact details published by Greater Shine or submit an enquiry through the Contact Us page once the form is connected.</p></article></section></main>`;
}

function notFound() { return `<main id="main">${pageHero('Page not found.', 'The page you’re looking for may have moved or may not exist.')}<section class="section"><div class="container">${link('/', 'Back to home <span class="arrow">→</span>', 'button primary')}</div></section></main>`; }

function setMeta(title, description, path) {
  document.title = title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.content = description;
  const canonicalBase = config.siteUrl || window.location.origin;
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
  canonical.href = `${String(canonicalBase).replace(/\/$/,'')}${path}`;
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogTitle) ogTitle.content = title;
  if (ogDescription) ogDescription.content = description;
}

function organizationSchema() {
  const schema = { '@context':'https://schema.org', '@type':'EducationalOrganization', name:'Greater Shine', description:'Technology and professional skills training institute in Greater Noida, Uttar Pradesh, India.', address:{ '@type':'PostalAddress', streetAddress:'Office no. 243 1st floor, Amrit Plaza, Jagat Farm, Gamma 1', addressLocality:'Greater Noida', addressRegion:'Uttar Pradesh', postalCode:'201310', addressCountry:'IN' }, openingHours:'Mo-Su 10:00-21:00' };
  const old = document.getElementById('organization-schema');
  if (old) old.remove();
  const script = document.createElement('script'); script.id='organization-schema'; script.type='application/ld+json'; script.textContent=JSON.stringify(schema); document.head.appendChild(script);
}

function render() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  let view = '', title = '', description = '';
  if (path === '/') { view = homePage(); title = 'Greater Shine | Practical Technology Training in Greater Noida'; description = 'Build practical technology and digital skills at Greater Shine in Greater Noida. Explore programming, AI, cybersecurity, analytics, digital marketing and web courses.'; }
  else if (path === '/about') { view = aboutPage(); title = 'About Greater Shine | Technology Training in Greater Noida'; description = 'Learn about Greater Shine, our approach to practical learning and technology training programs in Greater Noida.'; }
  else if (path === '/courses') { view = coursesPage(); title = 'Technology & Digital Skills Courses | Greater Shine'; description = 'Explore programming, AI, cybersecurity, data analytics, digital marketing and web design courses at Greater Shine.'; }
  else if (path.startsWith('/courses/')) { const course = bySlug.get(path.split('/')[2]); if (course) { view = coursePage(course); title = `${course.title} Course in Greater Noida | Greater Shine`; description = `${course.description} Explore the ${course.title} course at Greater Shine, Greater Noida.`; } }
  else if (path === '/contact') { view = contactPage(); title = 'Contact Greater Shine | Greater Noida'; description = 'Contact Greater Shine, located at Amrit Plaza, Jagat Farm, Gamma 1, Greater Noida. Ask about technology and digital skills courses.'; }
  else if (path === '/privacy-policy') { view = legalPage('privacy-policy'); title = 'Privacy Policy | Greater Shine'; description = 'Privacy information for the Greater Shine website and enquiry form.'; }
  else if (path === '/terms-and-conditions') { view = legalPage('terms'); title = 'Terms & Conditions | Greater Shine'; description = 'Terms for using the Greater Shine website and course information.'; }
  if (!view) { view = notFound(); title = 'Page Not Found | Greater Shine'; description = 'The requested Greater Shine page could not be found.'; }
  document.getElementById('app').innerHTML = `${header(path)}${view}${footer()}`;
  setMeta(title, description, path);
  organizationSchema();
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  bindInteractions();
  if (path === '/courses') initCatalog();
  if (path === '/' && window.location.hash) requestAnimationFrame(() => document.getElementById(window.location.hash.slice(1))?.scrollIntoView());
}

function bindInteractions() {
  document.querySelectorAll('a[data-link]').forEach(a => a.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const url = new URL(a.href, window.location.href);
    if (url.origin !== window.location.origin) return;
    event.preventDefault();
    if (url.pathname === window.location.pathname && url.hash) {
      history.pushState({}, '', url.pathname + url.search + url.hash);
      document.querySelector('.nav-links')?.classList.remove('open');
      document.querySelector('.menu-toggle')?.setAttribute('aria-expanded','false');
      document.getElementById(url.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    history.pushState({}, '', url.pathname + url.search + url.hash);
    render();
    if (url.hash) requestAnimationFrame(() => document.getElementById(url.hash.slice(1))?.scrollIntoView());
    else window.scrollTo(0,0);
  }));
  document.querySelector('.menu-toggle')?.addEventListener('click', event => {
    const button = event.currentTarget;
    const nav = document.getElementById('primary-nav');
    const open = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    button.innerHTML = icon(open ? 'x' : 'menu');
  });
  document.querySelectorAll('[data-enquiry-form]').forEach(form => form.addEventListener('submit', submitEnquiry));
}

function initCatalog() {
  const params = new URLSearchParams(window.location.search);
  let active = params.get('category') || 'all';
  const valid = ['all', ...categoryList.map(c=>c.short)];
  if (!valid.includes(active)) active = 'all';
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const search = document.getElementById('course-search');
  const count = document.getElementById('course-count');
  const cards = [...document.querySelectorAll('[data-course-card]')];
  const update = () => {
    let visible = 0;
    const query = search.value.trim().toLowerCase();
    for (const card of cards) {
      const category = card.dataset.category;
      const short = categoryList.find(c=>c.name===category)?.short;
      const show = (active === 'all' || active === short) && card.dataset.search.includes(query);
      card.hidden = !show;
      if (show) visible++;
    }
    count.textContent = `${visible} ${visible === 1 ? 'course' : 'courses'} shown`;
  };
  for (const button of buttons) button.addEventListener('click', () => {
    active = button.dataset.filter;
    for (const item of buttons) { const selected = item === button; item.classList.toggle('active', selected); item.setAttribute('aria-pressed', String(selected)); }
    update();
  });
  search.addEventListener('input', update);
  if (active !== 'all') buttons.find(button=>button.dataset.filter===active)?.click();
  else update();
}

async function submitEnquiry(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const note = form.querySelector('[data-form-note]');
  const button = form.querySelector('[type="submit"]');
  note.className = 'form-note';
  if (!form.reportValidity()) return;
  const data = Object.fromEntries(new FormData(form).entries());
  if (data.website) return;
  if (!config.enquiryEndpoint) {
    note.textContent = 'This enquiry form is not connected yet. Configure the enquiry endpoint before accepting submissions.';
    note.classList.add('error');
    return;
  }
  const original = button.innerHTML;
  button.disabled = true;
  button.textContent = 'Sending…';
  note.textContent = '';
  try {
    const response = await fetch(config.enquiryEndpoint, { method:'POST', headers:{'Content-Type':'application/json','Accept':'application/json'}, body:JSON.stringify({ ...data, requestedCourse:form.dataset.course || "", page:window.location.pathname, submittedAt:new Date().toISOString() }) });
    if (!response.ok) throw new Error('The server could not accept this enquiry. Please try again.');
    form.reset();
    const course = form.dataset.course;
    const select = form.querySelector('[name="course"]');
    if (course && select) select.value = course;
    note.textContent = 'Thank you. Your enquiry has been sent to Greater Shine.';
    note.classList.add('success');
  } catch (error) {
    note.textContent = error.message || 'We could not send your enquiry. Please try again later.';
    note.classList.add('error');
  } finally {
    button.disabled = false;
    button.innerHTML = original;
  }
}

window.addEventListener('popstate', () => { render(); if (window.location.hash) document.getElementById(window.location.hash.slice(1))?.scrollIntoView(); else window.scrollTo(0,0); });
render();
