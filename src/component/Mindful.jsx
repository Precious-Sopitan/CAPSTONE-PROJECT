import professional from "../assets/professional.img.jpg"
import effective from "../assets/effective.jpg"
import saving from "../assets/savings.jpg"
import conducive from "../assets/conducive.jpg"
const Mindful = () => {
  return (
    <section id="mindful-is">
      <div className="container">
        <div className="title"><h1>Mindful is</h1></div>
        <div className="features-grid">
          <div className="feature-grid-item">
            <div className="feature-img">
              <img src={professional} alt="" />
            </div>
            <div className="feature-text">
              <h4 className="feature-title">Proffessional</h4>
              <p className="feature-text">
                All Therapist are Licensed and accredited Professionals With
                Mindful, You can Connect with them in a safe and secure online
                platform
              </p>
            </div>
          </div>

          <div className="feature-grid-item">
            <div className="feature-img">
              <img src={saving} alt="" />
            </div>
            <div className="feature-text">
              <h4 className="feature-title">Affordable</h4>
              <p className="feature-text">
                Payment Covers Both Live and messaging sessions with your
                therapist. Therapy should be affordable
              </p>
            </div>
          </div>
          <div className="feature-grid-item">
            <div className="feature-img">
              <img src={conducive} alt="" />
            </div>
            <div className="feature-text">
              <h4 className="feature-title">Condusive</h4>
              <p className="feature-text">
                Do it at your own convenience at your, at your own time.
                Communicate with your therapist whenever you need.
              </p>
            </div>
          </div>
          <div className="feature-grid-item">
            <div className="feature-img">
              <img src={effective} alt="" />
            </div>
            <div className="feature-text">
              <h4 className="feature-title">Effective</h4>
              <p className="feature-text">
                With Mindful, we have recorded A lot of success stories. Many
                have benefited from Therapy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Mindful