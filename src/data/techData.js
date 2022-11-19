

const languages = [
    {
        title: 'NodeJS',
        description: 'As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.'
    },
    {
        title: 'Python',
        description: 'Python is powerful... and fast; plays well with others; runs everywhere; is friendly & easy to learn; is Open.'
    },
    {
        title: 'C#',
        description: 'C# is a modern, innovative, open-source, cross-platform object-oriented programming language and one of the top 5 programming languages on GitHub.'
    },
    {
        title: 'SQL',
        description: 'SQL is a standard language for accessing and manipulating databases. SQL stands for Structured Query Language.'
    },
    {
        title: 'HTML',
        description: 'HTML stands for HyperText Markup Language. It is used to design web pages using a markup language. HTML is the combination of Hypertext and Markup language. Hypertext defines the link between web pages. A markup language is used to define the text document within the tag which defines the structure of web pages.'
    },
    {
        title: 'css',
        description: 'CSS (Cascading Style Sheets) allows you to create great-looking web pages, but how does it work under the hood? This article explains what CSS is with a simple syntax example and also covers some key terms about the language.'
    },
]

const frameworks = [
    {
        title: 'Express',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui maxime veritatis ducimus deleniti. Dolor enim voluptates ipsam earum quasi ab possimus, impedit quae facilis modi quo aut qui dolorem reprehenderit commodi est, pariatur maxime dignissimos. Incidunt voluptates odio assumenda illum, recusandae qui sunt expedita molestias facere facilis ullam mollitia!'
    },
    {
        title: 'Flask',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui maxime veritatis ducimus deleniti. Dolor enim voluptates ipsam earum quasi ab possimus, impedit quae facilis modi quo aut qui dolorem reprehenderit commodi est, pariatur maxime dignissimos. Incidunt voluptates odio assumenda illum, recusandae qui sunt expedita molestias facere facilis ullam mollitia!'
    },
    {
        title: 'Jinja2',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui maxime veritatis ducimus deleniti. Dolor enim voluptates ipsam earum quasi ab possimus, impedit quae facilis modi quo aut qui dolorem reprehenderit commodi est, pariatur maxime dignissimos. Incidunt voluptates odio assumenda illum, recusandae qui sunt expedita molestias facere facilis ullam mollitia!'
    },
    {
        title: 'Jquery',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui maxime veritatis ducimus deleniti. Dolor enim voluptates ipsam earum quasi ab possimus, impedit quae facilis modi quo aut qui dolorem reprehenderit commodi est, pariatur maxime dignissimos. Incidunt voluptates odio assumenda illum, recusandae qui sunt expedita molestias facere facilis ullam mollitia!'
    },
    {
        title: 'Entity',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui maxime veritatis ducimus deleniti. Dolor enim voluptates ipsam earum quasi ab possimus, impedit quae facilis modi quo aut qui dolorem reprehenderit commodi est, pariatur maxime dignissimos. Incidunt voluptates odio assumenda illum, recusandae qui sunt expedita molestias facere facilis ullam mollitia!'
    },
    {
        title: 'ASP.Net',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui maxime veritatis ducimus deleniti. Dolor enim voluptates ipsam earum quasi ab possimus, impedit quae facilis modi quo aut qui dolorem reprehenderit commodi est, pariatur maxime dignissimos. Incidunt voluptates odio assumenda illum, recusandae qui sunt expedita molestias facere facilis ullam mollitia!'
    },
    {
        title: 'Sequelize',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui maxime veritatis ducimus deleniti. Dolor enim voluptates ipsam earum quasi ab possimus, impedit quae facilis modi quo aut qui dolorem reprehenderit commodi est, pariatur maxime dignissimos. Incidunt voluptates odio assumenda illum, recusandae qui sunt expedita molestias facere facilis ullam mollitia!'
    },
    {
        title: 'Bootstrap',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui maxime veritatis ducimus deleniti. Dolor enim voluptates ipsam earum quasi ab possimus, impedit quae facilis modi quo aut qui dolorem reprehenderit commodi est, pariatur maxime dignissimos. Incidunt voluptates odio assumenda illum, recusandae qui sunt expedita molestias facere facilis ullam mollitia!'
    },
    {
        title: 'Tailwindcss',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui maxime veritatis ducimus deleniti. Dolor enim voluptates ipsam earum quasi ab possimus, impedit quae facilis modi quo aut qui dolorem reprehenderit commodi est, pariatur maxime dignissimos. Incidunt voluptates odio assumenda illum, recusandae qui sunt expedita molestias facere facilis ullam mollitia!'
    },
    {
        title: 'Materializecss',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui maxime veritatis ducimus deleniti. Dolor enim voluptates ipsam earum quasi ab possimus, impedit quae facilis modi quo aut qui dolorem reprehenderit commodi est, pariatur maxime dignissimos. Incidunt voluptates odio assumenda illum, recusandae qui sunt expedita molestias facere facilis ullam mollitia!'
    },
    {
        title: 'Skeleton css',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui maxime veritatis ducimus deleniti. Dolor enim voluptates ipsam earum quasi ab possimus, impedit quae facilis modi quo aut qui dolorem reprehenderit commodi est, pariatur maxime dignissimos. Incidunt voluptates odio assumenda illum, recusandae qui sunt expedita molestias facere facilis ullam mollitia!'
    },
]

