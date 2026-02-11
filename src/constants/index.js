import {
    mobile,
    cevital,
    auditsEnergies,
    colombes,
    epitech,
    MiraUni,
    efrei,
    cleed,
    sql,
    python,
    sklearn,
    r,
    c,
    java,
    ml1,
    ml2,
    dataWarehouse,
    sneakVault,
    powerFlow,
    wineML,
    goalytics,
    movieLens,
    hadoop,
    spark,
    scala,
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
    nodejs,
    mongodb,
    git,
    docker,
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
        title: "Data Engineering and Management",
        icon: web,
    },
    {
        title: "Artificial Intelligence Solutions",
        icon: mobile,
    },
    {
        title: "Data Analysis and Dashboard Design",
        icon: backend,
    },
    {
        title: "Web Application and Fullstack Development",
        icon: creator,
    },
];

const technologies = [
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Hadoop",
        icon: hadoop,
    },
    {
        name: "Spark",
        icon: spark,
    },
    {
        name: "Scala",
        icon: scala,
    },
    {
        name: "NodeJS",
        icon: nodejs,
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
        title: "Fullstack Development Internship",
        company_name: "Audits Energies",
        icon: auditsEnergies,
        iconBg: "#383E56",
        date: "Feb 2025 - Jul 2025",
        points: [
            "Redesign of the company's showcase site and an internal training platform",
            "Implementation of data flow integration and automation tools",
            "Scraping, cleaning and enrichment of commercial data",
            "Development of an educational RAG agent to answer questions from internal training students",
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
    {
        title: "Data Scientist (Machine Learning & GenAI) Apprenticeship",
        company_name: "CLEED",
        icon: cleed,
        iconBg: "#E6DEDD",
        date: "Sep 2025 - Until Now",
        points: [
            "Training and optimization of AI models on client data (LLMs, RAG, Voicebot)",
            "Improvement of workflow efficiency and scalability of cloud tools (Azure, OpenAI)",
            "Optimization of conversational AI (RAG, reranking, cost reduction, response time improvements)",
            "Development of automated actions",
            "Data cleaning and preparation, recommendation engine development (collaborative filtering / content-based)",
            "RAG integration within the ML pipeline",
        ],
    },
];

const projects = [
    {
        name: "WineML",
        description:
            "Implementation of a complete ML workflow combining data preprocessing, feature encoding, cross-validation, and hyperparameter tuning to classify red and white wine quality.",
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
                name: "Plotly",
                color: "pink-text-gradient",
            },
            {
                name: "Scikit-Learn",
                color: "orange-text-gradient",
            },
            {
                name: "Imbalanced-Learn",
                color: "blue-text-gradient",
            },
            {
                name: "Streamlit",
                color: "pink-text-gradient",
            },
        ],
        image: wineML,
        source_code_link: "https://github.com/GibrilKharfallah/WineML",
    },    
    {
        name: "MovieLens",
        description:
            "Built a scalable Big Data analytics pipeline with Hadoop, Spark, and Hive to process and analyze 25M+ MovieLens records.",
        tags: [
            {
                name: "Hadoop",
                color: "blue-text-gradient",
            },
            {
                name: "PySpark",
                color: "green-text-gradient",
            },
            {
                name: "HDFS",
                color: "pink-text-gradient",
            },
            {
                name: "Hive",
                color: "orange-text-gradient",
            },
        ],
        image: movieLens,
        source_code_link: "https://github.com/GibrilKharfallah/MoviLens",
    },
    {
        name: "Goalytics",
        description:
            "Functional Scala ETL transforming raw football data into structured insights.",
        tags: [
            {
                name: "Scala",
                color: "pink-text-gradient",
            },
            {
                name: "Circe",
                color: "green-text-gradient",
            },
            {
                name: "Json Parsing",
                color: "orange-text-gradient",
            },
        ],
        image: goalytics,
        source_code_link: "https://github.com/GibrilKharfallah/Goalytics",
    },
    {
        name: "PowerFlow",
        description:
            "Engineering a full data pipeline and interactive visualization app to analyze France’s electricity exchange balances and cross-border interconnection behavior over two decades.",
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
                name: "Plotly",
                color: "pink-text-gradient",
            },
            {
                name: "Scikit-Learn",
                color: "orange-text-gradient",
            },
            {
                name: "Streamlit",
                color: "pink-text-gradient",
            },
        ],
        image: powerFlow,
        source_code_link: "https://github.com/GibrilKharfallah/PowerFlow",
    },
    {
        name: "ModelQuest",
        description:
            "Sales analysis and prediction for an electronic equipment sales chain.",
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
            "Energy consumption prediction for smart building.",
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
            "Data Warehouse design and modeling for an e-commerce platform.",
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
            "Creation of a perceptron for image classification.",
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
        name: "SneakVault",
        description:
            "“Fullstack sneaker marketplace with secure REST & GraphQL APIs, real-time order management, and geolocation-powered recommendations.”",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Node.js",
                color: "purple-text-gradient",
            },
            {
                name: "MongoDB",
                color: "green-text-gradient",
            },
            {
                name: "Apollo Server",
                color: "orange-text-gradient",
            },
            {
                name: "GraphQL",
                color: "pink-text-gradient",
            },
        ],
        image: sneakVault,
        source_code_link: "https://github.com/GibrilKharfallah/SneakVault",
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
            "Design of a containerized voting web app, running on a microservices architecture with Docker and Docker Compose.",
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