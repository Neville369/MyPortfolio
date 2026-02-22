import humblemindImage from "../assets/jpeg/humblemind.png";
import unileverImage from "../assets/jpeg/unilever.jpg";
import inventoryManagementFoundationsImage from "../assets/jpeg/Inventory Management Foundations.jpeg";
import dataAnalysisInExcelImage from "../assets/jpeg/Data Analysis in Excel.jpg";
import statisticsFoundationsImage from "../assets/jpeg/Statistics Foundations.jpeg";
import excelStatisticsEssentialTraining1Image from "../assets/jpeg/Excel_Statistics_Essential_Training_1.jpg";
import advancedSqlProjectImage from "../assets/jpeg/Advanced SQL project.jpeg";
import sqlServer2022AdministrationImage from "../assets/jpeg/SQL_Server_2022_Administration.jpg";
import etlAndEltInPostgresqlImage from "../assets/jpeg/ETL AND ELT IN POSTGRESQL.jpeg";
import etlInPythonAndSqlImage from "../assets/jpeg/etl_python_sql.jpg";
import completeGuideToSqlForDataEngineeringImage from "../assets/jpeg/complete_guide_sql_data_engineering.jpg";
import handsOnIntroductionDataEngineeringImage from "../assets/jpeg/hands_on_introduction_data_engineering.jpg";
import databaseDesignFundamentalsImage from "../assets/jpeg/Database_Design_Fundamentals.jpg";
import introductionToDataWarehousesImage from "../assets/jpeg/data_warehouse.jpg";
import learningBitcoinAndOtherCryptocurrenciesImage from "../assets/jpeg/bitcoin_crypto.jpg";
import algorithmicTradingAndStocksEssentialTrainingImage from "../assets/jpeg/algorithmic_trading.jpg";
import blockchainBeyondTheBasicsImage from "../assets/jpeg/blockchain_essentials.jpg";
import blockchainBasicsImage from "../assets/jpeg/blockchain_foundations.jpg";

