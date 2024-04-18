import email from './public/email.svg';
import telegram from './public/icons8-telegtam.svg';
import phone from './public/icons-phone.svg'; //таким способом можно добавлять иконки самостоятельно, главно указать путь и имя файла.
// import photo from './photo/photo.jpeg'; //если захочешь поменять фото, то нужно будет загрузить ее в папку photo и переименовать фото на имя "photo.jpeg". Либо можно поменять название в импорте

// Здесь предоставлен объект, который используется для отобращения контента в приложении.
// Все данные в объекте передаются в контекст, поэтому если будут изминения в данном файле, изменится и контент в проложении.
// Объект содержит 4 секции: контакты с фото, краткая информация, место работы, образование.
// В случае если запутаешься в свойствах, то скопируй данные со страницы и сделай поиск по файлу, и найдешь свой 



const listContentsRu = {
  photo: '',
  name: 'Анашкин Владислав Вадимович',
  //контакты в разных messengers
  asideInfo: [
    {
      svg: email,
      link: 'mailto:vladis62@yandex.ru',
      alt: 'email',//прописывать обязательно, выступает в качестве id
      text: 'vladis62@yandex.ru'
    },
    {
      svg: telegram,
      link: 'https://t.me/vlad_os62',
      alt: 'telegram',//прописывать обязательно, выступает в качестве id
      text: '@vlad_os62'
    },
    {
      svg: phone, //если ты добавил новый контакт, то создай ниже похожий объект и в под данным клучем передавай иконку.
      link: 'tel:+79105700772', //если у тебя нет ссылки, то передавай пустую строку ''
      alt: 'phone', //прописывать обязательно, выступает в качестве id
      text: '+7 (910) 570-07-72'
    },
  ],
  briefInformation: {
    skills: ['Hadoop', 'Grafana', 'Camunda', 'Docker', 'K8s', 'BPMN', 'Redis', 'Clickhouse', 'PostgreSQL', 'Kotlin', 'Python', 'SQL', 'CI/CD', 'Gradle', 'MongoDB', 'Spring Framework', 'Kafka'],// Список скиллов
    aboutMeText: 'Я увлечен программированием. Непрерывно обучаюсь новому, изучаю новые технологии, слушаю IT подкасты (Radio-T, подлодка). Мне нравится создавать действительно полезные продукты, выстраивая согласованную архитектуру в соответствии с лучшими практиками.',// About me текст к отображения
    languages: [
      { id: 'Russian', text: 'Russian | Native' },
      { id: 'English', text: 'English | Flue' },
    ],
  },
  workExperience: [
    {
      nameСompany: 'Tinkoff Bank',
      link: 'https://www.tinkoff.ru/',
      experience: '2020-н.в',
      jobTitle: 'Software Engineer',
      tasks: [
        'Спроектировал и разработал BPMN процесс скоринга авто;',
        'Спроектировал и разработал BPMN процесс обработки входящей корреспонденции. Сократил сроки обработки документов и улучшил качество сопровождения продукта;',
        'Реализовал мониторинг и оповещения с использованием Micrometer, Grafana, Prometheus, Slack;',
        'Разработал внутреннюю систему мониторинга и управления приложениями;',
        'Cпроектировал и разработал несколько внутренних интерфейсных приложений на Angular;',
        'Реализовал безопасность приложений за счет разработки контрактов OAuth 2.0 с использование KeyCloak и Spring security;',
        'Спроектировал и разработал систему аудита и отслеживания приложений для отслеживания каждого шага бизнес-процессов;',
        'Разработал высоконагруженные приложения (15-20k RPS) для обработки данных аудита и трассировки и сохранения их в ClickHouse в режиме реального времени;',
        'Разработал высоконагруженный внутренний сервис для мокирования пользовательских rest/soap запросов;',
        'Участвовал в разработке и проектировании внутренней AB платформы, включая создание архитектуры, разработку функционала и тестирования;',
        'Разрабатывал высоконагруженный сервис интеграций с биржами spb/moex;',
        'Разрабатывал сервис начисления промокодов в инвестициях, включая создание архитектуры, разработку функционала и тестирования;',
        'Обучал студентов на внутренних курсах kotlin/java;',
        'Был ментором у студентов и стажеров.',
      ],
      usedStack: {
        programming: ['Kotlin (spring, camunda, junit, coroutines)', 'Docker', 'Kafka', 'SQL', 'TypeScript(angular)'],
        database: ['PostgreSQL', 'ClickHouse', 'Oracle', 'Redis', 'MongoDb'],
        devOps: ['Docker', 'Kubernetes', 'Gitlab', 'TeamCity'],
        technologies: ['Grafana', 'Prometheus', 'Kafka', 'IBM MQ', 'Keycloak', 'Sonarqube', 'Testcontainers', 'REST'],
      },
    },//чтобы добавить организацию скопируй объект выше и создай новый через запятую. После меняешь значения (ключи не трогать!). Если захочешь что-то еще добавить, то пиши мне.
    {
      nameСompany: 'ПАО "завод "Красное знамя""',
      link: 'https://www.kznamya.ru/#0',
      experience: '2020-2019',
      jobTitle: 'Engineer',
      tasks: [
        'Разработка ПО для desktop приложений в кроссплатформенной среде разработки QT на языке C++',
        'Разработка ПО для микроконтроллеров на языке C.'
      ],
      usedStack: '',
    },//чтобы добавить организацию скопируй объект выше и создай новый через запятую. После меняешь значения (ключи не трогать!). Если захочешь что-то еще добавить, то пиши мне.
  ],
  education: {
    publicEducations: [
      {
        institution: 'Рязанский государственный радиотехнический университет, Рязань',
        industry: 'Электроники, Промышленная электроника',
        experience: '2009-2014',
      }
    ],
    courses: [
      {
        institution: 'Яндекс Практикум',
        link: '',
        topic: 'Алгоритмы и структуры данных',
        experience: '2024',
      },
      {
        institution: 'OTUS',
        link: 'https://otus.ru/certificate/d3d08f76f30a4d48a1b2dcaa5cf40729/',
        topic: 'Нереляционные базы данных',
        experience: '2023',
        сertificate: 'Сертификат',
      }
    ]
  },
}

