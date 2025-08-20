import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext"; // ✅ Correct import

const UserProfile = () => {
  // Access context
  const { user, setUser } = useContext(UserContext);

  // Safety check: handle missing provider
  if (!user) {
    return <p>Loading user data...</p>;
  }

  return (
    <div
      style={{
        padding: "1.5rem",
        border: "1px solid #ccc",
        borderRadius: "10px",
        maxWidth: "400px",
        margin: "2rem auto",
        textAlign: "center",
        backgroundColor:"cornsilk",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontSize: "40px",
          fontFamily: "Times New Roman",
          color: "red",
          marginBottom: "1rem",
        }}
      >
        User Profile
      </h2>

      {/* User Info in Two Equal Columns */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
          padding: "0.5rem 0",
          borderBottom: "1px solid #ddd",
        }}
      >
        <strong
          style={{
            width: "50%",
            textAlign: "left",
            fontSize: "20px",
            fontFamily: "Times New Roman",
            color: "blue",
          }}
        >
          Name:
        </strong>
        <span
          style={{
            width: "50%",
            textAlign: "right",
            fontSize: "20px",
            fontFamily: "Arial",
            color: "black",
          }}
        >
          {user.name}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
          padding: "0.5rem 0",
          borderBottom: "1px solid #ddd",
        }}
      >
        <strong
          style={{
            width: "50%",
            textAlign: "left",
            fontSize: "20px",
            fontFamily: "Times New Roman",
            color: "blue",
          }}
        >
          Email:
        </strong>
        <span
          style={{
            width: "50%",
            textAlign: "right",
            fontSize: "18px",
            fontFamily: "Arial",
            color: "black",
          }}
        >
          {user.email}
        </span>
      </div>

      {/* Button */}
      <button
        onClick={() =>
          setUser({ name: "Sathya", email: "Sathya@gmail.com" })
        }
        style={{
          marginTop: "1rem",
          padding: "0.6rem 1.5rem",
          background: "green",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontSize: "16px",
          cursor: "pointer",
          boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
        }}
      >
        Change User
      </button>
    </div>
  );
};

export default UserProfile;
