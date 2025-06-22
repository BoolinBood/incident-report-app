import Sidebar from "./components/sidebar/Sidebar"
import ReportTable from "./components/table/ReportTable"

function App() {

  return (
    <>
      <div className="container flex p-8">
        <div className="w-[20%]">
          <div className="font-bold text-2xl pl-2 mb-4">Incident Tracker</div>
          <Sidebar />
        </div>
        <div className="w-[80%]">
          <div className="font-bold text-2xl mb-4">Incident reports</div>
          <ReportTable />
        </div>
      </div>
    </>
  )
}

export default App
