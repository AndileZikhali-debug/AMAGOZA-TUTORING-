const { useState } = React;

// Tutor Profiles Component
const TutorProfiles = () => {
  const tutors = [
    { id: 1, name: "Thandiwe Mkhize", subject: "Mathematics", bio: "Experienced Maths tutor with a BSc in Education.", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Sipho Ngcobo", subject: "Physical Sciences", bio: "PhD in Physics, passionate about student success.", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Lerato Botha", subject: "English", bio: "Language expert with 5+ years of tutoring experience.", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Ntobeko Mgoza", subject: "Mathematics", bio: "Mathematics expert with 5+ years of tutoring experience.", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Micheal Mgoza", subject: "Tertiary Modules", bio: "Masters expert with 5+ years of tutoring experience.", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {tutors.map(tutor => (
        <div key={tutor.id} className="bg-white p-6 rounded-lg shadow-md text-center">
          <img src={tutor.image} alt={tutor.name} className="w-32 h-32 mx-auto rounded-full mb-4" />
          <h4 className="text-xl font-semibold">{tutor.name}</h4>
          <p className="text-gray-600">{tutor.subject}</p>
          <p className="text-gray-500 mt-2">{tutor.bio}</p>
          <a href="booking.html" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Book Now</a>
        </div>
      ))}
    </div>
  );
};

// Booking Form Component
const BookingForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', level: '', date: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Placeholder for form submission (e.g., to Firebase or email API)
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      {submitted ? (
        <p className="text-green-600 text-center">Thank you! Your booking request has been submitted. We'll contact you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label className="block text-gray-700">Subject</label>
            <select name="subject" value={formData.subject} onChange={handleChange} className="w-full p-2 border rounded" required>
              <option value="">Select Subject</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Physical Sciences">Physical Sciences</option>
              <option value="English">English</option>
              <option value="Zulu">Zulu</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Level</label>
            <select name="level" value={formData.level} onChange={handleChange} className="w-full p-2 border rounded" required>
              <option value="">Select Level</option>
              <option value="Primary">Primary</option>
              <option value="High School">High School</option>
              <option value="Matric">Matric</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Preferred Date</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Submit Booking</button>
        </form>
      )}
    </div>
  );
};

// Render Components
ReactDOM.render(<TutorProfiles />, document.getElementById('tutor-profiles'));
ReactDOM.render(<BookingForm />, document.getElementById('booking-form'));
