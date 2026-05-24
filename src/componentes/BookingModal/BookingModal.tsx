import { useEffect } from "react";
import { Plan } from "../../data/plans";
import "./BookingModal.css";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: Plan | null;
}

export default function BookingModal({
  isOpen,
  onClose,
  selectedPlan,
}: BookingModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen || !selectedPlan) return null;

  return (
    <div className="booking-overlay" onClick={onClose}>
      <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
        <button className="booking-close" onClick={onClose}>
          ×
        </button>

        <h2>Schedule Your Classes</h2>

        <div className="booking-plan">
          <span>{selectedPlan.type}</span>

          <h3>{selectedPlan.name}</h3>

          <p>{selectedPlan.frequency}</p>

          <p>{selectedPlan.classes}</p>

          <strong>{selectedPlan.price}</strong>
        </div>

        <form className="booking-form">
          <div className="booking-grid">
            <input placeholder="First Name" />
            <input placeholder="Last Name" />

            <input type="email" placeholder="Email" />

            <input placeholder="WhatsApp" />

            <input placeholder="Country" />

            <input type="date" />

            <input type="time" />
          </div>

          <textarea rows={5} placeholder="Learning Goals" />

          <button type="submit" className="booking-submit">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}
