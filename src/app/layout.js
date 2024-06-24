import { DataProvider } from './contexts/DataContext';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/global.sass'

export default function RootLayout({ children }) {
  const data = {
    services: [
      {
        title: "服務項目一",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis optio consequuntur itaque quos ducimus. Quis est modi, id aliquid ducimus aspernatur doloribus deserunt voluptatum qui, natus, officiis excepturi illo debitis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis optio consequuntur itaque quos ducimus. Quis est modi, id aliquid ducimus aspernatur doloribus deserunt voluptatum qui, natus, officiis excepturi illo debitis.",
        iconUrl: "/customer-support.png" 
      },
      {
        title: "服務項目二",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis optio consequuntur itaque quos ducimus. Quis est modi, id aliquid ducimus aspernatur doloribus deserunt",
        iconUrl: "/support.png" 
      },
      {
        title: "服務項目三",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis optio consequuntur itaque quos ducimus. Quis est modi, id ",
        iconUrl: "/technical-support.png" 
      },
      {
        title: "服務項目四",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis optio consequuntur itaque quos ducimus. Quis est modi, id ",
        iconUrl: "/technical-support.png" 
      },
    ],
    products: ["產品項目一", "產品項目二", "產品項目三"]
  }
  return (
    <html lang="en">
      <body>
      <DataProvider value={ data }>
        <Navbar/>
        {children}
        <Footer data={ data } />
      </DataProvider>
      </body>
    </html>
  )
}
