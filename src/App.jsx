
import Header from './components/Header'
import Footer from './components/Footer'
import Content   from './components/content'


function App(){
 
  let user ="John Durairaj"
  return(
    <div className="App">
       <Header  user={user} />
       <Content />
       <Footer user="Leo Das"/>
    </div>
  )
}

export default App
