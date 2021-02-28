
const initialState = () => {
  const startState = {
    humanComponents: null,
    currentUser: null,
    company: {
       denomination: 'System Afrik Information and Technology',
      vision: 'Our vision is to excel in the field of international IT consulting. We are innovators, we create solutions \
              and products able to improve the quality of life and work of our customers and we do it by relying on the \
              best talents, which we cultivate and enhance the technical, creative and organizational skills. We firmly \
              believe that the road to success moves from the sharing of knowledge between the members of an organization \
              and the surrounding environment, in a process of continuous cultural exchange.',
      mission: 'From suppliers to technology partners: this is the direction in which we want to focus our efforts during \
              collaboration with customers. With this in mind, we want to work alongside them, accompanying them with increasing \
              professionalism, efficiency and attention to detail. Through a continuous training process, we want to allow our \
              employees and all those who turn to our company to turn every project into a success.',
      address: 'Via Darsena 81/A 44122 Ferrara(FE) Italy',
      email: 'sysaitechnology@gmail.com',
      phone_number: '+39 3298161568',
      ssn: '43862894345',
      capital: '€5000',
      description: 'We are a young and dynamic company that develops higher quality software. We provide our clients with reliable & \
                    intelligent customizable products in differnt domains of application.',
      content_1: 'We are innovators, we create solutions and products able to improve the quality of life and work of our customers \
                  and we do it by relying on the best talents, which we cultivate and enhance the technical, creative and organizational skills!',
      content_2: 'We are innovators, we create solutions and products able to improve the quality of life and work of our customers \
                  and we do it by relying on the best talents, which we cultivate and enhance the technical, creative and organizational skills!',
      facebook: 'https://www.facebook.com/wilfried.ndomo',
      linkedin: 'https://www.linkedin.com/in/wilfried-ndomo-kenfack-b44770161/',
      whatsapp: 'https://wa.me/00393427832705'
    },
    customers: [
      {
      denomination: 'Institut paul momo',
      description: 'We are innovators, we create solutions and products able to improve the quality of life and work of our customer',
      image_path: 'imp',
      link: 'http://www.unife.it/it'
      },
      {
      denomination: 'bk service',
      description: 'We are innovators, we create solutions and products able to improve the quality of life and work of our customer',
      image_path: 'bk',
      link: 'http://www.unife.it/it'
      }
    ],
    sponsors: [
      {
      denomination: 'Università di Ferrara',
      description: 'We are innovators, we create solutions and products able to improve the quality of life and work of our customer',
      image_path: 'unife',
      link: 'http://www.unife.it/it'
      },
      {
      denomination: 'Università di Ferrara',
      description: 'We are innovators, we create solutions and products able to improve the quality of life and work of our customer',
      image_path: 'unife',
      link: 'http://www.unife.it/it'
      },{
      denomination: 'Università di Ferrara',
      description: 'We are innovators, we create solutions and products able to improve the quality of life and work of our customer',
      image_path: 'unife',
      link: 'http://www.unife.it/it'
      },{
      denomination: 'Università di Ferrara',
      description: 'We are innovators, we create solutions and products able to improve the quality of life and work of our customer',
      image_path: 'unife',
      link: 'http://www.unife.it/it'
      },
    ],
    tecnologies: [
					{
						id: 1,
						name: 'Futur',
						icon: "fa fa-arrow-up",
						content: 'Artificial inteligent, Maching learning, ...'
					},
					{
						id: 2,
						name: 'Framework',
						icon: "fa fa-retweet",
						content: 'Ruby On Rails, Spring, Angular JS, Jquery, Bootstrap, ...'
					},
					{
						id: 3,
						name: 'Coding',
						icon: "fa fa-code",
						content: 'Ruby, HTML, CSS, JAVA, C, ...'
                    },
                    {
						id: 4,
						name: 'Database',
						icon: "fa fa-database",
						content: 'MySql, SQlite3, DB2, Oracle, SQL Server, ...'
                    },
                     {
						id: 5,
						name: 'Mobile appications',
						icon: "fa fa-mobile",
						content: ''
             },
            {
						id: 6,
						name: 'Web appications',
						icon: "fa fa-desktop",
						content: ''
           },
            {
						id: 7,
						name: 'Projects management',
						icon: "fa fa-users",
						content: ''
          },
           {
						id: 8,
						name: 'Customized software',
						icon: "fa fa-microchip",
						content: ''
					}
		],
    products: null,

  }

  return startState
}

export default function () {



  // return {
  //   //
  // }
}
