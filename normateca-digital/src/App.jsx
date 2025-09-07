import AnimatedBackground from "./components/AnimatedBackground"
import AppRoutes from "./routes/Routes"

function App() {
  return (
    <div className="app-container">
      <AnimatedBackground />
      <div className="app-content">
        <AppRoutes />
      </div>
    </div>
  )
}

export default App