const listContentsEn = {
  photo: '',
  name: 'Vladislav Vadimovich Anashkin',
  //контакты в разных messengers
  asideInfo: [
    {
      svg: email,
      link: 'mailto:vladis62@yandex.ru',
      alt: 'email',//прописывать обязательно, выступает в качестве id
      text: 'vladis62@yandex.ru'
    },
    {
      svg: telegram,
      link: 'https://t.me/vlad_os62',
      alt: 'telegram',//прописывать обязательно, выступает в качестве id
      text: '@vlad_os62'
    },
    {
      svg: phone, //если ты добавил новый контакт, то создай ниже похожий объект и в под данным клучем передавай иконку.
      link: 'tel:+79105700772', //если у тебя нет ссылки, то передавай пустую строку ''
      alt: 'phone', //прописывать обязательно, выступает в качестве id
      text: '+7 (910) 570-07-72'
    },
  ],
  briefInformation: {
    skills: ['Hadoop', 'Grafana', 'Camunda', 'Docker', 'K8s', 'BPMN', 'Redis', 'Clickhouse', 'PostgreSQL', 'Kotlin', 'Python', 'SQL', 'CI/CD', 'Gradle', 'MongoDB', 'Spring Framework', 'Kafka'],// Список скиллов
    aboutMeText: "I'm passionate about programming. I am constantly learning new things, learning new technologies, listening to IT podcasts (Radio-T, submarine). I like to create really useful products by building a consistent architecture according to best practices.",// About me текст к отображения
    languages: [
      { id: 'Russian', text: 'Russian | Native' },
      { id: 'English', text: 'English | Flue' },
    ],
  },
  workExperience: [
    {
      nameСompany: 'Tinkoff Bank',
      link: 'https://www.tinkoff.ru/',
      experience: '2020-н.в',
      jobTitle: 'Software Engineer',
      tasks: [
        'Designed and developed the BPMN auto scoring process;',
        'Designed and developed the BPMN incoming mail processing process. Reduced the processing time of documents and improved the quality of product support;',
        'Implemented monitoring and alerts using Micrometer, Grafana, Prometheus, Slack;',
        'Developed an internal application monitoring and management system;',
        'Designed and developed several internal interface applications on Angular;',
        'Implemented application security through the development of OAuth 2.0 contracts using KeyCloak and Spring security;',
        'Designed and developed an application audit and tracking system to track every step of business processes;',
        'Developed high-load applications (15-20k RPS) for processing audit and tracing data and storing them in ClickHouse in real time;',
        'Developed a highly loaded internal service for blocking user rest/soap requests;',
        'Participated in the development and design of the internal AB platform, including the creation of architecture, functional development and testing;',
        'Developed a highly loaded integration service with spb/moex exchanges;',
        'Developed a service for calculating promo codes in investments, including the creation of architecture, functional development and testing;',
        'Taught students in internal kotlin/java courses;',
        'I was a mentor to students and interns.',
      ],
      usedStack: {
        programming: ['Kotlin (spring, camunda, junit, coroutines)', 'Docker', 'Kafka', 'SQL', 'TypeScript(angular)'],
        database: ['PostgreSQL', 'ClickHouse', 'Oracle', 'Redis', 'MongoDb'],
        devOps: ['Docker', 'Kubernetes', 'Gitlab', 'TeamCity'],
        technologies: ['Grafana', 'Prometheus', 'Kafka', 'IBM MQ', 'Keycloak', 'Sonarqube', 'Testcontainers', 'REST'],
      },
    },//чтобы добавить организацию скопируй объект выше и создай новый через запятую. После меняешь значения (ключи не трогать!). Если захочешь что-то еще добавить, то пиши мне.
    {
      nameСompany: 'PJSC "Krasnoe Znamya Plant"',
      link: 'https://www.kznamya.ru/#0',
      experience: '2020-2019',
      jobTitle: 'Engineer',
      tasks: [
        'Software development for desktop applications in the cross-platform QT development environment in C++;',
        'Software development for microcontrollers in C language.'
      ],
      usedStack: '',
    },//чтобы добавить организацию скопируй объект выше и создай новый через запятую. После меняешь значения (ключи не трогать!). Если захочешь что-то еще добавить, то пиши мне.
  ],
  education: {
    publicEducations: [
      {
        institution: 'Ryazan State Radio Engineering University, Ryazan',
        industry: 'Electronics, Industrial electronics',
        experience: '2009-2014',
      }
    ],
    courses: [
      {
        institution: 'Yandex Practicum',
        link: '',
        topic: 'Algorithms and data structures',
        experience: '2024',
      },
      {
        institution: 'OTUS',
        link: 'https://otus.ru/certificate/d3d08f76f30a4d48a1b2dcaa5cf40729/',
        topic: 'Non-relational databases',
        experience: '2023',
        сertificate: 'Certificate',
      }
    ]
  },
}

export { listContentsRu, listContentsEn };