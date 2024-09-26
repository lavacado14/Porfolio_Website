/*
  File: Home.jsx
  Student's Name: Jamil Ibrahimi
  Student ID: 301377159
  Date: 25/09/2024

  Description:
  This file contains the Home component, which renders the mission statement section of the website.
*/

import React from 'react';

function Home() {
  return (
    <>
      <div className="text-box" style={styles.textBox}>
        <h1 style={styles.heading}>MISSION STATEMENT</h1>
        <p style={styles.paragraph}>
          My aim as a passionate software developer is to use technology to create
          creative and valuable solutions that make things better for users and
          help businesses succeed.
        </p>
      </div>
    </>
  );
}

const styles = {
  textBox: {
    backgroundColor: 'white',
    color: 'gold',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    border: '2px solid #d3d3d3',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'gold',
    marginBottom: '1rem',
    fontFamily: 'Georgia, serif',
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: 'black',
    fontFamily: 'Arial, sans-serif',
  },
};

export default Home;