import ImgSlider from '../../components/ImgSlider/ImgSlider'
import './Workpage.css'
import photo1 from '../../img/urjournal1.png'
import photo2 from '../../img/urjournal2.png'
import photo3 from '../../img/urjournal3.png'

function Covidtracker() {
  const photos=[photo1, photo2, photo3]

  return (
    <div className='site-description'>
      <ImgSlider photos={photos} />
      <h1>Covid-19 Tracker</h1>
      <div className="paragraph">
        <p>
          
        </p>
        <p>
          <a href="https://github.com/sungjun0110/your_journal" target="_blank">Visit Github</a>
          <br/>
          <a href="https://urjournal.herokuapp.com/" target="_blank">Visit Live Website</a>
        </p>
        <p className="built-date">Currently working on...</p>
      </div>
    </div>
  )
}

export default Covidtracker
