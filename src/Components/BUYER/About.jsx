import "./About.css"
import Footer from "./Footer";

function About() {
  return (
    <div className="div-about">
      <img className="my-pic" src="https://plus.unsplash.com/premium_photo-1661508345276-b83d9a1a78f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFueSUyMHBlYXBsZSUyMHdvcmtpbmclMjBpbiUyMGElMjBjb21wYW55fGVufDB8fDB8fHww" alt="image" />
      <p className="par">Welcome to our Whimsy. We offer a wide variety of products to cater to all your needs. Our mission is to provide high-quality products at competitive prices, ensuring customer satisfaction and convenience. Thank you for choosing us!</p>
      
      <h2 className="header-2">Our Mission</h2>
      <p className="par">Our mission is to revolutionize the online shopping experience by providing a seamless, user-friendly platform where customers can find everything they need in one place. We strive to offer exceptional customer service, fast shipping, and a hassle-free return policy.</p>
      
      <h2 className="header-2">Our Vision</h2>
      <p className="par">We envision a world where online shopping is accessible, reliable, and enjoyable for everyone. Our goal is to be the go-to e-commerce platform, known for its vast product selection, competitive prices, and outstanding customer service.</p>
      
      <h2 className="header-2">Our Values</h2>
      <ul className="par">
        <li><strong>Customer Focus:</strong> We prioritize our customers needs and work tirelessly to exceed their expectations.</li>
        <li><strong>Integrity:</strong> We conduct our business with honesty and transparency.</li>
        <li><strong>Innovation:</strong> We embrace new ideas and technologies to improve our platform and services.</li>
        <li><strong>Quality:</strong> We are committed to offering products of the highest quality.</li>
        <li><strong>Sustainability:</strong> We aim to operate in an environmentally responsible manner.</li>
      </ul>
      
      <h2 className="header-2">Our Team</h2>
      <p>Our team is composed of dedicated professionals from diverse backgrounds, all working together to bring you the best online shopping experience. Meet some of our key team members:</p>
      
      <div className="team">
        <div className="team-member">
          <h3>Jane Doe</h3>
          <img src="https://media.istockphoto.com/id/1176806510/photo/portrait-of-a-smiling-businessman.webp?b=1&s=170667a&w=0&k=20&c=zv0CMScgie5ZS8XN_N1hY4kZStIz5mi5Z3YroIwFJ5A=" alt="CEO" />
          <p><strong>CEO & Founder</strong></p>
          <p>Jane is the visionary behind our e-commerce platform. With over 20 years of experience in the industry, she leads the company with passion and dedication.</p>
        </div>
        <div className="team-member">
          <h3>Lilian Smith</h3>
          <img src="https://media.istockphoto.com/id/1450788989/photo/portrait-of-happy-african-businesswoman-holding-digital-tablet-in-the-office.webp?b=1&s=170667a&w=0&k=20&c=zkLn4o1T0CMCXmTQZlwheJDYuW9fOXXkvTJ9zbl3sCs=" alt="Chief.O.O" />
          <p><strong>Chief Operating Officer</strong></p>
          <p>John oversees the day-to-day operations, ensuring everything runs smoothly and efficiently.</p>
        </div>
        <div className="team-member">
          <h3>Emily Johnson</h3>
          <img src="https://media.istockphoto.com/id/1325565779/photo/smiling-african-american-business-woman-wearing-stylish-eyeglasses-looking-at-camera-standing.webp?b=1&s=170667a&w=0&k=20&c=0aBawAGIMPymGUppOgw1HmV8MNXB1536B3sX_PP9_SQ=" alt="" />
          <p><strong>Head of Marketing</strong></p>
          <p>Emily is responsible for our marketing strategies and campaigns, helping us reach more customers and grow our brand.</p>
        </div>
        <div className="team-member">
          <h3>Michael Brown</h3>
          <img src="https://media.istockphoto.com/id/862596654/photo/its-a-must-have-tool-for-the-modern-exec.jpg?s=612x612&w=0&k=20&c=pV1hEvpx1kserLD4BXmCIuiiyHGD4ffeqcn6XnkOB1c=" alt="" />
          <p><strong>Head of Customer Service</strong></p>
          <p>Michael leads our customer service team, ensuring that all customer inquiries and issues are handled promptly and effectively.</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
