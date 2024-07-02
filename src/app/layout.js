import { DataProvider } from './contexts/DataContext';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/global.sass'

export default function RootLayout({ children }) {
  const data = {
    services: [
      {
        "title": "資訊系統開發",
        "content": "我們提供全方位的資訊系統開發服務，包括網頁開發與設計、網頁架設與維護、LINEUP系統開發，以及專業的疾病風險評估報表產生系統。我們的團隊擁有豐富的經驗，能夠為您打造符合需求的高質量資訊系統，提升您的業務效率和競爭力。",
        "iconUrl": "/customer-support.png"
      },
      {
        "title": "數位轉型",
        "content": "協助您的企業邁向數位化時代。我們提供創新的Line QRCode簽到系統，以及全國首家可即時線上預約健康檢查的資訊系統。此外，我們的LINEUP服務能有效優化您的業務流程，提高營運效率。",
        "iconUrl": "/support.png"
      },
      {
        "title": "AI 模型訓練",
        "content": "運用先進的人工智慧技術，我們為您提供精準的疾病風險評估報表產生系統和勞工體檢報告總評。我們的AI模型能夠分析大量數據，提供準確的評估結果，幫助您做出更明智的決策。我們致力於將AI技術應用於健康管理領域，為您的業務帶來革新性的解決方案。",
        "iconUrl": "/technical-support.png"
      },
      {
        "title": "AR 擴增實境技術",
        "content": "探索AR擴增實境的無限可能。我們提供先進的AR立體互動體驗服務，為您的產品或服務增添全新的互動維度，提升用戶體驗和參與度。",
        "iconUrl": "/technical-support.png"
      }
    ],
    products: ["LINE QRCode 簽到系統", "疾病風險評估報告平台", "產品項目三"]
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
