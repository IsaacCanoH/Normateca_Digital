import NormatecaPage from './pages/NormatecaPage'
import AnimatedBackground from './components/AnimatedBackground' 
import LeyesPage from './pages/LeyesPage'

function App() {
  return (
    <div className="app-container">
      <AnimatedBackground />
      <div className="app-content">
        <LeyesPage />
      </div>
    </div>
  )
}

export default App