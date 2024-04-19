import check from "../assets/icons/check.svg"
const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-text">
          <h1 className="heading-one">
            Mindful - Giving the needed support, one click at a time.
          </h1>
          <p className="body-text-big">
            Your digital landscape where mindfulness and well-being meet.
          </p>
        </div>
        <div id="functions">
          <div className="left">
            <div className="function-card">
              <div className="card-item">
                <span className="icon"
                  ><img src={check} alt=""
                /></span>
                <span className="text">satisfied users</span>
              </div>
              <div className="card-item">
                <span className="icon"
                  ><img src={check} alt=""
                /></span>
                <span className="text">licensed therapists</span>
              </div>
              <div className="card-item">
                <span className="icon"
                  ><img src={check} alt=""
                /></span>
                <span className="text">counselling sessions</span>
              </div>
            </div>
          </div>

          <div className="middle">
            <img src="../assets/hero-img.png" alt="" />
          </div>

          <div className="right">
            <div className="function-card">
              <div className="card-item">
                <span className="icon"
                  ><img src={check} alt=""
                /></span>
                <span className="text">Client Satisfaction Rate</span>
              </div>
              <div className="card-item">
                <span className="icon"
                  ><img src={check} alt=""
                /></span>
                <span className="text">Well-Being Increase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Hero