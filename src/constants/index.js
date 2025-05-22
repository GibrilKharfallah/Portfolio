import {
    mobile,
    cevital,
    auditsEnergies,
    colombes,
    epitech,
    MiraUni,
    efrei,
    sql,
    python,
    sklearn,
    r,
    c,
    java,
    ml1,
    ml2,
    dataWarehouse,
    catDog,
    nsa,
    rushHour,
    chatChatChat,
    popeye,
    backend,
    creator,
    web,
    javascript,
    jobBoard,
    //typescript,
    html,
    css,
    reactjs,
    //redux,
    //tailwind,
    //nodejs,
    mongodb,
    git,
    //figma,
    docker,
    //carrent,
    //jobit,
    //tripguide,
    //threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Application and Fullstack Development",
        icon: web,
    },
    {
        title: "Data Analysis and Predictive Modeling",
        icon: mobile,
    },
    {
        title: "Data Warehouse Design and Management",
        icon: backend,
    },
    {
        title: "Artificial Intelligence Solutions",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "C",
        icon: c,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "SQL",
        icon: sql,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Scikit-learn",
        icon: sklearn,
    },
    {
        name: "R",
        icon: r,
    },
    {
        name: "Java",
        icon: java,
    },    
    {
        name: "Docker",
        icon: docker,
    },
    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "High school Diploma",
        company_name: "Les Colombes High School",
        icon: colombes,
        iconBg: "#383E56",
        date: "2019 - 2020",
        points: [
            "Scientific Baccalaureate - With high honours",
        ],
    },
    {
        title: "Licence Degree",
        company_name: "Abderrahmane Mira University of Bejaïa, Algeria",
        icon: MiraUni,
        iconBg: "#E6DEDD",
        date: "2020 - 2023",
        points: [
            "Statistics And Computer Data Processing Major",
        ],
    },
    {
        title: "End-Of-Cycle Internship",
        company_name: "CEVITAL Agro-Industrie",
        icon: cevital,
        iconBg: "#383E56",
        date: "Oct 2022 - Dec 2022",
        points: [
            "Development of a regional post-COVID sales forecasting system",
            "Management of a product database (Oil)",
            "Modeling a forecasting and decision support system",
            "Communication and promotion work with department managers",
        ],
    },
    {
        title: "Master's 1 Degree",
        company_name: "Abderrahmane Mira University of Bejaïa, Algeria",
        icon: MiraUni,
        iconBg: "#383E56",
        date: "2023 - 2024",
        points: [
            "Data Science And Decision Support Major",
            ],
    },
    {
        title: "Pre - Master Of Science",
        company_name: "Epitech",
        icon: epitech,
        iconBg: "#E6DEDD",
        date: "2024 - 2025",
        points: [
            "Preparatory year for a Master of Science",
            ],
    },
    {
        title: "Internship",
        company_name: "Audits Energies",
        icon: auditsEnergies,
        iconBg: "#383E56",
        date: "Feb 2025 - Jul 2025",
        points: [
            "Creation and redesign of the company's showcase website",
            "Development of an internal training platform",
            "Implementation of tools to automate and streamline data management",
            "Scraping, cleaning, and enriching commercial data",
        ],
    },
    {
        title: "Engineering Degree",
        company_name: "Efrei",
        icon: efrei,
        iconBg: "#E6DEDD",
        date: "2025 - 2027",
        points: [
            "Big Data & Machine Learning Major",
            ],
    },
];

