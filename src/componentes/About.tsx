import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-wrapper">
          <span className="about-eyebrow">About Acento Spanish School</span>

          <h2 className="about-title">
            More Than a Spanish School — <br />A Cultural Experience in
            Cartagena
          </h2>

          <p className="about-lead">
            Learning Spanish at Acento goes beyond the classroom. We create
            immersive experiences that connect you with the language, the
            people, and the culture from day one.
          </p>

          <p className="about-text">
            With over 10 years of experience and more than 1,000 students from
            around the world, our team blends structured learning with real-life
            practice — so you don’t just study Spanish, you actually live it.
          </p>

          <p className="about-text">
            Whether you're traveling, working remotely, or fully immersing
            yourself in the city, we design personalized programs that adapt to
            your goals, schedule, and lifestyle.
          </p>

          <div className="about-highlights">
            <div>10+ years of experience</div>
            <div>1,000+ students worldwide</div>
            <div>Native certified teachers</div>
            <div>Flexible learning programs</div>
          </div>
        </div>
      </div>
    </section>
  );
}
