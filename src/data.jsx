import Office from './assets/office.png'
import yahoo from './assets/yahoo.png'
import rackspace from './assets/rackspace.png'
import outlook from './assets/outlook.png'
import AOL from './assets/AOL.png'
import otherMail from './assets/other-mail.png'

export const loginBoxData = [
  {
    name: 'Office365',
    bgColor: 'bg-[red]',
    img: Office,
    page: '/microsoft/office356',
  },
  {
    name: 'Outlook',
    bgColor: 'bg-[#0073C8]',
    img: outlook,
    page: '/microsoft/outlook',
  },
  {
    name: 'Rackspace',
    bgColor: 'bg-[black]',
    img: rackspace,
    page: '/rackspace',
  },
  {
    name: 'Aol',
    bgColor: 'bg-[#31459B]',
    img: AOL,
    page: '/yahoo/AOL',
  },
  {
    name: 'Yahoo',
    bgColor: 'bg-[#5F0F68]',
    img: yahoo,
    page: '/yahoo/yahoo',
  },
  {
    name: 'Other mail',
    bgColor: 'bg-[#0B5BD3]',
    img: otherMail,
    page: '/other-mail',
  },
]
