import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '32px', fontFamily: 'sans-serif', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '24px' }}>Welcome to My Simple Page</h1>
      <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '16px' }}>
        This is a static one-page site built with Next.js.<br />
        You can edit <code>src/app/page.js</code> to change this content.
      </p>
      <ul style={{ fontSize: '16px', marginBottom: '24px' }}>
        <li>Easy to customize</li>
        <li>Fast and minimal</li>
        <li>No extra design or distractions</li>
      </ul>
      <footer style={{ textAlign: 'center', color: '#888', fontSize: '14px', marginTop: '32px' }}>
        &copy; {new Date().getFullYear()} My Simple Page
      </footer>
    </div>
  );
}