function Certificate() {
  const certs = [
    {
      title: "SQL Internship: HUMBLEMINDS LABS PRIVATE LIMITED",
      image: humblemindImage,
      desc: "I strengthened my SQL skills by writing advanced queries to explore and analyze the dataset. This included using aggregate functions, joins, subqueries, and window functions to answer key business questions. Through these tasks, I learned to organize, summarize, and visualize large datasets effectively, which is crucial for making data-driven decisions.",
      link: "https://www.linkedin.com/learning/certificates/1a6b6c614d5f8f4363c38e39ed7402a2c24ec5f735068441af4805fe337baa2e",
    },
    {
      title: "Basics of Business Model Canvas: UNILEVER",
      image: unileverImage,
      desc: "Learned the basics of the Business Model Canvas concept, a strategic management tool used to visually outline and analyze key components of a business. I gained foundational knowledge in entrepreneurship and business planning, including understanding value propositions, customer segments, revenue streams, cost structures, and key partnerships.",
      link: "https://drive.google.com/file/d/1PhngBshRjR5QMyNWstJj0KboBmIsC3Zf/view",
    },
    {
      title: "Inventory Management Foundations",
      image: inventoryManagementFoundationsImage,
      desc: "I learned how effective inventory management drives business success. I explored types of inventory, hidden costs, reasons for holding inventory, and how to balance overstocking vs. shortages. I was introduced to control systems, tools, and strategies for analyzing and managing inventory effectively to optimize resources and reduce costs.",
      link: "https://www.linkedin.com/learning/certificates/941554030e538b0b222456a4c468e9b7ab25d2304f9eb9ca60f831763f5b7cc8?trk=share_certificate",
    },
    {
      title: "Data Analysis in Excel",
      image: dataAnalysisInExcelImage,
      desc: "I strengthened my skills for analyzing datasets in Excel and using practical techniques to interpret results. This supports better reporting and data-driven decision-making across different contexts.",
      link: "https://app.dataquest.io/view_cert/MUY3WXO1W1I436VIXT7Q",
    },
    {
      title: "Statistics Foundations",
      image: statisticsFoundationsImage,
      desc: "I gained a deeper understanding of how statistics and probability support decision-making, predictions, and analyzing outcomes. I learned permutations, combinations, percentiles, probability trees, Bayes’ Theorem, and binomial probabilities—plus practical skills to interpret data and apply statistical theory across real-world contexts.",
      link: "https://www.linkedin.com/learning/certificates/87ba38f9d92ae92a24b556757e727c56d46673e1832990db8fd94629b482798a?trk=share_certificate",
    },
    {
      title: "Excel Statistics Essential Training: 1",
      image: excelStatisticsEssentialTraining1Image,
      desc: "Developed practical statistical analysis skills using Excel, including descriptive statistics, data visualization, variability measures, probability concepts, distributions, and interpreting datasets through histograms, normal curves, and analytical tools for data-driven decision making.",
      link: "https://www.linkedin.com/learning/certificates/05fc9531a3c59c736a02fe276f5cebc6008da4af780fa0d072baec3b788f9976?trk=share_certificate",
    },
    {
      title: "Advanced SQL Project: Design and Manage a Database",
      image: advancedSqlProjectImage,
      desc: "I learned how to design, implement, and optimize databases using SQL and ETL processes. Review the nuances of database needs and planning, and then conceptualize a music database, identify requirements, and create initial conceptual models. Explore normalization techniques, designing data pipelines, and applying advanced error handling strategies. Practice writing a range of SQL queries from basic to complex, and optimizing these queries for performance and efficiency.",
      link: "https://www.linkedin.com/learning/certificates/1a6b6c614d5f8f4363c38e39ed7402a2c24ec5f735068441af4805fe337baa2e",
    },
    {
      title: "SQL Server 2022 Administration",
      image: sqlServer2022AdministrationImage,
      desc: "This course strengthened my hands-on skills with SQL Server 2022, covering database creation, table design, T-SQL querying, joins, views, indexes, stored procedures, backups, security, and performance optimization, while building practical experience managing databases across local, cloud, and Docker environments.",
      link: "https://www.linkedin.com/learning/certificates/ec0edeef18cffc8210242a6b8cd94cd392826ec2e15b3994503f1316d3bde21b?trk=share_certificate",
    },

    {
      title: "ETL and ELT in PostgreSQL",
      image: etlAndEltInPostgresqlImage,
      desc: "I learned about the fundamental processes of ETL (Extract, Transform, Load) and ELT (Extract, Load, Transform), which are essential for working with data effectively. The course covered scenarios where data needs to be transferred or transformed for usability, security/compliance, insights, calculations, and translations—equipping me to manage data workflows efficiently.",
      link: "https://www.linkedin.com/learning/certificates/c790151deae98ab42f38dedc31e9176b051a2eb8e0559450ddb516fe9a64b368",
    },
    {
      title: "ETL in Python and SQL",
      image: etlInPythonAndSqlImage,
      desc: "Learned how to design and automate ETL pipelines using Python, pandas, and SQL, including data extraction, cleaning, transformation, validation, loading into relational databases, and scheduling workflows with Airflow for scalable data engineering processes.",
      link: "https://www.linkedin.com/learning/certificates/5f704a7487b23cc868bfcf66faa9e0f886ad959e0853c8e8c949f8450058ecf2?trk=share_certificate",
    },
    {
      title:
        "Complete Guide to SQL for Data Engineering: from Beginner to Advanced",
      image: completeGuideToSqlForDataEngineeringImage,
      desc: "Built a strong SQL foundation for data engineering using PostgreSQL, covering data querying, joins, aggregations, analytical functions, views, stored procedures, indexing, performance tuning, database security, and ETL concepts, applied through a real-world insurance claims analysis project in a cloud-based Codespaces environment.",
      link: "https://www.linkedin.com/learning/certificates/da28490950b4cb91e21c5fcaad8b3054bf4d41dc17337937d1f871da54b940ca?trk=share_certificate",
    },
    {
      title: "Hands-On Introduction: Data Engineering",
      image: handsOnIntroductionDataEngineeringImage,
      desc: "Gained practical experience building modern data pipelines using Apache Airflow, including DAG orchestration, ETL workflow design, task dependencies, scheduling, and automating real-world data engineering processes within a cloud-based development environment.",
      link: "https://www.linkedin.com/learning/certificates/5ac1f2a9090d1b43dbefacabdad537be12b4ab7ad6599b15bee5099853ef2e1f?trk=share_certificate",
    },
    {
      title: "Database Design Fundamentals",
      image: databaseDesignFundamentalsImage,
      desc: "This course strengthened my foundation in relational database design, covering schemas, ER diagrams, normalization, keys and relationships, physical database structure, and AI-ready data architecture, culminating in a hands-on project where I designed a scalable database using industry best practices.",
      link: "https://www.linkedin.com/learning/certificates/a5ebfb878891dd0ea2c4f3d3fd2ee7627ff5e8656188595e46fa2655d7cc5fdc?trk=share_certificate",
    },
    {
      title: "Introduction to Data Warehouses",
      image: introductionToDataWarehousesImage,
      desc: "Learned the fundamentals of data warehousing, including dimensional modeling, star and snowflake schemas, ETL workflows, and building analytical data structures using SQL Server—along with understanding modern cloud data warehouse architectures.",
      link: "https://www.linkedin.com/learning/certificates/96ed37352160442553a47c2b575a988e9f4563e08ae3cd3719477a66fe7e1b68?trk=share_certificate",
    },
    {
      title: "Learning Bitcoin and Other Cryptocurrencies (2018)",
      image: learningBitcoinAndOtherCryptocurrenciesImage,
      desc: "Learned the fundamentals of Bitcoin and cryptocurrencies, including how blockchain works, wallets and transactions, security best practices, mining concepts, and the role of platforms like Ethereum and Ripple within the broader digital asset ecosystem.",
      link: "https://www.linkedin.com/learning/certificates/96559a404b1ab761dc6ae0d92d8c8cc499c40e8eb0536114bf7a52b3d3695dd5?trk=share_certificate%27%27You know School Pass 10 now. Move to spag and thugs don't give",
    },
    {
      title: "Algorithmic Trading and Stocks Essential Training (2018)",
      image: algorithmicTradingAndStocksEssentialTrainingImage,
      desc: "Learned the fundamentals of securities markets and algorithmic trading, including stock market concepts, financial data analytics, regression-based predictions, quantitative strategies, and building, testing, and applying trading algorithms using data-driven decision techniques.",
      link: "https://www.linkedin.com/learning/certificates/f21f75aa16486cf226ba96e13f606614168f0f0fbd893304ee5a48308f4fe7e2?trk=share_certificate",
    },
    {
      title: "Blockchain: Beyond the Basics (2017)",
      image: blockchainBeyondTheBasicsImage,
      desc: "Learned core blockchain concepts including cryptographic keys, hashing, mining, distributed ledgers, smart contracts, and real-world applications across finance and identity systems—along with understanding risks and implementation considerations in decentralized technologies.",
      link: "https://www.linkedin.com/learning/certificates/817ab4d2ef0c58410dfe03157dd500919dc587091ff282891592ce92aadedbf7?trk=share_certificate",
    },
    {
      title: "Blockchain Basics (2017)",
      image: blockchainBasicsImage,
      desc: "Explored the fundamentals of blockchain technology, including decentralized trust models, how blockchain emerged from Bitcoin, real-world applications, transaction innovation, and the challenges and risks shaping future adoption of distributed ledger systems.",
      link: "https://www.linkedin.com/learning/certificates/ec082ed9426c48a5b3fe8916c4eaa70f89497ebd42baebdb0ef5419503843261?trk=share_certificate",
    },
  ];
  return (
    <section id="certificates" className="w-full bg-[#08162c] text-white py-20">
      <div className="px-[50px]">
        {/* Heading */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Certificates</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            I have completed 20+ professional certifications spanning data
            engineering, database management, SQL optimization, ETL pipelines,
            business fundamentals, and emerging technologies like blockchain and
            cryptocurrencies. My expertise includes advanced SQL and PostgreSQL,
            database design and administration, statistical analysis, Excel data
            analytics, and orchestrating complex data workflows with Apache
            Airflow. I've also built knowledge in blockchain technology,
            algorithmic trading, and business strategy through recognized
            programs from LinkedIn Learning, Dataquest, and industry leaders
            like Unilever.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-10">
          {certs.map((c) => (
            <div
              key={c.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8"
            >
              {/* Image */}
              <div className="rounded-xl overflow-hidden border border-white/10 bg-black/20 p-3">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="w-full max-h-100 object-contain mx-auto transition-transform duration-300 hover:scale-[1.32]"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-2xl font-semibold">{c.title}</h3>
                <p className="mt-4 text-gray-300 leading-relaxed">{c.desc}</p>

                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex mt-7 items-center justify-center rounded-md bg-blue-500 hover:bg-blue-600 px-7 py-3 font-semibold transition"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificate;