const projects = [
    {
        name: "ModelQuest",
        description:
            "Sales analysis and prediction for an electronic equipment sales chain",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "Pandas",
                color: "green-text-gradient",
            },
            {
                name: "Seaborn",
                color: "pink-text-gradient",
            },
            {
                name: "Scikit-Learn",
                color: "orange-text-gradient",
            },
            {
                name: "Tkinter",
                color: "pink-text-gradient",
            },
        ],
        image: ml1,
        source_code_link: "https://github.com/GibrilKharfallah/ModelQuest",
    },
    {
        name: "EnerGenius",
        description:
            "Energy consumption prediction for smart building",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "Pandas",
                color: "green-text-gradient",
            },
            {
                name: "Numpy",
                color: "blue-text-gradient",
            },
            {
                name: "Seaborn",
                color: "pink-text-gradient",
            },
            {
                name: "Scikit-Learn",
                color: "orange-text-gradient",
            },
            {
                name: "XGBoost",
                color: "green-text-gradient",
            },
        ],
        image: ml2,
        source_code_link: "https://github.com/GibrilKharfallah/EnerGenius",
    },
    {
        name: "DataZon",
        description:
            "Data Warehouse design and modeling for an e-commerce platform",
        tags: [
            {
                name: "SQL Server Management Studio",
                color: "orange-text-gradient",
            },
            {
                name: "SQL Server",
                color: "green-text-gradient",
            },
        ],
        image: dataWarehouse,
        source_code_link: "https://github.com/GibrilKharfallah/DataZon",
    },
    {
        name: "NeuroMark",
        description:
            "Creation of a perceptron for image classification",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "Scikit-Learn",
                color: "green-text-gradient",
            },
            {
                name: "Numpy",
                color: "blue-text-gradient",
            },
            {
                name: "Plotly",
                color: "pink-text-gradient",
            },
            {
                name: "Matplotlib",
                color: "orange-text-gradient",
            },
        ],
        image: catDog,
        source_code_link: "https://github.com/GibrilKharfallah/NeuroMark",
    },
    {
        name: "nJob",
        description:
            "Development of a job board platform for enhanced job matching and user engagement.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Node.js",
                color: "green-text-gradient",
            },
            {
                name: "MySQL",
                color: "blue-text-gradient",
            },
            {
                name: "Sequelize",
                color: "orange-text-gradient",
            },
            {
                name: "Express.js",
                color: "pink-text-gradient",
            },
        ],
        image: jobBoard,
        source_code_link: "https://github.com/GibrilKharfallah/Job-Board",
    },
    {
        name: "Rush Hour",
        description:
            "Development of a 2D car racing game for an engaging arcade experience.",
        tags: [
            {
                name: "Java",
                color: "blue-text-gradient",
            },
            {
                name: "JavaFX",
                color: "orange-text-gradient",
            },
        ],
        image: rushHour,
        source_code_link: "https://github.com/GibrilKharfallah/Rush-Hour",
    },
    {
        name: "You shall not pass",
        description:
            "Design, securing and deployement of a virtualized network infrastructure using multiple virtual machines.",
        tags: [
            {
                name: "VirtualBox",
                color: "blue-text-gradient",
            },
            {
                name: "OpenBSD",
                color: "green-text-gradient",
            },
            {
                name: "FreeBSD",
                color: "blue-text-gradient",
            },
            {
                name: "Debian",
                color: "orange-text-gradient",
            },
            {
                name: "Nginx",
                color: "pink-text-gradient",
            },
            {
                name: "PHP",
                color: "green-text-gradient",
            },
            {
                name: "MySQL",
                color: "orange-text-gradient",
            },
        ],
        image: nsa,
        source_code_link: "https://github.com/GibrilKharfallah/Virtual-Network-Administration",
    },
    {
        name: "ChatChatChat",
        description:
            "Development of a seamless real-time chat experience where users can connect, share and engage in dynamic convesations across different channels.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Node.js",
                color: "green-text-gradient",
            },
            {
                name: "Express.js",
                color: "blue-text-gradient",
            },
            {
                name: "MongoDB",
                color: "orange-text-gradient",
            },
            {
                name: "Socket.io",
                color: "pink-text-gradient",
            },
        ],
        image: chatChatChat,
        source_code_link: "https://github.com/GibrilKharfallah/ChatChatChat",
    },
    {
        name: "Popeye",
        description:
            "Design of a containerized voting web app, running on a microservices architecture with Docker and Docker Compose",
        tags: [
            {
                name: "Docker",
                color: "blue-text-gradient",
            },
            {
                name: "Node.js",
                color: "green-text-gradient",
            },
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "PostgreSQL",
                color: "orange-text-gradient",
            },
            {
                name: "Java",
                color: "pink-text-gradient",
            },
        ],
        image: popeye,
        source_code_link: "https://github.com/GibrilKharfallah/Popeye",
    },
];

export { services, technologies, experiences, projects };