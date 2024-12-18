import {
    mobile,
    cevital,
    colombes,
    epitech,
    MiraUni,
    matlab,
    sql,
    python,
    scipy,
    numpy,
    pandas,
    matplotlib,
    plotly,
    seaborn,
    sklearn,
    php,
    r,
    c,
    java,
    //hadoop,
    //spark,
    //tensorflow,
    //pytorch,
    //keras,
    ml1,
    ml2,
    dataWarehouse,
    catDog,
    backend,
    creator,
    web,
    javascript,
    jobBoard,
    //typescript,
    html,
    css,
    //reactjs,
    //redux,
    //tailwind,
    //nodejs,
    //mongodb,
    git,
    //figma,
    //docker,
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
        title: "Web Application and Backend Development",
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
        title: "Artificial Intellignece Solutions",
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
        name: "C",
        icon: c,
    },
    {
        name: "Matlab",
        icon: matlab,
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
        name: "Scipy",
        icon: scipy,
    },
    {
        name: "Numpy",
        icon: numpy,
    },
    {
        name: "Pandas",
        icon: pandas,
    },
    {
        name: "Matplotlib",
        icon: matplotlib,
    },
    /*{
        name: "Plotly",
        icon: plotly,
    },*/
    {
        name: "Seaborn",
        icon: seaborn,
    },
    {
        name: "Scikit-learn",
        icon: sklearn,
    },
    {
        name: "PHP",
        icon: php,
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
            "Introduction to professional life and business dynamics",
            "Management of a product database (Oil)",
            "Modeling a forecasting and decision support system",
            "Communication and promotion work with department managers",
            "Writing the internship report",
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
        title: "Proffessional Master Of Science",
        company_name: "Epitech",
        icon: epitech,
        iconBg: "#E6DEDD",
        date: "2024 - 2027",
        points: [
            "Big Data Major",
            "Artificial Intelligence Minor",
            ],
    },
];

const projects = [
    {
        name: "Machine Learning Project",
        description:
            "Sales prediction for an electronic equipment sales chain",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "pandas",
                color: "green-text-gradient",
            },
            {
                name: "seaborn",
                color: "pink-text-gradient",
            },
            {
                name: "scikit-learn",
                color: "orange-text-gradient",
            },
            {
                name: "tkinter",
                color: "pink-text-gradient",
            },
        ],
        image: ml1,
        source_code_link: "https://github.com/GibrilKharfallah/Sales-prediction-for-an-electronic-equipment-sales-chain",
    },
    {
        name: "Machine Learning Project",
        description:
            "Energy consumption prediction for smart building",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "pandas",
                color: "green-text-gradient",
            },
            {
                name: "numpy",
                color: "blue-text-gradient",
            },
            {
                name: "seaborn",
                color: "pink-text-gradient",
            },
            {
                name: "scikit-learn",
                color: "orange-text-gradient",
            },
            {
                name: "xgboost",
                color: "green-text-gradient",
            },
        ],
        image: ml2,
        source_code_link: "https://github.com/GibrilKharfallah/Energy-consumption-prediction-by-using-machine-learning-for-smart-building",
    },
    {
        name: "Big Data Project",
        description:
            "Design of a Data Warehouse for an e-commerce platform",
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
        source_code_link: "https://github.com/GibrilKharfallah/Design-of-a-Data-Warehouse-for-an-e-commerce-platform",
    },
    {
        name: "Deep Learning Project",
        description:
            "Creation of a perceptron for image classification",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "scikit-learn",
                color: "green-text-gradient",
            },
            {
                name: "numpy",
                color: "blue-text-gradient",
            },
            {
                name: "plotly",
                color: "pink-text-gradient",
            },
            {
                name: "matplotlib",
                color: "orange-text-gradient",
            },
        ],
        image: catDog,
        source_code_link: "https://github.com/GibrilKharfallah/Creation-of-a-perceptron-for-image-classification",
    },
    {
        name: "Web Development Project",
        description:
            "Development of a job board platform to connect job seekers with employers, for enhanced job matching and user engagement.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "nodejs",
                color: "green-text-gradient",
            },
            {
                name: "sql",
                color: "blue-text-gradient",
            },
            {
                name: "sequelize",
                color: "orange-text-gradient",
            },
            {
                name: "expressjs",
                color: "pink-text-gradient",
            },
        ],
        image: jobBoard,
        source_code_link: "https://github.com/GibrilKharfallah/Job-Board",
    },
];

export { services, technologies, experiences, projects };