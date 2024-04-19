import cheerful from '../assets/cheerfulladies.png'
const CTA = () => {
  return (
    <section id="cta">
      <div className="container">
        <div className="cta-left">
          <h2 className="cta-text">
            Join Mindful Today. Get Help, Get a supportive community and be
            Happy
          </h2>
          <a href="#" className="btn">Get Started</a>
        </div>
        <div className="cta-right">
          <img src={cheerful} alt="" />
        </div>
      </div>
    </section>
  )
}

export default CTA