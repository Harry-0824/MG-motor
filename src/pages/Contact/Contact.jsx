import React from "react";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>聯絡我們</h1>
      <p>如需進一步資訊，請填寫以下表單或聯絡我們的客服。</p>
      <form>
        <div>
          <label htmlFor="name">姓名:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">電子郵件:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">訊息:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">送出</button>
      </form>
      <div className="contact-info">
        <h2>聯絡資訊</h2>
        <p>電話: (02) 1234-5678</p>
        <p>地址: 台北市某某區某某路123號</p>
      </div>
    </div>
  );
};

export default Contact;
