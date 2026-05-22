import "./About.css";

const features = [
  { number: "10+", label: "Years of Experience" },
  { number: "1,000+", label: "Students Worldwide" },
  { number: "100%", label: "Native Teachers" },
  { number: "24/7", label: "Student Support" },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-wrapper">
          <span className="about-eyebrow">About Us</span>

          <h2 className="about-title">
            Learn Spanish the <span>Real Way</span>
          </h2>

          <p className="about-lead">
            At Acento Spanish School, learning Spanish is more than a class—it’s
            an immersive cultural experience in the heart of Cartagena.
          </p>

          <div className="about-content">
            <div className="about-blocks">
              <div className="about-block">
                <h3 className="block-title">Our Experience & Method</h3>
                <p className="block-text">
                  With over 10 years of experience, we specialize in helping
                  students go beyond textbooks and truly live the language. Our
                  method blends structured learning with real-world practice, so
                  you can confidently communicate in Spanish while experiencing
                  the richness of Colombian culture from day one.
                </p>
              </div>

              <div className="about-block">
                <h3 className="block-title">Expert Team</h3>
                <p className="block-text">
                  Our team is composed of highly trained professionals with
                  degrees in Linguistics and Literature from the University of
                  Cartagena. We are passionate about what we do, and we take
                  pride in delivering a learning experience that is both
                  rigorous and inspiring—never improvised, always intentional.
                </p>
              </div>

              <div className="about-block">
                <h3 className="block-title">Flexible Learning</h3>
                <p className="block-text">
                  We believe that learning should adapt to your lifestyle.
                  That’s why we offer flexible schedules, personalized programs,
                  and a variety of learning options designed around your goals.
                  Whether you’re traveling, working remotely, or fully immersing
                  yourself in the city, we create a plan that fits you
                  perfectly.
                </p>
              </div>

              <div className="about-block">
                <h3 className="block-title">Proven Results</h3>
                <p className="block-text">
                  Having taught more than 1,000 students from around the world,
                  we continuously refine our approach to ensure every student
                  receives an exceptional experience. Our goal is not only to
                  help you learn Spanish, but to make you feel confident,
                  connected, and at home in a new culture.
                </p>
              </div>
            </div>

            <div className="about-cta">
              <p className="cta-text">
                Join us in Cartagena and transform the way you learn
                Spanish—through meaningful connections, unforgettable
                experiences, and a method that truly works.
              </p>
            </div>

            <div className="about-features">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-number">{feature.number}</div>
                  <div className="feature-label">{feature.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
