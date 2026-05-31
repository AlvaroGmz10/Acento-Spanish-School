import { useState } from "react";
import "./PricingSection.css";

import BookingModal from "../BookingModal";

import { plans, Plan } from "../../data";

type Category = "private" | "duo" | "group";

export default function PricingSection() {
  const [selected, setSelected] = useState<Category>("private");

  const [bookingOpen, setBookingOpen] = useState(false);

  const [selectedPlanData, setSelectedPlanData] = useState<Plan | null>(null);

  const current = plans[selected];

  const openBooking = (plan: Plan) => {
    setSelectedPlanData(plan);
    setBookingOpen(true);
  };

  return (
    <section className="pricing-section section" id="pricing">
      <div className="pricing-container">
        <div className="pricing-header content show">
          <span className="pricing-subtitle">FLEXIBLE SPANISH PROGRAMS</span>

          <h2>
            Choose Your
            <br />
            Learning Experience
          </h2>

          <p>
            Flexible plans designed around your goals, schedule and learning
            style.
          </p>
        </div>

        {/* SWITCHER */}

        <div className="pricing-switch-wrapper">
          <div className={`pricing-switch-indicator ${selected}`} />

          <button
            className={selected === "private" ? "active" : ""}
            onClick={() => setSelected("private")}
          >
            Home
          </button>

          <button
            className={selected === "duo" ? "active" : ""}
            onClick={() => setSelected("duo")}
          >
            Co-working
          </button>

          <button
            className={selected === "group" ? "active" : ""}
            onClick={() => setSelected("group")}
          >
            Traditional
          </button>
        </div>

        {/* PACKAGE INFO */}

        <div className="package-info">
          <h3>{current.title}</h3>

          <p>{current.description}</p>
        </div>

        {/* CARDS */}

        <div className="pricing-grid">
          {current.plans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.featured ? "featured" : ""}`}
            >
              {plan.badge && <div className="pricing-badge">{plan.badge}</div>}

              <h4>{plan.name}</h4>

              <div className="pricing-frequency">{plan.frequency}</div>

              <div className="pricing-classes">{plan.classes}</div>

              <div className="pricing-price">{plan.price}</div>

              <button className="pricing-btn" onClick={() => openBooking(plan)}>
                Start Learning
              </button>
            </div>
          ))}
        </div>
      </div>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        selectedPlan={selectedPlanData}
      />
    </section>
  );
}
