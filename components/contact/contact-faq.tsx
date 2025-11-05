"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How can I get involved with EGI's programs?",
    answer: "There are many ways to get involved! You can volunteer for our programs, apply to become a mentor, partner with us as an organization, or make a donation. Visit our 'Get Involved' page to explore all the opportunities and find the best fit for your interests and skills."
  },
  {
    question: "What types of partnerships does EGI offer?",
    answer: "We offer various partnership types including corporate sponsorships, technical partnerships, CSR collaborations, and in-kind support. Our partnerships range from funding specific projects to providing expertise, resources, or services. Each partnership is tailored to align with both our mission and your organization's goals."
  },
  {
    question: "How do I apply for EGI's educational programs?",
    answer: "Applications for our educational programs are typically announced on our website and social media channels. The process varies by program but generally includes an online application, documentation of eligibility, and sometimes an interview. Check our Programs page for current opportunities and application deadlines."
  },
  {
    question: "Can I visit your project sites?",
    answer: "Yes! We welcome visits to our project sites, though advance coordination is required for safety and logistics. Contact us at least 2 weeks before your intended visit date. We can arrange guided tours for individuals, groups, or potential partners interested in seeing our work firsthand."
  },
  {
    question: "How are donations used and can I track their impact?",
    answer: "All donations are used directly for program implementation, with detailed financial transparency reports published quarterly. You can track your donation's impact through our donor portal, which provides updates on funded projects, beneficiary stories, and measurable outcomes. We also provide donation certificates and impact reports."
  },
  {
    question: "Do you offer internship or volunteer opportunities for students?",
    answer: "Absolutely! We have structured internship programs for university students and volunteer opportunities for high school and university students. These include field work, research assistance, program support, and administrative roles. Applications are accepted year-round with specific cohorts starting quarterly."
  },
  {
    question: "How can media organizations cover EGI's work?",
    answer: "We welcome media coverage of our initiatives. Please contact our media team at media@egi.org.ng with your story proposal. We can provide press kits, arrange interviews with leadership and beneficiaries, and facilitate site visits for journalists and content creators."
  },
  {
    question: "What is EGI's approach to sustainability and environmental impact?",
    answer: "Sustainability is core to everything we do. Our programs focus on long-term community empowerment, environmental conservation, and economic sustainability. We measure impact across social, environmental, and economic dimensions, ensuring our interventions create lasting positive change."
  },
  {
    question: "How can I stay updated on EGI's latest news and impact?",
    answer: "Subscribe to our newsletter for monthly updates, follow us on social media for real-time news, and check our blog for in-depth stories. We also publish annual impact reports and quarterly newsletters that showcase our progress and upcoming initiatives."
  },
  {
    question: "Does EGI work internationally or only in Nigeria?",
    answer: "While our primary focus is Nigeria, we do collaborate on regional projects across West Africa and participate in international development networks. Our expertise in community-driven development has led to consulting opportunities and knowledge-sharing partnerships globally."
  }
];

export default function ContactFAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-secondary" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find quick answers to common questions about our programs, partnerships, 
            and how you can get involved with EGI.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-primary pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-secondary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help. 
            Send us a message and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary/90 transition-colors"
            >
              Send us a Message
            </a>
            <a
              href="tel:+2348031234567"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary hover:text-primary transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
