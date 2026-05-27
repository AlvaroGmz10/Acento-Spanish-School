import { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    whatsapp: "",
    country: "",
    date: "",
    time: "",
    goals: "",
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedPlan) return;

    setLoading(true);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          plan: selectedPlan.name,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Booking request sent successfully!");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          whatsapp: "",
          country: "",
          date: "",
          time: "",
          goals: "",
        });

        onClose();
      } else {
        alert("There was a problem sending your booking.");
      }
    } catch (error) {
      console.error(error);
      alert("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="booking-grid">
            <input
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />

            <input
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              name="whatsapp"
              placeholder="WhatsApp"
              value={formData.whatsapp}
              onChange={handleChange}
              required
            />

            <input
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="goals"
            rows={5}
            placeholder="Learning Goals"
            value={formData.goals}
            onChange={handleChange}
            required
          />

          <button type="submit" className="booking-submit" disabled={loading}>
            {loading ? "Sending..." : "Confirm Booking"}
          </button>
        </form>
      </div>
    </div>
  );
}
