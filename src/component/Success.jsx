import doctor1 from '../assets/doctor1.png'
import doctor2 from "../assets/doctor2.png"
import doctor3 from "../assets/doctor3.png"
const Success = () => {
  return (
    <section id="success-story">
      <div className="container">
        <div className="title"><h1>Our success story</h1></div>
        <div className="card-grid">
          <div className="user-card">
            <div className="card-img">
              <img src={doctor1} alt="" />
            </div>
            <div className="card-text-box">
              <h4 className="card-title">
                Dr. Rossie, <span className="age">35</span>
              </h4>
              <h4 className="card-dsesignation">Psychiatrist</h4>
              <p className="card-description">
                Specializes in - Mood disorders, anxiety disorders
              </p>
              <p className="card-description">
                “Compassionate, holistic approach, evidence-based treatments”
              </p>
            </div>
          </div>
          <div className="user-card">
            <div className="card-img">
              <img src={doctor2} alt="" />
            </div>

            <div className="card-text-box">
              <h4 className="card-title">
                Dr. Rossie, <span className="age">35</span>
              </h4>
              <h4 className="card-dsesignation">Psychiatrist</h4>
              <p className="card-description">
                Specializes in - Mood disorders, anxiety disorders
              </p>
              <p className="card-description">
                “Compassionate, holistic approach, evidence-based treatments”
              </p>
            </div>
          </div>
          <div className="user-card">
            <div className="card-img">
              <img src={doctor3} alt="" />
            </div>
            <div className="card-text-box">
              <h4 className="card-title">
                Dr. Rossie, <span className="age">35</span>
              </h4>
              <h4 className="card-dsesignation">Psychiatrist</h4>
              <p className="card-description">
                Specializes in - Mood disorders, anxiety disorders
              </p>
              <p className="card-description">
                “Compassionate, holistic approach, evidence-based treatments”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Success