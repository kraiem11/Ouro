import React from 'react';
import './defaults.css'; // التأكد من ربط ملف التنسيق الذهبي

const OuroApp = () => {
  return (
    <div className="ouro-container">
      <header className="app-header">
        <h1 className="logo">OURO</h1>
        <p>بوابة الفرص الذهبية في شبكة باي</p>
      </header>

      <main className="content">
        <section className="welcome-card">
          <h2>مرحباً بك في تطبيق Ouro</h2>
          <p>هذا التطبيق مصمم لتقديم خدمات متميزة لمجتمع باي، مع نظام اشتراكات متطور وآمن.</p>
        </section>

        <section className="tasks-section">
          <h3>المهام المتاحة</h3>
          <div className="task-card">
            <h4>مهمة الاشتراك الذهبي</h4>
            <p>قم بتفعيل اشتراكك الآن للوصول إلى المميزات الحصرية.</p>
            <button className="btn-primary">تفعيل عبر Pi</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Ouro - جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
};

export default OuroApp;
