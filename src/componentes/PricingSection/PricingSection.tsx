// PricingSection.tsx

import { useState } from "react";
import "./PricingSection.css";

const pricingData = {
  private: {
    title: "Private Classes",
    description: "Personalized 1-on-1 Spanish immersion.",
    plans: [
      {
        name: "Starter",
        frequency: "1 class / week",
        classes: "4 classes monthly",
        price: "$120",
      },
      {
        name: "Consistent",
        frequency: "2 classes / week",
        classes: "8 classes monthly",
        price: "$210",
        featured: true,
        badge: "MOST POPULAR",
      },
      {
        name: "Intensive",
        frequency: "3 classes / week",
        classes: "12 classes monthly",
        price: "$290",
      },
      {
        name: "Immersion",
        frequency: "5 classes / week",
        classes: "20 classes monthly",
        price: "$450",
      },
    ],
  },

  duo: {
    title: "Duo Classes",
    description: "Learn Spanish together with a partner.",
    plans: [
      {
        name: "Starter",
        frequency: "1 class / week",
        classes: "4 classes monthly",
        price: "$90",
      },
      {
        name: "Consistent",
        frequency: "2 classes / week",
        classes: "8 classes monthly",
        price: "$170",
        featured: true,
        badge: "BEST VALUE",
      },
      {
        name: "Intensive",
        frequency: "3 classes / week",
        classes: "12 classes monthly",
        price: "$240",
      },
      {
        name: "Immersion",
        frequency: "5 classes / week",
        classes: "20 classes monthly",
        price: "$390",
      },
    ],
  },

  group: {
    title: "Group Classes",
    description: "Dynamic collaborative learning experience.",
    plans: [
      {
        name: "Starter",
        frequency: "1 class / week",
        classes: "4 classes monthly",
        price: "$60",
      },
      {
        name: "Consistent",
        frequency: "2 classes / week",
        classes: "8 classes monthly",
        price: "$110",
      },
      {
        name: "Intensive",
        frequency: "3 classes / week",
        classes: "12 classes monthly",
        price: "$150",
        featured: true,
        badge: "FAST PROGRESS",
      },
      {
        name: "Immersion",
        frequency: "5 classes / week",
        classes: "20 classes monthly",
        price: "$240",
      },
    ],
  },
};

export default function PricingSection() {
  const [selected, setSelected] = useState<"private" | "duo" | "group">(
    "private",
  );

  const current = pricingData[selected];

  return (
    <section className="pricing-section section">
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
            Private
          </button>

          <button
            className={selected === "duo" ? "active" : ""}
            onClick={() => setSelected("duo")}
          >
            Duo
          </button>

          <button
            className={selected === "group" ? "active" : ""}
            onClick={() => setSelected("group")}
          >
            Group
          </button>
        </div>

        {/* PACKAGE INFO */}
        <div className="package-info">
          <h3>{current.title}</h3>
          <p>{current.description}</p>
        </div>

        {/* CARDS */}
        <div className="pricing-grid">
          {current.plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.featured ? "featured" : ""}`}
            >
              {plan.badge && <div className="pricing-badge">{plan.badge}</div>}

              <h4>{plan.name}</h4>

              <div className="pricing-frequency">{plan.frequency}</div>

              <div className="pricing-classes">{plan.classes}</div>

              <div className="pricing-price">{plan.price}</div>

              <button className="pricing-btn">Start Learning</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