const databases = [
    {
        title: 'MySQL',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui maxime veritatis ducimus deleniti. Dolor enim voluptates ipsam earum quasi ab possimus, impedit quae facilis modi quo aut qui dolorem reprehenderit commodi est, pariatur maxime dignissimos. Incidunt voluptates odio assumenda illum, recusandae qui sunt expedita molestias facere facilis ullam mollitia!'
    },
    {
        title: 'MongoDB',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui maxime veritatis ducimus deleniti. Dolor enim voluptates ipsam earum quasi ab possimus, impedit quae facilis modi quo aut qui dolorem reprehenderit commodi est, pariatur maxime dignissimos. Incidunt voluptates odio assumenda illum, recusandae qui sunt expedita molestias facere facilis ullam mollitia!'
    },
    {
        title: 'Firebase',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui maxime veritatis ducimus deleniti. Dolor enim voluptates ipsam earum quasi ab possimus, impedit quae facilis modi quo aut qui dolorem reprehenderit commodi est, pariatur maxime dignissimos. Incidunt voluptates odio assumenda illum, recusandae qui sunt expedita molestias facere facilis ullam mollitia!'
    },
    {
        title: 'Sqlite',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui maxime veritatis ducimus deleniti. Dolor enim voluptates ipsam earum quasi ab possimus, impedit quae facilis modi quo aut qui dolorem reprehenderit commodi est, pariatur maxime dignissimos. Incidunt voluptates odio assumenda illum, recusandae qui sunt expedita molestias facere facilis ullam mollitia!'
    }
]

const tools = [
    {
        title: 'AJAX',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui maxime veritatis ducimus deleniti. Dolor enim voluptates ipsam earum quasi ab possimus, impedit quae facilis modi quo aut qui dolorem reprehenderit commodi est, pariatur maxime dignissimos. Incidunt voluptates odio assumenda illum, recusandae qui sunt expedita molestias facere facilis ullam mollitia!'
    },
    {
        title: 'MySQL Workbench',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui maxime veritatis ducimus deleniti. Dolor enim voluptates ipsam earum quasi ab possimus, impedit quae facilis modi quo aut qui dolorem reprehenderit commodi est, pariatur maxime dignissimos. Incidunt voluptates odio assumenda illum, recusandae qui sunt expedita molestias facere facilis ullam mollitia!'
    },
    {
        title: 'Postman',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui maxime veritatis ducimus deleniti. Dolor enim voluptates ipsam earum quasi ab possimus, impedit quae facilis modi quo aut qui dolorem reprehenderit commodi est, pariatur maxime dignissimos. Incidunt voluptates odio assumenda illum, recusandae qui sunt expedita molestias facere facilis ullam mollitia!'
    },
    {
        title: 'VS Code',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui maxime veritatis ducimus deleniti. Dolor enim voluptates ipsam earum quasi ab possimus, impedit quae facilis modi quo aut qui dolorem reprehenderit commodi est, pariatur maxime dignissimos. Incidunt voluptates odio assumenda illum, recusandae qui sunt expedita molestias facere facilis ullam mollitia!'
    },
    {
        title: 'Amazon Web Services (AWS)',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui maxime veritatis ducimus deleniti. Dolor enim voluptates ipsam earum quasi ab possimus, impedit quae facilis modi quo aut qui dolorem reprehenderit commodi est, pariatur maxime dignissimos. Incidunt voluptates odio assumenda illum, recusandae qui sunt expedita molestias facere facilis ullam mollitia!'
    },
    {
        title: 'Github',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui maxime veritatis ducimus deleniti. Dolor enim voluptates ipsam earum quasi ab possimus, impedit quae facilis modi quo aut qui dolorem reprehenderit commodi est, pariatur maxime dignissimos. Incidunt voluptates odio assumenda illum, recusandae qui sunt expedita molestias facere facilis ullam mollitia!'
    },
    {
        title: 'Prisma',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui maxime veritatis ducimus deleniti. Dolor enim voluptates ipsam earum quasi ab possimus, impedit quae facilis modi quo aut qui dolorem reprehenderit commodi est, pariatur maxime dignissimos. Incidunt voluptates odio assumenda illum, recusandae qui sunt expedita molestias facere facilis ullam mollitia!'
    }
]

export default {
    languages,
    frameworks,
    databases,
    tools
}