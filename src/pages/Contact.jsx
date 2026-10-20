import Forms from "../components/Forms";
import PageBanner from "../components/PageBanner";

export default function Contact() {
  return (
    <div className="bg-white">

      <PageBanner eyebrow="Get In Touch" title="Contact Us" />

      {/* Contact Info */}
      <section className="py-16 max-w-6xl mx-auto px-6 md:px-16">
        <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">We'd love to hear from you</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Talk</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-12 max-w-2xl">
          Whether you have a question about our programs, want to get involved, or simply want to share
          your story, our team is here and ready to help.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-start gap-3">
            <img src="/images/icons/map.png" alt="Address" className="w-8 h-8" />
            <h3 className="text-gray-900 font-semibold text-sm">Address</h3>
            <p className="text-gray-500 text-sm leading-relaxed">PO Box 11334<br />Chandler, AZ, 85248</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-start gap-3">
            <img src="/images/icons/phone-call.png" alt="Phone" className="w-8 h-8" />
            <h3 className="text-gray-900 font-semibold text-sm">Phone</h3>
            <p className="text-gray-500 text-sm">+1(602)-361-1880</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-start gap-3">
            <img src="/images/icons/email.png" alt="Email" className="w-8 h-8" />
            <h3 className="text-gray-900 font-semibold text-sm">Email</h3>
            <p className="text-gray-500 text-sm">info@crdalliance.org</p>
          </div>
        </div>
      </section>
      <section className="py-16 max-w-5xl mx-auto px-6 md:px-16">
        <Forms formKey="contact" />
      </section>
    </div>
  );
}