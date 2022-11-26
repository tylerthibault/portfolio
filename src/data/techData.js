const languages = [
    {
        title: "NodeJS",
        description: "As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications."
    },
    {
        title: "Python",
        description: "Python is powerful... and fast; plays well with others; runs everywhere; is friendly & easy to learn; is Open."
    },
    {
        title: "C#",
        description: "C# is a modern, innovative, open-source, cross-platform object-oriented programming language and one of the top 5 programming languages on GitHub."
    },
    {
        title: "SQL",
        description: "SQL is a standard language for accessing and manipulating databases. SQL stands for Structured Query Language."
    },
    {
        title: "HTML",
        description: "HTML stands for HyperText Markup Language. It is used to design web pages using a markup language. HTML is the combination of Hypertext and Markup language. Hypertext defines the link between web pages. A markup language is used to define the text document within the tag which defines the structure of web pages."
    },
    {
        title: "css",
        description: "CSS (Cascading Style Sheets) allows you to create great-looking web pages, but how does it work under the hood? This article explains what CSS is with a simple syntax example and also covers some key terms about the language."
    },
]

const frameworks = [
    {
        title: "Express",
        description: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy. Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love."
    },
    {
        title: "Flask",
        description: "Flask is a web application framework written in Python. It was developed by Armin Ronacher, who led a team of international Python enthusiasts called Poocco. Flask is based on the Werkzeg WSGI toolkit and the Jinja2 template engine.Both are Pocco projects. Flask is often referred to as a microframework. It is designed to keep the core of the application simple and scalable."
    },
    {
        title: "Jinja2",
        description: "jinja2 is a popular template engine for Python.A web template system combines a template with a specific data source to render a dynamic web page.This allows you to pass Python variables into HTML templates"
    },
    {
        title: "Jquery",
        description: "jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript."
    },
    {
        title: "Entity",
        description: "Entity Framework (EF) is an object-relational mapper that enables .NET developers to work with relational data using domain-specific objects. It eliminates the need for most of the data-access code that developers usually need to write."
    },
    {
        title: "ASP.Net",
        description: ".NET is a developer platform made up of tools, programming languages, and libraries for building many different types of applications. ASP.NET extends the .NET developer platform with tools and libraries specifically for building web apps."
    },
    {
        title: "Sequelize",
        description: "Sequelize is a modern TypeScript and Node.js ORM for Oracle, Postgres, MySQL, MariaDB, SQLite and SQL Server, and more. Featuring solid transaction support, relations, eager and lazy loading, read replication and more."
    },
    {
        title: "Bootstrap",
        description: "Build fast, responsive sites with Bootstrap Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins."
    },
    {
        title: "Tailwindcss",
        description: "Rapidly build modern websites without ever leaving your HTML. A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."
    },
    {
        title: "Materializecss",
        description: "A modern responsive front-end framework based on Material Design. Speeds up development, Materialize did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, Materialize refined animations and transitions to provide a smoother experience for developers. User Experience Focused. By utilizing elements and principles of Material Design, Materialize were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience. Easy to work with. Materialize have provided detailed documentation as well as specific code examples to help new users get started. Materialize are also always open to feedback and can answer any questions a user may have about Materialize."
    },
    {
        title: "Skeleton css",
        description: "You should use Skeleton if you're embarking on a smaller project or just don't feel like you need all the utility of larger frameworks. Skeleton only styles a handful of standard HTML elements and includes a grid, but that's often more than enough to get started. In fact, this site is built on Skeleton and has ~200 lines of custom CSS (half of which is the docking navigation)."
    },
]

const databases = [
    {
        title: "MySQL",
        description: "MySQL is the world's most popular open source database. Whether you are a fast growing web property, technology ISV or large enterprise, MySQL can cost-effectively help you deliver high performance, scalable database applications."
    },
    {
        title: "MongoDB",
        description: "MongoDB, also known as Mongo, is an open-source document database used in many modern web applications. It is classified as a NoSQL database because it does not rely on a traditional table-based relational database structure."
    },
    {
        title: "Firebase",
        description: "Firebase is a product of Google which helps developers to build, manage, and grow their apps easily. It helps developers to build their apps faster and in a more secure way. No programming is required on the firebase side which makes it easy to use its features more efficiently. It provides services to android, ios, web, and unity. It provides cloud storage. It uses NoSQL for the database for the storage of data."
    },
    {
        title: "Sqlite",
        description: "SQLite is an embedded, server-less relational database management system. It is an in-memory open-source library with zero configuration and does not require any installation. Also, it is very convenient as itU+2019s less than 500kb in size, which is significantly lesser than other database management systems."
    }
]

const tools = [
    {
        title: "AJAX",
        description: "The acronym of Ajax is Asynchronous JavaScript and XML. It can be defined as a path in which the user uses JavaScript to communicate with a web server to get a query generated response and to provide it on the webserver without the user leaving the current page."
    },
    {
        title: "MySQL Workbench",
        description: "MySQL Workbench is a graphical tool for working with MySQL. MySQL Workbench provides an easy to use interface for performing the many tasks involved when working with databases. It integrates SQL development, administration, database design, creation and maintenance into one visual integrated development environment."
    },
    {
        title: "Postman",
        description: "Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster."
    },
    {
        title: "VS Code",
        description: "Visual Studio Code, also commonly referred to as VS Code, is a source-code editor made by Microsoft with the Electron Framework, for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git."
    },
    {
        title: "AWS",
        description: "Amazon Web Services (AWS) is a subsidiary of Amazon that provides on-demand cloud computing platforms to individuals, companies and governments, on a paid subscription basis. The technology allows subscribers to have at their disposal a virtual cluster of computers, available all the time, through the Internet."
    },
    {
        title: "Github",
        description: "GitHub, Inc. , is an Internet hosting service for software development and version control using Git. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project. Headquartered in California, it has been a subsidiary of Microsoft since 2018."
    },
    {
        title: "Prisma",
        description: "Prisma unlocks a new level of developer experience when working with databases thanks to its intuitive data model, automated migrations, type-safety & auto-completion."
    }
]

export default {
    languages,
    frameworks,
    databases,
    tools
}